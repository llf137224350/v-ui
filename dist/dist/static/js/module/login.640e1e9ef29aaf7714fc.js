"use strict";

webpackJsonp([17], { "+4IP": function IP(t, a, e) {
    "use strict";
    a.a = { data: function data() {
        return { content: "", isShow: !1 };
      }, props: { okText: { type: String, default: "确定" } }, created: function created() {
        var t = this;window.addEventListener("popstate", function (a) {
          t.isShow = !1;
        });
      }, methods: { show: function show(t) {
          this.content = t, this.isShow = !0, this.addLocation();
        }, hide: function hide() {
          "#target=alert" === location.hash && history.back();
        }, addLocation: function addLocation() {
          window.history && window.history.pushState ? window.history.pushState("target", "没有用", "#target=alert") : console.log("当前浏览器版本较低，不支持该功能");
        } } };
  }, "/dNd": function dNd(t, a, e) {
    "use strict";
    function i(t) {
      e("ahLG");
    }var s = e("+4IP"),
        n = e("S2Rw"),
        o = e("VU/8"),
        r = i,
        c = o(s.a, n.a, r, null, null);a.a = c.exports;
  }, "/wPk": function wPk(t, a, e) {
    "use strict";
    var i = function i() {
      var t = this,
          a = t.$createElement,
          e = t._self._c || a;return e("div", { staticClass: "snackbar" }, [e("transition", { attrs: { name: t.directionData[t.direction] }, on: { "after-leave": t.afterLeave } }, [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.isShow, expression: "isShow" }], staticClass: "snackbar-wrapper", class: { bottom: 1 === t.position } }, [e("div", { staticClass: "content border-1px" }, [t._v(t._s(t.content))]), t._v(" "), e("div", { staticClass: "btn", on: { click: t.hide } }, [t._v(t._s(t.btnText))])])])], 1);
    },
        s = [],
        n = { render: i, staticRenderFns: s };a.a = n;
  }, 0: function _(t, a) {}, "34KM": function KM(t, a) {}, DN9l: function DN9l(t, a) {}, "K/pX": function KPX(t, a, e) {
    "use strict";
    a.a = { props: { vtitle: { type: String, default: "标题" }, leftIcon: { type: String, default: "<i class='appbar-left-icon'></i>" }, rightIcon: { type: String, default: "<i class='appbar-right-icon'></i>" }, color: { type: String, default: "#fff" }, haveMenu: { type: Boolean, default: !0 } }, methods: { appbarLeftClick: function appbarLeftClick() {
          this.$emit("appbarLeftClick");
        }, appbarRightClick: function appbarRightClick() {
          this.$emit("appbarRightClick");
        } } };
  }, Kww7: function Kww7(t, a, e) {
    "use strict";
    a.a = { data: function data() {
        return { text: "加载中...", isShow: !1 };
      }, methods: { show: function show(t) {
          this.text = t, this.isShow = !0;
        }, hide: function hide() {
          this.isShow = !1;
        } } };
  }, PVO9: function PVO9(t, a, e) {
    "use strict";
    function i(t) {
      e("DN9l");
    }var s = e("Kww7"),
        n = e("vXxv"),
        o = e("VU/8"),
        r = i,
        c = o(s.a, n.a, r, null, null);a.a = c.exports;
  }, RMRm: function RMRm(t, a, e) {
    "use strict";
    var i = e("mvHQ"),
        s = e.n(i),
        n = e("fwGr"),
        o = e("fJwP"),
        r = e("PVO9"),
        c = e("/dNd"),
        l = e("W/7t"),
        d = e.n(l);a.a = { components: { appbar: n.a, snackbar: o.a, progressbar: r.a, alertdialog: c.a }, data: function data() {
        return { phoneNumber: "", validateCode: "", password: "", showClear: !1, btnValidateText: "获取验证码", timer: void 0, time: 59, host: d.a.host, isPassword: !1 };
      }, methods: { appbarLeftClick: function appbarLeftClick() {
          history.back();
        }, getCode: function getCode() {
          var t = this;if (!this.timer) {
            if (!this.phoneNumber) return this.$refs.snackbar.show("请输入手机号码"), void this.$refs.phoneNumber.focus();if (!/^1[3|4|5|8][0-9]\d{8}$/.test(this.phoneNumber)) return this.$refs.snackbar.show("手机号码格式不对，请检查"), void this.$refs.phoneNumber.focus();this.timer && clearInterval(this.timer), this.btnValidateText = "59秒后重试", this.timer = setInterval(function () {
              t.time--, 0 === t.time ? (t.btnValidateText = "获取验证码", clearInterval(t.timer), t.timer = void 0, t.time = 59) : t.btnValidateText = t.time + "秒后重试";
            }, 1e3), this.$http.jsonp(d.a.host + "/SendsmsControl/Sendsms.do", { params: { getType: "jsonp", mobile: this.phoneNumber }, jsonp: "jsonp" }).then(function (t) {
              console.log(JSON.parse(t.bodyText).data);
            }, function () {
              console.log("请求失败！！！");
            });
          }
        }, clearInput: function clearInput() {
          this.phoneNumber = "", this.showClear = !1;
        }, doLogin: function doLogin() {
          if (localStorage.removeItem("u"), !this.phoneNumber) return this.$refs.snackbar.show("请输入手机号码"), void this.$refs.phoneNumber.focus();if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phoneNumber)) return this.$refs.snackbar.show("手机号码格式不对，请检查"), void this.$refs.phoneNumber.focus();if (this.isPassword) {
            if (!this.password) return this.$refs.snackbar.show("请输入密码"), void this.$refs.password.focus();this.login();
          } else {
            if (!this.validateCode) return this.$refs.snackbar.show("请输入验证码"), void this.$refs.validateCode.focus();this.login();
          }
        }, accountAndPassword: function accountAndPassword() {
          this.isPassword = !this.isPassword;
        }, login: function login() {
          var t = this;this.$refs.pbar.show("登录中..."), this.$http.jsonp(d.a.host + "/MemberControl/login.do", { params: { getType: "jsonp", memberPhone: this.phoneNumber, memberCode: this.isPassword ? this.password : this.validateCode, loginType: this.isPassword ? "0" : "1", appid: "123456" }, jsonp: "jsonp" }).then(function (a) {
            t.$refs.pbar.hide();var e = JSON.parse(a.bodyText);0 === parseInt(e.errorCode) ? (localStorage.setItem("u", s()(e)), history.back()) : t.$refs.alert.show(e.data);
          }, function () {
            console.log("请求失败！！！");
          });
        } }, watch: { phoneNumber: function phoneNumber(t) {
          0 != t.length ? this.showClear = !0 : this.showClear = !1;
        } } };
  }, S2Rw: function S2Rw(t, a, e) {
    "use strict";
    var i = function i() {
      var t = this,
          a = t.$createElement,
          e = t._self._c || a;return e("div", { staticClass: "alert" }, [e("transition", { attrs: { "enter-active-class": "animated-alert fadeIn-alert ", "leave-active-class": "animated-alert fadeOut-alert " } }, [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.isShow, expression: "isShow" }], staticClass: "alert-mask" })]), t._v(" "), e("transition", { attrs: { "enter-active-class": "animated-alert zoomIn-alert ", "leave-active-class": "animated-alert zoomOut-alert " } }, [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.isShow, expression: "isShow" }], ref: "hook", staticClass: "alert-content-wrapper" }, [e("div", { staticClass: "content" }, [t._v("\n        " + t._s(t.content) + "\n      ")]), t._v(" "), e("div", { staticClass: "btn" }, [e("div", { staticClass: "ok", on: { click: t.hide } }, [t._v(t._s(t.okText))])])])])], 1);
    },
        s = [],
        n = { render: i, staticRenderFns: s };a.a = n;
  }, "Sd/g": function SdG(t, a) {}, "W/7t": function W7t(t, a) {
    t.exports = { host: "http://101.201.122.173/" };
  }, ahLG: function ahLG(t, a) {}, bgNQ: function bgNQ(t, a, e) {
    "use strict";
    var i = function i() {
      var t = this,
          a = t.$createElement,
          e = t._self._c || a;return e("div", { staticClass: "appbar border-1px", style: { background: t.color } }, [e("div", { staticClass: "appbar-left", domProps: { innerHTML: t._s(t.leftIcon) }, on: { click: function click(a) {
            a.stopPropagation(), t.appbarLeftClick(a);
          } } }), t._v(" "), e("div", { staticClass: "appbar-title " }, [t._v(t._s(t.vtitle))]), t._v(" "), e("div", { directives: [{ name: "show", rawName: "v-show", value: t.haveMenu, expression: "haveMenu" }], staticClass: "appbar-right", domProps: { innerHTML: t._s(t.rightIcon) }, on: { click: function click(a) {
            a.stopPropagation(), t.appbarRightClick(a);
          } } })]);
    },
        s = [],
        n = { render: i, staticRenderFns: s };a.a = n;
  }, fJwP: function fJwP(t, a, e) {
    "use strict";
    function i(t) {
      e("utuD");
    }var s = e("l0gp"),
        n = e("/wPk"),
        o = e("VU/8"),
        r = i,
        c = o(s.a, n.a, r, null, null);a.a = c.exports;
  }, fwGr: function fwGr(t, a, e) {
    "use strict";
    function i(t) {
      e("Sd/g");
    }var s = e("K/pX"),
        n = e("bgNQ"),
        o = e("VU/8"),
        r = i,
        c = o(s.a, n.a, r, null, null);a.a = c.exports;
  }, ghWj: function ghWj(t, a, e) {
    "use strict";
    Object.defineProperty(a, "__esModule", { value: !0 });var i = e("7+uW"),
        s = e("ORbq"),
        n = e("qJdI"),
        o = e.n(n),
        r = e("whgT"),
        c = e("34KM"),
        l = (e.n(c), e("tb/R")),
        d = (e.n(l), e("xhZc"));e.n(d);i.a.use(s.a), i.a.use(o.a), new i.a({ template: "<login/>", components: { login: r.a }, data: { eventHub: new i.a() } }).$mount("#app");
  }, l0gp: function l0gp(t, a, e) {
    "use strict";
    a.a = { data: function data() {
        return { directionData: ["top-direction", "down-direction", "left-direction", "right-direction"], isShow: !1, content: "", timer: void 0, callBack: void 0, isClick: !1 };
      }, props: { position: { type: Number, default: 0 }, direction: { type: Number, default: 0 }, btnText: { type: String, default: "确定" }, displayDuration: { type: Number, default: 5e3 } }, methods: { show: function show(t, a) {
          if (!this.isShow) {
            this.isClick = !1, this.callBack = a, this.content = t, this.timer && clearTimeout(this.timer);var e = this;e.isShow = !0, this.timer = setTimeout(function () {
              e.isShow = !1;
            }, this.displayDuration);
          }
        }, hide: function hide() {
          this.isShow = !1, this.isClick = !0;
        }, afterLeave: function afterLeave() {
          this.callBack && this.isClick && this.callBack();
        } } };
  }, slk1: function slk1(t, a, e) {
    "use strict";
    var i = function i() {
      var t = this,
          a = t.$createElement,
          e = t._self._c || a;return e("div", { attrs: { id: "app" } }, [e("div", { staticClass: "appbar-container" }, [e("appbar", { attrs: { vtitle: "", color: "#fff", haveMenu: !1 }, on: { appbarLeftClick: t.appbarLeftClick } })], 1), t._v(" "), e("div", { staticClass: "login-by-phone-container" }, [e("i", { staticClass: "head-portrait" }), t._v(" "), e("div", { staticClass: "phone-number border-1px" }, [e("input", { directives: [{ name: "model", rawName: "v-model", value: t.phoneNumber, expression: "phoneNumber" }], ref: "phoneNumber", attrs: { type: "tel", placeholder: "请输入手机号码" }, domProps: { value: t.phoneNumber }, on: { input: function input(a) {
            a.target.composing || (t.phoneNumber = a.target.value);
          } } }), t._v(" "), e("i", { directives: [{ name: "show", rawName: "v-show", value: t.showClear, expression: "showClear" }], staticClass: "clear-input", on: { click: t.clearInput } })]), t._v(" "), e("div", { directives: [{ name: "show", rawName: "v-show", value: !t.isPassword, expression: "!isPassword" }], staticClass: "validate-code border-1px" }, [e("input", { directives: [{ name: "model", rawName: "v-model", value: t.validateCode, expression: "validateCode" }], ref: "validateCode", attrs: { type: "number", placeholder: "请输入验证码" }, domProps: { value: t.validateCode }, on: { input: function input(a) {
            a.target.composing || (t.validateCode = a.target.value);
          } } }), t._v(" "), e("span", { staticClass: "btn-validate-code", on: { click: t.getCode } }, [t._v(t._s(t.btnValidateText))])]), t._v(" "), e("div", { directives: [{ name: "show", rawName: "v-show", value: t.isPassword, expression: "isPassword" }], staticClass: "validate-code border-1px" }, [e("input", { directives: [{ name: "model", rawName: "v-model", value: t.password, expression: "password" }], ref: "password", attrs: { type: "password", placeholder: "请输入密码" }, domProps: { value: t.password }, on: { input: function input(a) {
            a.target.composing || (t.password = a.target.value);
          } } })]), t._v(" "), e("div", { staticClass: "login", on: { click: t.doLogin } }, [t._v("登录")]), t._v(" "), e("div", { staticClass: "or" }, [t._v("或")]), t._v(" "), e("div", { staticClass: "account-and-password", on: { click: t.accountAndPassword } }, [t._v(t._s(t.isPassword ? "手机号快捷登录" : "账号和密码登录"))])]), t._v(" "), e("snackbar", { ref: "snackbar", attrs: { position: 0 } }), t._v(" "), e("progressbar", { ref: "pbar" }), t._v(" "), e("alertdialog", { ref: "alert" })], 1);
    },
        s = [],
        n = { render: i, staticRenderFns: s };a.a = n;
  }, "tb/R": function tbR(t, a) {}, utuD: function utuD(t, a) {}, vXxv: function vXxv(t, a, e) {
    "use strict";
    var i = function i() {
      var t = this,
          a = t.$createElement,
          e = t._self._c || a;return e("div", { staticClass: "progressbar" }, [e("transition", { attrs: { "enter-active-class": "animated fadeIn ", "leave-active-class": "animated fadeOut " } }, [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.isShow, expression: "isShow" }], staticClass: "progressbar-wrapper" }, [e("div", { staticClass: "loading_inner_loader" }, [e("div", { staticClass: "h5ui-toast_loading_icon" }, [e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_0" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_1" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_2" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_3" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_4" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_5" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_6" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_7" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_8" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_9" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_10" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_11" })])]), t._v(" "), e("div", { staticClass: "text" }, [t._v(t._s(t.text))])])])], 1);
    },
        s = [],
        n = { render: i, staticRenderFns: s };a.a = n;
  }, whgT: function whgT(t, a, e) {
    "use strict";
    function i(t) {
      e("zPuA");
    }var s = e("RMRm"),
        n = e("slk1"),
        o = e("VU/8"),
        r = i,
        c = o(s.a, n.a, r, null, null);a.a = c.exports;
  }, xhZc: function xhZc(t, a) {}, zPuA: function zPuA(t, a) {} }, ["ghWj"]);
//# sourceMappingURL=login.640e1e9ef29aaf7714fc.js.map
//# sourceMappingURL=login.640e1e9ef29aaf7714fc.js.map