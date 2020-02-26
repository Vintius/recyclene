import $ from "jquery";
import "slick-slider";

$('.js-sliderLeft-tab1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.js-sliderRight-tab1'
});
$('.js-sliderRight-tab1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.js-sliderLeft-tab1',
    arrows: false,
    focusOnSelect: true
});
$('.js-sliderLeft-tab2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.js-sliderRight-tab2'
});
$('.js-sliderRight-tab2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.js-sliderLeft-tab2',
    arrows: false,
    focusOnSelect: true
});

$('.js-tabs-link').on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('is-active')) return;

    let $parent = $(this).closest('.js-tabs-container'),
        $links = $parent.find('.js-tabs-link'),
        $content = $parent.find('.js-tabs-content'),
        $content_active = $content.eq($(this).index());

    $links.removeClass('is-active');
    $content.removeClass('is-active');
    $(this).addClass('is-active');
    $content_active.addClass('is-active');

    checkForSliders($content_active.find('.howItWorks__sliderLeft'), $content_active.find('.howItWorks__sliderRight'));
});

function checkForSliders($slider1, $slider2) {
    if ($slider1.length) {
        $slider1.slick('unslick');
        $slider2.slick('unslick');

        $slider1.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: $slider2
        });
        $slider2.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: $slider1,
            arrows: false,
            focusOnSelect: true
        });
    }
}