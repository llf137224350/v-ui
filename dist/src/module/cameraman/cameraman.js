'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _store = require('common/js/store.js');

var _store2 = _interopRequireDefault(_store);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

var _vueJsonp = require('vue-jsonp');

var _vueJsonp2 = _interopRequireDefault(_vueJsonp);

var _vueLazyload = require('vue-lazyload');

var _vueLazyload2 = _interopRequireDefault(_vueLazyload);

var _cameraman = require('./cameraman.vue');

var _cameraman2 = _interopRequireDefault(_cameraman);

var _cameramanComment = require('components/cameramanComment/cameramanComment.vue');

var _cameramanComment2 = _interopRequireDefault(_cameramanComment);

var _works = require('components/works/works.vue');

var _works2 = _interopRequireDefault(_works);

var _briefIntroduction = require('components/briefIntroduction/briefIntroduction.vue');

var _briefIntroduction2 = _interopRequireDefault(_briefIntroduction);

var _scheduleDate = require('components/scheduleDate/scheduleDate.vue');

var _scheduleDate2 = _interopRequireDefault(_scheduleDate);

require('common/stylus/index.styl');

require('common/css/reset.css');

require('common/css/animate.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//使用路由
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue2.default.use(_vueRouter2.default);
_vue2.default.use(_vueResource2.default);
_vue2.default.use(_vueJsonp2.default);
_vue2.default.use(_vueLazyload2.default);
var routes = [{ path: '*', component: _works2.default }, { path: '/works/:id/:typeId', component: _works2.default }, { path: '/briefIntroduction/:id/:typeId', component: _briefIntroduction2.default }, { path: '/cameramanComment/:id/:typeId', component: _cameramanComment2.default }, { path: '/scheduleDate/:id/:typeId', component: _scheduleDate2.default }];
// 创建路由
var router = new _vueRouter2.default({
  routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new _vue2.default({
  template: '<cameraman/>',
  components: { cameraman: _cameraman2.default },
  store: _store2.default,
  router: router,
  data: {
    eventHub: new _vue2.default() // 用于子控件向父控件传递事件  radio需要
  }
}).$mount('#app');
//# sourceMappingURL=cameraman.js.map