/* eslint-disable */
const $ = window.$;

export function uiKitNavigation () {
  $(window).on('load', function () {
    $('.ui-kit__section').each(function (i) {
      const
        section = $(this),
        id = `section${i}`,
        title = section.find('.ui-kit__section-head h2'),
        name = title.text(),
        item = $(`<li><a href="#${id}" class="js-anchor">${name}</a></li>`);

      section.attr('id', id);
      title.append($(`<a href="#${id}" class="js-anchor">#</a>`));

      $('.ui-kit__navigation__list').append(item);
    });
  });
}
/* eslint-disable */
