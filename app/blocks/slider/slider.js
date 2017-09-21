/* eslint-disable no-unused-vars */
// http://idangero.us/swiper/#.WcIu5oy0OHs
import Swiper from 'swiper';

const $ = window.$;

export default function slider() {
  const mySlider = new Swiper('.js-slider', {
    loop: true,
    speed: 700,
    autoplay: 2000,
    slidesPerView: 1,
    nextButton: '.slider__button_next',
    prevButton: '.slider__button_prev',
    pagination: '.slider__dots',
    paginationClickable: true,
    paginationClickableClass: 'slider__dots_clickable',
    bulletClass: 'slider__dot',
    bulletActiveClass: 'active',
    roundLengths: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
    },
  });
}
/* eslint-enable no-unused-vars */
