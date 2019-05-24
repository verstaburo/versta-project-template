/* eslint-disable */
import $ from 'jquery';

import OverlayScrollbars from 'overlayscrollbars';

export default function scrollbar() {
  OverlayScrollbars(document.querySelectorAll('.js-scrollbar'), {
    className: 'os-theme-dark',
    scrollbars: {
      clickScrolling: true,
    },
  });
}
/* eslint-enable */
