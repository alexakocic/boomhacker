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