window.ParsleyConfig = {
    namespace: 'data-foxtel-',
    focus: 'none',
    excluded: 'input[type=hidden], :hidden',
    validators: {
        conditionalrequired: {
            fn: function(value, requirements) {
                // if requirements[0] value does not meet requirements[1] expectation, field is required
                if (requirements[1] == $(requirements[0]).val() && '' == value)
                    return false;

                return true;
            },
            priority: 2000
        },
        custompattern: {
            fn: function(value, requirements) {
                //if no value, nothing to check
                if (value == "") return true;
                return (new RegExp(requirements).test(value));
            },
            priority: 2000
        },
        phonenumberwithspace: {
            fn: function(value, requirements) {
                return (new RegExp(/^[\s|\d]*$/).test(value) && value.match(/\d/g).length == 10);
            },
            priority: 2000
        },
        phonenumberwithspaceStartsWithZero: {
            fn: function(value, requirements) {
                return (new RegExp(/^0[\s|\d]*$/).test(value) && value.match(/\d/g).length == 10);
            },
            priority: 2000
        },
        nodefaultvaluedropdown: {
            fn: function(value, requirements) {
                if (value == "") return false;
                return true;
            },
            priority: 2000
        },
        validcreditcardnumber: {
            fn: function(value, requirements) {
                //if no value, nothing to check
                if (value == "") return true;
                //credit card must start with 4, 2, 3 or 5
                return (new RegExp("^[2-5]").test(value));
            },
            priority: 2000
        },
        nodefaultvaluedropdown2: {
            fn: function(value, requirements) {
                if (value == "") return false;
                return true;
            },
            priority: 2000
        },
        //this validator need to be added on year field
        //requirements is the id of the month field
        notinpastyear: {
            fn: function(value, requirements) {
                if (value == "" || requirements == "") return true;
                var month = $('#' + requirements).val();
                if (month != "") {
                    var year = parseInt("20" + value);
                    month = parseInt(month)
                    var dateToCompare = new Date(year, month, 0);
                    var currentDate = new Date();
                    if (currentDate > dateToCompare) return false;
                }

                return true;
            },
            priority: 2000
        },
        //this validator need to be added on month field
        //requirements is the id of the year field
        notinpastmonth: {
            fn: function(value, requirements) {
                if (value == "" || requirements == "") return true;
                var year = $('#' + requirements).val();
                if (year != "") {
                    var month = parseInt(value);
                    year = parseInt("20" + year);
                    var dateToCompare = new Date(year, month, 0);
                    var currentDate = new Date();
                    if (currentDate > dateToCompare) return false;
                }

                return true;
            },
            priority: 2000
        },
        requiretwo: {
            fn: function(value, requirements) {
                'use strict';
                var inputs = $(requirements),
                    visibleInputs = Array(),
                    v;
                $.each(inputs, function(index) {
                    v = $('input' + this).is(':visible');
                    if (v) {
                        visibleInputs.push(index);
                    }
                });
                if (visibleInputs.length < 2) {
                    return false;
                }
                return true;
            },
            priority: 132
        },
        wordlimit: {
            fn: function(value, requirements) {
                var len = value.split(" ").length;
                if (len > requirements) {
                    return false;
                }
                return true;
            },
            priority: 2000
        },
        acverifyval: {
            fn: function(value, requirements) {
                'use strict';
                var isSuccess = false,
                    isFocus = $(requirements[0]).is(':focus'),
                    params = "requestType=validateUser&" + $(requirements[0]).attr("name") + "=" + $(requirements[0]).val() + "&" + $(requirements[1]).attr("name") + "=" + $(requirements[1]).val() + "&" + $(requirements[2]).attr("name") + "=" + $(requirements[2]).val();

                if (!isFocus) {
                    if (($(requirements[1]).val() !== '' || $(requirements[2]).val() !== '') && ($(requirements[0]).val() !== '')) {
                        // ajax
                        if ($(requirements[0]).attr('name') === "dob") {
                            //                            params = "requestType=validateUser&" + $(requirements[0]).attr("name") + "=" + $(requirements[0]).val() + "&" + $(requirements[1]).attr("name") + "=" + $(requirements[1]).val() + "&" + $(requirements[2]).attr("name") + "=" + $(requirements[2]).val();
                            if (/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test($(requirements[0]).val()) === true) {
                                // console.log(data);
                                $.ajax({
                                    url: "/bin/foxtel/register",
                                    dataType: 'json',
                                    type: 'POST',
                                    jsonp: false,
                                    data: params,
                                    async: false,
                                    success: function(data) {
                                        console.log(data);
                                        if (data.accountVerification === "success") {
                                            console.log("success");
                                            $("#hidden-ac-no").val(data.hiddenAccountNumber);
                                            $("#location-state").val(data.state);
                                            isSuccess = true;
                                            $('.ac-ver-panel ul li').removeClass('parsley-error');
                                            if ($("#ac-ver-errors ul").hasClass('filled')) {
                                                $("#ac-ver-errors ul li").remove();
                                            }
                                        } else {
                                            $('.ac-ver-panel ul li').removeClass('parsley-success').addClass('parsley-error');

                                            if (data.accountVerificationError !== undefined) {
                                                if (!$("#ac-ver-errors ul:first-child").hasClass('filled')) {
                                                    $("#ac-ver-errors ul:first-child").addClass('filled').append('<li class="parsley-acverifyval">' + data.accountVerificationError + '</li>');
                                                } else {
                                                    $("#ac-ver-errors ul li").hide().remove();
                                                    $("#ac-ver-errors ul:first-child").addClass('filled').append('<li class="parsley-acverifyval">' + data.accountVerificationError + '</li>').show();
                                                }

                                            } else {

                                                if (!$("#ac-ver-errors ul:first-child").hasClass('filled')) {
                                                    $("#ac-ver-errors ul:first-child").addClass('filled').append('<li class="parsley-acverifyval">The details you have entered do not match.</li>');
                                                } else {
                                                    $("#ac-ver-errors ul li").hide().remove();
                                                    $("#ac-ver-errors ul:first-child").addClass('filled').append('<li class="parsley-acverifyval">The details you have entered do not match.</li>').show();
                                                }
                                            }
                                            console.log("error");
                                            isSuccess = false;
                                        }
                                    },

                                    error: function() {
                                        // console.log('Ajax error');
                                    },
                                    complete: function() {
                                        // return true;
                                        console.log("Ajax Complete");

                                    }
                                });
                                if (isSuccess === true) {
                                    return true;
                                }
                            }
                        } else {

                            //                            params = "requestType=validateUser&" + $(requirements[0]).attr("name") + "=" + $(requirements[0]).val() + "&" + $(requirements[1]).attr("name") + "=" + $(requirements[1]).val() + "&" + $(requirements[2]).attr("name") + "=" + $(requirements[2]).val();
                            // console.log(data);
                            $.ajax({
                                url: "/bin/foxtel/register",
                                dataType: 'json',
                                type: 'POST',
                                jsonp: false,
                                data: params,
                                async: false,
                                success: function(data) {
                                    console.log(data);
                                    if (data.accountVerification === "success") {
                                        console.log("success");
                                        console.log(data.hiddenAccountNumber);
                                        $("#hidden-ac-no").val(data.hiddenAccountNumber);
                                        $("#location-state").val(data.state);
                                        isSuccess = true;
                                        if ($("#ac-ver-errors ul").hasClass('filled')) {
                                            $("#ac-ver-errors ul li").remove();
                                        }
                                    } else {

                                        $('.ac-ver-panel ul li').removeClass('parsley-success').addClass('parsley-error');

                                        if (!$("#ac-ver-errors ul:first-child").hasClass('filled')) {
                                            $("#ac-ver-errors ul:first-child").addClass('filled').append('<li class="parsley-acverifyval">The details you have entered do not match.</li>');
                                        } else {
                                            if (data.accountVerificationError !== undefined) {
                                                if (!$("#ac-ver-errors ul:first-child").hasClass('filled')) {
                                                    $("#ac-ver-errors ul:first-child").addClass('filled').append('<li class="parsley-acverifyval">' + data.accountVerificationError + '</li>');
                                                } else {
                                                    $("#ac-ver-errors ul li").hide().remove();
                                                    $("#ac-ver-errors ul:first-child").addClass('filled').append('<li class="parsley-acverifyval">' + data.accountVerificationError + '</li>').show();
                                                }

                                            } else {

                                                if (!$("#ac-ver-errors ul:first-child").hasClass('filled')) {
                                                    $("#ac-ver-errors ul:first-child").addClass('filled').append('<li class="parsley-acverifyval">The details you have entered do not match.</li>');
                                                } else {
                                                    $("#ac-ver-errors ul li").hide().remove();
                                                    $("#ac-ver-errors ul:first-child").addClass('filled').append('<li class="parsley-acverifyval">The details you have entered do not match.</li>').show();
                                                }
                                            }
                                            console.log("error");
                                            //                                                isSuccess = false;
                                            if ($acverifyvalError.length) {
                                                $('html, body').animate({
                                                    scrollTop: $acverifyvalError.offset().top + 140
                                                });
                                            }
                                        }
                                        console.log("error");
                                        isSuccess = false;
                                    }
                                },
                                error: function() {
                                    // console.log('Ajax error');
                                },
                                complete: function() {
                                    // return true;
                                    console.log("Ajax Complete");

                                }
                            });
                            if (isSuccess === true) {
                                return true;
                            }
                        }

                    } else if (($(requirements[1]).val() !== '' && $(requirements[2]).val() !== '') && ($(requirements[0]).val() === '')) {
                        return true;
                    } else if ('' === value) {
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    return false;
                }
            },
            priority: 32
        },
        verifyemail: {
            fn: function(value, requirements) {
                'use strict';
                var isSuccess = false,
                    params = "requestType=validateEmail&" + $(requirements[0]).attr("name") + "=" + $(requirements[0]).val();

                if (value !== '') {
                    // ajax
                    // console.log(data);
                    $.ajax({
                        url: "/bin/foxtel/register",
                        dataType: 'json',
                        type: 'POST',
                        jsonp: false,
                        data: params,
                        async: false,
                        success: function(data) {
                            // console.log(data.isAccountCreated);
                            // console.log(data.);
                            if (data.isEmailAlreadyExists === false) {
                                console.log("verify email success");
                                isSuccess = true;
                            } else {
                                if (dataLayer) {
                                    dataLayer.push({
                                        event: {
                                            eventInfo: {
                                                eventName: 'reg_error_verify_email',
                                                type: 'interaction'
                                            },
                                            category: {
                                                primaryCategory: 'got_reg'
                                            }
                                        }
                                    });
                                }
                                console.log("verify email error");
                            }
                        },
                        error: function() {
                            dataLayer.push({
                                event: {
                                    eventInfo: {
                                        eventName: 'reg_error_verify_email',
                                        type: 'interaction'
                                    },
                                    category: {
                                        primaryCategory: 'got_reg'
                                    }
                                }
                            });
                            // console.log('Ajax error');
                        },
                        complete: function() {
                            console.log("verify email Ajax Complete");
                        }
                    });
                    if (isSuccess === true) {
                        return true;
                    }
                } else {
                    return false;
                }
            },
            priority: 33
        },
        confirmpassword: {
            fn: function(value, requirements) {
                if ($(requirements[0]).val() === value)
                    return true;
                return false;
            },
            priority: 34
        },
        minlengthcustom: {
            fn: function(value, requirements) {
                var newValue = parseInt(requirements, 10);
                if (value.length < newValue && $.trim(value) !== '')
                    return false;
                else if ($.trim(value) === '')
                    return true;
                return true;
            },
            priority: 35
        },
        patterncustom: {
            fn: function(value, requirements) {
                if (/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(value) !== true && $.trim(value) !== '') {
                    return false;
                }
                return true;
            },
            priority: 36
        },
        multiplecheck: {
            fn: function(value, requirements) {
                var boolCheck = false;
                for (var i = 0; i < requirements.length; i++) {
                    var $this = $(requirements[i]);
                    if ($this.val() !== '') {
                        boolCheck = true;
                    }
                }
                if (!boolCheck && $.trim(value) === '') {
                    for (var j = 0; j < requirements.length; j++) {
                        var $that = $(requirements[j]);
                        window.ParsleyUI.removeError($that.parsley());
                        $that
                            .removeClass('parsley-error')
                            .addClass('parsley-success');
                    }
                }
                return true;
            },
            priority: 37
        },
        specialcharactercheck: {
            fn: function (value) {
                if (/^(?=.*[`~!@#\$%"':;\^&\*\(\)\-=_+\\\[\]{}/\?,\.\<\>])/.test(value) !== true ) {
                    return true;
                }
                return false;
            },
            priority: 41
        },
        dobcheck: {
            fn: function(value) {
                if (/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{4})$/.test(value) === true) {
                    return true;
                }
                return false;
            },
            priority: 38
        },
        overeighteencheck: {
            fn: function(value) {

                var minAge = 18;
                var dateParts = value.split('/');

                var year = parseInt(dateParts[2]);

                var tempDate = new Date(year + minAge, dateParts[1] - 1, dateParts[0]);
                return (tempDate <= new Date());
            },
            priority: 39
        },
        phonenumber: {
            fn: function(value) {
                var trimmed = value.replace(/ /g, "");

                if (/\d{10}/.test(trimmed) === true) {
                    return true;
                }
                return false;
            },
            priority: 40
        },
        specialcharactercheck: {
            fn: function(value) {
                if (/^(?=.*[`~!@#\$%"':;\^&\*\(\)\-=_+\\\[\]{}/\?,\.\<\>])/.test(value) !== true) {
                    return true;
                }
                return false;
            },
            priority: 41
        },
        nopobox: {
            fn: function(value) {
                var trimmed = value.replace(/ /g, "");
                var poBox = "pobox"

                if (trimmed.toLowerCase().indexOf(poBox) >= 0) {
                    return false;
                }

                return true;
            },
            priority: 42
        },
        phonenumberwithspace: {
            fn: function(value, requirements) {
                return (new RegExp(/^[\s|\d]*$/).test(value) && value.match(/\d/g).length == 10);
            },
            priority: 2000
        }
    },
    i18n: {
        en: {
            minlengthcustom: 'This value is too short. It should have 6 characters or more.',
            confirmpassword: 'Confirm password should be the same with password.',
            patterncustom: 'Minimum of 6 characters with at least 1 letter and 1 number.'
        }
    }
};
window.ParsleyExtend = {
    asyncValidators: {
        mycustom: {
            fn: function(xhr) {
                var jsonObject = xhr.responseJSON;

                if (jsonObject && jsonObject.errorCode && jsonObject.errorCode === 'ACC-UA-ERR-003') {
                    return false;
                } else {
                    return true;
                }

                return 404 === xhr.status;
            }
        }
    }
};