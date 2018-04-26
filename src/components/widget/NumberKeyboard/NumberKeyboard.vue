<!--
   开发者：い 狂奔的蜗牛
   说明：数字键盘
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="number-keyboard">
        <div class="number-keyboard-mask" v-show="isShow" @touchstart="hide"></div>
        <transition
            enter-active-class="animated-keyboard slideInUp-keyboard fadeIn-keyboard"
            leave-active-class="animated-keyboard slideOutDown-keyboard  fadeOut-keyboard"
        >
            <div class="number-keyboard-content-wrapper  border-1px" v-show="isShow">
                <div class="close-keyboard border-1px" @click="hide()">
                    <i class="pic"></i>
                </div>
                <ul class="border-1px">
                    <li class="border-w1px" @click="clickHandle($event)">1</li>
                    <li class="border-w1px" @click="clickHandle($event)">2</li>
                    <li @click="clickHandle($event)">3</li>
                </ul>
                <ul class="border-1px">
                    <li class="border-w1px" @click="clickHandle($event)">4</li>
                    <li class="border-w1px" @click="clickHandle($event)">5</li>
                    <li @click="clickHandle($event)">6</li>
                </ul>
                <ul class="border-1px">
                    <li class="border-w1px" @click="clickHandle($event)">7</li>
                    <li class="border-w1px" @click="clickHandle($event)">8</li>
                    <li @click="clickHandle($event)">9</li>
                </ul>
                <ul>
                    <li class="border-w1px" :class="{delete:!decimal}" @click="clickHandle($event)">{{decimal
                        ===true?".":"　"}}
                    </li>
                    <li class="border-w1px " @click="clickHandle($event)">0</li>
                    <li class="delete" @click="clickHandle($event)"><i class='delete-pic'></i></li>
                </ul>

            </div>
        </transition>
    </div>

</template>

<!--script-->
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                isShow: false,
                isClick: false,
                text: ""
            }
        },
        mounted() {
            // 更新数据 关闭弹窗
            window.addEventListener("popstate", (e) => {
                this.isShow = false;
            });
            // 进行rem适配 设置根元素字体大小
            this.setRootFontSize();
            window.onresize = () => {
                this.setRootFontSize();
            }
        },
        model: {    // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
            prop: 'msg',
            event: 'keyboardValueChanged'
        },
        props: {
            msg: "",
            decimal: {
                type: Boolean,
                default: true
            },
            length: {
                type: Number,
                default: undefined
            }
        },
        methods: {
            show(decimal) {
                this.isClick = false;
                this.isShow = true;
                this.addLocation();
            },
            hide() {
                //操作浏览器返回 会触发浏览器popstate
                if (location.hash === "#target=popup") {
                    history.back();
                }
            },
            addLocation() {
                if (window.history && window.history.pushState) {
                    window.history.pushState("target", "没有用", "#target=popup");
                } else {
                    console.log("当前浏览器版本较低，不支持该功能")
                }
            },
            clickHandle(event) {
                if (event.target.innerText) {
                    if (this.length && this.text.length >= this.length)
                        return;
                    if (event.target.innerText === ".") {
                        if (this.text.indexOf(".") === -1 && this.text.indexOf(".") != 0) {
                            this.text += event.target.innerText;
                        }
                    } else {
                        this.text += event.target.innerText.replace("　", "");
                    }
                } else {
                    if (this.text.length > 0)
                        this.text = this.text.substring(0, this.text.length - 1);
                }
            },
            //设置根元素字体大小
            setRootFontSize() {
                // 进行rem适配 设置根元素字体大小
                let width = document.documentElement.clientWidth || document.body.clientWidth;
                let htmlDom = document.getElementsByTagName("html")[0]
                htmlDom.style.fontSize = width / 10 + 'px';
            }
        },
        watch: {
            "text"(val, oldVal) {
                this.$emit("keyboardValueChanged", val)
            }
        }
    }
