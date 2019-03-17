/* eslint-disable */
// https://idangero.us/swiper/
import * as Swiper from 'swiper/dist/js/swiper';

const $ = window.$;

export default function slider() {
  $('.js-slider').each(function () {
    const block = $(this);
    const mySlider = new Swiper(block, {
      loop: true,
      speed: 700,
      autoplay: {
        delay: 2000,
      },
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
      freeMode: false,
      navigation: {
        nextEl: block.find('.slider__button_next'),
        prevEl: block.find('.slider__button_prev'),
      },
      pagination: {
        el: block.find('.slider__dots'),
        clickable: true,
        bulletClass: 'slider__dot',
        bulletActiveClass: 'is-active',
      },
      roundLengths: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });
  });
}
/* eslint-enable */
