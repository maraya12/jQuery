// $(document).ready(function(){
//     $("#jsbox1").fadeIn("slow", function(){
//         $("#jsbox2").fadeIn("slow", function(){
//             $("#jsbox3").fadeIn("slow", function(){
//                 $("#jsbox4").fadeIn("slow")
//             }) 
//         })
//     })
// })

$(document).ready(function(){
    $("#jsbox1").delay(300).fadeIn("slow");
    $("#jsbox2").delay(600).fadeIn("slow");
    $("#jsbox3").delay(900).fadeIn("slow");
    $("#jsbox4").delay(1200).fadeIn("slow");
    $("#jsbox5").delay(2000).fadeIn("slow");
    $("#jsbox6").delay(1800).fadeIn("slow");
    $("#jsbox7").delay(1600).fadeIn("slow");
    $("#jsbox8").delay(1400).fadeIn("slow");

    $(".box").hover(function(){
        $(this).animate({
            transform:"scale(1.1)",
            left:"+=50",
            height:"toggle",
            opacity:0.25,
        },5000, function(){

        })
    }),

    $(".box").click(function(){
        $(this).addClass("img")
    })
    
})


// $(".box").hover(function(){
//     $(this).addClass("transform")
// }),

// $(".box").mouseleave(function(){
//     $(this).removeClass("transform")
// })

