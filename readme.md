# Laravel Elixir React Integration

This package provides Webpack support for ES6 React JSX files in Laravel Elixir 6 projects.

## Installation

```
npm install --save-dev laravel-elixir-webpack-react
```

## Config

In your `gulpfile.js`:

```
var elixir = require('laravel-elixir');

require('laravel-elixir-webpack-react');

elixir(function(mix) {
    mix.webpack('main.js'); // resources/assets/js/main.js
});
```
