/* eslint-disable */
// https://github.com/jlmakes/scrollreveal
import ScrollReveal from 'scrollreveal';

const $ = window.$;

export default function scrollAnimation() {
  // Стандартные настройки
  const sr = ScrollReveal({
    reset: false,
    mobile: true,
    scale: 1,
    delay: 0,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    duration: 1000,
    cleanup: true,
  });

  if ($('.js-sr_bottom').length) {
    sr.reveal('.js-sr_bottom', {
      interval: 100,
      distance: '30px',
      origin: 'bottom',
    });
  }

  if ($('.js-sr_left').length) {
    sr.reveal('.js-sr_left', {
      interval: 100,
      distance: '30px',
      origin: 'left',
    });
  }

  if ($('.js-sr_right').length) {
    sr.reveal('.js-sr_right', {
      interval: 100,
      distance: '30px',
      origin: 'right',
    });
  }

  if ($('.js-sr_top').length) {
    sr.reveal('.js-sr_top', {
      interval: 100,
      distance: '30px',
      origin: 'top',
    });
  }

  // Показываем элементы, если ScrollReveal не поддерживается
  if (ScrollReveal().noop) {
    $(document).find('.js-sr').removeClass('.js-sr');
  }
}
/* eslint-enable */
