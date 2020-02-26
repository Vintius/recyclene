import $ from "jquery";
import "slick-slider";

$('.js-slick-carousel').slick({
    appendArrows: '.whoSell__sliderButtons',
    prevArrow: '<img src="img/arrow.svg" class="sliderButtons__arrow">',
    nextArrow: '<img src="img/arrow.svg" class="sliderButtons__arrow sliderButtons__arrow--right">',
    slidesToShow: 2,
    variableWidth: true,
    infinite: true,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
                variableHeight: true
            }
        }
    ]
});