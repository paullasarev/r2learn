var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const IS_PRODUCTION = (process.env.NODE_ENV === 'production');
const ASSETS_PATH = './assets/';
const ASSETS_BASE_QUERY =
    IS_PRODUCTION
        ? { name: '[name].[ext]', limit: 1000 }
        : {};

const placeAssetsInFolder = (path) => {
    return IS_PRODUCTION
        ? Object.assign({}, ASSETS_BASE_QUERY, { name: `${path}/[name].[ext]` })
        : ASSETS_BASE_QUERY;
};

const webpackConfig = {
    entry: {
        app: [ path.join(__dirname, 'src', 'index.jsx')]
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: IS_PRODUCTION ? '' : '/',
        filename: ASSETS_PATH + '[name].js'
    },

    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    devTool: 'inline-source-map',

    resolve: {
        root: [
            path.join(__dirname, 'node_modules')
        ],
        extensions: ['', '.js', '.jsx', '.web.js', '.webpack.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader?cacheDirectory=true']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: IS_PRODUCTION ? ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') : 'style-loader!css-loader?sourceMap!postcss-loader'
            },
            {
                test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                query: Object.assign({}, { mimetype: 'application/font-woff' }, ASSETS_BASE_QUERY )

            },
            {
                test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                query: Object.assign({}, { mimetype: 'application/octet-stream' }, ASSETS_BASE_QUERY )
            },
            {
                test: /\.(jpe?g)$/i,
                loader: 'url-loader',
                query: Object.assign({}, { mimetype: 'image/jpeg' }, placeAssetsInFolder('images') )
            },
            {
                test: /\.(png)$/i,
                loader: 'url-loader',
                query: Object.assign({}, { mimetype: 'image/png' }, placeAssetsInFolder('images') )
            },
            {
                test: /\.(gif)$/i,
                loader: 'url-loader',
                query: Object.assign({}, { mimetype: 'image/gif' }, placeAssetsInFolder('images') )
            },
            {
                test: /\.(svg)$/i,
                loader: 'url-loader',
                query: Object.assign({}, { mimetype: 'image/svg+xml' }, placeAssetsInFolder('images') )
            },
            {
                test: /\.html$/,
                loader: "html-loader?minimize=false"
            }
        ]
    },
    imageWebpackLoader: {
        mozjpeg: {
            quality: 65
        },
        pngquant:{
            quality: "65-90",
            speed: 4
        },
        svgo:{
            plugins: [
                {
                    removeViewBox: false
                },
                {
                    removeEmptyAttrs: false
                }
            ]
        }
    },
    postcss: function (webpack) {
        return [
            require('postcss-import'),
            require("postcss-url")({
                url: "rebase"
            }),
            require('postcss-nested'),
            require('postcss-calc'),
            require('postcss-mixins'),
            require('postcss-for'),
            require('postcss-each'),
            require('postcss-simple-vars')({
                silent: true
            }),
            require('postcss-custom-media'),
            require('postcss-custom-properties'),
            require('autoprefixer')({
                browsers: [
                    'last 3 versions',
                    'ie 11',
                    'ff 24',
                    'android 4.4',
                    'ios >= 5'
                ]
            })
        ];
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            inject: 'body',
            template: 'src/stub.html'
        })
    ]
};

if (IS_PRODUCTION) {
    webpackConfig.module.loaders
        .filter(loader => loader.loader === 'url-loader')
        .forEach(loader => {
            if (loader.query && loader.query.name) {
                loader.query.name = ASSETS_PATH + loader.query.name;
            }
        });

    webpackConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            beautify: true,
            sourceMap: false,
            warnings: false
        }),
        new ExtractTextPlugin('[name].css'),
        new CompressionPlugin({
            asset: '[file].gz',
            algorithm: 'gzip',
            regExp: /\.js$|\.css$|\.ttf$|\.svg$/,
            threshold: 10240,
            minRatio: 0.8
        })
    );
}
module.exports = webpackConfig;
