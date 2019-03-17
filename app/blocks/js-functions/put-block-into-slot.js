/* eslint-disable */
const $ = window.$;

/*
  Использование:

  На слоты вешаются атрибуты [data-slot-id="ID"] и [data-slot-res="RES"]
  На контент внутри слота вешается атрибут [data-target-slot="ID"]

  При смене брейкпоинта из app/scripts/globalOptions.js блоки будут перемещены в соответствующий слот
 */

export default function putBlockIntoSlot () {
  function slotChanging() {
    $('[data-target-slot]').each(function () {
      const
        block = $(this),
        ww = $(window).width(),
        slots = $(`[data-slot-id="${block.data('target-slot')}"]`);

      let res, targetSlot;

      // Получаем текущий брейкпойнт из массива
      $.each(window.globalOptions.sizes, function (index, value) {
        if (ww < value && slots.filter(`[data-slot-res="${index}"]`)) res = index;
      });

      // Если ни одного значения не получено, прерываем скрипт
      if (res.length < 1) return;

      targetSlot = slots.filter(`[data-slot-res="${res}"]`);

      // Если блок уже в нужном слоте, то ничего не делаем. Иначе перемещаем
      if (block.parent().is(targetSlot)) return;

      // Иначе перемещаем
      block.appendTo(targetSlot);
    });
  }

  $(window).on('load resize', slotChanging);
}
/* eslint-enable */
