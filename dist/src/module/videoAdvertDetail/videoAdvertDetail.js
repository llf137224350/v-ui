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

var _videoWorks = require('components/videoWorks/videoWorks.vue');

var _videoWorks2 = _interopRequireDefault(_videoWorks);

var _videoDes = require('components/videoDes/videoDes.vue');

var _videoDes2 = _interopRequireDefault(_videoDes);

var _videoAdvertDetail = require('./videoAdvertDetail.vue');

var _videoAdvertDetail2 = _interopRequireDefault(_videoAdvertDetail);

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
var routes = [{ path: '*', component: _videoWorks2.default }, { path: '/videoWorks/:id', component: _videoWorks2.default }, { path: '/videoDes/:id', component: _videoDes2.default }];
// 创建路由
var router = new _vueRouter2.default({
  routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new _vue2.default({
  template: '<videoAdvertDetail/>',
  components: { videoAdvertDetail: _videoAdvertDetail2.default },
  store: _store2.default,
  router: router,
  data: {
    eventHub: new _vue2.default() // 用于子控件向父控件传递事件  radio需要
  }
}).$mount('#app');
//# sourceMappingURL=videoAdvertDetail.js.map