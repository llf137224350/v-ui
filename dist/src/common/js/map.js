"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

exports.MP = MP;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MP() {
    return new _promise2.default(function (resolve, reject) {
        window.onload = function () {
            resolve(BMap);
        };
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "=init";
        script.onerror = reject;
        document.head.appendChild(script);
    });
}
//# sourceMappingURL=map.js.map