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

```node
├───.publish // Папка, генерируемая модулем, осуществляющим деплой проекта на сервис GitHub Pages
├───dist // Папка, куда компилируется билд
├───app // Рабочая папка проекта
│   ├───blocks // Блоки (из БЭМ-терминологии)
│   ├───components // Компоненты — Блоки, состоящие из нескольких Блоков
│   ├───data // Папка для .json-файлов, используемых в Pug'е
│   ├───layouts // Папка с файлами основной разметки страниц
│   ├───pages // Папка со страницами
│   ├───scripts // Папка со скриптами
│   ├───static // Папка со статичными файлами
│   │   ├───icons // В эту папку кладутся SVG-иконки для генерации спрайта
│   │   ├───images // В эту папку кладутся многоцветные статичные SVG-иконки и растровые картинки
│   │   └───misc // Всё, что кладется в эту папку, попадает в билд в неизменном виде и местоположении
│   │       └───assets
│   │           ├───fonts // Папка для шрифтов
│   │           └───scripts
│   │               └───libs // Папка для библиотек, подключаемых напрямую (не через Webpack)
│   └───styles // Папка со вспомогательными файлами стилей
├───gulpfile.js // Папка с тасками Gulp'а
├───readme // Папка с Readme
└───templates // Папка с шаблонами блоков/страниц, создаваемых командой make
```

## 1. Программы для начала работы

- [Git](https://git-scm.com/downloads) последней версии
- Терминал [Hyper](https://hyper.is/) — не обязательно, но удобно
- [Node.js](https://nodejs.org/en/) 8 версии
- Пакетный менеджер [Yarn](https://yarnpkg.com/lang/en/)
- Любая IDE для редактирования кода ([WebStorm](https://www.jetbrains.com/webstorm/), [Brackets](http://brackets.io/), [Atom](https://atom.io/), [SublimeText](https://www.sublimetext.com/3), хоть Блокнот)
- Для работы с макетами: [Zeplin](https://zeplin.io/), [Avocode](https://avocode.com/), Adobe Photoshop CC, Adobe Illustrator CC, [Figma](http://figma.com/)
- [Плагин Google Chrome для Pixel-Perfect верстки](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=ru)
- Для быстрого тестирования верстки установить браузеры Mozilla Firefox и Internet Explorer 11. Для тестирования в других браузерах, либо в более ранних версиях, используется [BrowserStack](https://www.browserstack.com/)
- [FileZilla](https://filezilla-project.org/) для работы с FTP
- [Monitask](https://www.monitask.com/) для отслеживания эффективности работы
- [Slack](https://slack.com/) для обсуждения хода проектов
- [Lightshot](https://app.prntscr.com/ru/) — чтобы быстро делать скриншоты с пометками

Также необходимо после установки Node.js/Yarn запустить в командной строке (открытой от имени Администратора) следующую команду и дождаться её полного выполнения (устанавливается долго):
```
npm --add-python-to-path='true' --debug install --global windows-build-tools
```

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

