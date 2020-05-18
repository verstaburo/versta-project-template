/* eslint-disable */
// https://github.com/jshjohnson/Choices
import Choices from 'choices.js/public/assets/scripts/choices.min';

// https://github.com/leongersen/noUiSlider
import noUiSlider from 'nouislider';

// https://github.com/t1m0n/air-datepicker
import 'air-datepicker';

// https://github.com/RobinHerbots/Inputmask
import Inputmask from 'inputmask';

// http://parsleyjs.org/doc/index.html
import 'parsleyjs';

const $ = window.$;

export function selects() {
  if ($('.js-select').length) {
    const choices = new Choices('.js-select', {
      searchEnabled: false,
      itemSelectText: '',
    });
  }
}

export function sliders() {
  // Параметры берутся из дата-атрибутов
  $('.js-range').each(function () {
    const
      block = $(this),
      el = block.find('.js-range-slider'),
      from = block.find('.js-range-from') || null,
      to = block.find('.js-range-to') || null;

    const slider = noUiSlider.create(el.get(0), {
      start: block.data('start'),
      connect: block.data('connect'),
      range: {
        min: block.data('min'),
        max: block.data('max'),
      },
      step: block.data('step'),
    });

    if (from && to) {
      slider.on('update', function (values) {
        const
          newFrom = parseInt(values[0]),
          newTo = parseInt(values[1]);

        from.text(newFrom);
        to.text(newTo);
      });
    }
  });
}

export function datepicker() {
  $('.js-datepicker').each(function () {
    const el = $(this);

    el.datepicker();
  });
}

export function inputmask() {
  Inputmask({
    mask: '+7 (999) 999-99-99',
  }).mask('input[data-mask="tel"]');

  Inputmask({
    alias: 'email',
  }).mask('input[data-mask="email"]');

  Inputmask({
    mask: "1.2.y",
    placeholder: "__.__.____",
    leapday: "29.02.",
    separator: ".",
    alias: "dd/mm/yyyy"
  }).mask('input[data-mask="date"]');
}

export function numberinput() {
  $(document).on('click', '.js-numberbox-minus, .js-numberbox-plus', function (e) {
    e.preventDefault();

    const
      input = $(this).siblings('.js-numberbox-input'),
      minus = $(this).attr('class').includes('minus') || false;

    let val = +input.val() || 0;

    minus ? (val > 0 ? (val -= 1) : 0) : (val += 1);

    input.val(val);
  });

  $(document).on('input keyup change', '.js-numberbox-input', function () {
    this.value = this.value.replace(/[^\d]/, '');
    if ($(this).val() < 0) $(this).val(0);
  });
}

export function validation () {
  Parsley.addMessages('ru', {
    defaultMessage: "Некорректное значение.",
    type: {
      email:        "Введите адрес электронной почты.",
      url:          "Введите URL адрес.",
      number:       "Введите число.",
      integer:      "Введите целое число.",
      digits:       "Введите только цифры.",
      alphanum:     "Введите буквенно-цифровое значение."
    },
    notblank:       "Это поле должно быть заполнено.",
    required:       "Обязательное поле.",
    pattern:        "Это значение некорректно.",
    min:            "Это значение должно быть не менее чем %s.",
    max:            "Это значение должно быть не более чем %s.",
    range:          "Это значение должно быть от %s до %s.",
    minlength:      "Это значение должно содержать не менее %s символов.",
    maxlength:      "Это значение должно содержать не более %s символов.",
    length:         "Это значение должно содержать от %s до %s символов.",
    mincheck:       "Выберите не менее %s значений.",
    maxcheck:       "Выберите не более %s значений.",
    check:          "Выберите от %s до %s значений.",
    equalto:        "Это значение должно совпадать."
  });

  Parsley.setLocale('ru');
}
/* eslint-enable */
