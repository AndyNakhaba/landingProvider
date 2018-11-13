
$(function () {
    $(".filter-reset").click(function () {
        console.log("filter reset click");
        $(this).closest(".filter-menu").find('.filter-btn').removeClass('active');
        //$(this).closest(".reset-area").find('select [value=default]').prop('selected',true);
    });
});

$(function () {
    $('.filter-btn').click(function () {
        console.log("filter btn click");
        $(this).toggleClass('active');
        //$('.block-filter').toggleClass('show-filter');
    });
    $('.provider-item-off').click(function () {
        console.log("active provider");
        $(this).closest('.providers').find('.provider-item-on').removeClass('provider-item-on');
        $(this).addClass('provider-item-on');
        $(this).removeClass('provider-item-off');
        //$(this).closest(".providers").find('.pop-up').removeClass('active');
    });
    $('.provider-btns .connect-btn').click(function () {
        console.log("connect to provider");
        $('.pop-up-wrap').addClass('active');
    });
    $('.appi-btns .connect-btn').click(function () {
        console.log("accepted");
        $('.pop-up-wrap').removeClass('active');
        $('.pop-up-accepted').addClass('active');
    });
    $('.close-btn').click(function () {
        console.log("close btn click");
        $(this).closest('.active').removeClass('active');
    });
    $(document).click(function(event) {
        if ($(event.target).closest('.provider-item-on').length) return;
        $(".provider-item-on").addClass('provider-item-off');
        $(".provider-item-on").removeClass('provider-item-on');
        event.stopPropagation();
        if ($(event.target).closest('.pop-up-wrap').length) return;
        $(".pop-up-wrap").removeClass('active');
        event.stopPropagation();
    });
});


