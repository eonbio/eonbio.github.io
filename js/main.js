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
            url: 'https://zhmail.azurewebsites.net/api/eonbioEmail?code=LPYF6nsaMUa4lf1Tik8RW0aak2bs3zsbbUWQprJ/jm9XzYo/JhSLXw==',
            data: JSON.stringify(msg),

            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).done(function() {
            $('#emailMessage').text('Your email is on its way to us');
        }).fail(function(err) {
            if (err.status === 200) {
                $('#emailMessage').text('Your email is on its way to us');
            } else {
                $('#emailMessage').text('Opps, something is wrong. You can click the email icon bellow to contact us. ');
            }
        });
    });
});



$(window).resize(function () {
    var winWidth = $(window).width();
    if (winWidth > 1000) {
        $("section").height($(window).height() - 100);
    } else {
            $("section").height('auto')
        $(".slide").height('auto')
    }
})

setInterval(function() {
    var winWidth = $(window).width();
    if (winWidth < 1000 && $("section").width()!== winWidth) {
        $("section").attr('style', '');
        $(".slide").attr('style', '');
    }
}, 250);