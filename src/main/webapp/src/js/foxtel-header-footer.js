$(document).ready(function(){
    var displayNameFunc = new DisplayNameFunc();

    displayNameFunc.init("logged-in");

    // TOP NAV SMART SCROLLING FEATURE
    var topnav = $('.foxtel-header-breadcrumb-wrapper');
    var topnavH = topnav.height();
    var topnavStatus;
    var currentScroll = 0;

    // SCROLL SENSITIVITY TO ADJUST SCROLL BEHAVIOURS
    var sensitivity = 2;

    $(window).scroll(function() {
        // GET CURRENT PAGE AXIS
        var nextScroll = $(this).scrollTop();

        // GET SCROLL DELTA
        var scrollDelta = nextScroll - currentScroll;

        // IF SCROLLED OR LEFT FROM 0 Y-AXIS
        if($(this).scrollTop() > 0) {
            // ONLY TRIGGER WHEN NOT IN THE Y-AXIS RANGE, 0 - TOP NAV HEIGHT
                // WHEN SCROLL DOWNWARDS
                if (nextScroll > currentScroll) {
                    if (scrollDelta > sensitivity) {
                        if (topnavStatus) {
                            topnavStatus = false;

                            // TOPNAV SLIDES BACK AWAY
                            topnav.clearQueue().stop().animate({marginTop: -topnavH}, 300, function () {

                                //TO DISTINCUISH FOXTEL NOW HEADER
                                if (topnav.find('header').hasClass('foxtel-now-header')) {
                                    return;
                                } else {
                                    topnav.addClass('foxtel-header-breadcrumb--default')
                                          .removeClass('foxtel-header-breadcrumb--pop');
                                }
                            });
                        }
                    }

                    // WHEN SCROLL UPWARDS
                } else {
                    if (scrollDelta < -sensitivity) {
                        if (!topnavStatus) {
                            topnavStatus = true;

                            // TOPNAV POPS DOWN
                            topnav.clearQueue().stop().css('margin-top', -topnavH).animate({marginTop: 0}, 300);
                        }
                        //TO DISTINCUISH FOXTEL NOW HEADER
                        if (topnav.find('header').hasClass('foxtel-now-header')) {
                            return;
                        } else {
                            topnav.addClass('foxtel-header-breadcrumb--pop')
                                  .removeClass('foxtel-header-breadcrumb--default');
                        }
                    }
                }
            // IF COMPLETLEY BACK TO TOP, 0 Y-AXIS
        } else {
            topnav.removeClass('foxtel-header-breadcrumb--pop');
        }

        // SET CURRENT AS LAST SCROLL
        currentScroll = nextScroll;
    });
});

var DisplayNameFunc = window.DisplayNameFunc || function () {
        var displayName = "";
        var loginNameDisplayObj_desktop = $("#gheader a[for='loginBtn_desktop']");
        var loginNameDisplayObj_mobile_log_in = $("#gheader li[for='loginBtn_mobile']");
        var loginNameDisplayObj_mobile_logged_in = $("#gheader li[for='logged_in_mobile']");
        var logoutDivObj = $("#gheader div.foxtel-header__right__login__wrapper");

        this.init = function (logoutObj) {
            if($("#" + logoutObj) && $("#" + logoutObj).length > 0){
                $("#" + logoutObj).submit(cleanUpCookie);
                $("#" + logoutObj + "-m").submit(cleanUpCookie);
            }
            checkLogged();
        };

        var checkLogged = function () {

            var isFoxtelPlay = function () {
                return location.href.indexOf("/foxtelplay/") > -1;
            };

            var servletURL = "/bin/foxtel/display-name.json";
            if (document.cookie && document.cookie.indexOf("DProPCookie") >= 0) {
                servletURL = "/bin/secure/display-name.json";
            }

            $.ajax({
                url: servletURL,
                dataType: 'json',
                type: 'GET',
                jsonp: false,
                success: function (data) {
                    if (typeof data === "undefined" || typeof data.first_name === "undefined") {
                        toggleLogIn("", false);
                        window.userObj = new Object();
                    } else if (isFoxtelPlay() === data.isPlayRole || !isFoxtelPlay() === !data.isPlayRole) {
                        // begin trim string length > 14 characters
                        $usrName = data.first_name.trim();
                        if ($usrName.length > 14) {
                            $usrName = $usrName.slice(0, 14) + "....";
                        }
                        // end trim string
                        $("#account-login-text").html($usrName);
                        //$("#account-login-text").html(data.first_name);
                        if ($(".customer-greeting-name-js").length > 0) {
                            $(".customer-greeting-name-js").html(" " + data.first_name);
                        }
                        displayName = data.first_name;
                        toggleLogIn($usrName, true);
                    } else {
                        toggleLogIn("", false);
                        window.userObj = new Object();
                    }
                },
                error: function () {
                    toggleLogIn("", false);
                },
                complete: function () {
                }
            });
        };

        var toggleLogIn = function (username, loggedIn) {
            if (username.length > 7) {
                username = username.slice(0, 7) + "...";
            }
            username = username || "";
            loggedIn = loggedIn || false;

            if(loggedIn){
                loginNameDisplayObj_desktop.removeClass("foxtel-header__right__login");
                loginNameDisplayObj_desktop.addClass("foxtel-header__right__logged-in");
                loginNameDisplayObj_desktop.unbind("click");

                loginNameDisplayObj_mobile_log_in.hide();
                loginNameDisplayObj_mobile_logged_in.show();

                loginNameDisplayObj_desktop.text(username);
                logoutDivObj.addClass("active");
            }else{
                loginNameDisplayObj_desktop.removeClass("foxtel-header__right__logged-in");
                loginNameDisplayObj_desktop.addClass("foxtel-header__right__login");

                loginNameDisplayObj_desktop.text(loginNameDisplayObj_desktop.attr("loginTxt"));
                loginNameDisplayObj_desktop.click(function(){
                    window.location = $(this).data("login-url");
                });

                loginNameDisplayObj_mobile_log_in.show();
                loginNameDisplayObj_mobile_logged_in.hide();

                logoutDivObj.removeClass("active");
            }
        };

        var cleanUpCookie = function () {
            if (accountData.user.account) {
                var foxtelaccountid = accountData.user.account.accountNumber;
                FOX.storage.removeData('data' + foxtelaccountid);
            }
            return true;
        };


    };
