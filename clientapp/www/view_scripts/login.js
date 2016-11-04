function tryLogin(e) {
    e.preventDefault();

    var url = ipadress + ":" + mainport + "/users/login";

    $.ajax({
        type: "GET",
        url: url,
        data: $("#login_form").serialize(),
        success: function (data) {
            localStorage.setItem("id", data);
            console.log(localStorage.getItem("id"));
            loadContentView("map");
        }
    });
};

function register() {
    loadContentView("register");
};

$('#login_form').ready(function () {
    $('#login_bckg').css('width', $(window).width() * 0.9)
    $('#login_bckg').css('height', $(window).height() * 0.9);
    $('#login_bckg').css('margin-left', $(window).width() * 0.05);
    $('#login_bckg').css('margin-top', -$(window).height() * 0.05);


    $('#login_form').css('width', $(window).width() * 0.9)
    $('#login_form').css('height', $(window).height() * 0.6);
    $('#login_form').css('margin-left', $(window).width() * 0.05);
    $('#login_form').css('margin-top', -$(window).height() * 0.01);
});