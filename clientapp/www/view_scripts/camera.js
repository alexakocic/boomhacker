function takePhoto() {
    navigator.camera.getPicture(cameraCallback, cameraError, {
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA
    });
}

function cameraCallback(imageData) {
    var image = document.getElementById('picture_container');
    image.src = "data:image/jpeg;base64," + imageData;
}

function cameraError(message) {
    console.log(message);
}

function addPhoto() {
    navigator.camera.getPicture(cameraCallback, cameraError, {
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    });
}

function finish() {
    var pic = $('#picture_container').attr('src');

    var url = "http://192.168.0.101:3000/users/picture";

    $.ajax({
        type: "PUT",
        url: url,
        data: { picture: pic, id: localStorage.getItem("id") },
        success: function (data) {
            loadContentView("map");
        }
    });
}