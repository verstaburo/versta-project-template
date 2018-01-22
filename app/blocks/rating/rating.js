const $ = window.$;

$(document).on('change', '.js-rating-control', function () {
  $(this)
      .parent('.rating__box')
      .addClass('is-active')
      .siblings()
      .removeClass('is-active');
});
