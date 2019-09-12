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



    $("#driver").click(function(event) {
        $('#stage').load('https://www.tutorialspoint.com/jquery/result.html');
    });


    $("#json_driver").click(function(event) {
        $.getJSON('https://www.tutorialspoint.com/jquery/result.json', function(jd) {
            $('#stage').html('<p> Name: ' + jd.name + '</p>');
            $('#stage').append('<p>Age : ' + jd.age + '</p>');
            $('#stage').append('<p> Sex: ' + jd.sex + '</p>');
        });
    });

    $("#wiki_driver").click(function(event) {
        var wiki_url = "https://api.imgflip.com/get_memes"
        $.getJSON(wiki_url, function(jd) {
            $('#stage').html('<p> Name: ' + jd.success + '</p>');
            num = jd.data.memes.length;
            index = Math.floor(Math.random() * num);
            $('#stage_img').attr("src", jd.data.memes[index].url);
        });
    });

    $("#show_effect").click(function() {
        $("#effect_h4").show(1000);
    });
    $("#hide_effect").click(function() {
        $("#effect_h4").hide(1000);
    });

    $("#toggle_effect").click(function(event) {
        $("#effect_h4").toggle('slow', function() {
            alert("Animation completed");
        });
    });


    (function worker() {
        var wiki_url = "https://api.imgflip.com/get_memes"
        $.getJSON(wiki_url, function(jd) {
            $('#stage').html('<p> Name: ' + jd.success + '</p>');
            num = jd.data.memes.length;
            index = Math.floor(Math.random() * num);
            $('#stage_img').attr("src", jd.data.memes[index].url);
            // Schedule the next request when the current one's complete
            setTimeout(worker, 5000);
        });
    })();

});