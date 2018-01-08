"use strict";

webpackJsonp([10], { 0: function _(t, o) {}, "2E1j": function E1j(t, o, a) {
    "use strict";
    o.a = { created: function created() {
        var t = this;this.$nextTick(function () {
          t.containerWidth = t.$refs.tablayoutHook.getBoundingClientRect().width, setTimeout(function () {
            t.indicatorShow = !0;
          }, 300);
        }), this.cIndex = this.currentIndex;var o = this,
            a = void 0;window.addEventListener("popstate", function (t) {
          if (o.hash !== location.hash) for (o.hash = location.hash, a = 0; a < o.datas.length; a++) {
            if (o.datas[a].to === location.hash.substring(1)) {
              o.cIndex = a, o.count++, o.$emit("historyCount", o.count);break;
            }
          }
        });
      }, data: function data() {
        return { count: 1, cIndex: 0, hash: this.datas[this.currentIndex].to, containerWidth: 0, indicatorShow: !1 };
      }, props: { datas: { type: Array, default: function _default() {
            return [];
          } }, currentIndex: { type: Number, default: 0 }, color: { type: String, defalut: "#10AAE6" }, normalColor: { type: String, defalut: "#000" } }, computed: { itemWidth: function itemWidth() {
          return this.datas.length <= 4 ? this.containerWidth / this.datas.length : .25 * this.containerWidth;
        }, totalWidth: function totalWidth() {
          return this.itemWidth * this.datas.length;
        } }, watch: { cIndex: function cIndex(t, o) {
          var a = t * this.itemWidth;this.$refs.itemHook.style.transform = "translateX(" + a + "px)";
        }, datas: function datas() {
          this.hash = location.hash;for (var t = 0; t < this.datas.length; t++) {
            if (this.datas[t].to === location.hash.substring(1)) {
              this.cIndex = t, this.count++;break;
            }
          }
        } } };
  }, "34KM": function KM(t, o) {}, "8eWd": function eWd(t, o, a) {
    "use strict";
    var e = function e() {
      var t = this,
          o = t.$createElement,
          a = t._self._c || o;return a("div", { ref: "tablayoutHook", staticClass: "tablayout" }, [a("ul", { staticClass: "tablayout-wrapper border-1px", style: { width: t.totalWidth + "px" } }, [t._l(t.datas, function (o, e) {
        return a("li", { staticClass: " tablayout-item", style: { width: t.itemWidth + "px" } }, [a("router-link", { class: { active: e === t.cIndex }, style: { color: e === t.cIndex ? t.color + " !important" : t.normalColor + " !important" }, attrs: { to: o.to, tag: "a" }, domProps: { innerHTML: t._s(o.text) } })], 1);
      }), t._v(" "), a("div", { directives: [{ name: "show", rawName: "v-show", value: t.indicatorShow, expression: "indicatorShow" }], ref: "itemHook", staticClass: "indicator border-1px", style: { width: t.itemWidth + "px", background: t.color } })], 2), t._v(" "), a("i", { staticClass: "tablayout_before" }), t._v(" "), a("i", { staticClass: "tablayout_after" })]);
    },
        n = [],
        i = { render: e, staticRenderFns: n };o.a = i;
  }, "8ono": function ono(t, o, a) {
    "use strict";
    var e = function e() {
      var t = this,
          o = t.$createElement,
          a = t._self._c || o;return a("div", { attrs: { id: "app" } }, [a("div", { staticClass: "appbar" }, [a("appbar", { attrs: { color: "#fff", haveMenu: !1, vtitle: t.title }, on: { appbarLeftClick: t.appbarLeftClick } })], 1), t._v(" "), a("div", { staticClass: "tablayout" }, [a("tablayout", { attrs: { datas: t.tabDatas }, on: { historyCount: t.historyCount } })], 1), t._v(" "), a("transition", [a("keep-alive", [a("router-view")], 1)], 1)], 1);
    },
        n = [],
        i = { render: e, staticRenderFns: n };o.a = i;
  }, Ag0v: function Ag0v(t, o, a) {
    "use strict";
    var e = function e() {
      var t = this,
          o = t.$createElement,
          a = t._self._c || o;return a("div", { ref: "videoDesWrapper", staticClass: "video-des" }, [a("div", [t._v("\n        " + t._s(t.datas.videoADAuthorSynopsis) + "\n    ")]), t._v(" "), a("progressbar", { ref: "progressbar" })], 1);
    },
        n = [],
        i = { render: e, staticRenderFns: n };o.a = i;
  }, Bh5c: function Bh5c(t, o, a) {
    "use strict";
    var e = a("7+uW"),
        n = a("NYxO");e.a.use(n.a);var i = { photographyId: 0, photographyName: "", photographyTeamId: 0, weddingDressId: 0, goodsId: 0, goods: {}, cameramanId: void 0, cameramanTypeId: void 0, videoAuthorId: 0 },
        s = { setPhotographyId: function setPhotographyId(t, o) {
        t.photographyId = o;
      }, setPhotographyName: function setPhotographyName(t, o) {
        t.photographyName = o;
      }, setPhotographyTeamId: function setPhotographyTeamId(t, o) {
        t.photographyTeamId = o;
      }, setWeddingDressId: function setWeddingDressId(t, o) {
        t.weddingDressId = o;
      }, setGoodsId: function setGoodsId(t, o) {
        t.goodsId = o;
      }, setGoods: function setGoods(t, o) {
        t.goods = o;
      }, setCameramanId: function setCameramanId(t, o) {
        t.cameramanId = o;
      }, setCameramanTypeId: function setCameramanTypeId(t, o) {
        t.cameramanTypeId = o;
      }, setVideoAuthorId: function setVideoAuthorId(t, o) {
        t.videoAuthorId = o;
      } },
        r = { setPhotographyId: function setPhotographyId(t, o) {
        t.commit("setPhotographyId", o);
      }, setPhotographyName: function setPhotographyName(t, o) {
        t.commit("setPhotographyName", o);
      }, setPhotographyTeamId: function setPhotographyTeamId(t, o) {
        t.commit("setPhotographyTeamId", o);
      }, setWeddingDressId: function setWeddingDressId(t, o) {
        t.commit("setWeddingDressId", o);
      }, setGoodsId: function setGoodsId(t, o) {
        t.commit("setGoodsId", o);
      }, setGoods: function setGoods(t, o) {
        t.commit("setGoods", o);
      }, setCameramanId: function setCameramanId(t, o) {
        t.commit("setCameramanId", o);
      }, setCameramanTypeId: function setCameramanTypeId(t, o) {
        t.commit("setCameramanTypeId", o);
      }, setVideoAuthorId: function setVideoAuthorId(t, o) {
        t.commit("setVideoAuthorId", o);
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
      } };o.a = new n.a.Store({ state: i, mutations: s, actions: r, getters: c });
  }, DGk5: function DGk5(t, o, a) {
    "use strict";
    function e(t) {
      a("SvR4");
    }var n = a("Qap3"),
        i = a("Ag0v"),
        s = a("VU/8"),
        r = e,
        c = s(n.a, i.a, r, null, null);o.a = c.exports;
  }, DN9l: function DN9l(t, o) {}, JPp0: function JPp0(t, o, a) {
    "use strict";
    function e(t) {
      a("pQLe");
    }var n = a("2E1j"),
        i = a("8eWd"),
        s = a("VU/8"),
        r = e,
        c = s(n.a, i.a, r, null, null);o.a = c.exports;
  }, "K/pX": function KPX(t, o, a) {
    "use strict";
    o.a = { props: { vtitle: { type: String, default: "标题" }, leftIcon: { type: String, default: "<i class='appbar-left-icon'></i>" }, rightIcon: { type: String, default: "<i class='appbar-right-icon'></i>" }, color: { type: String, default: "#fff" }, haveMenu: { type: Boolean, default: !0 } }, methods: { appbarLeftClick: function appbarLeftClick() {
          this.$emit("appbarLeftClick");
        }, appbarRightClick: function appbarRightClick() {
          this.$emit("appbarRightClick");
        } } };
  }, Kww7: function Kww7(t, o, a) {
    "use strict";
    o.a = { data: function data() {
        return { text: "加载中...", isShow: !1 };
      }, methods: { show: function show(t) {
          this.text = t, this.isShow = !0;
        }, hide: function hide() {
          this.isShow = !1;
        } } };
  }, PVO9: function PVO9(t, o, a) {
    "use strict";
    function e(t) {
      a("DN9l");
    }var n = a("Kww7"),
        i = a("vXxv"),
        s = a("VU/8"),
        r = e,
        c = s(n.a, i.a, r, null, null);o.a = c.exports;
  }, Pdsx: function Pdsx(t, o, a) {
    "use strict";
    function e(t) {
      a("y21X");
    }var n = a("YMDO"),
        i = a("8ono"),
        s = a("VU/8"),
        r = e,
        c = s(n.a, i.a, r, null, null);o.a = c.exports;
  }, Qap3: function Qap3(t, o, a) {
    "use strict";
    var e = a("W/7t"),
        n = a.n(e),
        i = a("43Vb"),
        s = a.n(i),
        r = a("PVO9"),
        c = a("NYxO");o.a = { computed: a.i(c.c)(["videoAuthorId"]), created: function created() {
        var t = this;this.$nextTick(function () {
          window.onload = function () {
            new s.a(t.$refs.videoDesWrapper, { click: !0 });
          }, t.$refs.progressbar.show("加载中..."), t.$http.jsonp(n.a.host + "/VideoADAuthorControl/queryVideoADAuthorById.do", { params: { getType: "jsonp", videoADAuthorId: 0 === t.videoAuthorId ? t.$route.params.id : t.videoAuthorId }, jsonp: "jsonp" }).then(function (o) {
            t.datas = JSON.parse(o.bodyText).data, console.log(t.datas), t.$nextTick(function () {
              t.$refs.progressbar.hide();
            });
          }, function () {
            console.log("请求失败！！！");
          });
        });
      }, components: { progressbar: r.a }, data: function data() {
        return { scroll: void 0, datas: [""], host: n.a.host };
      } };
  }, "Sd/g": function SdG(t, o) {}, SvR4: function SvR4(t, o) {}, "W/7t": function W7t(t, o) {
    t.exports = { host: "http://101.201.122.173/" };
  }, WfTt: function WfTt(t, o, a) {
    "use strict";
    Object.defineProperty(o, "__esModule", { value: !0 });var e = a("7+uW"),
        n = a("Bh5c"),
        i = a("/ocq"),
        s = a("ORbq"),
        r = a("qJdI"),
        c = a.n(r),
        d = a("cTzj"),
        u = a.n(d),
        l = a("wc+/"),
        h = a("DGk5"),
        f = a("Pdsx"),
        p = a("34KM"),
        v = (a.n(p), a("tb/R")),
        m = (a.n(v), a("xhZc"));a.n(m);e.a.use(i.a), e.a.use(s.a), e.a.use(c.a), e.a.use(u.a);var g = [{ path: "*", component: l.a }, { path: "/videoWorks/:id", component: l.a }, { path: "/videoDes/:id", component: h.a }],
        I = new i.a({ routes: g });new e.a({ template: "<videoAdvertDetail/>", components: { videoAdvertDetail: f.a }, store: n.a, router: I, data: { eventHub: new e.a() } }).$mount("#app");
  }, YMDO: function YMDO(t, o, a) {
    "use strict";
    var e = a("Dd8w"),
        n = a.n(e),
        i = a("fwGr"),
        s = a("JPp0"),
        r = a("W/7t"),
        c = a.n(r),
        d = a("NYxO");o.a = { components: { appbar: i.a, tablayout: s.a }, created: function created() {
        var t = this,
            o = decodeURIComponent(location.search).match(/\?id=(\d+)\&name=(\W+)/);this.id = o[1], this.setVideoAuthorId(this.id), this.title = "视频广告-" + o[2] + "详情页", document.title = this.title, this.$nextTick(function () {
          t.tabDatas = [{ text: "作品", to: "/videoWorks/" + t.id }, { text: "简介", to: "/videoDes/" + t.id }];
        });
      }, data: function data() {
        return { title: "", tabDatas: [{ text: "", to: "" }], count: 1, host: c.a.host };
      }, methods: n()({}, a.i(d.b)(["setVideoAuthorId"]), { appbarLeftClick: function appbarLeftClick() {
          history.go(-this.count);
        }, historyCount: function historyCount(t) {
          this.count = t;
        } }) };
  }, aqsG: function aqsG(t, o, a) {
    "use strict";
    var e = a("W/7t"),
        n = a.n(e),
        i = a("43Vb"),
        s = a.n(i),
        r = a("PVO9"),
        c = a("NYxO");o.a = { computed: a.i(c.c)(["videoAuthorId"]), created: function created() {
        var t = this;this.$nextTick(function () {
          window.onload = function () {
            new s.a(t.$refs.videoWorksWrapper, { click: !0 });
          }, t.$refs.progressbar.show("加载中..."), t.$http.jsonp(n.a.host + "/VideoADAuthorControl/queryVideoADAuthorById.do", { params: { getType: "jsonp", videoADAuthorId: 0 === t.videoAuthorId ? t.$route.params.id : t.videoAuthorId }, jsonp: "jsonp" }).then(function (o) {
            t.datas = JSON.parse(o.bodyText).data, console.log(t.datas), t.$nextTick(function () {
              t.$refs.progressbar.hide();
            });
          }, function () {
            console.log("请求失败！！！");
          });
        });
      }, components: { progressbar: r.a }, data: function data() {
        return { scroll: void 0, datas: [""], host: n.a.host };
      } };
  }, bgNQ: function bgNQ(t, o, a) {
    "use strict";
    var e = function e() {
      var t = this,
          o = t.$createElement,
          a = t._self._c || o;return a("div", { staticClass: "appbar border-1px", style: { background: t.color } }, [a("div", { staticClass: "appbar-left", domProps: { innerHTML: t._s(t.leftIcon) }, on: { click: function click(o) {
            o.stopPropagation(), t.appbarLeftClick(o);
          } } }), t._v(" "), a("div", { staticClass: "appbar-title " }, [t._v(t._s(t.vtitle))]), t._v(" "), a("div", { directives: [{ name: "show", rawName: "v-show", value: t.haveMenu, expression: "haveMenu" }], staticClass: "appbar-right", domProps: { innerHTML: t._s(t.rightIcon) }, on: { click: function click(o) {
            o.stopPropagation(), t.appbarRightClick(o);
          } } })]);
    },
        n = [],
        i = { render: e, staticRenderFns: n };o.a = i;
  }, fvHv: function fvHv(t, o, a) {
    "use strict";
    var e = function e() {
      var t = this,
          o = t.$createElement,
          a = t._self._c || o;return a("div", { ref: "videoWorksWrapper", staticClass: "video-works" }, [a("ul", { staticClass: "video-works-container" }, t._l(t.datas.videoADWorksList, function (o) {
        return a("li", { staticClass: "border-1px" }, [a("video", { attrs: { src: "" + t.host + o.videoADWorksVideo, width: "100%", height: "100%", poster: "" + t.host + o.videoADWorksScreenshot, controls: "controls" } }), t._v(" "), a("div", { staticClass: "video-title" }, [t._v(t._s(o.videoADWorksTitle))])]);
      })), t._v(" "), a("progressbar", { ref: "progressbar" })], 1);
    },
        n = [],
        i = { render: e, staticRenderFns: n };o.a = i;
  }, fwGr: function fwGr(t, o, a) {
    "use strict";
    function e(t) {
      a("Sd/g");
    }var n = a("K/pX"),
        i = a("bgNQ"),
        s = a("VU/8"),
        r = e,
        c = s(n.a, i.a, r, null, null);o.a = c.exports;
  }, pQLe: function pQLe(t, o) {}, spTf: function spTf(t, o) {}, "tb/R": function tbR(t, o) {}, vXxv: function vXxv(t, o, a) {
    "use strict";
    var e = function e() {
      var t = this,
          o = t.$createElement,
          a = t._self._c || o;return a("div", { staticClass: "progressbar" }, [a("transition", { attrs: { "enter-active-class": "animated fadeIn ", "leave-active-class": "animated fadeOut " } }, [a("div", { directives: [{ name: "show", rawName: "v-show", value: t.isShow, expression: "isShow" }], staticClass: "progressbar-wrapper" }, [a("div", { staticClass: "loading_inner_loader" }, [a("div", { staticClass: "h5ui-toast_loading_icon" }, [a("div", { staticClass: "loading-icon-leaf loading-icon-leaf_0" }), t._v(" "), a("div", { staticClass: "loading-icon-leaf loading-icon-leaf_1" }), t._v(" "), a("div", { staticClass: "loading-icon-leaf loading-icon-leaf_2" }), t._v(" "), a("div", { staticClass: "loading-icon-leaf loading-icon-leaf_3" }), t._v(" "), a("div", { staticClass: "loading-icon-leaf loading-icon-leaf_4" }), t._v(" "), a("div", { staticClass: "loading-icon-leaf loading-icon-leaf_5" }), t._v(" "), a("div", { staticClass: "loading-icon-leaf loading-icon-leaf_6" }), t._v(" "), a("div", { staticClass: "loading-icon-leaf loading-icon-leaf_7" }), t._v(" "), a("div", { staticClass: "loading-icon-leaf loading-icon-leaf_8" }), t._v(" "), a("div", { staticClass: "loading-icon-leaf loading-icon-leaf_9" }), t._v(" "), a("div", { staticClass: "loading-icon-leaf loading-icon-leaf_10" }), t._v(" "), a("div", { staticClass: "loading-icon-leaf loading-icon-leaf_11" })])]), t._v(" "), a("div", { staticClass: "text" }, [t._v(t._s(t.text))])])])], 1);
    },
        n = [],
        i = { render: e, staticRenderFns: n };o.a = i;
  }, "wc+/": function wc(t, o, a) {
    "use strict";
    function e(t) {
      a("spTf");
    }var n = a("aqsG"),
        i = a("fvHv"),
        s = a("VU/8"),
        r = e,
        c = s(n.a, i.a, r, null, null);o.a = c.exports;
  }, xhZc: function xhZc(t, o) {}, y21X: function y21X(t, o) {} }, ["WfTt"]);
//# sourceMappingURL=videoAdvertDetail.612d1b97a62dab9aebf7.js.map
//# sourceMappingURL=videoAdvertDetail.612d1b97a62dab9aebf7.js.map