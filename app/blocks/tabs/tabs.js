/* eslint-disable */
const $ = window.$;

export function tabs() {
  $(document).on('click', '[data-tab-target]', function (e) {
    e.preventDefault();

    const
      button = $(this),
      targetTab = button.data('tab-target'),
      tab = $(document).find(`[data-tab="${targetTab}"]`),
      tabGroup = tab.data('tab-group'),
      tabGroupMembers = $(document).find(`[data-tab-group="${tabGroup}"]`),
      activeClass = 'is-active';

    button.addClass(activeClass).siblings().removeClass(activeClass);
    tabGroupMembers.hide().removeClass(activeClass);

    tab.show(0, function () {
      $(this).addClass(activeClass);
    });
  });
}
/* eslint-enable */
