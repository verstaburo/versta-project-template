/* eslint-disable */
// http://fancyapps.com/fancybox/3/
import '@fancyapps/fancybox';
import { freeze, unfreeze } from '../js-functions/freeze';

const $ = window.$;

export function popups() {
  $('.js-fancybox').fancybox({
    afterLoad: freeze,
    afterClose: unfreeze,
    touch: false,
    closeExisting: false,
  });
}
/* eslint-enable */
