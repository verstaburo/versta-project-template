/* eslint-disable no-unused-vars */
// https://github.com/jlmakes/scrollreveal
import ScrollReveal from 'scrollreveal';

const $ = window.$;

export default function scrollanimation() {
  // Стандартные настройки
  const sr = ScrollReveal({
    origin: 'bottom',
    reset: true,
    mobile: false,
    scale: 1,
    delay: 0,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    duration: 600,
  });

  if ($('.js-sr_1').length) {
    sr.reveal('.js-sr_1');
  }

  if ($('.js-sr_2').length) {
    sr.reveal('.js-sr_2', {
      delay: 100,
    });
  }

  // Показываем элементы, если ScrollReveal не поддерживается
  if (!sr.isSupported()) {
    $(document).find('.js-sr').removeClass('.js-sr');
  }
}
/* eslint-enable no-unused-vars */
