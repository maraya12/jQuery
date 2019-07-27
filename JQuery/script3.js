$("#uName").keydown(function(){
    var uLength = $('#uName').val().length;

    if(uLength < 7) {
        $(".msg").text("Username must be at least 8 characters.");
    } 
    else{
        return $(".msg").text(" ")
    }      
}),

$("#uPass").keydown(function(){
    var uLength = $('#uPass').val().length;

    if(uLength < 7) {
        $(".msg1").text("Password must be at least 8 characters.");
    } 
    else{
        return $(".msg1").text(" ")
    }      
}),

$(document).ready(function(){
    $(".input").focus(function(){
    $(this).addClass("bg-plum");
    }),

    $(".input").blur(function(){
        $(this).removeClass("bg-plum");
        })
})





