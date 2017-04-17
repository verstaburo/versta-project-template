# Как использовать JSON данные в шаблонах

1) Необходимо создать файл в `app/data/fileName.json`
2) Внутри шаблона вызовите функцию `getData('fileName')`

### Пример использования

Допустим, мы создали файл `app/data/navigation.json`

**Важно, данный файл должен быть в [формате json](http://learn.javascript.ru/json)**

```json
[
  { "path": "#", "title": "Page #1" },
  { "path": "#", "title": "Page #2" },
  { "path": "#", "title": "Page #3" }
]
```

#### Использование данных внутри блока
В данном случае, все данные будут доступны в переменной `data`

```jade
- var data = getData('navigation')
```

#### Передача данных в блок (миксин)
Чаще всего данные будут передаваться в миксин, чтобы блок был универсальным.

Например, у нас есть несколько навигаций, которые расположены в разных местах, но с одинаковыми данными.

`app/blocks/navigation/navigation.pug`

```jade
mixin navigation(links)
  +b('ul').navigation&attributes(attributes)
    each link in links
      +e('li').item
        +e('a')(href=link.href).link #{link.title}
```

Теперь используем блок `navigation` в другом блоке

`app/blocks/header/header.pug`

```jade
include ../navigation/navigation

mixin header()
  +b('header').header&attributes(attributes)
    +e.navigation
      +navigation(getData('navigation'))
```

При подключения блока `header` будет сгенерирована разметка

```html
<header class="header">
  <div class="header__navigation">
    <ul class="navigation">
      <li class="navigation__item">
        <a class="navigation__link">Page #1</a>
      </li>
      <li class="navigation__item">
        <a class="navigation__link">Page #2</a>
      </li>
      <li class="navigation__item">
        <a class="navigation__link">Page #3</a>
      </li>
    </ul>
  </div>
</header>
```
