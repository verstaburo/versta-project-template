/* eslint-disable */
const $ = window.$;

export function resize () {
  const
    w = $(window),
    size = w.width();

  let loadedSize;

  loadedSize = size >= globalOptions.sizes.lg ? 'desktop' : 'mobile';

  w.resize(function () {
    const
      newSize = w.width() >= globalOptions.sizes.lg ? 'desktop' : 'mobile';

    if (loadedSize !== newSize) location.reload();
  });
}
/* eslint-enable */
