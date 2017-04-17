# Как добавить новый блок?

Создаем директорию блока `app/blocks/blockName`

В созданной директории создаем файлы необходимые для блока

*Если файл не нужен, то создавать его, соответственно, нет необходимости.*

### Добавляем файл шаблона

`app/blocks/blockName/blockName.pug`

[Почитать о миксинах](https://pugjs.org/language/mixins.html)

[Что такое +b](https://github.com/kizu/bemto)

```jade
mixin blockName()
  +b.blockName&attributes(attributes)
    block
```


Шаблон блока подключается на страницу/в другой блок `include path/to/blocks/blockName/blockName`

Вызов данного блока `+blockName()`

### Добавляем файл стилей

`app/blocks/blockName/blockName.scss`
```scss
.blockName {
  display: block;
}
```

Данный файл импортируется в `app/styles/app.scss` автоматически

### Добавляем файл скриптов

`app/blocks/blockName/blockName.js`

[Почиать про ES6 модули](https://github.com/FrontenderMagazine/es6-modules/blob/master/rus.md)

Если блок - функция
```js
export default () => {
  
}
```

Если блок - класс
```js
export class BlockName {
  constructor() {
    
  }
}
```

Данный блок нужно импортировать в файл блока/главный файл
```js
import blockName from 'path/to/blocks/blockName/blockName';

// если блок - функция
blockName();

// если блок - класс
const myBlock = blockName();
```
Если вам нужно использовать jQuery, то, нужно импортировать
```js
import $ from 'jquery';

export default () => {
  $('div').hide();
};
```

Все библиотеки устанавливаются через NPM
