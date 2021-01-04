var images = ["/bg_7.jpg", "/bg_8.jpg", "/bg_9.jpg", "/bg_10.jpg"];
var i = 0;
var x = $("#hero-slide");
$("#hero-slide").css("background-image", "url(images/" + images[i] + ")");
setInterval(function () {
    i++;
    if (i == images.length) {
        i = 0;
    }
    $("#hero-slide").fadeOut("slow", function () {
        $(this).css("background-image", "url(images/" + images[i] + ")");
        $(this).fadeIn("slow");
    });
}, 5000);