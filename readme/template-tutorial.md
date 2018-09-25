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

Также необходимо после установки Node.js/Yarn запустить в командной строке (открытой от имени Администратора) любую из следующих команд и дождаться их полного выполнения (устанавливается долго):
```
npm install --global windows-build-tools
yarn global add windows-build-tools
```

## 2. Создание проекта

1. В [корпоративном аккаунте](https://github.com/verstaburo) создаем новый пустой репозиторий, придумываем имя проекта (обычно это название сайта)
2. В терминале выполняем следующие команды, чтобы добавить шаблон в новый репозиторий (вместо `projectname` — имя созданного репозитория):
```
git clone --bare https://github.com/verstaburo/versta-project-template.git
cd versta-project-template.git
git push --mirror https://github.com/verstaburo/projectname.git
cd ..
rd /s /q "versta-project-template.git"
```
3. Командой `git clone https://github.com/verstaburo/projectname.git` клонируем проект, вместо `projectname` — имя созданного репозитория
