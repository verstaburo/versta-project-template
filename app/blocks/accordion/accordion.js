export const HIDDEN = 'accordion/shown';
export const SHOWN = 'accordion/hidden';
export const BEFORE_SHOW = 'accordion/beforeshow';
export const BEFORE_HIDE = 'accordion/beforehide';

const DURATION = 250;

const $ = window.$;

$(document).on('click', '.js-accordion-button', function (e) {
  e.preventDefault();
  const button = $(this);
  const block = button.parents('.accordion');
  const body = block.find('.accordion__body');
  const isActive = Number(block.hasClass('is-active'));
  const isMultiple = block.parents('.accordions').data('accordion-multiple');

  if (block.hasClass('is-disabled')) {
    return;
  }

  const beforeEvent = [BEFORE_SHOW, BEFORE_HIDE][isActive];
  const afterEvent = [SHOWN, HIDDEN][isActive];

  body.trigger(beforeEvent).slideToggle(DURATION, () => {
    block
      .toggleClass('is-active')
      .trigger(afterEvent);
  });

  if (!isMultiple) {
    const siblings = block.siblings('.accordion.is-active');

    siblings
      .trigger(BEFORE_HIDE)
      .find('.accordion__body')
      .slideUp(DURATION, () => {
        siblings
          .removeClass('is-active')
          .trigger(HIDDEN);
      });
  }
});
