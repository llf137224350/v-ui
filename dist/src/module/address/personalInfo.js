'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

var _vueJsonp = require('vue-jsonp');

var _vueJsonp2 = _interopRequireDefault(_vueJsonp);

var _address = require('./editAddress.vue');

var _address2 = _interopRequireDefault(_address);

require('common/stylus/index.styl');

require('common/css/reset.css');

require('common/css/animate.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueResource2.default);
_vue2.default.use(_vueJsonp2.default);
new _vue2.default({
  template: '<personalInfo/>',
  components: { personalInfo: _address2.default },
  data: {
    eventHub: new _vue2.default() // 用于子控件向父控件传递事件  radio需要
  }
}).$mount('#app');
//# sourceMappingURL=editAddress.js.map
