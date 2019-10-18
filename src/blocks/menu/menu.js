
$('.js-main-button').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('is-active')){
        $(this).removeClass('is-active');
        $('.js-menu-container').removeClass('is-active');
    }
    else {
        $(this).addClass('is-active');
        $('.js-menu-container').addClass('is-active');
    }
});

$('.js-right-side').click(function (){
    $('.js-menu-container').removeClass('is-active');
    $('.js-main-button').removeClass('is-active');
});

