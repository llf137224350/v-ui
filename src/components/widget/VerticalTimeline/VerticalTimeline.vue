<!--
   开发者：い 狂奔的蜗牛
   说明：竖直时间线
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="vertical-timeline" v-if="timelineData.length > 0">
        <div class="vertical-timeline-item" v-for="item in timelineData">
            <div class="vertical-timeline-item-date">{{item.date}}</div>
            <div class="vertical-timeline-item-divider"></div>
            <div class="vertical-timeline-item-content">
                <div class="vertical-timeline-item-inner">{{item.content}}</div>
            </div>
        </div>
    </div>

</template>

<!--script-->
<script type="text/ecmascript-6">
    export default {
        props: {
            timelineData: {
                type: Array,
                default(){
                    return [];
                }
            }
        },
        mounted(){
            // 进行rem适配 设置根元素字体大小
            this.setRootFontSize();
            window.onresize = ()=>{
                this.setRootFontSize();
            }
        },
        methods:{
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

    .vertical-timeline
        background #EFEFF4
        padding px2rem(10px)
        .vertical-timeline-item
            padding px2rem(2px) 0 px2rem(15px)
            display flex
            margin-top px2rem(-2px)
            overflow hidden
            box-sizing border-box
            position relative
            .vertical-timeline-item-date
                flex-shrink 0
                width px2rem(80px)
                text-align right
                box-sizing border-box
            .vertical-timeline-item-divider
                position relative
                width px2rem(10px)
                height px2rem(10px)
                background #bbb
                border-radius 50%
                flex-shrink 0
                margin-left px2rem(15px);
                margin-right px2rem(15px);
            .vertical-timeline-item-divider::after,
            .vertical-timeline-item-divider::before
                content ' '
                width px2rem(1px)
                height 100vh
                position absolute
                left 50%
                background inherit
                transform translate3d(-50%, 0, 0)
            .vertical-timeline-item-content
                margin 0 px2rem(2px)
                min-width 0
                position relative
                -webkit-flex-shrink 10
                -ms-flex-negative 10
                flex-shrink 10
                background #fff
                padding px2rem(10px)
                border-radius px2rem(5px)
                font-size px2rem(14px)
                line-height px2rem(18px)
        .vertical-timeline-item:last-of-type
            .vertical-timeline-item-divider::after, .vertical-timeline-item-divider::before
                display none
        .vertical-timeline-item:first-of-type
            .vertical-timeline-item-divider
                &::after, &::before
                    display block

</style>
