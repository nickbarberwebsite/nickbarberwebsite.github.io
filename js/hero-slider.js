var images = ["/bg_7.jpg", "/bg_11.jpg","/bg_12.jpg", "/bg_13.jpg", "/bg_14.jpg", "/bg_9.jpg", "/bg_10.jpg"];
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