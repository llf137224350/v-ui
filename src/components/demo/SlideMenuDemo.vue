<template>
    <div class="search-bar-demo">

        <SlideMenu ref="slideMenu"  :touchable="touchable" style="width: 100%;overflow: hidden">
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
                <appbar :vtitle="'SlideMenu'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
                <div style="margin-left: 16px">
                    自定义区域
                    <button @click="openMenu">展开菜单</button>
                    <button @click="setTouchAble">{{touchable?"设置触摸不可用":"设置触摸可用"}}</button>
                </div>

                <div class="tips-container">
                    <div>使用说明</div>
                    <p>
                        demo：src/components/demo/SlideMenuDemo.vue
                    </p>
                </div>
            </div>
        </SlideMenu>

    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import SlideMenu from "components/widget/SlideMenu/SlideMenu"

    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                touchable:true
            }
        },
        components: {
            appbar,
            SlideMenu
        },
        methods: {
            handleLeft(){
                this.$router.go(-1)
            },
            setTouchAble(){
                this.touchable = !this.touchable;
            },
            closeMenu(){
                this.$refs.slideMenu.closeMenu();
            },
            openMenu(){
                this.$refs.slideMenu.openMenu();
            },
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    .search-bar-demo
        background: #f7f7f7
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
        button
            margin-top 16px
            margin-left 16px
        .tips-container
            padding 16px
            & > div
                font-size 16px
                font-weight bold
                line-height 36px
            & > p
                line-height 21px

</style>