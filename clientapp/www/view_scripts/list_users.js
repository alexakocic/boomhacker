socket.emit('message', { id: "581a9c74630ece35a087010f", text: "Gde si matke :)" });

var url = ipadress + ":" + mainport + "/users/users";

$.ajax({
    type: "GET",
    url: url,
    data: { id: localStorage.getItem("id") },
    success: function (data) {
        data.forEach(function (element) {
            $('#list_container').append('<div class="row list_card" data-id="' + element._id + '">' +
                '<div class="col-xs-12 col-md-4 list_item">' +
                    '<div class="row first_item_row">' +
                        '<div class="col-xs-4">' +
                            '<img style="width:100%;" src="' + element.picture + '"/>' +
                        '</div>' +
                        '<div class="col-xs-8">' +
                            '<div>' + element.username + '</div>' +
                            '<div>' + element.email + '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-xs-4">' +
                            '<button class="btn btn-primary hbutton" data-id="' + element._id + '">Dugmence</button>' +
                        '</div>' +
                     '</div>' +
                '</div>' +
            '</div>');
        });
    }
});

$('hbutton').click(function () {
    localStorage.setItem("id", $(this).attr('data-id'));
    loadContentView("profile");
});