"use strict";

webpackJsonp([23], { 0: function _(a, t) {}, "2i26": function i26(a, t, i) {
    "use strict";
    function e(a) {
      i("t0bA");
    }var n = i("MCfx"),
        s = i("JWdg"),
        o = i("VU/8"),
        r = e,
        c = o(n.a, s.a, r, null, null);t.a = c.exports;
  }, "34KM": function KM(a, t) {}, DN9l: function DN9l(a, t) {}, JWdg: function JWdg(a, t, i) {
    "use strict";
    var e = function e() {
      var a = this,
          t = a.$createElement,
          i = a._self._c || t;return i("div", { attrs: { id: "app" } }, [i("div", { staticClass: "appbar" }, [i("appbar", { attrs: { color: "#fff", haveMenu: !1, vtitle: a.title }, on: { appbarLeftClick: a.appbarLeftClick } })], 1), a._v(" "), i("div", { ref: "weddingAdvertWrapper", staticClass: "video-advert-wrapper" }, [i("ul", { staticClass: "video-advert-list-container" }, a._l(a.datas, function (t) {
        return i("li", { staticClass: "border-1px" }, [i("a", { attrs: { href: "" } }, [i("i", { directives: [{ name: "lazy", rawName: "v-lazy:background-image", value: "" + a.host + t.videoADAuthorHeadImg, expression: "`${host}${item.videoADAuthorHeadImg}`", arg: "background-image" }], staticClass: "pic" }), a._v(" "), i("div", { staticClass: "right-des" }, [i("div", { staticClass: "name" }, [a._v(a._s(t.videoADAuthorName))]), a._v(" "), i("div", { staticClass: "sign" }, [a._v(a._s(t.videoADAuthorSign))])])])]);
      }))]), a._v(" "), i("progressbar", { ref: "progressbar" })], 1);
    },
        n = [],
        s = { render: e, staticRenderFns: n };t.a = s;
  }, "K/pX": function KPX(a, t, i) {
    "use strict";
    t.a = { props: { vtitle: { type: String, default: "标题" }, leftIcon: { type: String, default: "<i class='appbar-left-icon'></i>" }, rightIcon: { type: String, default: "<i class='appbar-right-icon'></i>" }, color: { type: String, default: "#fff" }, haveMenu: { type: Boolean, default: !0 } }, methods: { appbarLeftClick: function appbarLeftClick() {
          this.$emit("appbarLeftClick");
        }, appbarRightClick: function appbarRightClick() {
          this.$emit("appbarRightClick");
        } } };
  }, Kww7: function Kww7(a, t, i) {
    "use strict";
    t.a = { data: function data() {
        return { text: "加载中...", isShow: !1 };
      }, methods: { show: function show(a) {
          this.text = a, this.isShow = !0;
        }, hide: function hide() {
          this.isShow = !1;
        } } };
  }, MCfx: function MCfx(a, t, i) {
    "use strict";
    var e = i("fwGr"),
        n = i("W/7t"),
        s = i.n(n),
        o = i("43Vb"),
        r = i.n(o),
        c = i("PVO9");t.a = { created: function created() {
        var a = this;this.$nextTick(function () {
          a.scroll = new r.a(a.$refs.weddingAdvertWrapper, { click: !0 }), a.$refs.progressbar.show("加载中..."), a.$http.jsonp(s.a.host + "/VideoADAuthorControl/queryVideoADAuthor.do", { params: { getType: "jsonp" }, jsonp: "jsonp" }).then(function (t) {
            a.datas = JSON.parse(t.bodyText).data, console.log(a.datas), a.$nextTick(function () {
              a.scroll.refresh(), a.$refs.progressbar.hide();
            });
          }, function () {
            console.log("请求失败！！！");
          });
        });
      }, components: { appbar: e.a, progressbar: c.a }, data: function data() {
        return { host: s.a.host, datas: [], scroll: void 0, title: "视频广告" };
      }, methods: { appbarLeftClick: function appbarLeftClick() {
          history.back();
        } } };
  }, PVO9: function PVO9(a, t, i) {
    "use strict";
    function e(a) {
      i("DN9l");
    }var n = i("Kww7"),
        s = i("vXxv"),
        o = i("VU/8"),
        r = e,
        c = o(n.a, s.a, r, null, null);t.a = c.exports;
  }, "Sd/g": function SdG(a, t) {}, U8ET: function U8ET(a, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var e = i("7+uW"),
        n = i("ORbq"),
        s = i("qJdI"),
        o = i.n(s),
        r = i("cTzj"),
        c = i.n(r),
        l = i("2i26"),
        d = i("34KM"),
        f = (i.n(d), i("tb/R")),
        v = (i.n(f), i("xhZc"));i.n(v);e.a.use(n.a), e.a.use(o.a), e.a.use(c.a), new e.a({ template: "<videoAdvert/>", components: { videoAdvert: l.a }, data: { eventHub: new e.a() } }).$mount("#app");
  }, "W/7t": function W7t(a, t) {
    a.exports = { host: "http://101.201.122.173/" };
  }, bgNQ: function bgNQ(a, t, i) {
    "use strict";
    var e = function e() {
      var a = this,
          t = a.$createElement,
          i = a._self._c || t;return i("div", { staticClass: "appbar border-1px", style: { background: a.color } }, [i("div", { staticClass: "appbar-left", domProps: { innerHTML: a._s(a.leftIcon) }, on: { click: function click(t) {
            t.stopPropagation(), a.appbarLeftClick(t);
          } } }), a._v(" "), i("div", { staticClass: "appbar-title " }, [a._v(a._s(a.vtitle))]), a._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: a.haveMenu, expression: "haveMenu" }], staticClass: "appbar-right", domProps: { innerHTML: a._s(a.rightIcon) }, on: { click: function click(t) {
            t.stopPropagation(), a.appbarRightClick(t);
          } } })]);
    },
        n = [],
        s = { render: e, staticRenderFns: n };t.a = s;
  }, fwGr: function fwGr(a, t, i) {
    "use strict";
    function e(a) {
      i("Sd/g");
    }var n = i("K/pX"),
        s = i("bgNQ"),
        o = i("VU/8"),
        r = e,
        c = o(n.a, s.a, r, null, null);t.a = c.exports;
  }, t0bA: function t0bA(a, t) {}, "tb/R": function tbR(a, t) {}, vXxv: function vXxv(a, t, i) {
    "use strict";
    var e = function e() {
      var a = this,
          t = a.$createElement,
          i = a._self._c || t;return i("div", { staticClass: "progressbar" }, [i("transition", { attrs: { "enter-active-class": "animated fadeIn ", "leave-active-class": "animated fadeOut " } }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: a.isShow, expression: "isShow" }], staticClass: "progressbar-wrapper" }, [i("div", { staticClass: "loading_inner_loader" }, [i("div", { staticClass: "h5ui-toast_loading_icon" }, [i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_0" }), a._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_1" }), a._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_2" }), a._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_3" }), a._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_4" }), a._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_5" }), a._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_6" }), a._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_7" }), a._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_8" }), a._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_9" }), a._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_10" }), a._v(" "), i("div", { staticClass: "loading-icon-leaf loading-icon-leaf_11" })])]), a._v(" "), i("div", { staticClass: "text" }, [a._v(a._s(a.text))])])])], 1);
    },
        n = [],
        s = { render: e, staticRenderFns: n };t.a = s;
  }, xhZc: function xhZc(a, t) {} }, ["U8ET"]);
//# sourceMappingURL=videoAdvert.3eddc72ea43351c8c1b4.js.map
//# sourceMappingURL=videoAdvert.3eddc72ea43351c8c1b4.js.map