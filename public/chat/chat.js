$(document).ready(function () {
    const socket = io.connect("localhost:3000");

    $('#btn-submit').click(() => {
        const message = $('#message').val();
        var username = "Anonymous";
        if(mysession.loggedin) {
            username = mysession.username;
        }
        $('#message').val('');
        socket.emit('a client wrote this', { message, username });
    });

    socket.on('A client said', data => {
        $('#conversation').append(`<div>${data.username}: ${data.message}</div>`);
    });
    // socket.on('A server said', data => {
    //     $('#conversation').append(`<div>${data.message}</div>`)
    // });
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
};

function closeForm() {
    document.getElementById("myForm").style.display = "none";
};