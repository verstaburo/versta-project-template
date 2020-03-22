/* eslint-disable */
// https://idangero.us/swiper/api/
import Swiper from 'swiper/js/swiper.js';

const $ = window.$;

export function slider() {
  $(document).find('.js-slider').each(function () {
    const
      block = $(this),
      container = block.find('.swiper-container'),
      arrowPrev = block.find('.slider__button_prev'),
      arrowNext = block.find('.slider__button_next'),
      paginationContainer = block.find('.slider__dots');

    const mySlider = new Swiper(container, {
      loop: true,
      speed: 700,
      autoplay: {
        delay: 2000,
      },
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
      roundLengths: true,
      freeMode: false,
      navigation: {
        nextEl: arrowNext,
        prevEl: arrowPrev,
      },
      pagination: {
        el: paginationContainer,
        clickable: true,
        bulletClass: 'slider__dot',
        bulletActiveClass: 'is-active',
      },
      breakpoints: { // Mobile-first
        1024: {
          slidesPerView: 1,
        },
      },
    });
  });
}
/* eslint-enable */
