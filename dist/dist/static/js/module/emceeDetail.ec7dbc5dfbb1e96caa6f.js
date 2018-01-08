"use strict";

webpackJsonp([12], { 0: function _(t, a) {}, "29ad": function ad(t, a, e) {
    "use strict";
    var o = function o() {
      var t = this,
          a = t.$createElement,
          e = t._self._c || a;return e("div", { attrs: { id: "app" } }, [e("div", { staticClass: "appbar" }, [e("appbar", { attrs: { color: "#fff", haveMenu: !1, vtitle: t.title }, on: { appbarLeftClick: t.appbarLeftClick } })], 1), t._v(" "), e("div", { staticClass: "tablayout" }, [e("tablayout", { attrs: { datas: t.tabDatas } })], 1), t._v(" "), e("transition", [e("keep-alive", [e("router-view")], 1)], 1)], 1);
    },
        n = [],
        i = { render: o, staticRenderFns: n };a.a = i;
  }, "2E1j": function E1j(t, a, e) {
    "use strict";
    a.a = { created: function created() {
        var t = this;this.$nextTick(function () {
          t.containerWidth = t.$refs.tablayoutHook.getBoundingClientRect().width, setTimeout(function () {
            t.indicatorShow = !0;
          }, 300);
        }), this.cIndex = this.currentIndex;var a = this,
            e = void 0;window.addEventListener("popstate", function (t) {
          if (a.hash !== location.hash) for (a.hash = location.hash, e = 0; e < a.datas.length; e++) {
            if (a.datas[e].to === location.hash.substring(1)) {
              a.cIndex = e;break;
            }
          }
        });
      }, data: function data() {
        return { cIndex: 0, hash: this.datas[this.currentIndex].to, containerWidth: 0, indicatorShow: !1 };
      }, props: { datas: { type: Array, default: function _default() {
            return [];
          } }, currentIndex: { type: Number, default: 0 }, color: { type: String, defalut: "#10AAE6" }, normalColor: { type: String, defalut: "#000" } }, computed: { itemWidth: function itemWidth() {
          return this.datas.length <= 4 ? this.containerWidth / this.datas.length : .25 * this.containerWidth;
        }, totalWidth: function totalWidth() {
          return this.itemWidth * this.datas.length;
        } }, watch: { cIndex: function cIndex(t, a) {
          var e = t * this.itemWidth;this.$refs.itemHook.style.transform = "translateX(" + e + "px)";
        }, datas: function datas() {
          this.hash = location.hash;for (var t = 0; t < this.datas.length; t++) {
            if (this.datas[t].to === location.hash.substring(1)) {
              this.cIndex = t, this.count++;break;
            }
          }
        } } };
  }, "34KM": function KM(t, a) {}, "8eWd": function eWd(t, a, e) {
    "use strict";
    var o = function o() {
      var t = this,
          a = t.$createElement,
          e = t._self._c || a;return e("div", { ref: "tablayoutHook", staticClass: "tablayout" }, [e("ul", { staticClass: "tablayout-wrapper border-1px", style: { width: t.totalWidth + "px" } }, [t._l(t.datas, function (a, o) {
        return e("li", { staticClass: " tablayout-item", style: { width: t.itemWidth + "px" } }, [e("router-link", { class: { active: o === t.cIndex }, style: { color: o === t.cIndex ? t.color + " !important" : t.normalColor + " !important" }, attrs: { to: a.to, tag: "a", replace: "replace" }, domProps: { innerHTML: t._s(a.text) } })], 1);
      }), t._v(" "), e("div", { directives: [{ name: "show", rawName: "v-show", value: t.indicatorShow, expression: "indicatorShow" }], ref: "itemHook", staticClass: "indicator border-1px", style: { width: t.itemWidth + "px", background: t.color } })], 2), t._v(" "), e("i", { staticClass: "tablayout_before" }), t._v(" "), e("i", { staticClass: "tablayout_after" })]);
    },
        n = [],
        i = { render: o, staticRenderFns: n };a.a = i;
  }, Bh5c: function Bh5c(t, a, e) {
    "use strict";
    var o = e("7+uW"),
        n = e("NYxO");o.a.use(n.a);var i = { photographyId: 0, photographyName: "", photographyTeamId: 0, weddingDressId: 0, goodsId: 0, goods: {}, cameramanId: void 0, cameramanTypeId: void 0, videoAuthorId: 0 },
        s = { setPhotographyId: function setPhotographyId(t, a) {
        t.photographyId = a;
      }, setPhotographyName: function setPhotographyName(t, a) {
        t.photographyName = a;
      }, setPhotographyTeamId: function setPhotographyTeamId(t, a) {
        t.photographyTeamId = a;
      }, setWeddingDressId: function setWeddingDressId(t, a) {
        t.weddingDressId = a;
      }, setGoodsId: function setGoodsId(t, a) {
        t.goodsId = a;
      }, setGoods: function setGoods(t, a) {
        t.goods = a;
      }, setCameramanId: function setCameramanId(t, a) {
        t.cameramanId = a;
      }, setCameramanTypeId: function setCameramanTypeId(t, a) {
        t.cameramanTypeId = a;
      }, setVideoAuthorId: function setVideoAuthorId(t, a) {
        t.videoAuthorId = a;
      } },
        r = { setPhotographyId: function setPhotographyId(t, a) {
        t.commit("setPhotographyId", a);
      }, setPhotographyName: function setPhotographyName(t, a) {
        t.commit("setPhotographyName", a);
      }, setPhotographyTeamId: function setPhotographyTeamId(t, a) {
        t.commit("setPhotographyTeamId", a);
      }, setWeddingDressId: function setWeddingDressId(t, a) {
        t.commit("setWeddingDressId", a);
      }, setGoodsId: function setGoodsId(t, a) {
        t.commit("setGoodsId", a);
      }, setGoods: function setGoods(t, a) {
        t.commit("setGoods", a);
      }, setCameramanId: function setCameramanId(t, a) {
        t.commit("setCameramanId", a);
      }, setCameramanTypeId: function setCameramanTypeId(t, a) {
        t.commit("setCameramanTypeId", a);
      }, setVideoAuthorId: function setVideoAuthorId(t, a) {
        t.commit("setVideoAuthorId", a);
      } },
        c = { photographyId: function photographyId(t) {
        return t.photographyId;
      }, photographyName: function photographyName(t) {
        return t.photographyName;
      }, photographyTeamId: function photographyTeamId(t) {
        return t.photographyTeamId;
      }, weddingDressId: function weddingDressId(t) {
        return t.weddingDressId;
      }, goodsId: function goodsId(t) {
        return t.goodsId;
      }, goods: function goods(t) {
        return t.goods;
      }, cameramanId: function cameramanId(t) {
        return t.cameramanId;
      }, cameramanTypeId: function cameramanTypeId(t) {
        return t.cameramanTypeId;
      }, videoAuthorId: function videoAuthorId(t) {
        return t.videoAuthorId;
      } };a.a = new n.a.Store({ state: i, mutations: s, actions: r, getters: c });
  }, DN9l: function DN9l(t, a) {}, EWSb: function EWSb(t, a, e) {
    "use strict";
    var o = e("Dd8w"),
        n = e.n(o),
        i = e("fwGr"),
        s = e("JPp0"),
        r = e("W/7t"),
        c = e.n(r),
        d = e("NYxO");a.a = { components: { appbar: i.a, tablayout: s.a }, created: function created() {
        var t = this,
            a = decodeURIComponent(location.search).match(/\?id=(\d+)\&name=(\W+)/);this.id = a[1], this.setVideoAuthorId(this.id), this.title = "司仪-" + a[2] + "详情页", document.title = this.title, this.$nextTick(function () {
          t.tabDatas = [{ text: "作品", to: "/emceeWorks/" + t.id }, { text: "简介", to: "/emceeDes/" + t.id }];
        });
      }, data: function data() {
        return { title: "", tabDatas: [{ text: "", to: "" }], host: c.a.host };
      }, methods: n()({}, e.i(d.b)(["setVideoAuthorId"]), { appbarLeftClick: function appbarLeftClick() {
          history.back();
        } }) };
  }, GxWi: function GxWi(t, a, e) {
    "use strict";
    var o = function o() {
      var t = this,
          a = t.$createElement,
          e = t._self._c || a;return e("div", { ref: "videoDesWrapper", staticClass: "video-des" }, [e("div", [t._v("\n        " + t._s(t.datas.emceeSynopsis) + "\n    ")]), t._v(" "), e("progressbar", { ref: "progressbar" })], 1);
    },
        n = [],
        i = { render: o, staticRenderFns: n };a.a = i;
  }, JPp0: function JPp0(t, a, e) {
    "use strict";
    function o(t) {
      e("pQLe");
    }var n = e("2E1j"),
        i = e("8eWd"),
        s = e("VU/8"),
        r = o,
        c = s(n.a, i.a, r, null, null);a.a = c.exports;
  }, "K/pX": function KPX(t, a, e) {
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
  }, Omfe: function Omfe(t, a, e) {
    "use strict";
    var o = e("W/7t"),
        n = e.n(o),
        i = e("43Vb"),
        s = e.n(i),
        r = e("PVO9"),
        c = e("NYxO");a.a = { computed: e.i(c.c)(["videoAuthorId"]), created: function created() {
        var t = this;this.$nextTick(function () {
          window.onload = function () {
            new s.a(t.$refs.videoDesWrapper, { click: !0 });
          }, t.$refs.progressbar.show("加载中..."), t.$http.jsonp(n.a.host + "/EmceeControl/queryEmceeById.do", { params: { getType: "jsonp", emceeId: 0 === t.videoAuthorId ? t.$route.params.id : t.videoAuthorId }, jsonp: "jsonp" }).then(function (a) {
            t.datas = JSON.parse(a.bodyText).data, console.log(t.datas), t.$nextTick(function () {
              t.$refs.progressbar.hide();
            });
          }, function () {
            console.log("请求失败！！！");
          });
        });
      }, components: { progressbar: r.a }, data: function data() {
        return { scroll: void 0, datas: [""], host: n.a.host };
      } };
  }, PVO9: function PVO9(t, a, e) {
    "use strict";
    function o(t) {
      e("DN9l");
    }var n = e("Kww7"),
        i = e("vXxv"),
        s = e("VU/8"),
        r = o,
        c = s(n.a, i.a, r, null, null);a.a = c.exports;
  }, "Sd/g": function SdG(t, a) {}, TVmz: function TVmz(t, a, e) {
    "use strict";
    var o = function o() {
      var t = this,
          a = t.$createElement,
          e = t._self._c || a;return e("div", { ref: "videoWorksWrapper", staticClass: "video-works" }, [e("ul", { staticClass: "video-works-container" }, t._l(t.datas.emceeWorksList, function (a) {
        return e("li", { staticClass: "border-1px" }, [e("video", { attrs: { src: "" + t.host + a.emceeWorksVideo, width: "100%", height: "100%", poster: "" + t.host + a.emceeWorksScreenshot, controls: "controls" } }), t._v(" "), e("div", { staticClass: "video-title" }, [t._v(t._s(a.emceeWorksName))])]);
      })), t._v(" "), e("progressbar", { ref: "progressbar" })], 1);
    },
        n = [],
        i = { render: o, staticRenderFns: n };a.a = i;
  }, UdL0: function UdL0(t, a, e) {
    "use strict";
    Object.defineProperty(a, "__esModule", { value: !0 });var o = e("7+uW"),
        n = e("Bh5c"),
        i = e("/ocq"),
        s = e("ORbq"),
        r = e("qJdI"),
        c = e.n(r),
        d = e("cTzj"),
        l = e.n(d),
        u = e("q70B"),
        h = e("mbMm"),
        p = e("YzH+"),
        f = e("34KM"),
        m = (e.n(f), e("tb/R")),
        v = (e.n(m), e("xhZc"));e.n(v);o.a.use(i.a), o.a.use(s.a), o.a.use(c.a), o.a.use(l.a);var g = [{ path: "*", component: u.a }, { path: "/emceeWorks/:id", component: u.a }, { path: "/emceeDes/:id", component: h.a }],
        I = new i.a({ routes: g });new o.a({ template: "<emceeDetail/>", components: { emceeDetail: p.a }, store: n.a, router: I, data: { eventHub: new o.a() } }).$mount("#app");
  }, "Vm+v": function VmV(t, a) {}, "W/7t": function W7t(t, a) {
    t.exports = { host: "http://101.201.122.173/" };
  }, "YzH+": function YzH(t, a, e) {
    "use strict";
    function o(t) {
      e("z/H1");
    }var n = e("EWSb"),
        i = e("29ad"),
        s = e("VU/8"),
        r = o,
        c = s(n.a, i.a, r, null, null);a.a = c.exports;
  }, bgNQ: function bgNQ(t, a, e) {
    "use strict";
    var o = function o() {
      var t = this,
          a = t.$createElement,
          e = t._self._c || a;return e("div", { staticClass: "appbar border-1px", style: { background: t.color } }, [e("div", { staticClass: "appbar-left", domProps: { innerHTML: t._s(t.leftIcon) }, on: { click: function click(a) {
            a.stopPropagation(), t.appbarLeftClick(a);
          } } }), t._v(" "), e("div", { staticClass: "appbar-title " }, [t._v(t._s(t.vtitle))]), t._v(" "), e("div", { directives: [{ name: "show", rawName: "v-show", value: t.haveMenu, expression: "haveMenu" }], staticClass: "appbar-right", domProps: { innerHTML: t._s(t.rightIcon) }, on: { click: function click(a) {
            a.stopPropagation(), t.appbarRightClick(a);
          } } })]);
    },
        n = [],
        i = { render: o, staticRenderFns: n };a.a = i;
  }, brBW: function brBW(t, a) {}, fwGr: function fwGr(t, a, e) {
    "use strict";
    function o(t) {
      e("Sd/g");
    }var n = e("K/pX"),
        i = e("bgNQ"),
        s = e("VU/8"),
        r = o,
        c = s(n.a, i.a, r, null, null);a.a = c.exports;
  }, mbMm: function mbMm(t, a, e) {
    "use strict";
    function o(t) {
      e("brBW");
    }var n = e("Omfe"),
        i = e("GxWi"),
        s = e("VU/8"),
        r = o,
        c = s(n.a, i.a, r, null, null);a.a = c.exports;
  }, nEIq: function nEIq(t, a, e) {
    "use strict";
    var o = e("W/7t"),
        n = e.n(o),
        i = e("43Vb"),
        s = e.n(i),
        r = e("PVO9"),
        c = e("NYxO");a.a = { computed: e.i(c.c)(["videoAuthorId"]), created: function created() {
        var t = this;this.$nextTick(function () {
          window.onload = function () {
            new s.a(t.$refs.videoWorksWrapper, { click: !0 });
          }, t.$refs.progressbar.show("加载中..."), t.$http.jsonp(n.a.host + "/EmceeControl/queryEmceeById.do", { params: { getType: "jsonp", emceeId: 0 === t.videoAuthorId ? t.$route.params.id : t.videoAuthorId }, jsonp: "jsonp" }).then(function (a) {
            t.datas = JSON.parse(a.bodyText).data, console.log(t.datas), t.$nextTick(function () {
              t.$refs.progressbar.hide();
            });
          }, function () {
            console.log("请求失败！！！");
          });
        });
      }, components: { progressbar: r.a }, data: function data() {
        return { scroll: void 0, datas: [""], host: n.a.host };
      } };
  }, pQLe: function pQLe(t, a) {}, q70B: function q70B(t, a, e) {
    "use strict";
    function o(t) {
      e("Vm+v");
    }var n = e("nEIq"),
        i = e("TVmz"),
        s = e("VU/8"),
        r = o,
        c = s(n.a, i.a, r, null, null);a.a = c.exports;
  }, "tb/R": function tbR(t, a) {}, vXxv: function vXxv(t, a, e) {
    "use strict";
    var o = function o() {
      var t = this,
          a = t.$createElement,
          e = t._self._c || a;return e("div", { staticClass: "progressbar" }, [e("transition", { attrs: { "enter-active-class": "animated fadeIn ", "leave-active-class": "animated fadeOut " } }, [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.isShow, expression: "isShow" }], staticClass: "progressbar-wrapper" }, [e("div", { staticClass: "loading_inner_loader" }, [e("div", { staticClass: "h5ui-toast_loading_icon" }, [e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_0" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_1" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_2" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_3" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_4" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_5" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_6" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_7" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_8" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_9" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_10" }), t._v(" "), e("div", { staticClass: "loading-icon-leaf loading-icon-leaf_11" })])]), t._v(" "), e("div", { staticClass: "text" }, [t._v(t._s(t.text))])])])], 1);
    },
        n = [],
        i = { render: o, staticRenderFns: n };a.a = i;
  }, xhZc: function xhZc(t, a) {}, "z/H1": function zH1(t, a) {} }, ["UdL0"]);
//# sourceMappingURL=emceeDetail.ec7dbc5dfbb1e96caa6f.js.map
//# sourceMappingURL=emceeDetail.ec7dbc5dfbb1e96caa6f.js.map