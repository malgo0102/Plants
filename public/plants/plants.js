var mysession;

$(document).ready(function () {

    $.get(`/plants/data`)
        .done((data) => {
            let i;
            if (mysession.loggedin){
                for ( i = 0; i < data.response.length; i++) {
                    $("#plants").append("<div class='row'><div class='col'><p id='name'><a href='/plant/" + data.response[i].id + "'>" + data.response[i].name + "</a></p></div><div class='col'><p id='nickname'>" + data.response[i].nickname + "</p></div><div class='col'><p id='category'>" + data.response[i].name + "</p></div><div class='col save-plant-btn'><button type='submit' class='btn btn-primary save-plant-btn' id='" + data.response[i].id +"'>I have this plant!</button></div></div>");
                    $("#" + data.response[i].id).click(data.response[i].id, function (event){
                        $.post("/plants/" + event.data);
                    });
                }
            } else {
                for ( i = 0; i < data.response.length; i++) {
                    $("#plants").append("<div class='row'><div class='col'><p id='name'><a href='/plant/" + data.response[i].id + "'>" + data.response[i].name + "</a></p></div><div class='col'><p id='nickname'>" + data.response[i].nickname + "</p></div><div class='col'><p id='category'>" + data.response[i].name + "</p></div></div>");
                }
            }
        }).catch((error) => {
            console.log(error);
        });

}); 