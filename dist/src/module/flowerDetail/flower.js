'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

var _vueJsonp = require('vue-jsonp');

var _vueJsonp2 = _interopRequireDefault(_vueJsonp);

var _vueLazyload = require('vue-lazyload');

var _vueLazyload2 = _interopRequireDefault(_vueLazyload);

var _flower = require('./flowerDetail.vue');

var _flower2 = _interopRequireDefault(_flower);

require('common/stylus/index.styl');

require('common/css/reset.css');

require('common/css/animate.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueResource2.default);
_vue2.default.use(_vueJsonp2.default);
_vue2.default.use(_vueLazyload2.default);
new _vue2.default({
  template: '<flower/>',
  components: { flower: _flower2.default },
  data: {
    eventHub: new _vue2.default() // 用于子控件向父控件传递事件  radio需要
  }
}).$mount('#app');
//# sourceMappingURL=flower.js.map