// Скрипт "замораживает" страничку, запрещая скролл
const $ = window.$;

export function freeze() {
  const h = $('html');

  if (h.css('position') !== 'fixed') {
    const top = h.scrollTop() ? h.scrollTop() : $('body').scrollTop();

    if (window.innerWidth > h.width()) {
      h.css('overflow-y', 'scroll');
    }

    h.css({
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: -top,
    });
  }
}

export function unfreeze() {
  const h = $('html');

  if (h.css('position') === 'fixed') {
    h.css('position', 'static');

    $('html, body').scrollTop(-parseInt(h.css('top'), 10));
    h.css({
      position: '',
      width: '',
      height: '',
      top: '',
      'overflow-y': '',
    });
  }
}

export function freezebuttons() {
  $(document).on('click', '.js-freeze', (e) => {
    e.preventDefault();
    freeze();
  });

  $(document).on('click', '.js-unfreeze', (e) => {
    e.preventDefault();
    unfreeze();
  });
}
