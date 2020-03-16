/* eslint-disable */
// https://kingsora.github.io/OverlayScrollbars/#!documentation/options
import OverlayScrollbars from 'overlayscrollbars';

const $ = window.$;

export function scrollbar() {
  OverlayScrollbars(document.querySelectorAll('.js-scrollbar'), {
    className: 'os-theme-dark',
    scrollbars: {
      clickScrolling: true,
    },
  });
}
/* eslint-enable */
