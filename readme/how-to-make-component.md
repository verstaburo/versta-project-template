# Как добавить новый компонент?

Для создания блока, выполните команду

_Если необходимо создать несколько блоков, то их имена нужно указывать через пробел_
```
npm run make component [componentName]
```
или
```
yarn make component [componentName]
```
Например, следующая команда сгенерирует такие файлы
```
npm run make component button
```

#### Изменить шаблон разметки можно
`templates/component.js`

#### Файл разметки
`app/components/button/button.pug`
```jade
mixin button()
  +b.button&attributes(attributes)
    component
```

[Почитать о миксинах](https://pugjs.org/language/mixins.html)

[Что такое +b](https://github.com/kizu/bemto)

Файл с разметкой блока подключается на страницу/в компонент `include path/to/components/button/button`

Вызов данного блока `+button()`

#### Изменить шаблон разметки можно
`templates/scss.js`

#### Файл стилей
`app/components/button/button.scss`

```scss
.button {
  display: block;
}
```

Данный файл импортируется в `app/styles/app.scss` автоматически

#### Изменить шаблон разметки можно
`templates/js.js`

#### Файл скриптов
`app/components/button/button.js`

_Чтобы файл скрипов был сгенерирован, необходимо добавить флаг `--js` например:_
```
npm run make component button -js
```

[Почитать про ES6 модули](https://github.com/FrontenderMagazine/es6-modules/blob/master/rus.md)

Будет сгенерирован файл:
_если вам не нужно использовать jQuery, то можете смело убрать import_
```js
import $ from 'jquery';

export default function button() {

}
```

Если компонент - класс (придется менять разметку самостоятельно)
```js
export class Button {
  constructor() {

  }
}
```

Данный компонент нужно импортировать в файл компонента или главный файл `app/scripts/app.js`
```js
import button from 'path/to/components/button/button';

// если компонент - функция
button();

// если компонент - класс
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
