<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="toast">
        <transition name="fade">
            <div v-show="isShow" class="content">{{content}}</div>
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
                timer: undefined
            }

        },
        props: {
            displayDuration: {//吐司显示时长，默认2秒
                type: Number,
                default: 2400
            }
        },
        mounted() {
            // 进行rem适配 设置根元素字体大小
           this.setRootFontSize();
           window.onresize = ()=>{
               this.setRootFontSize();
           }
        },
        methods: {
            // 显示土司
            show(content) {
                this.content = content;
                // 清除计时器
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                this.isShow = true;
                let that = this;
                //displayDuration毫秒后消失
                this.timer = setTimeout(function () {
                    that.isShow = false;
                }, this.displayDuration);
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

    .toast
        .content
            position fixed
            bottom px2rem(50px)
            left 50%
            transform translate(-50%, 0)
            margin 0 auto
            font-size px2rem(14px)
            min-width px2rem(100px)
            height px2rem(36px)
            line-height px2rem(36px)
            text-align center
            padding 0 px2rem(14px)
            border-radius px2rem(18px)
            backdrop-filter: blur(10px);
            background rgba(0, 0, 0, .7)
            color #fff
            z-index 2147483647
            transition all .6s
            &.fade-enter-active, &.fade-leave-active
                opacity 1
            &.fade-enter, &.fade-leave-active
                opacity 0

</style>
