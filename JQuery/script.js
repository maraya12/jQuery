$(document).ready(function(){
    $("h1").click(function(){
        $("p").toggle();
    }),

    $("#btn1").hover(function(){
        $("#box1").slideToggle("slow");
    }),

    $(".input1").focus(function(){
        $(this).addClass("bg-pink");
    }),

    $(".input1").blur(function(){
        $(this).removeClass("bg-pink");
    }),

    $("#btn2").click(function(){
        $("#box2").fadeToggle("slow");
    }),

    $("a").hover(function(){
        $("#link1").toggleClass("bg-blue");
        $("#link2").toggleClass("bg-pink");
        $("#link3").toggleClass("bg-blue");
        $("#link4").toggleClass("bg-pink");
    }),

    $("p").click(function(){
        $(this).addClass("bg-pink");
    }),

    $("h1").click(function(){
        $(this).addClass("bg-purple");
    })


})


    // $("a").hover(function(){
    //     $(this).toggleClass("hightlight")
    // })

    // $("a").hover(function(){
    //     $(this).addClass("bg-blue")
    // })

    // $("a").hover(function(){
    //     $(this).slideToggle("very slow");
    // }),

    // $("#input1").mouseleave(function(){
    //     alert('Mouse Leave');
    // }),