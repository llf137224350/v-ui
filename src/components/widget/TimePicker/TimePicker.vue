<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="timepicker">
        <transition
            enter-active-class="animated fadeIn "
            leave-active-class="animated fadeOut "
        >
            <div class="timepicker-mask" v-show="isShow">

            </div>
        </transition>
        <transition
            v-on:after-leave="afterLeave"
            enter-active-class="animated slideInUp fadeIn"
            leave-active-class="animated slideOutDown  fadeOut"
        >
            <div class="timepicker-content-wrapper" v-show="isShow">
                <div class="opt border-1px">
                    <span class="cancel" @click="hide">取消</span>
                    <span class="ok" @click="ok">确定</span>
                </div>
                <div class="time-wrapper">
                    <div class="hour" ref="hourHook">
                        <ul>
                            <li v-for="hour in hours" class="list-hook">{{hour}}</li>
                        </ul>
                    </div>
                    <div class="minute" ref="minuteHook">
                        <ul>
                            <li v-for="m in minute" class="list-hook">{{m}}</li>
                        </ul>
                    </div>

                    <div class="minute" ref="secondHook" v-if="needSecond">
                        <ul>
                            <li v-for="s in second" class="list-hook">{{s}}</li>
                        </ul>
                    </div>
                </div>
                <div class="time-mask border-1px">
                    <span>时</span>
                    <span>分</span>
                    <span v-if="needSecond">秒</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
    import BScroll from "better-scroll"
    export default {
        data(){
            return {
                isShow: false,
                isOk: false,
                hours: [],
                minute: [],
                second: [],
                hourScroll: undefined,
                minuteScroll: undefined,
                secondScroll: undefined,
                listHeight: [],
                hourIndex: 0,
                minuteIndex: 0,
                secondIndex: 0,
                hourHook: undefined,
                minuteHook: undefined,
                secondHook: undefined,
                first: true
            }
        },
        props: {
            needSecond: {
                type: Boolean,
                default: true// 是否显示秒
            }
        },
        created(){
            //初始化值
            let val = "";
            for (let i = 0; i < 60; i++) {
                val = i < 10 ? "0" + i : i + "";
                if (i < 24) {
                    this.hours.push(val);
                }
                this.minute.push(val);
                if (this.needSecond)
                    this.second.push(val);
            }
            this.$nextTick(() => {
                this._initScroll();
            })

        },
        methods: {
            _initScroll(){
                this.hourHook = this.$refs.hourHook.getElementsByClassName("list-hook");
                this.minuteHook = this.$refs.minuteHook.getElementsByClassName("list-hook")
                this.secondHook = this.$refs.minuteHook.getElementsByClassName("list-hook")

                this.hourScroll = new BScroll(this.$refs.hourHook, {
                    probeType: 3,
                    wheel: true
                });

                this.minuteScroll = new BScroll(this.$refs.minuteHook, {
                    probeType: 3,
                    wheel: true
                });

                // 小时滚动
                this.hourScroll.on("scroll", (pos) => {
                    this.hourIndex = this.currentIndex(Math.abs(Math.round(pos.y)));
                });
                // 分钟滚动
                this.minuteScroll.on("scroll", (pos) => {
                    this.minuteIndex = this.currentIndex(Math.abs(Math.round(pos.y)));
                });
                if (this.needSecond) // 需要秒
                {
                    this.secondScroll = new BScroll(this.$refs.secondHook, {
                        probeType: 3,
                        wheel: true
                    });
                    this.secondScroll.on("scroll", (pos) => {
                        this.secondIndex = this.currentIndex(Math.abs(Math.round(pos.y)));
                    });

                }
                // 更新数据 关闭弹窗
                window.addEventListener("popstate", (e) => {
                    this.isShow = false;
                });
            },
            // 计算总高度
            _calculateHeight(){
                let minute = this.$refs.minuteHook.getElementsByClassName("list-hook");
                let height = 0;
                this.listHeight.push(height)
                for (let i = 0; i < this.minute.length; i++) {
                    height += minute[i].clientHeight;
                    this.listHeight.push(height)
                }
            },
            // 获取当前的索引位置
            currentIndex(scrollY)
            {
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
            show(){
                this.isShow = true;
                this.isOk = false;
                this.addLocation();

                this.$nextTick(() => {
                    this.hourScroll.refresh();
                    this.minuteScroll.refresh();
                    if (this.needSecond)
                        this.secondScroll.refresh();
                    if (this.listHeight && this.listHeight.length === 0)
                        this._calculateHeight();
                    if (this.first) {
                        // 获取当前时间 用于默认选中当前时间
                        var date = new Date();
                        this.hourIndex = date.getHours();
                        this.minuteIndex = date.getMinutes();
                        if (this.needSecond)
                            this.secondIndex = date.getSeconds();
                        this.hourScroll.scrollTo(0, -this.hourIndex * this.listHeight[1], 300);
                        this.minuteScroll.scrollTo(0, -this.minuteIndex * this.listHeight[1], 300);
                        if (this.needSecond)
                            this.secondScroll.scrollTo(0, -this.secondIndex * this.listHeight[1], 300);
                        this.first = false;
                    }
                })
            },
            ok(){
                this.isOk = true;
                this.hide();
            },
            hide(){
                //操作浏览器返回 会触发浏览器popstate
                if (location.hash === "#target=timepicker") {
                    history.back();
                }
            },
            //隐藏动画执行完成之后回调
            afterLeave(){
                if (this.isOk) {
                    if (this.needSecond) {
                        this.$emit("timerpickerOkCallBack", this.hours[this.hourIndex] + ":" + this.minute[this.minuteIndex] + ":" + this.second[this.secondIndex]);
                    } else {
                        this.$emit("timerpickerOkCallBack", this.hours[this.hourIndex] + ":" + this.minute[this.minuteIndex]);
                    }

                }
            },
            addLocation() {
                if (window.history && window.history.pushState) {
                    window.history.pushState("target", "没有用", "#target=timepicker");
                } else {
                    console.log("当前浏览器版本较低，不支持该功能")
                }
            }
        }
    }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
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

        @-webkit-keyframes fadeIn
            from
                opacity 0
            to
                opacity 1

        @keyframes fadeIn
            from
                opacity 0
            to
                opacity 1

        @-webkit-keyframes fadeOut
            from
                opacity 1
            to
                opacity 0

        @keyframes fadeOut
            from
                opacity 1
            to
                opacity 0

        @-webkit-keyframes slideInUp
            from
                -webkit-transform translate3d(0, 100%, 0)
                transform translate3d(0, 100%, 0)
                visibility visible
            to
                -webkit-transform translate3d(0, 0, 0)
                transform translate3d(0, 0, 0)

        @keyframes slideInUp
            from
                -webkit-transform translate3d(0, 100%, 0)
                transform translate3d(0, 100%, 0)
                visibility visible
            to
                -webkit-transform translate3d(0, 0, 0)
                transform translate3d(0, 0, 0)

        @-webkit-keyframes slideOutDown
            from
                -webkit-transform translate3d(0, 0, 0)
                transform translate3d(0, 0, 0)
            to
                visibility hidden
                -webkit-transform translate3d(0, 100%, 0)
                transform translate3d(0, 100%, 0)

        @keyframes slideOutDown
            from
                -webkit-transform translate3d(0, 0, 0)
                transform translate3d(0, 0, 0)
            to
                visibility hidden
                -webkit-transform translate3d(0, 100%, 0)
                transform translate3d(0, 100%, 0)

    .timepicker
        .animated
            -webkit-animation-duration 0.4s
            animation-duration 0.4s
            -webkit-animation-fill-mode both
            animation-fill-mode both

        .fadeOut
            -webkit-animation-name fadeOut
            animation-name fadeOut

        .fadeIn
            -webkit-animation-name fadeIn
            animation-name fadeIn

        .slideOutDown
            -webkit-animation-name slideOutDown
            animation-name slideOutDown

        .slideInUp
            -webkit-animation-name slideInUp
            animation-name slideInUp

    .timepicker
        .timepicker-mask
            position fixed
            top 0
            left 0
            right 0
            bottom 0
            background rgba(0, 0, 0, .5)
            backdrop-filter blur(10px)
            z-index 2147483646

        .timepicker-content-wrapper
            position fixed
            left 0
            bottom 0
            width 100%
            height 300px
            z-index 2147483647
            .opt
                height 40px
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
                    border-bottom 1px solid rgba(0, 0, 0, .1)
                    content ''
                .cancel, .ok
                    display inline-block
                    height 40px
                    line-height 40px
                    padding 0 16px
                    font-size 16px
                .cancel
                    float left
                    margin-left 10px
                    color rgba(0, 0, 0, .3)
                .ok
                    float right
                    margin-right 10px
                    color #41B883

            .time-wrapper
                background: #fff;
                display flex
                font-size 20px
                height 260px
                overflow hidden
                line-height 40px
                &::before
                    content ""
                    display block
                    position absolute
                    height 130px
                    width 100%
                    top 40px
                    left 0
                    background -webkit-linear-gradient(top, #fff, rgba(255, 255, 255, 0))
                    z-index 2147483647
                    pointer-events none
                &::after
                    content ""
                    display block
                    position absolute
                    height 130px
                    width 100%
                    bottom 0
                    left 0
                    background -webkit-linear-gradient(bottom, #fff, rgba(255, 255, 255, 0))
                    z-index 2147483647
                    pointer-events none
                .hour, .minute, .second
                    flex 1
                    margin-top 110px
                    margin-bottom 110px
                    text-align center
                    padding-right 25px
            .time-mask
                position absolute
                left 0
                top 150px
                z-index 2147483647
                background: transparent
                width 100%
                height 40px
                display flex
                pointer-events none
                & > span
                    display inline-block
                    flex 1
                    height 40px
                    line-height 40px
                    font-size 20px
                    text-align center
                    padding-left 25px
                    pointer-events none
                &::after
                    position absolute
                    left 0
                    bottom 0
                    display block
                    width 100%
                    border-bottom 1px solid rgba(0, 0, 0, .1)
                    content ''
                &::before
                    position absolute
                    left 0
                    top 0
                    display block
                    width 100%
                    border-top 1px solid rgba(0, 0, 0, .1)
                    content ''
</style>
