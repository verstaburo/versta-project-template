# Как собираются SVG спрайты?

### Добавление иконок

Для добавления svg спрайта необходимо добавить svg иконки в `app/static/icons`

### Использование иконок

Для удобного использования иконок, есть pug mixin `app/blocks/icon/icons.pug`

Чтобы ее использовать, в блоке нужно подключить миксин

Допустим, у нас есть блок `social` и мы добавили иконки `vk.svg` и `facebook.svg`

```jade
include ../social/social

mixin social()
  +b('ul').social
    +e('li').item
      +e('a')(href='#').link
        +icon('vk').icon.__type_vk
    +e('li').item
      +e('a')(href='#').link
        +icon('facebook').icon.type_facebook
```

После вызова данного миксина, будет сгенерирован следующий код

```html
<ul class="social">
    <li class="social__item">
        <a class="social__link" href="#">
            <svg class="social__icon social__icon_type_vk">
              <use xlink:href="assets/images/icon.svg#icon_vk"></use>
            </svg>
        </a>
    </li>
    <li class="social__item">
        <a class="social__link" href="#">
            <svg class="social__icon type__facebook">
              <use xlink:href="assets/images/icon.svg#icon_facebook"></use>
            </svg>
        </a>
    </li>
</ul>
```
