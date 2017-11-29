const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');

require('dotenv-extended').load();

const publicFolder = path.resolve(__dirname, 'public');
const srcFolder = path.resolve(__dirname, 'src');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
    devtool: isProduction ? false : 'source-map',
    entry: [
        'react-hot-loader/patch',
        'babel-polyfill',
        path.resolve(srcFolder, 'import-common.scss'),
        path.resolve(srcFolder, 'index.js')
    ],
    output: {
        publicPath: '/',
        path: publicFolder,
        filename: isProduction ? '[hash].bundle.min.js' : '[hash].bundle.js'
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json'],
        alias: {
            '@': srcFolder,
        }
    },
    devServer: {
        port: 1488,
        contentBase: publicFolder,
        historyApiFallback: true,
        hot: true,
        disableHostCheck: true,
        host: '0.0.0.0',
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        /**
                         * Use modules: false, otherwise hot-reloading will be broken
                         */
                        presets: [['env', {modules: false}], 'react'],
                        plugins: ['transform-runtime', 'react-hot-loader/babel', 'transform-object-rest-spread']
                    }
                }
            },
            {
                test: /\.(ttf|eot|otf|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.(png|jpeg|jpg|svg)$/,
                loader: 'file-loader?name=images/[name].[ext]'
            },
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: isProduction
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers: ['last 2 versions']
                                    })
                                ]
                            }
                        },
                        'sass-loader'
                    ]
                })
            }
        ]
    },

    /**
     * Configure hot reloading
     * https://webpack.js.org/plugins/hot-module-replacement-plugin
     * https://webpack.js.org/plugins/named-modules-plugin
     */
    plugins: [
        new HtmlWebpackPlugin({
            // favicon: path.resolve(srcFolder, 'assets/img/favicon.png'),
            inject: true,
            template: path.resolve(srcFolder, 'index.html')
        }),

        new CleanWebpackPlugin(publicFolder, {
            root: __dirname,
            verbose: true
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                API_URL: JSON.stringify(process.env.API_URL),
                JWT_KEY: JSON.stringify(process.env.JWT_KEY),
                GOOGLE_API_WEB_LOCATOR_KEY: JSON.stringify(process.env.GOOGLE_API_WEB_LOCATOR_KEY),
                GOOGLE_API_MAP_KEY: JSON.stringify(process.env.GOOGLE_API_MAP_KEY),
            }
        }),

        new ExtractTextPlugin({
            filename: isProduction ? '[hash].styles.min.css' : '[hash].style.css',
            allChunks: true,
            disable: !isProduction
        }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(fr|en)$/),
    ]
};

if (isProduction) {
    /**
     * UglifyJSPlugin: minify and optimize code
     * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
     */
    config.plugins.concat([
        new UglifyJSPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unused: true,
                dead_code: true
            },
            output: {
                comments: false
            }
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ]);

    /**
     * Remove hot loader from production
     */
    config.entry.shift();
}

module.exports = config;
