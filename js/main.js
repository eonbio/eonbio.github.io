$(function() {

    $(window).trigger('resize');

    $('#mc-embedded-subscribe').click(function() {
        var msg = {};
        msg.from = $('#mce-EMAIL').val();
        msg.firstName = $('#mce-FNAME').val();
        msg.lastName = $('#mce-LNAME').val();
        msg.message = $('#mce-MMERGE3').val() || '';

        $.ajax({
            type: "POST",
            url: 'https://mailgun.azurewebsites.net/api/enobio?code=d6AS5KrOTLoEbvv52t4CYBkAeqCwJCNB/fFVRJD6GD5UAqA9RBaf5A==',
            data: JSON.stringify(msg),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data) {
                alert(data);
            },
            failure: function(errMsg) {
                alert(errMsg);
            }
        });

    });
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