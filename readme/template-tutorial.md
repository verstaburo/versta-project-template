# Руководство по работе с проектами в бюро Versta

95% проектов в нашем бюро используют разработанный членами нашей команды шаблон, включающий в себя следующие возможности:

- Использование Gulp и Webpack для сборки билда
- Pug с плагином [bemto](https://github.com/kizu/bemto) для эффективного написания HTML и использования компонентного подхода
- SCSS для стилей
- Работа по методологии БЭМ с компонентным подходом, разнесение блоков с их шаблонами, файлами стилей и скриптов по отдельным папкам
- Автоматическая оптимизация изображений в процессе компиляции билда
- Оптимизация итогового CSS и JS для уменьшения веса файлов
- Создание SVG-спрайтов
- Линтер стилей и скриптов для написания кода в одном стиле всеми разработчиками
- Модуль для выгрузки билда на сервис GitHub Pages для демонстрации заказчику и менеджеру проекта, а также тестирования

## Структура файлов шаблона

```
├───.publish                              # Папка, генерируемая модулем, осуществляющим деплой проекта на сервис GitHub Pages
├── app/                                  # Рабочая папка проекта
│   ├── blocks/                           # Блоки (из БЭМ-терминологии)
│   │   └── blockName/                    # Блок
│   │       ├── blockName.pug             # Разметка блока
│   │       ├── blockName.scss            # Стили блока
│   │       └── blockName.js              # Скрипты блока
│   ├── components/                       # Компоненты — Блоки, состоящие из нескольких Блоков
│   │   └── componentName/                # Компонент
│   │       ├── componentName.pug         # Разметка компонента
│   │       ├── componentName.scss        # Стили компонента
│   │       └── componentName.js          # Скрипты компонента
│   ├── data/                             # Папка для .json-файлов, используемых в Pug
│   ├── layouts/                          # Папка с файлами основной разметки страниц
│   │   ├── default.pug                   # Разметка документа
│   │   └── head.pug                      # Разметка head части документа
│   ├── pages/                            # Папка со страницами
│   │   └── pageName/                     # Страница
│   │       ├── pageName.pug              # Разметка страницы
│   │       ├── pageName.scss             # Стили страницы
│   │       └── pageName.js               # Скрипты страницы
│   ├── scripts/                          # Скрипты
│   │   ├── main.js                       # Файл для скриптов, которые необходимо иметь возможность менять после билда
│   │   └── app.js                        # Главный скрипт
│   ├── styles/                           # Стили проекта
│   │   ├── helpers/                      # Вспомогательные стили
│   │   │   ├── _fonts.scss               # Объявление шрифтов
│   │   │   ├── _text-styles.scss         # Текстовые стили (при наличии в проекте дизайн-системы)
│   │   │   ├── _basics.scss              # Базовые стили, в 99% случаев этот файл не трогается
│   │   │   ├── _gradients.scss           # Градиенты
│   │   │   ├── _link-styles.scss         # Стили ссылок
│   │   │   ├── _list-styles.scss         # Стили списков
│   │   │   ├── _mixins.scss              # Миксины
│   │   │   └── _variables.scss           # Переменные
│   │   └── app.scss                      # Главный файл
│   ├── static/                           # Вся статика проекта
│   │   ├── icons/                        # В эту папку кладутся SVG-иконки для генерации спрайта
│   │   ├── images/                       # В эту папку кладутся многоцветные статичные SVG-иконки и растровые картинки
│   │   └── misc/                         # Всё, что кладется в эту папку, попадает в билд в неизменном виде и местоположении
│   │       └───assets                    # Папка со стилями, скриптами и изображениями
│   │           ├───fonts                 # Папка для шрифтов
│   │           └───scripts               # Папка для файлов скриптов
│   │               └───libs              # Папка для библиотек, подключаемых напрямую (не через Webpack)
├── dist/                                 # Папка, куда компилируется билд
├── browserlist                           # Файл конфигурации версий браузеров для автопрефиксера https://github.com/ai/browserslist
├───gulpfile.js                           # Папка с тасками Gulp'а
├───readme                                # Папка с Readme
└───templates                             # Папка с шаблонами блоков/страниц, создаваемых командой make
```

## 1. Программы для начала работы

- [Git](https://git-scm.com/downloads) последней версии
- Терминал [Hyper](https://hyper.is/) — не обязательно, но удобно
- [Node.js](https://nodejs.org/en/) последней версии
- Пакетный менеджер [Yarn](https://yarnpkg.com/lang/en/)
- Любая IDE/редактор для редактирования кода ([WebStorm](https://www.jetbrains.com/webstorm/), [Brackets](http://brackets.io/), [Atom](https://atom.io/), [SublimeText](https://www.sublimetext.com/3), хоть Блокнот)
- Для работы с макетами: [Zeplin](https://zeplin.io/), [Avocode](https://avocode.com/), Adobe Photoshop CC, Adobe Illustrator CC, [Figma](http://figma.com/)
- [Плагин Google Chrome для Pixel-Perfect верстки](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=ru)
- Для быстрого тестирования верстки установить браузеры Mozilla Firefox и Internet Explorer 11. Для тестирования в других браузерах, либо в более ранних версиях, используется [BrowserStack](https://www.browserstack.com/)
- [FileZilla](https://filezilla-project.org/) для работы с FTP
- [Lightshot](https://app.prntscr.com/ru/) — чтобы быстро делать скриншоты с пометками

Также необходимо после установки Node.js/Yarn запустить в командной строке (открытой от имени Администратора) следующую команду и дождаться её полного выполнения (устанавливается долго):
```
npm --add-python-to-path='true' --debug install --global windows-build-tools
```

Для работы с GitHub через SSH необходимо сгенерировать и добавить в ваш GitHub-аккаунт SSH-ключи по этим инструкциям:
1. https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/
2. https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/

## 2. Создание проекта

1. В [корпоративном аккаунте](https://github.com/verstaburo) создаем новый пустой репозиторий, придумываем имя проекта (обычно это название сайта, с маленькой буквы)

2. В терминале выполняем следующие команды, чтобы добавить шаблон в новый репозиторий без истории коммитов шаблона (вместо `projectname` — имя созданного репозитория):

```node
git clone git@github.com:verstaburo/versta-project-template.git projectname
cd projectname
rd /s /q ".git"
rd /s /q ".publish"
git init
git add .
git commit -m "Template added"
git remote add origin git@github.com:verstaburo/projectname.git
git push -u origin master
```

## 3. Подготовка старта

### 3.1 Подключение шрифтов

