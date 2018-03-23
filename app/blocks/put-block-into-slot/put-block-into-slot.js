const $ = window.$;

function putBlockIntoSlot() {
  $('[data-target-slot]').each(function () {
    const block = $(this);
    const vw = $(window).width();

    // получаем слот, в который нужно поместить блок
    const slots = $(`[data-slot-id="${block.data('target-slot')}"]`);

    const slot = slots.filter(function () {
      const self = $(this);
      const res = self.data('slot-res');

      // получаем слот под нужное разрешение
      if (vw < window.globalOptions.sizes.xs && slots.filter('[data-slot-res="xs"]').length) {
        return res === 'xs';
      } else if (vw < window.globalOptions.sizes.sm && slots.filter('[data-slot-res="sm"]').length) {
        return res === 'sm';
      } else if (vw < window.globalOptions.sizes.md && slots.filter('[data-slot-res="md"]').length) {
        return res === 'md';
      } else if (vw < window.globalOptions.sizes.lg && slots.filter('[data-slot-res="lg"]').length) {
        return res === 'lg';
      }

      return res === 'xl';
    });

    // если блок уже в нужном слоте, то ничего не делаем
    if (block.parent().is(slot)) {
      return;
    }

    // иначе перемещаем
    block.appendTo(slot);
  });
}

putBlockIntoSlot();

$(window).on('resize', putBlockIntoSlot);
