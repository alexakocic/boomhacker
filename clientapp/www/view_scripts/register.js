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