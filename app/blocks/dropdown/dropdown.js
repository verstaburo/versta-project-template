export const HIDDEN = 'dropdown/shown';
export const SHOWN = 'dropdown/hidden';
export const BEFORE_SHOW = 'dropdown/beforeshow';
export const BEFORE_HIDE = 'dropdown/beforehide';

const $ = window.$;

/**
 *
 * @param {jQuery Element} dropdown
 * @param {Boolean} show
 */
const toggle = (dropdown, show = true) => {
  if (!dropdown.length) {
    return;
  }

  const event = [BEFORE_HIDE, BEFORE_SHOW][Number(show)];
  const btn = dropdown.prev();

  if (btn.hasClass('js-dropdown-toggle')) {
    btn.toggleClass('is-active', show);
  }

  dropdown
    .trigger(event)
    .toggleClass('is-active', show);
};


$(document).on('click', '.js-dropdown-toggle', function (e) {
  const btn = $(this);
  const dropdown = btn.next();

  if (!dropdown.hasClass('js-dropdown')) {
    return;
  }

  e.preventDefault();
  e.stopPropagation();

  toggle(dropdown, !btn.hasClass('is-active'));
});

/**
 * Trigger shown/hidden event, after transition end
 */
$(document).on('transitionend', '.js-dropdown', function () {
  const self = $(this);
  const isActive = Number(self.hasClass('is-active'));

  self.trigger([HIDDEN, SHOWN][isActive]);
});

/**
 * Hide all visible dropdown before to show new one
 */
$(document).on(BEFORE_SHOW, '.js-dropdown', () => {
  $('.js-dropdown.is-active').each(function () {
    toggle($(this), false);
  });
});

/**
 * Hide dropdown when click outside
 */
$(document).on('click', (e) => {
  const target = $(e.target);

  if (target.hasClass('js-dropdown') || target.parents('.js-dropdown').length) {
    return;
  }

  $('.js-dropdown.is-active').each(function () {
    toggle($(this), false);
  });
});
