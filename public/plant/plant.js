
$(document).ready(function () {
    var url = window.location.href;
    var pathArray = url.split("/");
    var id = pathArray[4];

    $.ajax({
        "url": "/plant/data/" + id,
        "type": "GET",
        "datatype": 'json',
        "success": function (x) {
            $('#plants').DataTable({
                data: x.response,

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
                    //{ data: 'picture' },
                    //{ data: 'category' },
                ]
            });
        }
    })
});

