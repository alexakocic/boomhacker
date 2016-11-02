function tryRegister(e) {
    e.preventDefault();

    var url = "http://192.168.0.101:3000/users/register";

    $.ajax({
        type: "POST",
        url: url,
        data: $("#register_form").serialize(),
        success: function (data) {
            if (data === "OK") {
                loadContentView("camera");
            }
        }
    });
};

function login(e) {
    e.preventDefault();
    loadContentView("login");
}