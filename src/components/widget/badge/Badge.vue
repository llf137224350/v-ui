<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="badge" :class="{'badge-no-empty':number,'badge-other':number >=10}">{{number}}</div>

</template>

<!--script-->
<script type="text/ecmascript-6">
    export default {
        props: {
            number: {
                type: Number,
                default: undefined
            }
        },
        mounted() {
            this.setRootFontSize();
            window.onresize = () => {
                this.setRootFontSize();
            }
        },
        methods: {
            //设置根元素字体大小
            setRootFontSize() {
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

    .badge
        display inline-block
        color #fff
        min-width px2rem(10px)
        min-height px2rem(10px)
        background: #F74C31
        border-radius px2rem(5px)
        &.badge-no-empty
            font-size px2rem(12px)
            text-align center
            padding px2rem(2px) px2rem(3px)
            border-radius px2rem(8px)
        &.badge-other
            padding px2rem(2px) px2rem(5px)
            vertical-align middle
</style>
