
# Frontend Starter

A foundation for non-reactive Frontend Projects. [Use this template.](https://github.com/dhruvikn/frontend-starter)

### What's different from [Webpack Frontend Starterkit](https://github.com/wbkd/webpack-starter)?

-   ESLint and Prettier configured
-   SCSS partials with initial values (variables, fonts, helpers, mixins)
-   Mixins included - flexCenter, customScrollbar, customSelection, customPlaceholder
-   Foundation styles inluded

### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

### Features:

-   ES6 Support via [babel](https://babeljs.io/) (v7)
-   SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
-   Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
