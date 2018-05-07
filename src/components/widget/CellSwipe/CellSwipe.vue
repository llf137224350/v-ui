<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="cell-swipe"
    >
        <div
            class="cell-swipe-wrapper"
            ref="cellSwipeContent"
            @touchstart="touchstart($event)"
            @touchmove="touchmove($event)"
            @touchend="touchend($event)"
        >
            <div class="cell-swipe-content border-1px">{{text}}</div>
            <div class="cell-swipe-options" ref="cellSwipeOptions"
                 :style="{right:`${-optsWidth}px`}"
            ><span v-for="(item,index) in items" @click="itemClick(index)">{{item.text}}</span></div>
        </div>

    </div>

</template>

<!--script-->
<script type="text/ecmascript-6">

    export default {
        mounted() {
            // 进行rem适配 设置根元素字体大小
            this.setRootFontSize();
            window.onresize = ()=>{
                this.setRootFontSize();
            }
            this.content = this.$refs.cellSwipeContent;
            this.options = this.$refs.cellSwipeOptions;
            this.optsWidth = this.options.getBoundingClientRect().width;
            this.left = this.content.getBoundingClientRect().left;
            this.cells = document.getElementsByClassName("cell-swipe-wrapper");

        },
        data() {
            return {
                startX: 0,
                startY: 0,
                moveX: 0,
                moveY: 0,
                content: undefined,
                options: undefined,
                optsWidth: 0,
                left: 0,
                isOpen: false,
                cells: undefined
            }
        },
        props: {
            items: {
                type: Array,
                default() {
                    return [
                        {
                            text: "标记已读",
                            callback: undefined
                        },
                        {
                            text: "删除",
                            callback: undefined
                        }
                    ]
                }
            },
            text: {
                type: String,
                default: ""
            }
        },
        methods: {
            touchstart(e) {
                this.startX = e.touches[0].clientX;
                this.startY = e.touches[0].clientY;
                if (this.content.getAttribute("opened") != "opened") {
                    for (let i = 0; i < this.cells.length; i++) {
                        if (this.cells[i].getAttribute("opened") === "opened") {
                            this.cells[i].style.transition = "all 0.3s";
                            this.cells[i].style.transform = `translateX(0px)`;
                            this.cells[i].removeAttribute("opened");
                        }
                    }
                }

            },

            touchmove(e) {
                this.moveX = e.touches[0].clientX - this.startX;
                this.moveY = e.touches[0].clientY - this.startY;
                if (Math.abs(this.moveX) > Math.abs(this.moveY) && Math.abs(this.moveX) <= this.optsWidth
                ) {
                    if (this.moveX > 0 && this.isOpen) {
                        this.closeWithAnim();
                    } else if (this.moveX < 0 && !this.isOpen) {
                        this.content.style.transform = `translateX(${this.moveX}px)`;
                    }
                }
            },
            touchend(e) {
                if (this.moveX < 0 && this.optsWidth) {
                    if (Math.abs(this.moveX) >= this.optsWidth / 3) {
                        this.openWithAnim();
                    } else {
                        this.closeWithAnim();
                    }
                    this.startX = 0;
                    this.startY = 0;
                    this.moveX = 0;
                    this.moveY = 0;
                }
            },
            openWithAnim() {
                this.content.style.transition = "all 0.3s";
                this.content.style.transform = `translateX(${-this.optsWidth}px)`;
                this.isOpen = true;
                this.content.setAttribute("opened", "opened");
            },
            closeWithAnim() {
                this.content.style.transition = "all 0.3s";
                this.content.style.transform = `translateX(0px)`;
                this.isOpen = false;
            },
            itemClick(index) {
                this.closeWithAnim();
                if (this.items[index].callback) {
                    setTimeout(() => {
                        this.$emit(this.items[index].callback);
                    }, 300)
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

    @media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5)
        .border-1px
            &::after
                -webkit-transform scaleY(0.7)
                transform scaleY(0.7)
            &::before
                -webkit-transform scaleY(0.7)
                transform scaleY(0.7)

    @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2)
        .border-1px
            &::after
                -webkit-transform scaleY(0.5)
                transform scaleY(0.5)
            &::before
                -webkit-transform scaleY(0.5)
                transform scaleY(0.5)

    .cell-swipe
        height px2rem(48px)
        line-height px2rem(48px)
        position relative
        overflow hidden
        .cell-swipe-content
            height px2rem(48px)
            background: #fff
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
            position relative
            padding-left px2rem(10px)
            &::after
                position absolute
                left 0
                bottom 0
                display block
                width 100%
                border-bottom px2rem(1px) solid rgba(0, 0, 0, .1)
                content ''
        .cell-swipe-options
            position absolute
            top 0
            bottom 0
            & > span
                color #fff
                padding 0 px2rem(16px)
                display inline-block
                height 100%
                &:nth-child(1)
                    background: #D3D3D3
                &:nth-child(2)
                    background: #FF0000


</style>
