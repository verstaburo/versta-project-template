# Как добавить новую страницу?

Для создания новой страницы, выполните команду

_Если необходимо создать несколько страниц, то их имена нужно указывать через пробел_
```
npm run make page [pageName]
```
или
```
yarn make page [pageName]
```
Например, следующая команда сгенерирует такие файлы
```
npm run make page about
```

#### Изменить шаблон разметки можно
`templates/page.js`

#### Файл разметки
`app/pages/about.pug`

```jade
extends ../layouts/default

block head
  - var pageTitle = 'Versta Project Template'

block content
  +b.about

```
### block head
Все, что написано в `block head`, автоматически будет перенесено в `<head></head>`

Блок head так же может содержать

```jade
block head
  - var pageTitle = ''        // Заголовок
  - var pageKeywords = ''     // Ключевые слова
  - var pageDescription = ''  // Описание
```

### block content
Все, что написано в `block content`,  автоматически будет перенесено в `<body></body`


[Почитать о миксинах](https://pugjs.org/language/mixins.html)

[Что такое +b](https://github.com/kizu/bemto)

#### Изменить шаблон разметки можно
`templates/scss.js`

#### Файл стилей
`app/pages/about/about.scss`

```scss
.about {
  display: block;
}
```

Данный файл импортируется в `app/styles/app.scss` автоматически

#### Изменить шаблон разметки можно
`templates/js.js`

#### Файл скриптов
`app/pages/about/about.js`

_Чтобы файл скрипов был сгенерирован, необходимо добавить флаг `--js` например:_
```
npm run make component about -js
```

[Почитать про ES6 модули](https://github.com/FrontenderMagazine/es6-modules/blob/master/rus.md)

Будет сгенерирован файл:
_если вам не нужно использовать jQuery, то можете смело убрать import_
```js
import $ from 'jquery';

export default function about() {

}
```

Если компонент - класс (придется менять разметку самостоятельно)
```js
export class About {
  constructor() {

  }
}
```

Данный компонент нужно импортировать в главный файл `app/scripts/app.js`
```js
import about from '../pages/about/about';

// если компонент - функция
about();

// если компонент - класс
const aboutPage = new About();
```
Если вам нужно использовать jQuery, то, нужно импортировать

Все библиотеки должны устанавливаться через npm или yarn

Пример установки jQuery

#### Установка с помощью npm

```
npm --save jquery
```

#### Установка с помощью yarn

```
yarn add jquery
```
