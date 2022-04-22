// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
Vue.use(Vuex)

import 'common/stylus/index.styl'
import demo from './demo.vue'
import home from "components/demo/home.vue"
import AppBarDemo from "components/demo/AppBarDemo.vue"
import item from "components/demo/item.vue"
import SearchBarDemo from "components/demo/SearchBarDemo.vue"
import TablayoutDemo from "components/demo/TablayoutDemo.vue"
import ToastDemo from "components/demo/ToastDemo.vue"
import NotificationDemo from "components/demo/NotificationDemo.vue"
import SnackBarDemo from "components/demo/SnackBarDemo.vue"
import AlertDemo from "components/demo/AlertDemo.vue"
import ConfirmDemo from "components/demo/ConfirmDemo.vue"
import PromptDemo from "components/demo/PromptDemo.vue"
import ActionSheetDemo from "components/demo/ActionSheetDemo.vue"
import TimePickerDemo from "components/demo/TimePickerDemo.vue"
import DatePickerDemo from "components/demo/DatePickerDemo.vue"
import DateTimePickerDemo from "components/demo/DateTimePickerDemo.vue"
import AreaPickerDemo from "components/demo/AreaPickerDemo.vue"
import PopupPickerDemo from "components/demo/PopupPickerDemo.vue"
import ProgressBarDemo from "components/demo/ProgressBarDemo.vue"
import ProgressDemo from "components/demo/ProgressDemo.vue"
import CircularProgressDemo from "components/demo/CircularProgressDemo.vue"
import LoadingDemo from "components/demo/LoadingDemo.vue"
import RangeSliderDemo from "components/demo/RangeSliderDemo.vue"
import SwitchDemo from "components/demo/SwitchDemo.vue"
import CheckBoxDemo from "components/demo/CheckBoxDemo.vue"
import RadioDemo from "components/demo/RadioDemo.vue"
import NumberKeyboardDemo from "components/demo/NumberKeyboardDemo.vue"
import ShareForWXDemo from "components/demo/ShareForWXDemo.vue"
import StarDemo from "components/demo/StarDemo.vue"
import DividerDemo from "components/demo/DividerDemo.vue"
import CellSwipeDemo from "components/demo/CellSwipeDemo.vue"
import CellBoxDemo from "components/demo/CellBoxDemo.vue"
import BadgeDemo from "components/demo/BadgeDemo.vue"
import VMapDemo from "components/demo/VMapDemo.vue"
import VInputDemo from "components/demo/VInputDemo.vue"
import VTextareaDemo from "components/demo/VTextareaDemo.vue"
import DrawCircleDemo from "components/demo/DrawCircleDemo.vue"
import TimeLineDemo from "components/demo/TimeLineDemo.vue"
import Pull2RefreshDemo from "components/demo/Pull2RefreshDemo.vue"
import FloatButtonWXDemo from "components/demo/FloatButtonWXDemo.vue"
import SlideMenuDemo from "components/demo/SlideMenuDemo.vue"
import QuickIndexDemo from "components/demo/QuickIndexDemo.vue"
import VMenuDemo from "components/demo/VMenuDemo.vue"
//使用路由
Vue.use(VueRouter)

const routes = [
    {path: '*', component: home,meta:{keepAlive:true}},
    {path: '/AppBarDemo', component: AppBarDemo},
    {path: '/SearchBarDemo', component: SearchBarDemo},
    {
        path: '/TablayoutDemo', component: TablayoutDemo,
        children: [
            {
                path: "item/:id", component: item
            }
        ]
    },
    {path: '/ToastDemo', component: ToastDemo},
    {path: '/NotificationDemo', component: NotificationDemo},
    {path: '/SnackBarDemo', component: SnackBarDemo},
    {path: '/AlertDemo', component: AlertDemo},
    {path: '/ConfirmDemo', component: ConfirmDemo},
    {path: '/PromptDemo', component: PromptDemo},
    {path: '/ActionSheetDemo', component: ActionSheetDemo},
    {path: '/TimePickerDemo', component: TimePickerDemo},
    {path: '/DatePickerDemo', component: DatePickerDemo},
    {path: '/DateTimePickerDemo', component: DateTimePickerDemo},
    {path: '/AreaPickerDemo', component: AreaPickerDemo},
    {path: '/PopupPickerDemo', component: PopupPickerDemo},
    {path: '/ProgressBarDemo', component: ProgressBarDemo},
    {path: '/ProgressDemo', component: ProgressDemo},
    {path: '/CircularProgressDemo', component: CircularProgressDemo},
    {path: '/LoadingDemo', component: LoadingDemo},
    {path: '/RangeSliderDemo', component: RangeSliderDemo},
    {path: '/SwitchDemo', component: SwitchDemo},
    {path: '/CheckBoxDemo', component: CheckBoxDemo},
    {path: '/RadioDemo', component: RadioDemo},
    {path: '/NumberKeyboardDemo', component: NumberKeyboardDemo},
    {path: '/ShareForWXDemo', component: ShareForWXDemo},
    {path: '/StarDemo', component: StarDemo},
    {path: '/DividerDemo', component: DividerDemo},
    {path: '/CellSwipeDemo', component: CellSwipeDemo},
    {path: '/CellBoxDemo', component: CellBoxDemo},
    {path: '/BadgeDemo', component: BadgeDemo},
    {path: '/VMapDemo', component: VMapDemo},
    {path: '/VInputDemo', component: VInputDemo},
    {path: '/VTextareaDemo', component: VTextareaDemo},
    {path: '/DrawCircleDemo', component: DrawCircleDemo},
    {path: '/TimeLineDemo', component: TimeLineDemo},
    {path: '/Pull2RefreshDemo', component: Pull2RefreshDemo},
    {path: '/FloatButtonWXDemo', component: FloatButtonWXDemo},
    {path: '/SlideMenuDemo', component: SlideMenuDemo},
    {path: '/QuickIndexDemo', component: QuickIndexDemo},
    {path: '/VMenuDemo', component: VMenuDemo},

]
let state = {
    scrollTop: 0
};
let mutations = {
    setScrollTop(state, scrollTop) {
        state.scrollTop = scrollTop;
    }
}
let actions = {
    setScrollTop(state, scrollTop) {
        state.commit('setScrollTop', scrollTop)
    }
}
let getters = {
    scrollTop(context) {
        return context.scrollTop
    }
}
let store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
console.log(store);
// 创建路由
const router = new VueRouter({
    routes
});
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
    template: '<demo/>',
    components: {demo},
    store,
    router,
    data: {
        eventHub: new Vue() // 用于子控件向父控件传递事件  radio需要
    }
}).$mount('#app')



