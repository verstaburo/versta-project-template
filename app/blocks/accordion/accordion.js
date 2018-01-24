export const HIDE_EVENT = 'accordion.show';
export const SHOW_EVENT = 'accordion.hide';

const $ = window.$;

$(document).on('click', '.js-accordion-button', function (e) {
  e.preventDefault();
  const button = $(this);
  const block = button.parents('.accordion');
  const body = block.find('.accordion__body');

  if (block.hasClass('is-disabled')) {
    return;
  }

  body.slideToggle(250, () => {
    block.toggleClass('is-active');
    const event = [HIDE_EVENT, SHOW_EVENT][+block.hasClass('is-active')];
    block.trigger(event);
  });
});
