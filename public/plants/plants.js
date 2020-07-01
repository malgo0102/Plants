
$(document).ready(function () {
    $.ajax({
        "url": "/plants/data",
        "type": "GET",
        "datatype": 'json',
        "success": function (x) {
            $('#plants').DataTable({
                data: x.response,

                columns: [
                    { data: 'name' },
                    { data: 'nickname' },
                    // { data: 'watering' },
                    // { data: 'humidity' },
                    // { data: 'fertalizing' },
                    // { data: 'temperature' },
                    // { data: 'lighting' },
                    // { data: 'soil' },
                    // { data: 'pruning' },
                    // { data: 'picture' },
                    { data: 'category' },
                ]
            });
        }
    })
});

