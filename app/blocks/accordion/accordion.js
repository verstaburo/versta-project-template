/* eslint-disable */
const $ = window.$;

$.fn.accordionToggle = function (hide) {
  const
    accordion = this,
    content = accordion.find('.js-accordion-content'),
    isSingle = accordion.data('accordion-single'),
    isActive = accordion.hasClass('is-active'),
    isDisabled = accordion.hasClass('is-disabled'),
    siblings = accordion.siblings('.js-accordion.is-active');

  if (isDisabled || hide !== isActive) return;

  if (hide) {
    accordion.removeClass('is-active');
    content.slideUp(globalOptions.animationDuration);

    setTimeout(() => {
      accordion.removeClass('is-active-initial');
    }, globalOptions.animationDuration);
  } else {
    accordion.addClass('is-active');
    content.slideDown(globalOptions.animationDuration);

    if (isSingle) {
      siblings.accordionToggle(true);
    }
  }
};

// Работа кнопки аккордеона
export function accordion () {
  $(document).on('click', '.js-accordion-button', function (e) {
    if (e.target.tagName === 'a') {
      e.preventDefault();
    }

    const
      accordion = $(this).closest('.js-accordion'),
      isActive = accordion.hasClass('is-active');

    isActive ? accordion.accordionToggle(true) : accordion.accordionToggle(false);
  });
}
/* eslint-enable */
