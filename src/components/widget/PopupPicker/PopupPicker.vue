<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="popuppicker">
        <transition
            enter-active-class="animated-popuppicker fadeIn-popuppicker "
            leave-active-class="animated-popuppicker fadeOut-popuppicker "
        >
            <div class="popuppicker-mask" v-show="isShow">

            </div>
        </transition>
        <transition
            v-on:after-leave="afterLeave"
            enter-active-class="animated-popuppicker slideInUp-popuppicker fadeIn-popuppicker"
            leave-active-class="animated-popuppicker slideOutDown-popuppicker  fadeOut-popuppicker"
        >
            <div class="popuppicker-content-wrapper" v-show="isShow">
                <div class="opt border-1px">
                    <span class="cancel" @click="hide">取消</span>
                    <span class="ok" @click="ok">确定</span>
                </div>
                <div class="items-wrapper">
                    <div class="items" ref="itemsHook">
                        <ul>
                            <li v-for="item in items" class="list-hook">{{item}}</li>
                        </ul>
                    </div>
                </div>
                <div class="items-mask border-1px">
                </div>
            </div>
        </transition>
    </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
    import BScroll from "better-scroll"

    export default {
        data() {
            return {
                isShow: false,
                isOk: false,
                itemsScroll: undefined,
                listHeight: [],
                itemsIndex: 0,
                itemsHook: undefined,
                first: true
            }
        },
        props: {
            items: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        mounted() {
            this._initScroll();
            // 进行rem适配 设置根元素字体大小
           this.setRootFontSize();
           window.onresize = ()=>{
               this.setRootFontSize();
           }
        },
        methods: {
            _initScroll() {
                this.itemsHook = this.$refs.itemsHook.getElementsByClassName("list-hook");

                this.itemsScroll = new BScroll(this.$refs.itemsHook, {
                    probeType: 3,
                    wheel: true,
                    rotate:30,
                    swipeTime:1500
                });

                // 小时滚动
                this.itemsScroll.on("scroll", (pos) => {
                    this.itemsIndex = this.currentIndex(Math.abs(Math.round(pos.y)));
                });

                // 更新数据 关闭弹窗
                window.addEventListener("popstate", (e) => {
                    this.isShow = false;
                });
            },
            // 计算总高度
            _calculateHeight() {
                let items = this.$refs.itemsHook.getElementsByClassName("list-hook");
                let height = 0;
                this.listHeight.push(height)
                for (let i = 0; i < this.items.length; i++) {
                    height += items[i].clientHeight;
                    this.listHeight.push(height)
                }
            },
            // 获取当前的索引位置
            currentIndex(scrollY) {
                let height1;
                let height2;
                for (let i = 0; i < this.listHeight.length; i++) {
                    height1 = this.listHeight[i];
                    height2 = this.listHeight[i + 1];
                    if (!height2 || (scrollY >= height1 && scrollY < height2)) {
                        return i;
                    }
                }
                return 0;
            },
            // 显示选择器
            show() {
                this.isShow = true;
                this.isOk = false;
                this.addLocation();

                this.$nextTick(() => {
                    this.itemsScroll.refresh();
                    if (this.listHeight && this.listHeight.length === 0)
                        this._calculateHeight();
                    if (this.first) {
                        this.itemsScroll.scrollTo(0, -this.itemsIndex * this.listHeight[1], 300);
                    }
                })
            },
            ok() {
                this.isOk = true;
                this.hide();
            },
            hide() {
                //操作浏览器返回 会触发浏览器popstate
                if (location.hash === "#target=popuppicker") {
                    history.back();
                }
            },
            //隐藏动画执行完成之后回调
            afterLeave() {
                if (this.isOk) {
                    this.$emit("popuppickerOkCallBack", this.items[this.itemsIndex]);
                }
            },
            addLocation() {
                if (window.history && window.history.pushState) {
                    window.history.pushState("target", "没有用", "#target=popuppicker");
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

    @-webkit-keyframes fadeIn-popuppicker
        from
            opacity 0
        to
            opacity 1

    @keyframes fadeIn-popuppicker
        from
            opacity 0
        to
            opacity 1

    @-webkit-keyframes fadeOut-popuppicker
        from
            opacity 1
        to
            opacity 0

    @keyframes fadeOut-popuppicker
        from
            opacity 1
        to
            opacity 0

    @-webkit-keyframes slideInUp-popuppicker
        from
            -webkit-transform translate3d(0, 100%, 0)
            transform translate3d(0, 100%, 0)
            visibility visible
        to
            -webkit-transform translate3d(0, 0, 0)
            transform translate3d(0, 0, 0)

    @keyframes slideInUp-popuppicker
        from
            -webkit-transform translate3d(0, 100%, 0)
            transform translate3d(0, 100%, 0)
            visibility visible
        to
            -webkit-transform translate3d(0, 0, 0)
            transform translate3d(0, 0, 0)

    @-webkit-keyframes slideOutDown-popuppicker
        from
            -webkit-transform translate3d(0, 0, 0)
            transform translate3d(0, 0, 0)
        to
            visibility hidden
            -webkit-transform translate3d(0, 100%, 0)
            transform translate3d(0, 100%, 0)

    @keyframes slideOutDown-popuppicker
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

    .popuppicker
        .animated-popuppicker
            -webkit-animation-duration 0.4s
            animation-duration 0.4s
            -webkit-animation-fill-mode both
            animation-fill-mode both

        .fadeOut-popuppicker
            -webkit-animation-name fadeOut-popuppicker
            animation-name fadeOut-popuppicker

        .fadeIn-popuppicker
            -webkit-animation-name fadeIn-popuppicker
            animation-name fadeIn-popuppicker

        .slideOutDown-popuppicker
            -webkit-animation-name slideOutDown-popuppicker
            animation-name slideOutDown-popuppicker

        .slideInUp-popuppicker
            -webkit-animation-name slideInUp-popuppicker
            animation-name slideInUp-popuppicker

    .popuppicker
        .popuppicker-mask
            position fixed
            top 0
            left 0
            right 0
            bottom 0
            background rgba(0, 0, 0, .5)
            backdrop-filter blur(10px)
            z-index 2147483646

        .popuppicker-content-wrapper
            position fixed
            left 0
            bottom 0
            width 100%
            height px2rem(260px)
            z-index 2147483647
            .opt
                height px2rem(40px)
                width 100%
                background: #fff
                position relative
                font-size 0
                &::after
                    position absolute
                    left 0
                    bottom 0
                    display block
                    width 100%
                    border-bottom px2rem(1px) solid rgba(0, 0, 0, .1)
                    content ''
                .cancel, .ok
                    display inline-block
                    height px2rem(40px)
                    line-height px2rem(40px)
                    padding 0 px2rem(16px)
                    font-size px2rem(14px)
                .cancel
                    float left
                    margin-left px2rem(10px)
                    color rgba(0, 0, 0, .3)
                .ok
                    float right
                    margin-right px2rem(10px)
                    color #41B883

            .items-wrapper
                background: #fff;
                display flex
                font-size px2rem(16px)
                height px2rem(220px)
                overflow hidden
                line-height px2rem(42px)
                &::before
                    content ""
                    display block
                    position absolute
                    height px2rem(110px)
                    width 100%
                    top px2rem(40px)
                    left 0
                    background -webkit-linear-gradient(top, #fff, rgba(255, 255, 255, 0))
                    z-index 2147483647
                    pointer-events none
                &::after
                    content ""
                    display block
                    position absolute
                    height px2rem(110px)
                    width 100%
                    bottom 0
                    left 0
                    background -webkit-linear-gradient(bottom, #fff, rgba(255, 255, 255, 0))
                    z-index 2147483647
                    pointer-events none
                .items
                    flex 1
                    margin-top px2rem(90px)
                    margin-bottom px2rem(90px)
                    text-align center
            .items-mask
                position absolute
                left 0
                top px2rem(130px)
                z-index 2147483647
                background: transparent
                width 100%
                height px2rem(40px)
                display flex
                pointer-events none
                &::after
                    position absolute
                    left 0
                    bottom 0
                    display block
                    width 100%
                    border-bottom px2rem(1px) solid rgba(0, 0, 0, .1)
                    content ''
                &::before
                    position absolute
                    left 0
                    top 0
                    display block
                    width 100%
                    border-top px2rem(1px) solid rgba(0, 0, 0, .1)
                    content ''
</style>
