$(document).ready(function () {
    const socket = io.connect("localhost:3000");

    $('#btn-submit').click(() => {
        const message = $('#message').val();
        $('#message').val('');
        socket.emit('a client wrote this', { message });
    });

    socket.on('A client said', data => {
        $('#conversation').prepend(`<div>${data.message}</div>`);
    });
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
};

function closeForm() {
    document.getElementById("myForm").style.display = "none";
};