$(document).ready(function () {
    const url = window.location.href;
    let id = url.substr(url.lastIndexOf("/") + 1);

    $.get(`/user/data/${id}`)
        .done((data) => {
            $("#username").text("Welcome " + data.response.username + "!");
                       
            let i;
            for (i = 0; i < data.response.plants.length; i++) {
                $("#plantlist").append("<li><a href='/plant/" + data.response.plants[i].id + "'>" + data.response.plants[i].name + "</a></li>");
            };
        }).catch((error) => {
            console.log(error);
        });

});