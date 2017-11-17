const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Uglify = require('uglifyjs-webpack-plugin');
const glob = require('glob');
const purifycssWebpack = require("purifycss-webpack");
module.exports = {
    entry:{
        entry: "./src/index.js"
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: '[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                // use:[
                //     {
                //         loader:'style-loader',
                //     },
                //     {
                //         loader:'css-loader'
                //     }
                // ]
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader:"css-loader",
                            options:{importLoaders:1}
                        },
                        "postcss-loader"
                    ]
                })
            },
            {
                test:/\.(png|gif|jpg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit: 300000000,
                            outputPath:'img/'
                        }
                    }
                ]
            },
            {
                test:/\.scss$/,
                // use:['style-loader','css-loader','sass-loader']
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","sass-loader"]
                })
            },
            {
                test:/\.js$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:['env']
                    }
                },
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template: "./src/index.html"
        }),
        new ExtractTextPlugin('css/index.css'),
        // new Uglify()
        new purifycssWebpack({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        })
    ],
    devServer:{
        contentBase: path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        port:'8081',
        compress:true
    }
}