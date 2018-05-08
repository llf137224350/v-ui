<!--
   开发者：い 狂奔的蜗牛
   说明：类似于浏览器的menu，在不同浏览器中使用同样的提示效果
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="menu">
        <transition
            enter-active-class="animated-menu fadeIn-menu "
            leave-active-class="animated-menu fadeOut-menu "
        >
            <div class="menu-mask" v-show="isShow" @touchstart="hide"></div>
        </transition>
        <transition
            v-on:after-leave="afterLeave"
            enter-active-class="animated-menu  fadeIn-menu"
            leave-active-class="animated-menu fadeOut-menu"
        >
            <ul class="menu-content-wrapper" v-show="isShow"
                :style="{top:top,right:right}"
            >
                <li class="border-1px" v-for="(item,index) in menuItems" v-html="item" @click="handleClick(index)"></li>
            </ul>
        </transition>
    </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                isShow: false,
                menuItems: [],
                top: "1rem",
                right: "1rem",
                isClickItem: false,
                currentIndex: -1
            }
        },
        props: {},
        mounted() {
            // 进行rem适配 设置根元素字体大小
            this.setRootFontSize();
            window.onresize = ()=>{
                this.setRootFontSize();
            }
            window.addEventListener("popstate", (e) => {
                // 更新数据 关闭弹窗
                this.isShow = false;
            });
        },
        methods: {
            handleClick(index) {
                this.isClickItem = true;
                this.currentIndex = index;
                this.hide();
            },
            show(obj) {
                this.currentIndex = -1;
                this.isClickItem = false;
                this.top = obj && obj.top || "16px";
                this.right = obj && obj.right || "16px";
                this.menuItems = obj && obj.menuItems || [];
                this.callBacks = obj && obj.callBacks || [];
                this.isShow = true;
                // 添加一条历史记录 使其支持返回键关闭
                this.addLocation();
            },
            hide() {
                //操作浏览器返回 会触发浏览器popstate
                if (location.hash === "#target=menu") {
                    history.back();
                }
            },
            // 添加一条历史记录
            addLocation() {
                if (window.history && window.history.pushState) {
                    window.history.pushState("target", "没有用", "#target=menu");
                } else {
                    console.log("当前浏览器版本较低，不支持该功能")
                }
            },
            afterLeave() {
                if (this.currentIndex != -1) {
                    if (this.callBacks && this.callBacks[this.currentIndex]) {
                        this.callBacks[this.currentIndex]();
                    }
                }
            },
            //设置根元素字体大小
            setRootFontSize(){
                // 进行rem适配 设置根元素字体大小
                let width = document.documentElement.clientWidth || document.body.clientWidth;
                let htmlDom = document.getElementsByTagName("html")[0]
                htmlDom.style.fontSize = width / 10 + 'px';
            }
        }
    }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    /*单位转换*/
    px2rem($px)
        return ($px / 37.5) rem

    ::-webkit-scrollbar
        width 0
        height 0

    @-webkit-keyframes fadeIn-menu
        from
            opacity 0
        to
            opacity 1

    @keyframes fadeIn-menu
        from
            opacity 0
        to
            opacity 1

    @-webkit-keyframes fadeOut-menu
        from
            opacity 1
        to
            opacity 0

    @keyframes fadeOut-menu
        from
            opacity 1
        to
            opacity 0

    @media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5)
        .border-1px
            &::after
                -webkit-transform scaleY(0.7)
                transform scaleY(0.7)

    @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2)
        .border-1px
            &::after
                -webkit-transform scaleY(0.5)
                transform scaleY(0.5)

    .menu
        .animated-menu
            -webkit-animation-duration 0.6s
            animation-duration 0.6s
            -webkit-animation-fill-mode both
            animation-fill-mode both
        .zoomIn-menu
            -webkit-animation-name zoomIn-menu
            animation-name zoomIn-menu
        .zoomOut-menu
            -webkit-animation-name zoomOut-menu
            animation-name zoomOut-menu

        .fadeIn-menu
            -webkit-animation-name fadeIn-menu
            animation-name fadeIn-menu

        .fadeOut-menu
            -webkit-animation-name fadeOut-menu
            animation-name fadeOut-menu

    .menu
        .menu-mask
            position fixed
            top 0
            left 0
            right 0
            bottom 0
            background rgba(0, 0, 0, .1)
            z-index 2147483646
        .menu-content-wrapper
            position fixed
            width 40%
            top px2rem(16px)
            right px2rem(16px)
            min-height px2rem(36px)
            background-color #ffffff
            z-index 2147483647
            border-radius px2rem(5px)
            &::before
                content ""
                position absolute
                top px2rem(-15px)
                right px2rem(9px)
                display block
                width 0
                height 0
                border px2rem(8px) solid #fff
                border-top-color transparent
                border-left-color transparent
                border-right-color transparent
            & > li:active
                background: #f7f7f7
            & > li
                height px2rem(44px)
                line-height px2rem(44px)
                padding 0 px2rem(16px)
                position relative
                overflow hidden
                font-size px2rem(14px)
                &::after
                    content ""
                    display block
                    position absolute
                    left 0
                    right 0
                    bottom 0
                    border-bottom px2rem(1px) solid #f5f5f5
            & > li:first-of-type
                border-top-left-radius px2rem(5px)
                border-top-right-radius px2rem(5px)
            & > li:last-of-type
                border-bottom-left-radius px2rem(5px)
                border-bottom-right-radius px2rem(5px)
                &::after
                    display none
</style>
