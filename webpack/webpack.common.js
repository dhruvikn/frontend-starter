const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Fs = require('fs');

// Starts an empty array that will hold all HtmlWebpackPlugin instances
const pages = [];

// Read the src dir
const files = Fs.readdirSync(Path.resolve(__dirname, '../src'));

// Loop through entries in src dir
files.forEach(file => {
    // If the entry doesn't have the extension .html, skip it
    if (!file.match(/\.html$/)) {
        return;
    }

    // Creates a new HtmlWebpackPlugin instance for the current entry
    pages.push(
        new HtmlWebpackPlugin({
            filename: file,
            template: Path.resolve(__dirname, '../src', file)
        })
    );
});

module.exports = {
    entry: {
        app: Path.resolve(__dirname, '../src/scripts/index.js')
    },
    output: {
        path: Path.join(__dirname, '../build'),
        filename: 'js/[name].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: false
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{ from: Path.resolve(__dirname, '../public'), to: 'public' }]
        }),
        ...pages
    ],
    resolve: {
        alias: {
            '~': Path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            }
        ]
    }
};
