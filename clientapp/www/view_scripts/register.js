$("#register_form").submit(function (e) {
    var url = "http://192.168.0.101:3000/users/register";

    $.ajax({
        type: "POST",
        url: url,
        data: $("#register_form").serialize(),
        success: function (data) {
            if (data === "OK") {
                loadContentView("map");
            }
        }
    });

    e.preventDefault();
});

function login() {
    loadContentView("login");
}