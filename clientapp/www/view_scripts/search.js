$('#modal_done').click(function () {
    var city = $('#search_city')[0].value;
    
    var url = ipadress + ":" + mainport + "/venues";

    $.ajax({
        type: "GET/",
        data: city,
        url: url,
        success: function (data) {
            updateMap(data)
        }
    });
})