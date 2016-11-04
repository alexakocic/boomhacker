﻿var url = ipadress + ":" + mainport + "/users/user";

$.ajax({
    type: "GET",
    url: url,
    data: { id: localStorage.getItem("id") },
    success: function (data) {
        $('#profile_image').attr('src', data.picture);
        $('#profile_username').html(data.username);
        $('#profile_email').html(data.email);
    }
});