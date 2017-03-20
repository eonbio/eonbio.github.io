$(function() {

    $(window).trigger('resize');
});

$(window).resize(function() {
    $("section").height($(window).height() - 100);
})