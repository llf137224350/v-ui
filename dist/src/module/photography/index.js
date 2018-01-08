'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

var _vueJsonp = require('vue-jsonp');

var _vueJsonp2 = _interopRequireDefault(_vueJsonp);

var _home = require('components/home/home.vue');

var _home2 = _interopRequireDefault(_home);

var _shoping = require('components/shoping/shoping.vue');

var _shoping2 = _interopRequireDefault(_shoping);

var _cart = require('components/cart/cart.vue');

var _cart2 = _interopRequireDefault(_cart);

var _personalCenter = require('components/personalCenter/personalCenter.vue');

var _personalCenter2 = _interopRequireDefault(_personalCenter);

var _photography = require('./videoAdvert.vue');

var _photography2 = _interopRequireDefault(_photography);

require('common/stylus/index.styl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//使用路由
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue2.default.use(_vueRouter2.default);
_vue2.default.use(_vueResource2.default);
_vue2.default.use(_vueJsonp2.default);
var routes = [{ path: '*', component: _home2.default }, { path: '/main/home', component: _home2.default }, { path: '/main/shoping', component: _shoping2.default }, { path: '/main/cart', component: _cart2.default }, { path: '/main/center', component: _personalCenter2.default }];
// 创建路由
var router = new _vueRouter2.default({
  routes: routes
});
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new _vue2.default({
  template: '<Index/>',
  components: { Index: _photography2.default },
  router: router,
  data: {
    eventHub: new _vue2.default() // 用于子控件向父控件传递事件  radio需要
  }
}).$mount('#app');
//# sourceMappingURL=weddingHotelDetail.js.map
