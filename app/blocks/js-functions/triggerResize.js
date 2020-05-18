/* eslint-disable */
export function triggerResize () {
  var resizeEvent = window.document.createEvent('UIEvents');
  resizeEvent.initUIEvent('resize', true, false, window, 0);
  window.dispatchEvent(resizeEvent);
}
/* eslint-enable */
