'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

var _goods = require('components/goods/scheduleDate.vue');

var _goods2 = _interopRequireDefault(_goods);

var _seller = require('components/seller/seller.vue');

var _seller2 = _interopRequireDefault(_seller);

var _ratings = require('components/ratings/ratings.vue');

var _ratings2 = _interopRequireDefault(_ratings);

var _App = require('./videoAdvert.vue');

var _App2 = _interopRequireDefault(_App);

require('common/stylus/index.styl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//使用路由
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue2.default.use(_vueRouter2.default);
_vue2.default.use(_vueResource2.default);
var routes = [{ path: '*', component: _goods2.default, redirect: '/goods' }, { path: '/goods', component: _goods2.default }, { path: '/seller', component: _seller2.default }, { path: '/ratings', component: _ratings2.default }];
// 创建路由
var router = new _vueRouter2.default({
  routes: routes,
  linkActiveClass: 'active'
});
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new _vue2.default({
  template: '<App/>',
  components: { App: _App2.default },
  router: router,
  data: {
    eventHub: new _vue2.default()
  }
}).$mount('#app');
//# sourceMappingURL=shop.js.map
