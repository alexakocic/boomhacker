function tryRegister(e) {
    e.preventDefault();

    var url = ipadress + ":" + mainport + "/users/register";

    $.ajax({
        type: "POST",
        url: url,
        data: $("#register_form").serialize(),
        success: function (data) {
            localStorage.setItem("id", data);
            loadContentView("camera");
        }
    });
};

function login(e) {
    e.preventDefault();
    loadContentView("login");
}

$('#register_form').ready(function () {
    $('#register_bckg').css('width', $(window).width() * 0.9)
    $('#register_bckg').css('height', $(window).height() * 0.9);
    $('#register_bckg').css('margin-left', $(window).width() * 0.05);
    $('#register_bckg').css('margin-top', -$(window).height() * 0.05);


    $('#register_form').css('width', $(window).width() * 0.9)
    $('#register_form').css('height', $(window).height() * 0.6);
    $('#register_form').css('margin-left', $(window).width() * 0.05);
    $('#register_form').css('margin-top', -$(window).height() * 0.01);
});