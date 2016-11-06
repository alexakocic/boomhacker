var locationData = {};

$('#objectInfo').ready(function () {

    $('#modalBckg').css('width', $(window).width());
    $('#modalBckg').css('height', $(window).height());

    $('#objectInfo').css('width', $(window).width());
    $('#objectInfo').css('height', $(window).height());
    $('#objectInfo').fadeTo(500, 1);

    $('#image_holder').css('margin-top', $(window).height() * 0.05);
    $('#image_holder').css('width', $(window).width() * 0.7);
    $('#image_holder').css('height', $(window).height() * 0.3);

    $('#text_holder').css('margin-top', $(window).height() * 0.05);
    $('#text_holder').css('height', $(window).height() * 0.4);
});

$('#wfInfoClose').click(function () {
    $('#objectInfo').fadeTo(500, 0, function () {
        $('#modal').html('');
    });
});

function fillLocData(object) {

}