</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    /*单位转换*/
    px2rem($px)
        return ($px / 37.5) rem

    /*格式化代码会出问题*/
    borderTop1px()
        &::after
            position absolute
            left 0
            top 0
            display block
            width 100%
            border-top px2rem(1px) solid #E0E0E0
            content ''

    borderBottom1px()
        position relative
        &::after
            position absolute
            left 0
            bottom 0
            display block
            width 100%
            border-bottom px2rem(1px) solid #e8e8e8
            content ''

    borderRight1px()
        position relative
        &::after
            position absolute
            top 0
            right 0
            display block
            height 100%
            border-right px2rem(1px) solid #e8e8e8
            content ''

    ::-webkit-scrollbar
        width 0
        height 0

    @-webkit-keyframes fadeIn-keyboard
        from
            opacity 0
        to
            opacity 1

    @keyframes fadeIn-keyboard
        from
            opacity 0
        to
            opacity 1

    @-webkit-keyframes fadeOut-keyboard
        from
            opacity 1
        to
            opacity 0

    @keyframes fadeOut-keyboard
        from
            opacity 1
        to
            opacity 0

    @-webkit-keyframes slideInUp-keyboard
        from
            -webkit-transform translate3d(0, 100%, 0)
            transform translate3d(0, 100%, 0)
            visibility visible
        to
            -webkit-transform translate3d(0, 0, 0)
            transform translate3d(0, 0, 0)

    @keyframes slideInUp-keyboard
        from
            -webkit-transform translate3d(0, 100%, 0)
            transform translate3d(0, 100%, 0)
            visibility visible
        to
            -webkit-transform translate3d(0, 0, 0)
            transform translate3d(0, 0, 0)

    @-webkit-keyframes slideOutDown-keyboard
        from
            -webkit-transform translate3d(0, 0, 0)
            transform translate3d(0, 0, 0)
        to
            visibility hidden
            -webkit-transform translate3d(0, 100%, 0)
            transform translate3d(0, 100%, 0)

    @keyframes slideOutDown-keyboard
        from
            -webkit-transform translate3d(0, 0, 0)
            transform translate3d(0, 0, 0)
        to
            visibility hidden
            -webkit-transform translate3d(0, 100%, 0)
            transform translate3d(0, 100%, 0)

    @media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5)
        .border-1px
            &::after
                -webkit-transform scaleY(0.7)
                transform scaleY(0.7)

        .border-w1px
            &::after
                -webkit-transform scaleX(0.7)
                transform scaleX(0.7)

    @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2)
        .border-1px
            &::after
                -webkit-transform scaleY(0.5)
                transform scaleY(0.5)

        .border-w1px
            &::after
                -webkit-transform scaleX(0.5)
                transform scaleX(0.5)

    .number-keyboard
        .animated-keyboard
            -webkit-animation-duration 0.4s
            animation-duration 0.4s
            -webkit-animation-fill-mode both
            animation-fill-mode both

        .fadeOut-keyboard
            -webkit-animation-name fadeOut-keyboard
            animation-name fadeOut-keyboard

        .fadeIn-keyboard
            -webkit-animation-name fadeIn-keyboard
            animation-name fadeIn-keyboard

        .slideOutDown-keyboard
            -webkit-animation-name slideOutDown-keyboard
            animation-name slideOutDown-keyboard

        .slideInUp-keyboard
            -webkit-animation-name slideInUp-keyboard
            animation-name slideInUp-keyboard

    .number-keyboard
        .number-keyboard-content-wrapper
            position fixed
            left 0
            bottom 0
            width 100%
            background-color transparent
            z-index 2147483647
            borderTop1px()
            .close-keyboard
                display block
                height px2rem(30px)
                text-align center
                background: #fff
                borderBottom1px()
                .pic
                    display inline-block
                    margin-top px2rem(3px)
                    width px2rem(30px)
                    height px2rem(24px)
                    background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAB9ElEQVR4Xu2Z7VHDMAyGlQ0YgRFQFgBGYALoBKzCBnQD2AAmiGACYAM2SM+cc2dyMYk/ZEdY+dXr1a6fx6+spO2g8atrnB9UgCagcQNaAo0HQA9BLQEtgcYNaAk0HgDtAloCWgKNG1gsASI6A4BzRHz7D36GYbjsuu4dEb/nPD4BH0YAABwR8SBVgt3IJwC4AoBXRLzeKmB0PihSgoV/AYALwzKO41ff92ZTf12+BNwBwKNUCXN4y3GDiM+bBJgPEZFICR74AyIel0r5z/sAaRJC4Y2Q1RshKRJi4DcJkFAOsfCbBexZQgp8kIC9SiAimlqdPeS8B17wIbg0YE9nAhGZVm261XQFwQcnYPqWPUjIAR8toHY55IJPElBLQk74ZAGlJeSGzyKglAQO+GwCuCVwwWcVwCWBEz67ACvhAQDund4c/XsCNzyLACvBPHrepkgoAc8mIFVCKXhWAbESSsKzCwiVUBq+iICtEmrAFxOwJqEWfFEBPgm2UyQ90jrdJvjl6m+CwTOuDCCieYt0RwQ/z6eur7gATxLM28Xhi5eAu1tE5N4xVoGvKsAm4eevKkT8TI1y7PgqJRC7WI5xKoDDqqQ5NQGSdotjrZoADquS5tQESNotjrVqAjisSppTEyBptzjWqgngsCppTk2ApN3iWOsJGg4VUJt+6hcAAAAASUVORK5CYII=")
                    -webkit-background-size px2rem(30px) px2rem(24px)
                    background-size px2rem(30px) px2rem(24px)
            & > ul
                display flex
                background: #fff
                height px2rem(60px)
                line-height px2rem(60px)
                overflow hidden
                & > li
                    flex 1
                    text-align center
                    font-size px2rem(28px)
                    background: #fff
                    touch-callout: none
                    -webkit-touch-callout none
                    user-select none
                    -webkit-user-select none
                    &:active
                        background: #F7F7F7
                    &.delete
                        background: #F7F7F7
                        .delete-pic
                            display inline-block
                            margin-top px2rem(13px)
                            width px2rem(30px)
                            height px2rem(30px)
                            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADfklEQVR4Xu2aW3LaMBSGJdk8N0vIDgorKFlBuoPAMyOBV9DuwIw9PIeuIGQFSVcQWEG7BHi3UUcduaO4NtHlyJfBPDEDks7/6T/ykSyMrvyDr1w/GgAMDrhyAkMKXLkBhkVwSIEhBa6cgLcUiOP4djQafeGc37bJmHP+yhj7WRcDOIA4jm+CIIgxxrM2hZfG3hNC5ovFYl+OCRTAZrMZ53n+gjG+6ZD4v6Fwzo95nk+iKPqtxgYGoCyec/6MMV5TSl/bgiFiOp/PwolLGcMPSuk7Z4IAkLZ/wxgX+f7fQG1BEOMmSbLDGN+L75TSd5qdAQjxYRi+IITGdZTbFC/GTtP0O0Lom/hOCJmoa4ETgD6ILwNACN2paWkNoC/ivQFI0/QJIfRV2vuQZdk0iqJj23avGl9NARAHJEnyqDznOy0e3AF9Ew8KAEq8rBkeGGORTcrI9eeJEBJVVXflPkFSIEmSFcY4lp2fCCFTncHLwagFE+d8yxibm0BQF9+66g4cQJIkM4zxo6t40V4KENXhZ1miakOwffI4OQBSfDEzNhBsxTutAT7E20BwEW8NQG4k3oqAOedzxtjWJF8/+q+OE1zFWwGo2NmBi9dxAoR4YwByZ/er2NP7mPmyM6qckOd5BLXJMloE0zQVNn+QK7S3mdeAcFQOVpy216YARN6Lre2BUlpscT9KZ5Dfy06QnTqJN06BNE3FuZl4Ru8ppRMQZZqdVOS8OMrSrhPqhjF1QJspoB6snBBCn0yLpSoIRgDkLIiDw2Jw7+tA1WqfZdkqDEOritG5FJY1gBjcO4RLjzqdOkEnu4wcUHTYBASd5zwEBCsAAoRaCoudVxAEdzY7wKpZ0hGvUyx5c0DRsQ8IJuIhIFg7wAcEG/GuEJwBQKZDaW0xLnJKa4LWeSQIAFlR/asRRKGUZdmdzUlw8cqKUrrSyeGasnktHpU644MBgIRgI9y2DSiAPkIAB9A3CF4AQBQotpY2becFgAiiLxC8AegLBG+vx10LFFMr2/5ffZELfkGibvOEENqdz+ftcrl8tg3ctZ083F0qL3L9XJG5AMFVA2T7U5ZlY2+XpErpsC4OViEVOPR1IITMvF+TUwMUFyWDIJgqF6cc4rdvSgjZXdrCW1+RsQ+pWy0HAN2aj+ajGRzQPPNujTg4oFvz0Xw0gwOaZ96tEQcHdGs+mo/mDwBWE26/t8ePAAAAAElFTkSuQmCC")
                            background-repeat no-repeat
                            -webkit-background-size contain
                            background-size contain
                            pointer-events none
                & > li:nth-child(1), & > li:nth-child(2)
                    borderRight1px()
            & > ul:nth-child(2), & > ul:nth-child(3), & > ul:nth-child(4)
                borderBottom1px()


        .number-keyboard-mask
            position fixed
            left 0
            top 0
            right 0
            bottom 0
            background: rgba(0, 0, 0,0)
</style>
