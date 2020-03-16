/* eslint-disable */
// http://iamceege.github.io/tooltipster/
import 'tooltipster';
import $ from 'jquery';

export function tooltips() {
  $('.js-tooltip').tooltipster({
    animation: 'fade',
    delay: 0,
    side: 'top',
    theme: 'tooltipster-borderless',
    animationDuration: globalOptions.animationDuration,
  });
}
/* eslint-enable */
