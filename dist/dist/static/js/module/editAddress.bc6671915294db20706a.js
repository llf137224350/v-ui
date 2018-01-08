"use strict";

webpackJsonp([18], { "/wPk": function wPk(e, t, i) {
    "use strict";
    var s = function s() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("div", { staticClass: "snackbar" }, [i("transition", { attrs: { name: e.directionData[e.direction] }, on: { "after-leave": e.afterLeave } }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: e.isShow, expression: "isShow" }], staticClass: "snackbar-wrapper", class: { bottom: 1 === e.position } }, [i("div", { staticClass: "content border-1px" }, [e._v(e._s(e.content))]), e._v(" "), i("div", { staticClass: "btn", on: { click: e.hide } }, [e._v(e._s(e.btnText))])])])], 1);
    },
        a = [],
        r = { render: s, staticRenderFns: a };t.a = r;
  }, 0: function _(e, t) {}, "34KM": function KM(e, t) {}, BPMf: function BPMf(e, t, i) {
    "use strict";
    var s = i("UfaC"),
        a = i("PVO9"),
        r = i("z+5l"),
        n = i("fJwP"),
        o = i("W/7t"),
        l = i.n(o),
        d = i("43Vb");i.n(d);t.a = { created: function created() {
        var e = localStorage.getItem("u");if (e && (this.userInfo = JSON.parse(e).data), location.search) {
          this.title = "修改收货地址", this.rightText = "修改", this.deliveryId = location.search.match(/\d+/)[0];for (var t = 0; t < this.userInfo.deliveries.length; t++) {
            if (parseInt(this.userInfo.deliveries[t].deliveryId) === parseInt(this.deliveryId)) {
              this.deliveryAddress = this.userInfo.deliveries[t].deliveryAddress, this.deliveryName = this.userInfo.deliveries[t].deliveryName, this.deliveryPhone = this.userInfo.deliveries[t].deliveryPhone, this.isDefault = 1 === this.userInfo.deliveries[t].deliveryStatus;break;
            }
          }console.log(this.userInfo.deliveries);
        } else this.title = "添加收货地址", this.rightText = "添加";document.title = this.title;
      }, components: { appbarfortext: s.a, icontoast: r.a, progressbar: a.a, snackbar: n.a }, data: function data() {
        return { host: l.a.host, userInfo: void 0, title: "", deliveryId: "", deliveryName: "", deliveryPhone: "", deliveryAddress: "", isDefault: !0, rightText: "添加" };
      }, methods: { appbarLeftClick: function appbarLeftClick() {
          history.back();
        }, appbarRightClick: function appbarRightClick() {
          var e = this;if (!this.deliveryName) return this.$refs.snackbar.show("请输入收货人"), void this.$refs.deliveryName.focus();if (!this.deliveryPhone) return this.$refs.snackbar.show("请输入联系电话"), void this.$refs.deliveryPhone.focus();if (!/^1[3|4|5|8][0-9]\d{8}$/.test(this.deliveryPhone)) return this.$refs.snackbar.show("手机号码格式不对，请检查"), void this.$refs.deliveryPhone.focus();if (!this.deliveryAddress) return this.$refs.snackbar.show("请输入详细地址"), void this.$refs.deliveryAddress.focus();if (this.deliveryAddress.length <= 5) return this.$refs.snackbar.show("收货地址必须大于5"), void this.$refs.deliveryAddress.focus();var t = "添加中...",
              i = l.a.host + "/DeliveryControl/saveDelivery.do";"" != this.deliveryId && (t = "修改中...", i = l.a.host + "/DeliveryControl/updateDelivery.do"), this.$refs.progressbar.show(t), this.$http.jsonp(i, { params: { getType: "jsonp", deliveryName: this.deliveryName, deliveryAddress: this.deliveryAddress, deliveryPhone: this.deliveryPhone, deliveryStatus: this.isDefault ? 1 : 0, deliveryId: this.deliveryId, memberId: "" != this.deliveryId ? "" : this.userInfo.memberDetail.memberId }, jsonp: "jsonp" }).then(function (t) {
            e.$refs.progressbar.hide();var i = JSON.parse(t.bodyText);0 === parseInt(i.errorCode) ? (e.$refs.toast.show(i.data), setTimeout(function () {
              history.back();
            }, 1e3)) : e.$refs.toast.show(i.data, "failed");
          }, function () {
            console.log("请求失败！！！");
          });
        }, setDefault: function setDefault() {
          this.isDefault = !this.isDefault;
        } } };
  }, DN9l: function DN9l(e, t) {}, II9V: function II9V(e, t) {}, Kww7: function Kww7(e, t, i) {
    "use strict";
    t.a = { data: function data() {
        return { text: "加载中...", isShow: !1 };
      }, methods: { show: function show(e) {
          this.text = e, this.isShow = !0;
        }, hide: function hide() {
          this.isShow = !1;
        } } };
  }, LBfp: function LBfp(e, t, i) {
    "use strict";
    var s = function s() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("div", { attrs: { id: "app" } }, [i("div", { staticClass: "appbar-container" }, [i("appbarfortext", { attrs: { vtitle: e.title, color: "#fff", rightText: e.rightText }, on: { appbarLeftClick: e.appbarLeftClick, appbarRightClick: e.appbarRightClick } })], 1), e._v(" "), i("div", { staticClass: "delivery-name border-1px" }, [i("span", [e._v("收货人　")]), e._v(" "), i("input", { directives: [{ name: "model", rawName: "v-model", value: e.deliveryName, expression: "deliveryName" }], ref: "deliveryName", attrs: { type: "text" }, domProps: { value: e.deliveryName }, on: { input: function input(t) {
            t.target.composing || (e.deliveryName = t.target.value);
          } } })]), e._v(" "), i("div", { staticClass: "delivery-phone border-1px" }, [i("span", [e._v("联系电话")]), e._v(" "), i("input", { directives: [{ name: "model", rawName: "v-model", value: e.deliveryPhone, expression: "deliveryPhone" }], ref: "deliveryPhone", attrs: { type: "tel" }, domProps: { value: e.deliveryPhone }, on: { input: function input(t) {
            t.target.composing || (e.deliveryPhone = t.target.value);
          } } })]), e._v(" "), i("div", { staticClass: "delivery-address border-1px" }, [i("input", { directives: [{ name: "model", rawName: "v-model", value: e.deliveryAddress, expression: "deliveryAddress" }], ref: "deliveryAddress", attrs: { type: "text", placeholder: "请输入详细地址" }, domProps: { value: e.deliveryAddress }, on: { input: function input(t) {
            t.target.composing || (e.deliveryAddress = t.target.value);
          } } })]), e._v(" "), i("div", { staticClass: "default border-1px" }, [i("span", [e._v("设为默认地址")]), e._v(" "), i("i", { class: { "no-default": !e.isDefault }, on: { click: e.setDefault } })]), e._v(" "), i("progressbar", { ref: "progressbar" }), e._v(" "), i("icontoast", { ref: "toast" }), e._v(" "), i("snackbar", { ref: "snackbar" })], 1);
    },
        a = [],
        r = { render: s, staticRenderFns: a };t.a = r;
  }, PVO9: function PVO9(e, t, i) {
    "use strict";
    function s(e) {
      i("DN9l");
    }var a = i("Kww7"),
        r = i("vXxv"),
        n = i("VU/8"),
        o = s,
        l = n(a.a, r.a, o, null, null);t.a = l.exports;
  }, SnNN: function SnNN(e, t, i) {
    "use strict";
    function s(e) {
      i("oT1L");
    }var a = i("BPMf"),
        r = i("LBfp"),
        n = i("VU/8"),
        o = s,
        l = n(a.a, r.a, o, null, null);t.a = l.exports;
  }, UfaC: function UfaC(e, t, i) {
    "use strict";
    function s(e) {
      i("II9V");
    }var a = i("Vl/F"),
        r = i("zjpV"),
        n = i("VU/8"),
        o = s,
        l = n(a.a, r.a, o, null, null);t.a = l.exports;
  }, "Vl/F": function VlF(e, t, i) {
    "use strict";
    t.a = { props: { vtitle: { type: String, default: "标题" }, leftIcon: { type: String, default: "<i class='appbar-left-icon'></i>" }, rightText: { type: String, default: "提交" }, color: { type: String, default: "#595E5E" }, haveMenu: { type: Boolean, default: !0 } }, methods: { appbarLeftClick: function appbarLeftClick() {
          this.$emit("appbarLeftClick");
        }, appbarRightClick: function appbarRightClick() {
          this.$emit("appbarRightClick");
        } } };
  }, "W/7t": function W7t(e, t) {
    e.exports = { host: "http://101.201.122.173/" };
  }, fJwP: function fJwP(e, t, i) {
    "use strict";
    function s(e) {
      i("utuD");
    }var a = i("l0gp"),
        r = i("/wPk"),
        n = i("VU/8"),
        o = s,
        l = n(a.a, r.a, o, null, null);t.a = l.exports;
  }, iDor: function iDor(e, t) {}, kBKX: function kBKX(e, t, i) {
    "use strict";
    t.a = { data: function data() {
        return { text: "", state: "succeed", isShow: !1, timer: void 0 };
      }, props: { displayDuration: { type: Number, default: 2400 } }, methods: { show: function show(e, t) {
          this.text = e, t && (this.state = t), this.timer && clearTimeout(this.timer), this.isShow = !0;var i = this;this.timer = setTimeout(function () {
            i.isShow = !1;
          }, this.displayDuration);
        } } };
  }, l0gp: function l0gp(e, t, i) {
    "use strict";
    t.a = { data: function data() {
        return { directionData: ["top-direction", "down-direction", "left-direction", "right-direction"], isShow: !1, content: "", timer: void 0, callBack: void 0, isClick: !1 };
      }, props: { position: { type: Number, default: 0 }, direction: { type: Number, default: 0 }, btnText: { type: String, default: "确定" }, displayDuration: { type: Number, default: 5e3 } }, methods: { show: function show(e, t) {
          if (!this.isShow) {
            this.isClick = !1, this.callBack = t, this.content = e, this.timer && clearTimeout(this.timer);var i = this;i.isShow = !0, this.timer = setTimeout(function () {
              i.isShow = !1;
            }, this.displayDuration);
          }
        }, hide: function hide() {
          this.isShow = !1, this.isClick = !0;
        }, afterLeave: function afterLeave() {
          this.callBack && this.isClick && this.callBack();
        } } };
  }, loyW: function loyW(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var s = i("7+uW"),
        a = i("ORbq"),
        r = i("qJdI"),
        n = i.n(r),
        o = i("SnNN"),
        l = i("34KM"),
        d = (i.n(l), i("tb/R")),
        c = (i.n(d), i("xhZc"));i.n(c);s.a.use(a.a), s.a.use(n.a), new s.a({ template: "<editAddress/>", components: { editAddress: o.a }, data: { eventHub: new s.a() } }).$mount("#app");
  }, oT1L: function oT1L(e, t) {}, "tb/R": function tbR(e, t) {}, utuD: function utuD(e, t) {}, vXxv: function vXxv(e, t, i) {
    "use strict";
    var s = function s() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("div", { staticClass: "progressbar" }, [i("transition", { attrs: { "enter-active-class": "animated fadeIn ", "leave-active-class": "animated fadeOut " } }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: e.isShow, expression: "isShow" }], staticClass: "progressbar-wrapper" }, [i("div", { staticClass: "loading_inner_loader" }, [i("div", { staticClass: "h5ui-toast_loading_icon" }, [i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_0" }), e._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_1" }), e._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_2" }), e._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_3" }), e._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_4" }), e._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_5" }), e._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_6" }), e._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_7" }), e._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_8" }), e._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_9" }), e._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_10" }), e._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_11" })])]), e._v(" "), i("div", { staticClass: "text" }, [e._v(e._s(e.text))])])])], 1);
    },
        a = [],
        r = { render: s, staticRenderFns: a };t.a = r;
  }, xCRs: function xCRs(e, t, i) {
    "use strict";
    var s = function s() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("div", { staticClass: "icontoast" }, [i("transition", { attrs: { name: "fade" } }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: e.isShow, expression: "isShow" }], staticClass: "icontoast-wrapper" }, [i("i", { staticClass: "icon", class: e.state }), e._v(" "), i("div", { staticClass: "text" }, [e._v(e._s(e.text))])])])], 1);
    },
        a = [],
        r = { render: s, staticRenderFns: a };t.a = r;
  }, xhZc: function xhZc(e, t) {}, "z+5l": function z5l(e, t, i) {
    "use strict";
    function s(e) {
      i("iDor");
    }var a = i("kBKX"),
        r = i("xCRs"),
        n = i("VU/8"),
        o = s,
        l = n(a.a, r.a, o, null, null);t.a = l.exports;
  }, zjpV: function zjpV(e, t, i) {
    "use strict";
    var s = function s() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("div", { staticClass: "appbar", style: { background: e.color } }, [i("div", { staticClass: "appbar-left ", domProps: { innerHTML: e._s(e.leftIcon) }, on: { click: function click(t) {
            t.stopPropagation(), e.appbarLeftClick(t);
          } } }), e._v(" "), i("div", { staticClass: "appbar-title " }, [e._v(e._s(e.vtitle))]), e._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: e.haveMenu, expression: "haveMenu" }], staticClass: "appbar-right-for-text", on: { click: function click(t) {
            t.stopPropagation(), e.appbarRightClick(t);
          } } }, [i("span", { staticClass: "appbar-right-text" }, [e._v(e._s(e.rightText))])])]);
    },
        a = [],
        r = { render: s, staticRenderFns: a };t.a = r;
  } }, ["loyW"]);
//# sourceMappingURL=editAddress.bc6671915294db20706a.js.map
//# sourceMappingURL=editAddress.bc6671915294db20706a.js.map