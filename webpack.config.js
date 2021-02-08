//导入path模块
const path = require('path')
//导入html-webpack-plugin 
const HtmlWebpackPlugin = require('html-webpack-plugin')
//引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//导入clean-webpack-plugin
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    //模式
    mode:'development',
    //打包入口
    entry: './src/main.js',
    devServer:{
        contentBase:'./dist',
        open:true
    },
    //打包出口
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname,'dist')
    },
    //打包规则
    module:{
        rules:[{
            test:/\.vue$/,
            loader:'vue-loader'
        },{
            test:/\.(jpg|jpeg|png|svg)$/,
            loader:'url-loader',
            options:{
                name:'[name].[ext]',
                limit:2048
            }
        },{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },{
            test:/\.styl(us)?$/,
            use:['style-loader','css-loader','postcss-loader','stylus-loader']
        }]
    },
    //插件
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.js'
        }
    }
}