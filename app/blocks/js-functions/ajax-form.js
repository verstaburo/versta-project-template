/* eslint-disable */
const $ = window.$;

export function ajaxForm () {
  $(document).on('submit', '.js-ajax-form', function (e) {
    e.preventDefault();

    const
      form = $(this);

    $.ajax({
      url: form.attr('action'),
      method: form.attr('method'),
      data: form.serialize(),
      success: function () {
        console.log(`Успешная отправка по адресу ${url}`);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR, textStatus, errorThrown);
        console.log(`Ошибка отправки по адресу ${url}`);
      },
    });

    form[0].reset();
  });
}
/* eslint-enable */
