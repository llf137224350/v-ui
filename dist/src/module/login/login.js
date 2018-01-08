'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

var _vueJsonp = require('vue-jsonp');

var _vueJsonp2 = _interopRequireDefault(_vueJsonp);

var _login = require('./about.vue');

var _login2 = _interopRequireDefault(_login);

require('common/stylus/index.styl');

require('common/css/reset.css');

require('common/css/animate.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//使用路由
_vue2.default.use(_vueResource2.default); // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

_vue2.default.use(_vueJsonp2.default);
new _vue2.default({
  template: '<login/>',
  components: { login: _login2.default },
  data: {
    eventHub: new _vue2.default() // 用于子控件向父控件传递事件  radio需要
  }
}).$mount('#app');
//# sourceMappingURL=personalInfo.js.map
