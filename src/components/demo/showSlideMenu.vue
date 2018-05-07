<!--
   开发者：い 狂奔的蜗牛
   说明：显示侧滑菜单,与组件无任何直接联系 只做展示用
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="show-slide-menu" v-show="slideMenuShow">
        <SlideMenu ref="slideMenu" v-if="slideMenuShow" :touchable="touchable">
            <div slot="menu-panel" class="menu-panel">
                <i class="head-port"></i>
                <ul class="menu-items">
                    <li>菜单一</li>
                    <li>菜单二</li>
                    <li>菜单三</li>
                    <li>菜单一</li>
                    <li>菜单二</li>
                    <li>菜单三</li>
                    <li>效果自定义即可</li>
                    <li @click="closeMenu">点我关闭菜单</li>

                </ul>

            </div>
            <div slot="menu-content-panel">
                <appbar :vtitle="'滑动菜单'" :color="'#41B883'" @appbarLeftClick="appbarLeftClick"></appbar>
                自定义区域
                <button @click="openMenu">展开菜单</button>
                <button @click="setTouchAble">{{touchable?"设置触摸不可用":"设置触摸可用"}}</button>
            </div>
        </SlideMenu>
    </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar"
    import SlideMenu from "components/widget/SlideMenu/SlideMenu"
    export default {
        created(){
            window.addEventListener("popstate", (e) => {
                this.slideMenuShow = false;
            });
        },
        components: {
            appbar,
            SlideMenu
        },
        data(){
            return {
                slideMenuShow: false,
                touchable:true
            }
        },
        methods: {
            setTouchAble(){
              this.touchable = !this.touchable;
            },
            closeMenu(){
                this.$refs.slideMenu.closeMenu();
            },
            openMenu(){
                this.$refs.slideMenu.openMenu();
            },
            appbarLeftClick(){
                history.back();
            },
            show(){
                this.slideMenuShow = true;
                // 添加一条历史记录 使其支持返回键关闭
                this.addLocation();
            },
            hide(){
                //操作浏览器返回 会触发浏览器popstate
                if (location.hash === "#target=slideMenu") {
                    history.back();
                }
            },
            // 添加一条历史记录
            addLocation()
            {
                if (window.history && window.history.pushState) {
                    window.history.pushState("target", "没有用", "#target=slideMenu");
                } else {
                    console.log("当前浏览器版本较低，不支持该功能")
                }
            },
        }
    }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    .show-slide-menu
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        background: #fff
        z-index 2147483647
        .appbar
            z-index 10
        .menu-panel
            background: #222426
            position absolute
            left 0
            top 0
            width 100%
            bottom 0
            overflow-y scroll
            .head-port
                display block
                width 70px
                height 70px
                margin 32px auto
                background: #f7f7f7
                border-radius 50%
                margin-top 56px
            .menu-items
                overflow-y: scroll
            .menu-items > li
                line-height 44px
                padding 0 10px
                color #fff
</style>
