$(function() {

    $(window).trigger('resize');
});

$(window).resize(function() {
    $("section").height($(window).height() - 100);
})

setInterval(function() {
    var winWidth = $(window).width();
    if (winWidth < 1000) {
        $("section").height('auto')
    }
}, 250);