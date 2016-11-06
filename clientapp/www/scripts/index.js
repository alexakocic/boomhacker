// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var contentWidth;
var contentHeight;
var loadContentView;
var ipadress = "http://10.66.128.244";
var mainport = "3000";
var socketport = "3001";

(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    loadContentView = function(view) {
        if (view === "login" || view === "register") {
            $("#nav_bar").hide();
        }

        else $("#nav_bar").show();

        $("#view_content").load("./views/" + view + ".html", function (data) {
            console.log("Ucitan view");
        });

        /*$.getScript("../view_scripts/" + view + ".js", function () {
            console.log("Script loaded");
        });*/
        //loadScript(view);
    }

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var heightDoc = $(window).height();
        var widthDoc = $(window).width();
        $('#divContainer').css('height', heightDoc);
        contentWidth = widthDoc;
        contentHeight = heightDoc;

        loadContentView("login");
        //setUpMenu();

        window.onorientationchange = readDeviceOrientation;

        setUpSocket();
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    function readDeviceOrientation() {
        var heightDoc = window.innerHeight;//$(window).height();
        var widthDoc = window.innerWidth;//$(window).width();
        $('#divContainer').css('height', heightDoc);
        var navBarHeight = $('#nav_bar').height();
        $('#view_content').css('height', heightDoc - navBarHeight);
        $('#view_content').css('margin-top', navBarHeight);
        contentWidth = widthDoc;
        contentHeight = heightDoc - navBarHeight;


        $('#map_id').css('height', contentHeight);
        $('#map_id').css('width', contentWidth);
    }

    function setUpMenu() {
        $("#menu_1").click(function () {
            loadContentView("map");
        });
        $("#menu_2").click(function () {
            loadContentView("login");
        });
        $("#menu_3").click(function () {
            loadContentView("camera");
        });
        $("#menu_4").click(function () {
            loadContentView("svg");
        });
        $("#menu_5").click(function () {
            loadContentView("list_users");
        });
        $("#menu_6").click(function () {
            loadContentView("profile");
        });
    }
  
    function loadScript(file) {
        var jsElm = document.createElement("script");
        jsElm.type = "application/javascript";
        jsElm.src = "../view_scripts/" + file + ".js"
        document.body.appendChild(jsElm);
    }
})();