"use strict";

webpackJsonp([4], { "+4IP": function IP(t, a, s) {
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
  }, "/dNd": function dNd(t, a, s) {
    "use strict";
    function e(t) {
      s("ahLG");
    }var i = s("+4IP"),
        o = s("S2Rw"),
        n = s("VU/8"),
        r = e,
        c = n(i.a, o.a, r, null, null);a.a = c.exports;
  }, "/wPk": function wPk(t, a, s) {
    "use strict";
    var e = function e() {
      var t = this,
          a = t.$createElement,
          s = t._self._c || a;return s("div", { staticClass: "snackbar" }, [s("transition", { attrs: { name: t.directionData[t.direction] }, on: { "after-leave": t.afterLeave } }, [s("div", { directives: [{ name: "show", rawName: "v-show", value: t.isShow, expression: "isShow" }], staticClass: "snackbar-wrapper", class: { bottom: 1 === t.position } }, [s("div", { staticClass: "content border-1px" }, [t._v(t._s(t.content))]), t._v(" "), s("div", { staticClass: "btn", on: { click: t.hide } }, [t._v(t._s(t.btnText))])])])], 1);
    },
        i = [],
        o = { render: e, staticRenderFns: i };a.a = o;
  }, 0: function _(t, a) {}, "34KM": function KM(t, a) {}, "9UbN": function UbN(t, a) {}, DN9l: function DN9l(t, a) {}, "K/pX": function KPX(t, a, s) {
    "use strict";
    a.a = { props: { vtitle: { type: String, default: "标题" }, leftIcon: { type: String, default: "<i class='appbar-left-icon'></i>" }, rightIcon: { type: String, default: "<i class='appbar-right-icon'></i>" }, color: { type: String, default: "#fff" }, haveMenu: { type: Boolean, default: !0 } }, methods: { appbarLeftClick: function appbarLeftClick() {
          this.$emit("appbarLeftClick");
        }, appbarRightClick: function appbarRightClick() {
          this.$emit("appbarRightClick");
        } } };
  }, Kww7: function Kww7(t, a, s) {
    "use strict";
    a.a = { data: function data() {
        return { text: "加载中...", isShow: !1 };
      }, methods: { show: function show(t) {
          this.text = t, this.isShow = !0;
        }, hide: function hide() {
          this.isShow = !1;
        } } };
  }, PVO9: function PVO9(t, a, s) {
    "use strict";
    function e(t) {
      s("DN9l");
    }var i = s("Kww7"),
        o = s("vXxv"),
        n = s("VU/8"),
        r = e,
        c = n(i.a, o.a, r, null, null);a.a = c.exports;
  }, S2Rw: function S2Rw(t, a, s) {
    "use strict";
    var e = function e() {
      var t = this,
          a = t.$createElement,
          s = t._self._c || a;return s("div", { staticClass: "alert" }, [s("transition", { attrs: { "enter-active-class": "animated-alert fadeIn-alert ", "leave-active-class": "animated-alert fadeOut-alert " } }, [s("div", { directives: [{ name: "show", rawName: "v-show", value: t.isShow, expression: "isShow" }], staticClass: "alert-mask" })]), t._v(" "), s("transition", { attrs: { "enter-active-class": "animated-alert zoomIn-alert ", "leave-active-class": "animated-alert zoomOut-alert " } }, [s("div", { directives: [{ name: "show", rawName: "v-show", value: t.isShow, expression: "isShow" }], ref: "hook", staticClass: "alert-content-wrapper" }, [s("div", { staticClass: "content" }, [t._v("\n        " + t._s(t.content) + "\n      ")]), t._v(" "), s("div", { staticClass: "btn" }, [s("div", { staticClass: "ok", on: { click: t.hide } }, [t._v(t._s(t.okText))])])])])], 1);
    },
        i = [],
        o = { render: e, staticRenderFns: i };a.a = o;
  }, "Sd/g": function SdG(t, a) {}, TtpE: function TtpE(t, a, s) {
    "use strict";
    var e = s("mvHQ"),
        i = s.n(e),
        o = s("fwGr"),
        n = s("fJwP"),
        r = s("PVO9"),
        c = s("/dNd"),
        l = s("z+5l"),
        d = s("W/7t"),
        u = s.n(d);a.a = { created: function created() {
        var t = localStorage.getItem("u");t && (this.userInfo = JSON.parse(t).data, this.phoneNumber = this.userInfo.memberPhone);
      }, components: { appbar: o.a, snackbar: n.a, progressbar: r.a, alertdialog: c.a, icontoast: l.a }, data: function data() {
        return { phoneNumber: "", validateCode: "", password: "", newPassword: "", showClear: !1, btnValidateText: "获取验证码", timer: void 0, time: 59, host: u.a.host, isPassword: !1, userInfo: void 0 };
      }, methods: { appbarLeftClick: function appbarLeftClick() {
          history.back();
        }, getCode: function getCode() {
          var t = this;if (!this.timer) {
            if (!this.phoneNumber) return this.$refs.snackbar.show("请输入手机号码"), void this.$refs.phoneNumber.focus();if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phoneNumber)) return this.$refs.snackbar.show("手机号码格式不对，请检查"), void this.$refs.phoneNumber.focus();this.timer && clearInterval(this.timer), this.btnValidateText = "59秒后重试", this.timer = setInterval(function () {
              t.time--, 0 === t.time ? (t.btnValidateText = "获取验证码", clearInterval(t.timer), t.timer = void 0, t.time = 59) : t.btnValidateText = t.time + "秒后重试";
            }, 1e3), this.$http.jsonp(u.a.host + "/SendsmsControl/Sendsms.do", { params: { getType: "jsonp", mobile: this.phoneNumber }, jsonp: "jsonp" }).then(function (t) {
              console.log(JSON.parse(t.bodyText).data);
            }, function () {
              console.log("请求失败！！！");
            });
          }
        }, doLogin: function doLogin() {
          if (this.isPassword) {
            if (!this.password) return this.$refs.snackbar.show("请输入旧密码"), void this.$refs.password.focus();if (!this.newPassword) return this.$refs.snackbar.show("请输入新密码"), void this.$refs.newPassword.focus();this.updatePassword();
          } else {
            if (!this.validateCode) return this.$refs.snackbar.show("请输入验证码"), void this.$refs.validateCode.focus();if (!this.newPassword) return this.$refs.snackbar.show("请输入新密码"), void this.$refs.newPassword.focus();this.updatePassword();
          }
        }, accountAndPassword: function accountAndPassword() {
          this.isPassword = !this.isPassword;
        }, updatePassword: function updatePassword() {
          var t = this;this.$refs.pbar.show("修改中..."), this.$http.jsonp(u.a.host + "/MemberControl/updateMemberPwd.do", { params: { getType: "jsonp", token: this.userInfo.memberDetail.safeCode, oldCode: this.isPassword ? this.password : this.validateCode, newCode: this.newPassword, updateType: this.isPassword ? "0" : "1" }, jsonp: "jsonp" }).then(function (a) {
            t.$refs.pbar.hide();var s = JSON.parse(a.bodyText);if (0 === parseInt(s.errorCode)) {
              var e = localStorage.getItem("u");e && (e = JSON.parse(e), e.data.memberPwd = t.newPassword, localStorage.setItem("u", i()(e))), t.$refs.toast.show(s.data, "succeed"), setTimeout(function () {
                history.back();
              }, 2e3);
            } else t.$refs.toast.show(s.data, "failed");
          }, function () {
            console.log("请求失败！！！");
          });
        } }, watch: { phoneNumber: function phoneNumber(t) {
          0 != t.length ? this.showClear = !0 : this.showClear = !1;
        } } };
  }, "W/7t": function W7t(t, a) {
    t.exports = { host: "http://101.201.122.173/" };
  }, a0aT: function a0aT(t, a, s) {
    "use strict";
    Object.defineProperty(a, "__esModule", { value: !0 });var e = s("7+uW"),
        i = s("ORbq"),
        o = s("qJdI"),
        n = s.n(o),
        r = s("jObW"),
        c = s("34KM"),
        l = (s.n(c), s("tb/R")),
        d = (s.n(l), s("xhZc"));s.n(d);e.a.use(i.a), e.a.use(n.a), new e.a({ template: "<updatePassword/>", components: { updatePassword: r.a }, data: { eventHub: new e.a() } }).$mount("#app");
  }, ahLG: function ahLG(t, a) {}, bgNQ: function bgNQ(t, a, s) {
    "use strict";
    var e = function e() {
      var t = this,
          a = t.$createElement,
          s = t._self._c || a;return s("div", { staticClass: "appbar border-1px", style: { background: t.color } }, [s("div", { staticClass: "appbar-left", domProps: { innerHTML: t._s(t.leftIcon) }, on: { click: function click(a) {
            a.stopPropagation(), t.appbarLeftClick(a);
          } } }), t._v(" "), s("div", { staticClass: "appbar-title " }, [t._v(t._s(t.vtitle))]), t._v(" "), s("div", { directives: [{ name: "show", rawName: "v-show", value: t.haveMenu, expression: "haveMenu" }], staticClass: "appbar-right", domProps: { innerHTML: t._s(t.rightIcon) }, on: { click: function click(a) {
            a.stopPropagation(), t.appbarRightClick(a);
          } } })]);
    },
        i = [],
        o = { render: e, staticRenderFns: i };a.a = o;
  }, fJwP: function fJwP(t, a, s) {
    "use strict";
    function e(t) {
      s("utuD");
    }var i = s("l0gp"),
        o = s("/wPk"),
        n = s("VU/8"),
        r = e,
        c = n(i.a, o.a, r, null, null);a.a = c.exports;
  }, fwGr: function fwGr(t, a, s) {
    "use strict";
    function e(t) {
      s("Sd/g");
    }var i = s("K/pX"),
        o = s("bgNQ"),
        n = s("VU/8"),
        r = e,
        c = n(i.a, o.a, r, null, null);a.a = c.exports;
  }, iDor: function iDor(t, a) {}, jObW: function jObW(t, a, s) {
    "use strict";
    function e(t) {
      s("9UbN");
    }var i = s("TtpE"),
        o = s("mDra"),
        n = s("VU/8"),
        r = e,
        c = n(i.a, o.a, r, null, null);a.a = c.exports;
  }, kBKX: function kBKX(t, a, s) {
    "use strict";
    a.a = { data: function data() {
        return { text: "", state: "succeed", isShow: !1, timer: void 0 };
      }, props: { displayDuration: { type: Number, default: 2400 } }, methods: { show: function show(t, a) {
          this.text = t, a && (this.state = a), this.timer && clearTimeout(this.timer), this.isShow = !0;var s = this;this.timer = setTimeout(function () {
            s.isShow = !1;
          }, this.displayDuration);
        } } };
  }, l0gp: function l0gp(t, a, s) {
    "use strict";
    a.a = { data: function data() {
        return { directionData: ["top-direction", "down-direction", "left-direction", "right-direction"], isShow: !1, content: "", timer: void 0, callBack: void 0, isClick: !1 };
      }, props: { position: { type: Number, default: 0 }, direction: { type: Number, default: 0 }, btnText: { type: String, default: "确定" }, displayDuration: { type: Number, default: 5e3 } }, methods: { show: function show(t, a) {
          if (!this.isShow) {
            this.isClick = !1, this.callBack = a, this.content = t, this.timer && clearTimeout(this.timer);var s = this;s.isShow = !0, this.timer = setTimeout(function () {
              s.isShow = !1;
            }, this.displayDuration);
          }
        }, hide: function hide() {
          this.isShow = !1, this.isClick = !0;
        }, afterLeave: function afterLeave() {
          this.callBack && this.isClick && this.callBack();
        } } };
  }, mDra: function mDra(t, a, s) {
    "use strict";
    var e = function e() {
      var t = this,
          a = t.$createElement,
          s = t._self._c || a;return s("div", { attrs: { id: "app" } }, [s("div", { staticClass: "appbar-container" }, [s("appbar", { attrs: { vtitle: "修改密码", color: "#fff", haveMenu: !1 }, on: { appbarLeftClick: t.appbarLeftClick } })], 1), t._v(" "), s("div", { staticClass: "login-by-phone-container" }, [s("i", { staticClass: "head-portrait" }), t._v(" "), s("div", { staticClass: "phone-number border-1px" }, [s("input", { directives: [{ name: "model", rawName: "v-model", value: t.phoneNumber, expression: "phoneNumber" }], ref: "phoneNumber", attrs: { type: "tel", readonly: "readonly" }, domProps: { value: t.phoneNumber }, on: { input: function input(a) {
            a.target.composing || (t.phoneNumber = a.target.value);
          } } })]), t._v(" "), s("div", { directives: [{ name: "show", rawName: "v-show", value: !t.isPassword, expression: "!isPassword" }], staticClass: "validate-code border-1px" }, [s("input", { directives: [{ name: "model", rawName: "v-model", value: t.validateCode, expression: "validateCode" }], ref: "validateCode", attrs: { type: "number", placeholder: "请输入验证码" }, domProps: { value: t.validateCode }, on: { input: function input(a) {
            a.target.composing || (t.validateCode = a.target.value);
          } } }), t._v(" "), s("span", { staticClass: "btn-validate-code", on: { click: t.getCode } }, [t._v(t._s(t.btnValidateText))])]), t._v(" "), s("div", { directives: [{ name: "show", rawName: "v-show", value: t.isPassword, expression: "isPassword" }], staticClass: "validate-code border-1px" }, [s("input", { directives: [{ name: "model", rawName: "v-model", value: t.password, expression: "password" }], ref: "password", attrs: { type: "password", placeholder: "请输入旧密码" }, domProps: { value: t.password }, on: { input: function input(a) {
            a.target.composing || (t.password = a.target.value);
          } } })]), t._v(" "), s("div", { staticClass: "validate-code border-1px  new-password" }, [s("input", { directives: [{ name: "model", rawName: "v-model", value: t.newPassword, expression: "newPassword" }], ref: "newPassword", attrs: { type: "password", placeholder: "请输入新密码" }, domProps: { value: t.newPassword }, on: { input: function input(a) {
            a.target.composing || (t.newPassword = a.target.value);
          } } })]), t._v(" "), s("div", { staticClass: "login", on: { click: t.doLogin } }, [t._v("修改密码")]), t._v(" "), s("div", { staticClass: "or" }, [t._v("或")]), t._v(" "), s("div", { staticClass: "account-and-password", on: { click: t.accountAndPassword } }, [t._v(t._s(t.isPassword ? "手机号验证" : "旧密码验证"))])]), t._v(" "), s("snackbar", { ref: "snackbar", attrs: { position: 0 } }), t._v(" "), s("progressbar", { ref: "pbar" }), t._v(" "), s("alertdialog", { ref: "alert" }), t._v(" "), s("icontoast", { ref: "toast" })], 1);
    },
        i = [],
        o = { render: e, staticRenderFns: i };a.a = o;
  }, "tb/R": function tbR(t, a) {}, utuD: function utuD(t, a) {}, vXxv: function vXxv(t, a, s) {
    "use strict";
    var e = function e() {
      var t = this,
          a = t.$createElement,
          s = t._self._c || a;return s("div", { staticClass: "progressbar" }, [s("transition", { attrs: { "enter-active-class": "animated fadeIn ", "leave-active-class": "animated fadeOut " } }, [s("div", { directives: [{ name: "show", rawName: "v-show", value: t.isShow, expression: "isShow" }], staticClass: "progressbar-wrapper" }, [s("div", { staticClass: "loading_inner_loader" }, [s("div", { staticClass: "h5ui-toast_loading_icon" }, [s("div", { staticClass: "loading-icon-leaf loading-icon-leaf_0" }), t._v(" "), s("div", { staticClass: "loading-icon-leaf loading-icon-leaf_1" }), t._v(" "), s("div", { staticClass: "loading-icon-leaf loading-icon-leaf_2" }), t._v(" "), s("div", { staticClass: "loading-icon-leaf loading-icon-leaf_3" }), t._v(" "), s("div", { staticClass: "loading-icon-leaf loading-icon-leaf_4" }), t._v(" "), s("div", { staticClass: "loading-icon-leaf loading-icon-leaf_5" }), t._v(" "), s("div", { staticClass: "loading-icon-leaf loading-icon-leaf_6" }), t._v(" "), s("div", { staticClass: "loading-icon-leaf loading-icon-leaf_7" }), t._v(" "), s("div", { staticClass: "loading-icon-leaf loading-icon-leaf_8" }), t._v(" "), s("div", { staticClass: "loading-icon-leaf loading-icon-leaf_9" }), t._v(" "), s("div", { staticClass: "loading-icon-leaf loading-icon-leaf_10" }), t._v(" "), s("div", { staticClass: "loading-icon-leaf loading-icon-leaf_11" })])]), t._v(" "), s("div", { staticClass: "text" }, [t._v(t._s(t.text))])])])], 1);
    },
        i = [],
        o = { render: e, staticRenderFns: i };a.a = o;
  }, xCRs: function xCRs(t, a, s) {
    "use strict";
    var e = function e() {
      var t = this,
          a = t.$createElement,
          s = t._self._c || a;return s("div", { staticClass: "icontoast" }, [s("transition", { attrs: { name: "fade" } }, [s("div", { directives: [{ name: "show", rawName: "v-show", value: t.isShow, expression: "isShow" }], staticClass: "icontoast-wrapper" }, [s("i", { staticClass: "icon", class: t.state }), t._v(" "), s("div", { staticClass: "text" }, [t._v(t._s(t.text))])])])], 1);
    },
        i = [],
        o = { render: e, staticRenderFns: i };a.a = o;
  }, xhZc: function xhZc(t, a) {}, "z+5l": function z5l(t, a, s) {
    "use strict";
    function e(t) {
      s("iDor");
    }var i = s("kBKX"),
        o = s("xCRs"),
        n = s("VU/8"),
        r = e,
        c = n(i.a, o.a, r, null, null);a.a = c.exports;
  } }, ["a0aT"]);
//# sourceMappingURL=updatePassword.8e5781506c0922bf30b5.js.map
//# sourceMappingURL=updatePassword.8e5781506c0922bf30b5.js.map