/* Filename: custom.js */


$(document).ready(function() {

    $("div").click(function() {
        //alert("Hello, world!");
    });

    $(".purple-head").click(function() {
        $(".purple-head").css("color", "blue");
    });

    $('h4 , #multi-p').css("background-color", "yellow");

    cols = ['red', 'blue', 'green', 'black', 'yellow'];
    counter = 0;
    $('button').click(function() {
        $('button').css("background-color", cols[counter]);
        counter++;
        if (counter > 4) {
            counter = 0;
        }
        if ($('button').hasClass("selected")) {
            $('button').removeClass("selected");
        } else {
            $('button').addClass("selected");
        }

        //Simple Way to do above thing
        //$('button').toggleClass("selected");

    });


    $("#img-load").click(function() {
        var url = $("#img-url").val();
        $("#img").attr("src", url);
        $("#img").attr("alt", url);
    });


    $("#font-selector").change(function() {
        var font = $(this).children("option:selected").val();
        $(".writing_p").css("font-size", font);
    });


    $("#fontf-selector").change(function() {
        var font = $(this).children("option:selected").val();
        $(".writing_p").css("font-family", font);
    });



});