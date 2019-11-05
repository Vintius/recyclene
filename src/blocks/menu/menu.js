let $body = $('body'),
    $menu = $('.js-menu'),
    $mainButton = $('.js-main-button');

const MAGIC_NUMBER = 652;

function removeClasses() {
    $menu.removeClass('is-active');
    $mainButton.removeClass('is-active');
    $body.removeClass('has-no-overflow');
}

$mainButton.on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('is-active')) {
        removeClasses();
    } else {
        $(this).addClass('is-active');
        $menu.addClass('is-active');
        $body.addClass('has-no-overflow');
    }
});
$('.js-right-side').click(removeClasses);
$('.js-menu-button').on('click', function(e) {
    e.preventDefault();
    let target = $(this).attr('href'),
        $target = $(target);

    $('html, body').animate({
        scrollTop: $target.offset().top - $menu.height()
    }, 700);

    removeClasses();
});

$(window).on('scroll', function(e) {
    let current = $(this).scrollTop(),
        offset = $menu.position().top;

     if (current > offset + MAGIC_NUMBER) {
         $menu.addClass('is-fixed');
     } else {
         $menu.removeClass('is-fixed');
     }
});

