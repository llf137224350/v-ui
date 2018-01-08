'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//vuew配置
_vue2.default.use(_vuex2.default);
// 这里定义初始值
var state = {
    photographyId: 0,
    photographyName: "",
    photographyTeamId: 0,
    weddingDressId: 0,
    goodsId: 0,
    goods: {},
    cameramanId: undefined,
    cameramanTypeId: undefined,
    videoAuthorId: 0
};

var mutations = {
    setPhotographyId: function setPhotographyId(state, id) {
        state.photographyId = id;
    },
    setPhotographyName: function setPhotographyName(state, name) {
        state.photographyName = name;
    },
    setPhotographyTeamId: function setPhotographyTeamId(state, id) {
        state.photographyTeamId = id;
    },
    setWeddingDressId: function setWeddingDressId(state, id) {
        state.weddingDressId = id;
    },
    setGoodsId: function setGoodsId(state, id) {
        state.goodsId = id;
    },
    setGoods: function setGoods(state, goods) {
        state.goods = goods;
    },
    setCameramanId: function setCameramanId(state, cameramanId) {
        state.cameramanId = cameramanId;
    },
    setCameramanTypeId: function setCameramanTypeId(state, cameramanTypeId) {
        state.cameramanTypeId = cameramanTypeId;
    },
    setVideoAuthorId: function setVideoAuthorId(state, videoAuthorId) {
        state.videoAuthorId = videoAuthorId;
    }
};

// 事件触发后的逻辑操作
// 参数为事件函数
var actions = {
    setPhotographyId: function setPhotographyId(state, id) {
        state.commit('setPhotographyId', id);
    },
    setPhotographyName: function setPhotographyName(state, name) {
        state.commit('setPhotographyName', name);
    },
    setPhotographyTeamId: function setPhotographyTeamId(state, id) {
        state.commit('setPhotographyTeamId', id);
    },
    setWeddingDressId: function setWeddingDressId(state, id) {
        state.commit('setWeddingDressId', id);
    },
    setGoodsId: function setGoodsId(state, id) {
        state.commit('setGoodsId', id);
    },
    setGoods: function setGoods(state, goods) {
        state.commit('setGoods', goods);
    },
    setCameramanId: function setCameramanId(state, cameramanId) {
        state.commit('setCameramanId', cameramanId);
    },
    setCameramanTypeId: function setCameramanTypeId(state, cameramanTypeId) {
        state.commit('setCameramanTypeId', cameramanTypeId);
    },
    setVideoAuthorId: function setVideoAuthorId(state, videoAuthorId) {
        state.commit('setVideoAuthorId', videoAuthorId);
    }
};

// 返回改变后的数值
var getters = {
    photographyId: function photographyId(context) {
        return context.photographyId;
    },
    photographyName: function photographyName(context) {
        return context.photographyName;
    },
    photographyTeamId: function photographyTeamId(context) {
        return context.photographyTeamId;
    },
    weddingDressId: function weddingDressId(context) {
        return context.weddingDressId;
    },
    goodsId: function goodsId(context) {
        return context.goodsId;
    },
    goods: function goods(context) {
        return context.goods;
    },
    cameramanId: function cameramanId(context) {
        return context.cameramanId;
    },
    cameramanTypeId: function cameramanTypeId(context) {
        return context.cameramanTypeId;
    },
    videoAuthorId: function videoAuthorId(context) {
        return context.videoAuthorId;
    }
};

exports.default = new _vuex2.default.Store({
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
});
//# sourceMappingURL=store.js.map