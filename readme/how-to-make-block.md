# Как добавить новый блок?

Для создания блока, выполните команду

_Если необходимо создать несколько блоков, то их имена нужно указывать через пробел_
```
npm run make block [blockName]
```
или
```
yarn make block [blockName]
```
Например, следующая команда сгенерирует такие файлы
```
npm run make block button
```

#### Изменить шаблон разметки можно
`templates/block.js`

#### Файл разметки
`app/blocks/button/button.pug`
```jade
mixin button()
  +b.button&attributes(attributes)
    block
```

[Почитать о миксинах](https://pugjs.org/language/mixins.html)

[Что такое +b](https://github.com/kizu/bemto)

Файл с разметкой блока подключается на страницу/в компонент `include path/to/blocks/button/button`

Вызов данного блока `+button()`

#### Изменить шаблон разметки можно
`templates/scss.js`

#### Файл стилей
`app/blocks/button/button.scss`

```scss
.button {
  display: block;
}
```

Данный файл импортируется в `app/styles/app.scss` автоматически

#### Файл скриптов
`app/blocks/button/button.js`

_Чтобы файл скрипов был сгенерирован, необходимо добавить флаг `--js` например:_
```
npm run make block button -js
```

[Почитать про ES6 модули](https://github.com/FrontenderMagazine/es6-modules/blob/master/rus.md)

Будет сгенерирован файл:
_если вам не нужно использовать jQuery, то можете смело убрать import_
```js
import $ from 'jquery';

export default function button() {

}
```

#### Изменить шаблон разметки можно
`templates/js.js`

Если блок - класс (придется менять разметку самостоятельно)
```js
export class Button {
  constructor() {

  }
}
```

Данный блок нужно импортировать в файл компонента или главный файл `app/scripts/app.js`
```js
import button from 'path/to/blocks/button/button';

// если блок - функция
button();

// если блок - класс
const myButton = new Button();
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
