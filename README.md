## How to start

1. Install modules: `yarn install` or `npm i`. If you have troubles with `yarn install`, try deleting yarn.lock file.
2. Run in development mode (with live reload): `yarn start` or `npm start`
3. Build in /dist folder: `yarn build` or `npm run build`
4. Deploy to GitHub Pages: `yarn deploy` or `npm run deploy`. Or project will appear by ```https://$GITHUB_PROFILE_NAME$.github.io/$REPOSITORY_NAME$/``` address

## Project structure

```
├── app/                                  # Work directory
│   ├── blocks/                           # Blocks
│   │   └── blockName/                    # Block
│   │       ├── blockName.pug             # Block layout
│   │       ├── blockName.scss            # Blocc styles
│   │       └── blockName.js              # Block scripts
│   ├── components/                       # Components
│   │   └── componentName/                # Component
│   │       ├── componentName.pug         # Component layout
│   │       ├── componentName.scss        # Component styles
│   │       └── componentName.js          # Component scripts
│   ├── data/                             # JSON for Pug templates
│   ├── layouts/                          # Basic layouts
│   │   ├── default.pug                   # Page layout
│   │   └── head.pug                      # <head> layout
│   ├── pages/                            # Pages
│   │   └── pageName/                     # Page
│   │       ├── pageName.pug              # Page layout
│   │       ├── pageName.scss             # Page styles
│   │       └── pageName.js               # Page scripts
│   ├── scripts/                          # Scripts
│   │   └── app.js                        # Main script (with Webpack)
│   │   └── main.js                       # Additional scripts (without Webpack, but with Gulp File Include)
│   ├── styles/                           # Project styles
│   │   ├── helpers/                      # Additional styles
│   │   │   ├── fonts.scss                # Basic styles (for <body>, tags etc.)
│   │   │   ├── fonts.scss                # Fonts
│   │   │   ├── mixins.scss               # Mixins
│   │   │   └── variables.scss            # Variables
│   │   └── app.scss                      # Main styles file
│   ├── static/                           # Static files
│   │   ├── icons/                        # SVG icons, that will be generated in SVG-sprite
│   │   ├── images/                       # Images (.png, .svg. jpg) etc. PNG and JPG will be compressed.
│   │   └── misc/                         # Files to be copied in the root directory (/dist)
├── dist/                                 # Build folder
└── browserlist                           # Autoprefixer configuration https://github.com/ai/browserslist
```

## How to generate blocks, components and pages through the terminal

Basic template: `make $TYPE$ $BLOCK_NAME$ $JS-FLAG$`

1. $TYPE$ - `block`, `page`, or `component`.
2. $BLOCK_NAME$ - name of the block/page/component. It will be the name of its folder and all included files (styles, scripts).
3. $JS-FLAG$ - you can add `--js` flag at the end of the command to make .js file for your component (if your component will have some scripts).

Examples:

- Yarn: `yarn make block header --js`.
- npm: `npm run make page about-us`

Templates for your .scss, .pug and .js files will are kept in /templates/ folder.

Pug file includes two mixins: one is for block's template and one is for demonstration in UI-kit.

## BEM

Template is used to work with BEM-methodology: https://en.bem.info/

Pug mixins must be made with https://github.com/kizu/bemto. Example:

```jade
+b.UL.navigation
  +e.LI.item Hello
  +e.LI.item World
```

Will be generated into:

```html
<ul class="navigation">
  <li class="navigation__item">Hello</li>
  <li class="navigation__item">World</li>
</ul>
```

## How to use JSON in Pug templates

1. Add a .json file to /app/data/. E.g. `listData.json`
2. Receive and use data from this file with `getData('listData')`

### Example 1:

Your JSON:

```json
  [
    {
      "text": "Hello",
      "class": "_style_1"
    },
    {
      "text": "World",
      "class": "_style_2"
    }
  ]
```

Your mixin:

```jade
+b.UL.navigation
  each item in getData('listData')
    +e.LI.item(class=item.class)!= item.text
```

Result:

```html
<ul class="navigation">
  <li class="navigation__item navigation__item_style_1">Hello</li>
  <li class="navigation__item navigation__item_style_2">World</li>
</ul>
```

### Example 2:

Template of the reusable component:

```jade
mixin navigation(data)
  +b.UL.navigation&attributes(attributes)
    each item in data
      +e.LI.item(class=item.class)!= item.text
```

Using it in different places and with different data:

```jade
+navigation(getData('listOne'))
+navigation(getData('listTwo'))
```
