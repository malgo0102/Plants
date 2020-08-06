$(document).ready(function () {
    const url = window.location.href;
    let id = url.substr(url.lastIndexOf("/") + 1);

    $.get(`/plant/data/${id}`)
        .done((data) => {
            $("#name").text(data.response.name);
            $("#nickname").text(data.response.nickname);
            $("#watering").text(data.response.watering);
            $("#humidity").text(data.response.humidity);
            $("#fertilizing").text(data.response.fertilizing);
            $("#temperature").text(data.response.temperature);
            $("#lighting").text(data.response.lighting);
            $("#soil").text(data.response.soil);
            $("#pruning").text(data.response.pruning);
            $("#picture").prepend("<img id='image' src=" + data.response.picture + "></img>");
            $("#category").text(data.response.category);
        }).catch((error) => {
            console.log(error);
        });
});

