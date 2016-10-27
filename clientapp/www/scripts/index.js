// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var contentWidth;
var contentHeight;
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var heightDoc = $(document).height();
        var widthDoc = $(document).width();
        $('#divContainer').css('height', heightDoc);
        loadContentView("map");
        var navBarHeight = $('#nav_bar').height();
        $('#view_content').css('height', heightDoc - navBarHeight);
        $('#view_content').css('margin-top', navBarHeight);
        contentWidth = widthDoc;
        contentHeight = heightDoc - navBarHeight;

        setUpMenu();
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();

function loadContentView(view) {
    $("#view_content").load("./views/"+view+".html", function (data) {
        console.log("Ucitan view");
        if(view === "map")
            initializeMap(contentWidth, contentHeight);
    });
}

function setUpMenu() {
    $("#menu_1").click(function () {
        loadContentView("dummy");
    });
}