function setUpSocket() {
    var socket = io.connect(ipadress + ":" + socketport);
    console.log("Device ready");
    socket.on('connect', function () {
        socket.emit('cock', "user1");
    });

    socket.on('hello', function (msg) {
        alert(msg);
    });
}