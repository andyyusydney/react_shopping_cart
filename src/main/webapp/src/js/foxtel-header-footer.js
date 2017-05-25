$(document).ready(function(){
    topnavMobileFunc.dropdown();

    var displayNameFunc = new DisplayNameFunc();

    displayNameFunc.init("logged-in");

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 3;
    var navbarHeight = $('.foxtel-header-breadcrumb-wrapper').outerHeight();
    if ($('.foxtel-header-breadcrumb-wrapper').length) {
        $("body").css("padding-top", navbarHeight);
    }

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.foxtel-header-breadcrumb-wrapper').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.foxtel-header-breadcrumb-wrapper').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }
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

var topnavMobileFunc = {
    dropdown: function(){
        var $topnavMobileMore = $('#topnavMobileMore');
        var $topnavMobileMoreDropdown = $('#topnavMobileMoreDropdown');

        $topnavMobileMore.on("click touch", function(e) {
            e.stopPropagation();
            $topnavMobileMoreDropdown.toggle();
        });
        $topnavMobileMoreDropdown.on("click touchstart", function(e) {
            e.stopPropagation();
        });
        $(document).on("click touchstart", function(e) {
            $topnavMobileMoreDropdown.hide();
        });
    }
}