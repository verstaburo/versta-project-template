/* eslint-disable */
const $ = window.$;
const duration = 300;

// Открытие аккордеона
$.fn.accordionShow = function () {
  const
    block = this,
    content = block.find('.js-accordion-content'),
    isMultiple = block.data('accordion-single');

  if (block.hasClass('is-disabled')) return;

  content.slideDown(duration);
  block.addClass('is-active');

  if (isMultiple) {
    const
      siblings = block.siblings('.js-accordion.is-active');

    siblings.find('.js-accordion-button').removeClass('is-active');
    siblings.find('.js-accordion-content').slideUp(duration);
  }
};

// Закрытие аккордеона
$.fn.accordionHide = function () {
  const
    block = this,
    content = block.find('.js-accordion-content');

  content.slideUp(duration);
  block.removeClass('is-active');
};

// Работа кнопки аккордеона
export default function accordion () {
  $(document).on('click', '.js-accordion-button', function (e) {
    if (e.target.tagName === 'a') {
      e.preventDefault();
    }

    const
      block = $(this).parents('.js-accordion'),
      isActive = block.hasClass('is-active');

    isActive ? block.accordionHide() : block.accordionShow();
  });
}
/* eslint-enable */
