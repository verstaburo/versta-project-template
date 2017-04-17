# Как добавить новую страницу?

[Создаем новый блок с названием страницы](how-to-make-block.md)

Создаем файл страницы `app/pages/pageName.pug` и подключаем созданный блок

```jade
extends ../layouts/default
include ../blocks/pageName/pageName

block head
  - var pageTitle = 'Versta Project Template'

block content
  +pageName()

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
