var Elixir = require('laravel-elixir');

Elixir.ready(function() {
    Elixir.webpack.mergeConfig({
        babel: {
            presets: ['react', 'es2015', 'stage-1']
        },
        module: {
            loaders: [
                {
                    // use babel-loader for *.js and *.jsx files
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel'
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.json', '.jsx' ]
        }
    });
});