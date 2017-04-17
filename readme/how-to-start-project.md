# Как начать новый проект?
Обычно этим будет заниматься разработчик (ведущий разработчик), за кем закреплен этот проект.

### Клонируй проект

Клонируем проект в папку `new-project` и переходим в нее
```
git clone git@github.com:verstaburo/versta-project-template.git project-name && cd project-name
```

### Создай новый репозиторий

Создаем репозиторий с названием проекта
```https://github.com/organizations/verstaburo/repositories/new```

### Инициализация GIT

`rm -rf .git` - удаляем папку `.git`, избавляясь от избыточной истории коммитов шаблона.

`git init` - инициализация Git

`git add -A` - индексация всех файлов

`git commit -m 'new-project` - коммитим все изменения

`git remote add origin git@github.com:verstaburo/project-name.git` - добавляем адресс созданного репозитория

`git push origin master` - пушим изменения
