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




// import $ from "jquery";
//
// const MOBILE_SIZE = 740;
//
// let mobileSize = 740,
//     attrs = {
//         appendArrows: '.howItWorks__tab.isActive .howItWorks__sliderButtons',
//         prevArrow: '<img src="img/arrow.svg" class="howItWorks__sliderButtonLeft js-sliderLink">',
//         nextArrow: '<img src="img/arrow.svg" class="howItWorks__sliderButtonRight js-sliderLink">',
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         variableWidth: false,
//         infinite: false,
//         responsive: [
//             {
//                 breakpoint: mobileSize,
//                 settings: 'unslick'
//             }]
//         },
//     mobileAttrs = {
//         appendArrows: '.howItWorks__tab.isActive .howItWorks__sliderButtons',
//         prevArrow: '<img src="img/arrow.svg" class="howItWorks__sliderButtonLeft js-sliderLink">',
//         nextArrow: '<img src="img/arrow.svg" class="howItWorks__sliderButtonRight js-sliderLink">',
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         variableWidth: false,
//         infinite: false,
//         responsive: [
//             {
//                 breakpoint: 1920,
//                 settings: 'unslick'
//             },{
//                 breakpoint: mobileSize
//             }]
//     };
//
// function reSlick() {
//     if ($(window).width() < mobileSize) {
//         $('.howItWorks__tab.isActive .js-mobile-slick-slides').slick(mobileAttrs);
//         $('body .js-mobile-slick-slides').on('swipe', syncSlider);
//     }
//     else {
//         $('.howItWorks__tab.isActive .js-slick-slides').slick(attrs);
//         $('body .js-slick-slides').on('swipe', syncSlider);
//     }
//     $('body .js-sliderLink').click(syncSlider);
// }
//
// function syncSlider(){
//     // $('.howItWorks__tab.isActive .sliderTextIsActive');
//     $('.howItWorks__tab.isActive .sliderTextIsActive').removeClass('sliderTextIsActive');
//
//     $('.howItWorks__tab.isActive .js-sliderLeft').find('.js-slideText')
//         .eq($('.howItWorks__tab.isActive .slick-active').index()).addClass('sliderTextIsActive');
// }
//
// $('.howItWorks__tab.isActive .js-slick-slides').on('destroy', reSlick);
// $('.howItWorks__tab.isActive .js-mobile-slick-slides').on('destroy', reSlick);
// $('.howItWorks__tab.isActive .js-slick-slides').slick(attrs);
// $('body .js-sliderLink').click(syncSlider);
//
// if ($(window).width() > mobileSize) {
//     $('body .js-slick-slides').on('swipe', syncSlider);
// }
// else {
//     $('body .js-mobile-slick-slides').on('swipe', syncSlider);
// }
//
// //Tabs Selector
// $('body .js-tab-link').on('click', function(e) {
//     e.preventDefault();
//
//     $('.js-tab-link.buttonIsActive').removeClass('buttonIsActive');
//     $(this).addClass('buttonIsActive');
//
//     $('.howItWorks__tab.isActive .js-slick-slides').off('destroy', reSlick);
//     $('.howItWorks__tab.isActive .js-mobile-slick-slides').off('destroy', reSlick);
//
//     if ($(window).width() > mobileSize){
//         $('.howItWorks__tab.isActive .js-slick-slides').slick('unslick');
//     }
//     else {
//         $('.howItWorks__tab.isActive .js-mobile-slick-slides').slick('unslick');
//     }
//
//     $('.howItWorks__tab.isActive').removeClass('isActive');
//     $('.howItWorks__tabs').find('.howItWorks__tab').eq($(this).index()).addClass('isActive');
//
//     if ($(window).width() > mobileSize) {
//         $('.howItWorks__tab.isActive .js-slick-slides').slick(attrs);
//     }
//     else {
//         $('.howItWorks__tab.isActive .js-mobile-slick-slides').slick(mobileAttrs);
//     }
//
//     $('.howItWorks__tab.isActive .js-slick-slides').on('destroy', reSlick);
//     $('.howItWorks__tab.isActive .js-mobile-slick-slides').on('destroy', reSlick);
//
//     $('body .js-sliderLink').click(syncSlider);
//
// }).click(syncSlider);