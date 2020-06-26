
$(document).ready(function () {
    // $('#plants').DataTable({
    //     "ajax": {
    //         "url": "/plants/data",
    //         "type": "GET",   
    //         "datatype": 'json', 
            
    //     },

  
    $.ajax({
        "url": "/plants/data",
        "type": "GET",
        "datatype": 'json',
        "success": function (data) {
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
} }) //extra  brackets
});

