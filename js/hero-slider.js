var images = ["/bg_1.jpg", "/bg_2.jpg", "/bg_3.jpg", "/bg_4.jpg"];
var i = 0;
var x = $("#hero-slide");
console.log(x)
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