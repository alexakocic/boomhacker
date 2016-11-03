function tryLogin(e) {
    e.preventDefault();

    var url = "http://192.168.0.101:3000/users/login";

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