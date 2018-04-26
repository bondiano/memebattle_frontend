const
    path = require('path'),
    webpack = require('webpack'),
    HtmlWebPackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    Dotenv = require('dotenv-webpack');

const
    distFolder = path.resolve(__dirname, 'dist'),
    srcFolder = path.resolve(__dirname, 'src');

const config = {
    /**
     * Source maps
     */
    devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : false,

    /**
     * Entry application point
     */
    entry: [
        'react-hot-loader/patch',
        path.resolve(srcFolder, 'common.scss'),
        path.resolve(srcFolder, 'index.js')
    ],

    /**
     * Output options
     */
    output: {
        publicPath: '/',
        path: distFolder,
        filename: process.env.NODE_ENV !== 'production' ? '[hash].bundle.js' : '[hash].bundle.min.js'
    },

    /**
     * Options affecting the resolving of modules
     */
    resolve: {
        modules: [srcFolder, 'node_modules'],
        extensions: ['.js']
    },

    /**
     * Webpack dev server configuration
     */
    devServer: {
        port: 1488,
        contentBase: distFolder,
        hot: true,
        historyApiFallback: true
    },

    module: {
        /**
         * List of loaders
         */
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                include: [srcFolder],
                loader: 'eslint-loader',
                options: {
                    configFile: path.join(__dirname, '.eslintrc'),
                    formatter: require('eslint-friendly-formatter'),
                    quiet: true,
                    failOnError: false,
                    failOnWarning: false,
                    emitError: false,
                    emitWarning: true
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', {
                            targets: {
                                browsers: ['last 2 versions']
                            },
                            modules: false
                        }], '@babel/preset-react'],
                        plugins: ['react-hot-loader/babel', '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-proposal-class-properties']
                    }
                }
            },

            {
                test: /\.(ttf|eot|otf|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader?name=fonts/[folder]/[name].[ext]'
            },

            {
                test: /\.(png|jpeg|jpg|svg|gif)$/,
                loader: 'file-loader?name=images/[name].[ext]'
            },

            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        query: { minimize: true }
                    }
                ]
            },

            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                minimize: process.env.NODE_ENV === 'production'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            query: {
                                /**
                                 * Postcss autoprefixer
                                 * https://github.com/postcss/autoprefixer
                                 */
                                plugins: [
                                    autoprefixer({
                                        browsers: ['Safari >= 9', 'last 2 versions']
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
     * List of plugins
     */
    plugins: [
        new HtmlWebPackPlugin({
            inject: true,
            template: path.resolve(srcFolder, 'index.html')
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),

        new ExtractTextPlugin({
            filename: process.env.NODE_ENV !== 'production' ? '[hash].styles.css' : '[hash].style.min.css',
            allChunks: true,
            disable: process.env.NODE_ENV === 'development'
        }),

        new webpack.HotModuleReplacementPlugin(),

        new Dotenv()
    ]
};

module.exports = config;
