$(".img-icon-about").hover(function () {
    $(this).hide(500);

}, function () {
    $(this).show(500);
})
$(".box_about").hover(function () {
    $(this).css("borderTop", "10px rgba(0, 247, 255, 0.39)");
    $(this).css("clipPath", "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)");
}, function () {
    $(this).css("borderTop", "0px rgba(0, 247, 255, 0.39)");
    $(this).css("clipPath", "polygon(10% 0, 100% 0%, 92% 100%, 0% 100%)");
})
var auto = ["Italy", "ایتالیا", "هلند", "Netherlands", "استرالیا", "Australia"]
$("#inputheader_search").autocomplete({
    source: auto,
});
(function () {
    setInterval(colorb, 4000);
    var num = 0;

    function colorb() {
        num++;
        if (num === 1) {
            $("#brand_footer").css("color", "rgb(0, 60, 255)");
        }
        if (num === 2) {
            $("#brand_footer").css("color","rgb(0, 204, 255)");
            num = 0;
        }
    };
})();