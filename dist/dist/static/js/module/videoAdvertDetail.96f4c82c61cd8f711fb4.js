"use strict";

webpackJsonp([11], { 0: function _(t, a) {}, "2E1j": function E1j(t, a, o) {
    "use strict";
    a.a = { created: function created() {
        var t = this;this.$nextTick(function () {
          t.containerWidth = t.$refs.tablayoutHook.getBoundingClientRect().width, setTimeout(function () {
            t.indicatorShow = !0;
          }, 300);
        }), this.cIndex = this.currentIndex;var a = this,
            o = void 0;window.addEventListener("popstate", function (t) {
          if (a.hash !== location.hash) for (a.hash = location.hash, o = 0; o < a.datas.length; o++) {
            if (a.datas[o].to === location.hash.substring(1)) {
              a.cIndex = o;break;
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
          var o = t * this.itemWidth;this.$refs.itemHook.style.transform = "translateX(" + o + "px)";
        }, datas: function datas() {
          this.hash = location.hash;for (var t = 0; t < this.datas.length; t++) {
            if (this.datas[t].to === location.hash.substring(1)) {
              this.cIndex = t, this.count++;break;
            }
          }
        } } };
  }, "34KM": function KM(t, a) {}, "8eWd": function eWd(t, a, o) {
    "use strict";
    var e = function e() {
      var t = this,
          a = t.$createElement,
          o = t._self._c || a;return o("div", { ref: "tablayoutHook", staticClass: "tablayout" }, [o("ul", { staticClass: "tablayout-wrapper border-1px", style: { width: t.totalWidth + "px" } }, [t._l(t.datas, function (a, e) {
        return o("li", { staticClass: " tablayout-item", style: { width: t.itemWidth + "px" } }, [o("router-link", { class: { active: e === t.cIndex }, style: { color: e === t.cIndex ? t.color + " !important" : t.normalColor + " !important" }, attrs: { to: a.to, tag: "a", replace: "replace" }, domProps: { innerHTML: t._s(a.text) } })], 1);
      }), t._v(" "), o("div", { directives: [{ name: "show", rawName: "v-show", value: t.indicatorShow, expression: "indicatorShow" }], ref: "itemHook", staticClass: "indicator border-1px", style: { width: t.itemWidth + "px", background: t.color } })], 2), t._v(" "), o("i", { staticClass: "tablayout_before" }), t._v(" "), o("i", { staticClass: "tablayout_after" })]);
    },
        i = [],
        n = { render: e, staticRenderFns: i };a.a = n;
  }, "8ono": function ono(t, a, o) {
    "use strict";
    var e = function e() {
      var t = this,
          a = t.$createElement,
          o = t._self._c || a;return o("div", { attrs: { id: "app" } }, [o("div", { staticClass: "appbar" }, [o("appbar", { attrs: { color: "#fff", haveMenu: !1, vtitle: t.title }, on: { appbarLeftClick: t.appbarLeftClick } })], 1), t._v(" "), o("div", { staticClass: "tablayout" }, [o("tablayout", { attrs: { datas: t.tabDatas } })], 1), t._v(" "), o("transition", [o("keep-alive", [o("router-view")], 1)], 1)], 1);
    },
        i = [],
        n = { render: e, staticRenderFns: i };a.a = n;
  }, Ag0v: function Ag0v(t, a, o) {
    "use strict";
    var e = function e() {
      var t = this,
          a = t.$createElement,
          o = t._self._c || a;return o("div", { ref: "videoDesWrapper", staticClass: "video-des" }, [o("div", [t._v("\n        " + t._s(t.datas.videoADAuthorSynopsis) + "\n    ")]), t._v(" "), o("progressbar", { ref: "progressbar" })], 1);
    },
        i = [],
        n = { render: e, staticRenderFns: i };a.a = n;
  }, Bh5c: function Bh5c(t, a, o) {
    "use strict";
    var e = o("7+uW"),
        i = o("NYxO");e.a.use(i.a);var n = { photographyId: 0, photographyName: "", photographyTeamId: 0, weddingDressId: 0, goodsId: 0, goods: {}, cameramanId: void 0, cameramanTypeId: void 0, videoAuthorId: 0 },
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
      } };a.a = new i.a.Store({ state: n, mutations: s, actions: r, getters: c });
  }, DGk5: function DGk5(t, a, o) {
    "use strict";
    function e(t) {
      o("SvR4");
    }var i = o("Qap3"),
        n = o("Ag0v"),
        s = o("VU/8"),
        r = e,
        c = s(i.a, n.a, r, null, null);a.a = c.exports;
  }, DN9l: function DN9l(t, a) {}, JPp0: function JPp0(t, a, o) {
    "use strict";
    function e(t) {
      o("pQLe");
    }var i = o("2E1j"),
        n = o("8eWd"),
        s = o("VU/8"),
        r = e,
        c = s(i.a, n.a, r, null, null);a.a = c.exports;
  }, "K/pX": function KPX(t, a, o) {
    "use strict";
    a.a = { props: { vtitle: { type: String, default: "标题" }, leftIcon: { type: String, default: "<i class='appbar-left-icon'></i>" }, rightIcon: { type: String, default: "<i class='appbar-right-icon'></i>" }, color: { type: String, default: "#fff" }, haveMenu: { type: Boolean, default: !0 } }, methods: { appbarLeftClick: function appbarLeftClick() {
          this.$emit("appbarLeftClick");
        }, appbarRightClick: function appbarRightClick() {
          this.$emit("appbarRightClick");
        } } };
  }, Kww7: function Kww7(t, a, o) {
    "use strict";
    a.a = { data: function data() {
        return { text: "加载中...", isShow: !1 };
      }, methods: { show: function show(t) {
          this.text = t, this.isShow = !0;
        }, hide: function hide() {
          this.isShow = !1;
        } } };
  }, PVO9: function PVO9(t, a, o) {
    "use strict";
    function e(t) {
      o("DN9l");
    }var i = o("Kww7"),
        n = o("vXxv"),
        s = o("VU/8"),
        r = e,
        c = s(i.a, n.a, r, null, null);a.a = c.exports;
  }, Pdsx: function Pdsx(t, a, o) {
    "use strict";
    function e(t) {
      o("y21X");
    }var i = o("YMDO"),
        n = o("8ono"),
        s = o("VU/8"),
        r = e,
        c = s(i.a, n.a, r, null, null);a.a = c.exports;
  }, Qap3: function Qap3(t, a, o) {
    "use strict";
    var e = o("W/7t"),
        i = o.n(e),
        n = o("43Vb"),
        s = o.n(n),
        r = o("PVO9"),
        c = o("NYxO");a.a = { computed: o.i(c.c)(["videoAuthorId"]), created: function created() {
        var t = this;this.$nextTick(function () {
          window.onload = function () {
            new s.a(t.$refs.videoDesWrapper, { click: !0 });
          }, t.$refs.progressbar.show("加载中..."), t.$http.jsonp(i.a.host + "/VideoADAuthorControl/queryVideoADAuthorById.do", { params: { getType: "jsonp", videoADAuthorId: 0 === t.videoAuthorId ? t.$route.params.id : t.videoAuthorId }, jsonp: "jsonp" }).then(function (a) {
            t.datas = JSON.parse(a.bodyText).data, console.log(t.datas), t.$nextTick(function () {
              t.$refs.progressbar.hide();
            });
          }, function () {
            console.log("请求失败！！！");
          });
        });
      }, components: { progressbar: r.a }, data: function data() {
        return { scroll: void 0, datas: [""], host: i.a.host };
      } };
  }, "Sd/g": function SdG(t, a) {}, SvR4: function SvR4(t, a) {}, "W/7t": function W7t(t, a) {
    t.exports = { host: "http://101.201.122.173/" };
  }, WfTt: function WfTt(t, a, o) {
    "use strict";
    Object.defineProperty(a, "__esModule", { value: !0 });var e = o("7+uW"),
        i = o("Bh5c"),
        n = o("/ocq"),
        s = o("ORbq"),
        r = o("qJdI"),
        c = o.n(r),
        d = o("cTzj"),
        u = o.n(d),
        l = o("wc+/"),
        h = o("DGk5"),
        p = o("Pdsx"),
        f = o("34KM"),
        v = (o.n(f), o("tb/R")),
        m = (o.n(v), o("xhZc"));o.n(m);e.a.use(n.a), e.a.use(s.a), e.a.use(c.a), e.a.use(u.a);var g = [{ path: "*", component: l.a }, { path: "/videoWorks/:id", component: l.a }, { path: "/videoDes/:id", component: h.a }],
        I = new n.a({ routes: g });new e.a({ template: "<videoAdvertDetail/>", components: { videoAdvertDetail: p.a }, store: i.a, router: I, data: { eventHub: new e.a() } }).$mount("#app");
  }, YMDO: function YMDO(t, a, o) {
    "use strict";
    var e = o("Dd8w"),
        i = o.n(e),
        n = o("fwGr"),
        s = o("JPp0"),
        r = o("W/7t"),
        c = o.n(r),
        d = o("NYxO");a.a = { components: { appbar: n.a, tablayout: s.a }, created: function created() {
        var t = this,
            a = decodeURIComponent(location.search).match(/\?id=(\d+)\&name=(\W+)/);this.id = a[1], this.setVideoAuthorId(this.id), this.title = "视频广告-" + a[2] + "详情页", document.title = this.title, this.$nextTick(function () {
          t.tabDatas = [{ text: "作品", to: "/videoWorks/" + t.id }, { text: "简介", to: "/videoDes/" + t.id }];
        });
      }, data: function data() {
        return { title: "", tabDatas: [{ text: "", to: "" }], host: c.a.host };
      }, methods: i()({}, o.i(d.b)(["setVideoAuthorId"]), { appbarLeftClick: function appbarLeftClick() {
          history.back();
        } }) };
  }, aqsG: function aqsG(t, a, o) {
    "use strict";
    var e = o("W/7t"),
        i = o.n(e),
        n = o("43Vb"),
        s = o.n(n),
        r = o("PVO9"),
        c = o("NYxO");a.a = { computed: o.i(c.c)(["videoAuthorId"]), created: function created() {
        var t = this;this.$nextTick(function () {
          window.onload = function () {
            new s.a(t.$refs.videoWorksWrapper, { click: !0 });
          }, t.$refs.progressbar.show("加载中..."), t.$http.jsonp(i.a.host + "/VideoADAuthorControl/queryVideoADAuthorById.do", { params: { getType: "jsonp", videoADAuthorId: 0 === t.videoAuthorId ? t.$route.params.id : t.videoAuthorId }, jsonp: "jsonp" }).then(function (a) {
            t.datas = JSON.parse(a.bodyText).data, console.log(t.datas), t.$nextTick(function () {
              t.$refs.progressbar.hide();
            });
          }, function () {
            console.log("请求失败！！！");
          });
        });
      }, components: { progressbar: r.a }, data: function data() {
        return { scroll: void 0, datas: [""], host: i.a.host };
      } };
  }, bgNQ: function bgNQ(t, a, o) {
    "use strict";
    var e = function e() {
      var t = this,
          a = t.$createElement,
          o = t._self._c || a;return o("div", { staticClass: "appbar border-1px", style: { background: t.color } }, [o("div", { staticClass: "appbar-left", domProps: { innerHTML: t._s(t.leftIcon) }, on: { click: function click(a) {
            a.stopPropagation(), t.appbarLeftClick(a);
          } } }), t._v(" "), o("div", { staticClass: "appbar-title " }, [t._v(t._s(t.vtitle))]), t._v(" "), o("div", { directives: [{ name: "show", rawName: "v-show", value: t.haveMenu, expression: "haveMenu" }], staticClass: "appbar-right", domProps: { innerHTML: t._s(t.rightIcon) }, on: { click: function click(a) {
            a.stopPropagation(), t.appbarRightClick(a);
          } } })]);
    },
        i = [],
        n = { render: e, staticRenderFns: i };a.a = n;
  }, fvHv: function fvHv(t, a, o) {
    "use strict";
    var e = function e() {
      var t = this,
          a = t.$createElement,
          o = t._self._c || a;return o("div", { ref: "videoWorksWrapper", staticClass: "video-works" }, [o("ul", { staticClass: "video-works-container" }, t._l(t.datas.videoADWorksList, function (a) {
        return o("li", { staticClass: "border-1px" }, [o("video", { attrs: { src: "" + t.host + a.videoADWorksVideo, width: "100%", height: "100%", poster: "" + t.host + a.videoADWorksScreenshot, controls: "controls" } }), t._v(" "), o("div", { staticClass: "video-title" }, [t._v(t._s(a.videoADWorksTitle))])]);
      })), t._v(" "), o("progressbar", { ref: "progressbar" })], 1);
    },
        i = [],
        n = { render: e, staticRenderFns: i };a.a = n;
  }, fwGr: function fwGr(t, a, o) {
    "use strict";
    function e(t) {
      o("Sd/g");
    }var i = o("K/pX"),
        n = o("bgNQ"),
        s = o("VU/8"),
        r = e,
        c = s(i.a, n.a, r, null, null);a.a = c.exports;
  }, pQLe: function pQLe(t, a) {}, spTf: function spTf(t, a) {}, "tb/R": function tbR(t, a) {}, vXxv: function vXxv(t, a, o) {
    "use strict";
    var e = function e() {
      var t = this,
          a = t.$createElement,
          o = t._self._c || a;return o("div", { staticClass: "progressbar" }, [o("transition", { attrs: { "enter-active-class": "animated fadeIn ", "leave-active-class": "animated fadeOut " } }, [o("div", { directives: [{ name: "show", rawName: "v-show", value: t.isShow, expression: "isShow" }], staticClass: "progressbar-wrapper" }, [o("div", { staticClass: "loading_inner_loader" }, [o("div", { staticClass: "h5ui-toast_loading_icon" }, [o("div", { staticClass: "loading-icon-leaf loading-icon-leaf_0" }), t._v(" "), o("div", { staticClass: "loading-icon-leaf loading-icon-leaf_1" }), t._v(" "), o("div", { staticClass: "loading-icon-leaf loading-icon-leaf_2" }), t._v(" "), o("div", { staticClass: "loading-icon-leaf loading-icon-leaf_3" }), t._v(" "), o("div", { staticClass: "loading-icon-leaf loading-icon-leaf_4" }), t._v(" "), o("div", { staticClass: "loading-icon-leaf loading-icon-leaf_5" }), t._v(" "), o("div", { staticClass: "loading-icon-leaf loading-icon-leaf_6" }), t._v(" "), o("div", { staticClass: "loading-icon-leaf loading-icon-leaf_7" }), t._v(" "), o("div", { staticClass: "loading-icon-leaf loading-icon-leaf_8" }), t._v(" "), o("div", { staticClass: "loading-icon-leaf loading-icon-leaf_9" }), t._v(" "), o("div", { staticClass: "loading-icon-leaf loading-icon-leaf_10" }), t._v(" "), o("div", { staticClass: "loading-icon-leaf loading-icon-leaf_11" })])]), t._v(" "), o("div", { staticClass: "text" }, [t._v(t._s(t.text))])])])], 1);
    },
        i = [],
        n = { render: e, staticRenderFns: i };a.a = n;
  }, "wc+/": function wc(t, a, o) {
    "use strict";
    function e(t) {
      o("spTf");
    }var i = o("aqsG"),
        n = o("fvHv"),
        s = o("VU/8"),
        r = e,
        c = s(i.a, n.a, r, null, null);a.a = c.exports;
  }, xhZc: function xhZc(t, a) {}, y21X: function y21X(t, a) {} }, ["WfTt"]);
//# sourceMappingURL=videoAdvertDetail.96f4c82c61cd8f711fb4.js.map
//# sourceMappingURL=videoAdvertDetail.96f4c82c61cd8f711fb4.js.map