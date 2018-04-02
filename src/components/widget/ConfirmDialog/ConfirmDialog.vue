<!--
   开发者：い 狂奔的蜗牛
   说明：类似于浏览器的alert，在不同浏览器中使用同样的提示效果
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="confirm">
        <transition
            enter-active-class="animated-confirm fadeIn-confirm "
            leave-active-class="animated-confirm fadeOut-confirm "
        >
            <div class="confirm-mask" v-show="isShow"></div>
        </transition>
        <transition
            v-on:after-leave="afterLeave"
            enter-active-class="animated-confirm zoomIn-confirm "
            leave-active-class="animated-confirm zoomOut-confirm "
        >
            <div class="confirm-content-wrapper" v-show="isShow" ref="hook">
                <div class="content">
                    {{content}}
                </div>
                <div class="btn">
                    <div class="cancel" @click="hide">{{cancelText}}</div>
                    <div class="ok" @click="okHide">{{okText}}</div>
                </div>
            </div>
        </transition>
    </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                content: "",
                isShow: false,
                isClick: false,
                callBack: undefined
            }
        },
        props: {
            okText: {
                type: String,
                default: "确定"
            },
            cancelText: {
                type: String,
                default: "取消"
            }
        },
        mounted() {

            // 更新数据 关闭弹窗
            window.addEventListener("popstate",  (e)=> {
                this.isShow = false;
            });

            // 进行rem适配 设置根元素字体大小
            this.setRootFontSize();
            window.onresize = ()=>{
                this.setRootFontSize();
            }
        },
        methods: {
            show(content, callBack) {
                this.isClick = false;
                this.content = content;
                this.callBack = callBack;
                this.isShow = true;
                // 添加一条历史记录 使其支持返回键关闭
                this.addLocation();
            },
            hide() {
                //操作浏览器返回 会触发浏览器popstate
                if (location.hash === "#target=confirm") {
                    history.back();
                }
            },
            okHide() {
                this.isClick = true;
                this.hide();
            },
            //隐藏动画执行完成之后回调
            afterLeave() {
                if (this.callBack && this.isClick)
                    this.callBack();
            },
            addLocation() {
                if (window.history && window.history.pushState) {
                    window.history.pushState("target", "没有用", "#target=confirm");
                } else {
                    console.log("当前浏览器版本较低，不支持该功能")
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

    @-webkit-keyframes zoomIn-confirm
        from
            opacity 0
            -webkit-transform translate(-50%, -50%) scale3d(.3, .3, .3)
            transform translate(-50%, -50%) scale3d(.3, .3, .3)
        50%
            opacity 1

    @keyframes zoomIn-confirm
        from
            opacity 0
            -webkit-transform translate(-50%, -50%) scale3d(.3, .3, .3)
            transform translate(-50%, -50%) scale3d(.3, .3, .3)
        50%
            opacity 1

    @-webkit-keyframes zoomOut-confirm
        from
            opacity 1
        50%
            opacity 0
            -webkit-transform translate(-50%, -50%) scale3d(.3, .3, .3)
            transform translate(-50%, -50%) scale3d(.3, .3, .3)
        to
            opacity 0

    @keyframes zoomOut-confirm
        from
            opacity 1
        50%
            opacity 0
            -webkit-transform translate(-50%, -50%) scale3d(.3, .3, .3)
            transform translate(-50%, -50%) scale3d(.3, .3, .3)
        to
            opacity 0

    @-webkit-keyframes fadeIn-confirm
        from
            opacity 0
        to
            opacity 1

    @keyframes fadeIn-confirm
        from
            opacity 0
        to
            opacity 1

    @-webkit-keyframes fadeOut-confirm
        from
            opacity 1
        to
            opacity 0

    @keyframes fadeOut-confirm
        from
            opacity 1
        to
            opacity 0

    .confirm
        .animated-confirm
            -webkit-animation-duration 0.4s
            animation-duration 0.4s
            -webkit-animation-fill-mode both
            animation-fill-mode both
        .zoomIn-confirm
            -webkit-animation-name zoomIn-confirm
            animation-name zoomIn-confirm
        .zoomOut-confirm
            -webkit-animation-name zoomOut-confirm
            animation-name zoomOut-confirm

        .fadeIn-confirm
            -webkit-animation-name fadeIn-confirm
            animation-name fadeIn-confirm

        .fadeOut-confirm
            -webkit-animation-name fadeOut-confirm
            animation-name fadeOut-confirm

    .confirm
        .confirm-mask
            position fixed
            top 0
            left 0
            right 0
            bottom 0
            background rgba(0, 0, 0, .5)
            backdrop-filter blur(10px)
            z-index 2147483646
        .confirm-content-wrapper
            position fixed
            width 70.5%
            left 50%
            top 50%
            transform translate(-50%, -50%)
            margin auto
            background #fff
            box-sizing content-box
            border-radius px2rem(3px)
            padding px2rem(20px) px2rem(16px)
            padding-bottom px2rem(56px)
            z-index 2147483647
            .content
                position relative
                min-height px2rem(68px)
                max-height px2rem(320px)
                text-align left
                font-size px2rem(16px)
                line-height px2rem(24px)
                vertical-align middle
            .btn
                position absolute
                bottom px2rem(16px)
                right px2rem(16px)
                font-size px2rem(14px)
                &:active
                    background #fff
                .ok, .cancel
                    display inline-block
                    line-height px2rem(16px)
                    padding px2rem(5px) px2rem(10px)
                    border-radius px2rem(2px)
                    user-select none
                    touch-callout none
                    &:active
                        background #F7F7F7
                .ok
                    color #41B883
                    margin-left px2rem(3px)
                .cancel
                    color rgba(0, 0, 0, .3)

</style>
