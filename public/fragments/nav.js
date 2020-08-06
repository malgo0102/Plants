var mysession;

$(document).ready(()=> {
    $.get('/session')
        .done(data => {
            mysession = data.response;
            
            if (mysession.loggedin){
                $("#login, #signup").hide();

            } else {
                $("#user, #logout").hide();
                $(".mycheckbox, .save-plant-btn").hide();
            }
            if (mysession.errormessage){
                $("#errormessage").prepend("<div class='alert alert-info alert-dismissible'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>Info! </strong>" + mysession.errormessage + "</div>");
            }

        }).catch((error) => {
            console.log(error);
        });
    
});