'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _about = require('./about.vue');

var _about2 = _interopRequireDefault(_about);

require('common/stylus/index.styl');

require('common/css/reset.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
new _vue2.default({
  template: '<about/>',
  components: { about: _about2.default },
  data: {
    eventHub: new _vue2.default() // 用于子控件向父控件传递事件  radio需要
  }
}).$mount('#app');
//# sourceMappingURL=about.js.map