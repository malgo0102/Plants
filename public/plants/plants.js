
$(document).ready(function () {
    $.get('/plants/data')
        .done((data) => {

            for (var i = 0; i < data.length; i++) {
                console.log(data);
                data[i].name;
                data[i].nickname;
                data[i].watering;
                data[i].humidity;
                data[i].fertalizing;
                data[i].temperature;
                data[i].lighting;
                data[i].soil;
                data[i].pruning;
                data[i].picture;
                data[i].category;
            }

            $('#plants').DataTable({
                data: data,
                columns: [
                    { data: 'name' },
                    { data: 'nickname' },
                    { data: 'watering' },
                    { data: 'humidity' },
                    { data: 'fertalizing' },
                    { data: 'temperature' },
                    { data: 'lighting' },
                    { data: 'soil' },
                    { data: 'pruning' },
                    { data: 'picture' },
                    { data: 'category' },
                ]
            });
        })
        .catch((error) => {
            console.log(error);
            $('#plants').text("Couldn't jQuery plants.js");
        });
});

