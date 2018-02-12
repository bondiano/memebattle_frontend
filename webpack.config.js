const
    path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    Dotenv = require('dotenv-webpack');

const
    publicFolder = path.resolve(__dirname, 'public'),
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
        path: publicFolder,
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
        port: 1337,
        contentBase: './public',
        historyApiFallback: true,
        hot: true,
        https: true
    },

    module: {
        /**
         * List of loaders
         */
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
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
                test: /\.jsx?$/,
                include: [srcFolder],
                use: {
                    loader: 'babel-loader',
                    options: {
                        /**
                         * Use modules: false, otherwise hot-reloading will be broken
                         */
                        presets: [['env', {
                            targets: {
                                browsers: ['last 2 versions']
                            },
                            modules: false
                        }], 'react'],
                        plugins: ['react-hot-loader/babel', 'transform-object-rest-spread', 'transform-class-properties']
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: process.env.NODE_ENV === 'production'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
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
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(srcFolder, 'index.html')
        }),

        new CleanWebpackPlugin(publicFolder, {
            root: __dirname,
            verbose: true
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
        new webpack.NamedModulesPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /fr/),

        new Dotenv()
    ]
};

if (process.env.NODE_ENV === 'production') {
    /**
     * UglifyJSPlugin: minify and optimize code
     * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
     */
    config.plugins.push(new UglifyJSPlugin({
        compress: {
            warnings: false,
            drop_console: true,
            unused: true,
            dead_code: true
        },
        output: {
            comments: false
        }
    }));

    /**
     * Remove hot loader from production
     */
    config.entry.shift();
}

module.exports = config;
