'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require('path');
var fs = require('fs');
var utils = require('./utils');
var config = require('../config');
var vueLoaderConfig = require('./vue-loader.conf');
//引入
var glob = require('glob');
//获取对象，匹配./src/module/xxx.js和./src/module/xxx/xxx.js  多个引入  替换默认生成的{”App“:{"./src/main.js"}}
//在文件底部添加getEntry方法  参数是对应js所在目录数组，可以多个
var entries = getEntry(['./src/module/*.js', './src/module/**/*.js']); // 获得入口js文件
function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    entry: entries,
    externals: { // map组件需要
        'AMap': 'AMap'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',

        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    },

    resolve: {
        extensions: ['.js', '.vue', '.json'],

        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'components': path.resolve(__dirname, "../src/components"), //配置一个别名
            'common': path.resolve(__dirname, "../src/common") //配置一个别名
        },
        symlinks: false
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: vueLoaderConfig
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src'), resolve('test')]
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 30000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('media/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }]
    }
};

function getEntry(globPath) {

    var entries = {},
        basename,
        tmp,
        pathname;
    if ((typeof globPath === 'undefined' ? 'undefined' : (0, _typeof3.default)(globPath)) != "object") {
        globPath = [globPath];
    }

    globPath.forEach(function (itemPath) {
        glob.sync(itemPath).forEach(function (entry) {
            basename = path.basename(entry, path.extname(entry));
            if (entry.split('/').length > 4) {
                tmp = entry.split('/').splice(-3);
                pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
                entries['' + pathname] = entry;
            } else {
                pathname = "/" + basename;
                entries[basename] = entry;
            }
        });
    });

    return entries;
}
//# sourceMappingURL=webpack.base.conf.js.map