$('#search_div').ready(function () {
    $('#searchBckg').css('width', $(window).width());
    $('#searchBckg').css('height', $(window).height());

    $('#search_div').css('width', $(window).width());
    $('#search_div').css('height', $(window).height());
    $('#search_div').fadeTo(500, 1);

    $('#searchOptions').css('width', $(window).width());
    $('#searchOptions').css('height', $(window).height() * 0.5);
});

$('#search_submit').click(function () {
    var city = $('#search_city').val();

    if (city == "")
        return;

    var url = ipadress + ":" + mainport + "/venues/";

    $.ajax({
        type: "GET",
        url: url,
        data: { city: city },
        success: function (data) {
            $('#search_div').fadeTo(500, 0, function () {
                $('#modal').html('');
            });
            updateMap(data);
        }
    });
});