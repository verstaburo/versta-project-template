/* eslint-disable */
const $ = window.$;

import 'sticky-kit/dist/sticky-kit';

export function sticky() {
  $('.js-sticky').stick_in_parent({
    inner_scrolling: true,
    sticky_class: 'is-sticky',
    offset_top: 40,
    bottoming: true,
  });
}

export function stickyRecount() {
  $(document).find('.js-sticky').trigger("sticky_kit:recalc");
}
/* eslint-enable */
