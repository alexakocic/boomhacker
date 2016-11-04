var socket;

function setUpSocket() {
    socket = io.connect(ipadress + ":" + socketport);
    console.log("Device ready");
    socket.on('connect', function () {
        socket.emit('cock', "user1");
    });

    socket.on('hello', function (msg) {
        alert(msg);
    });

    socket.on('message', function (msg) {
        var id = msg.id;
        if (id === localStorage.getItem("id")) {
            alert(msg.text);
        }
    });
}