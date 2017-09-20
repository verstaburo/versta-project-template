// https://github.com/jshjohnson/Choices
import Choices from 'choices.js';

// https://github.com/leongersen/noUiSlider
import noUiSlider from 'nouislider';

const $ = window.$;

export function selects() {
  /* eslint-disable no-unused-vars */
  const choices = new Choices('.js-select', {
    searchEnabled: false,
    itemSelectText: '',
  });
  /* eslint-enable no-unused-vars */
}

export function sliders() {
  // Параметры берутся из дата-атрибутов
  $('.js-range').each(function () {
    const el = $(this);

    noUiSlider.create(el.get(0), {
      start: el.data('start'),
      connect: el.data('connect'),
      range: {
        min: el.data('min'),
        max: el.data('max'),
      },
    });
  });
}
