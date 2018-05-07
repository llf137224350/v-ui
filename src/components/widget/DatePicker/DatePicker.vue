<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="datepicker">
        <transition
            enter-active-class="animated-datepicker fadeIn-datepicker "
            leave-active-class="animated-datepicker fadeOut-datepicker "
        >
            <div class="datepicker-mask" v-show="isShow"></div>
        </transition>
        <transition
            v-on:after-leave="afterLeave"
            enter-active-class="animated-datepicker slideInUp-datepicker fadeIn-datepicker"
            leave-active-class="animated-datepicker slideOutDown-datepicker  fadeOut-datepicker"
        >
            <div class="datepicker-content-wrapper" v-show="isShow">
                <div class="opt border-1px">
                    <span class="cancel" @click="hide">取消</span>
                    <span class="ok" @click="ok">确定</span>
                </div>
                <div class="date-wrapper">
                    <div class="year" ref="yearHook">
                        <ul>
                            <li v-for="year in years" class="list-hook" v-html="year"></li>
                        </ul>
                    </div>
                    <div class="month" ref="monthHook">
                        <ul>
                            <li v-for="m in months" class="list-hook" v-html="m"></li>
                        </ul>
                    </div>
                    <div class="day" ref="dayHook">
                        <ul>
                            <li v-for="d in days" class="list-hook" v-html="d"></li>
                        </ul>
                    </div>
                </div>

                <div class="date-mask border-1px">
                    <span class="datepicker-year">年</span>
                    <span>月</span>
                    <span>日</span>
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
                years: [],
                months: [],
                days: [],
                yearScroll: undefined,
                monthScroll: undefined,
                dayScroll: undefined,
                yearScrollY: 0,
                monthScrollY: 0,
                listHeight: [],
                yearIndex: 0,
                monthIndex: 0,
                dayIndex: 0,
                yearHook: undefined,
                monthHook: undefined,
                dayHook: undefined,
                first: true
            }
        },
        mounted() {
            //初始化值
            let val;
            for (let i = 1; i <= 31; i++) {
                if (i < 10) {
                    val = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + i;
                } else {
                    val = "&nbsp;&nbsp;&nbsp;&nbsp;" + i;
                }
                if (i <= 12) {
                    this.months.push(val);
                }
                this.days.push(val);
            }
            for (let i = 1961; i <= 2050; i++) {
                this.years.push(i)
            }
            this.$nextTick(() => {
                this._initScroll();
            })

            // 进行rem适配 设置根元素字体大小
           this.setRootFontSize();
            window.onresize = ()=>{
                this.setRootFontSize();
            }
        },
        methods: {
            _initScroll() {
                this.yearHook = this.$refs.yearHook.getElementsByClassName("list-hook");
                this.monthHook = this.$refs.monthHook.getElementsByClassName("list-hook")
                this.dayHook = this.$refs.dayHook.getElementsByClassName("list-hook")

                this.yearScroll = new BScroll(this.$refs.yearHook, {
                    probeType: 3,
                    wheel: true,
                    rotate:30,
                    swipeTime:1500
                });

                this.monthScroll = new BScroll(this.$refs.monthHook, {
                    probeType: 3,
                    wheel: true,
                    rotate:30,
                    swipeTime:1500
                });
                this.dayScroll = new BScroll(this.$refs.dayHook, {
                    probeType: 3,
                    wheel: true,
                    rotate:30,
                    swipeTime:1500
                });
                // 年份滚动
                this.yearScroll.on("scroll", (pos) => {
                    this.yearScrollY = pos.y;
                    this.yearIndex = this.currentIndex(Math.abs(Math.round(this.yearScrollY)));
                });
                this.yearScroll.on("scrollEnd", () => {
                    if (this.months[this.monthIndex].toString().replace(/\&nbsp;/g, "") === "2") {
                        // 是否为闰年
                        this.updateDaysBayYear()
                    }
                });
                // 月
                this.monthScroll.on("scroll", (pos) => {
                    this.monthScrollY = pos.y;
                    this.monthIndex = this.currentIndex(Math.abs(Math.round(this.monthScrollY)));
                });
                this.monthScroll.on("scrollEnd", () => {
                    if (this.months[this.monthIndex].toString().replace(/\&nbsp;/g, "") === "2") {
                        this.updateDaysBayYear()
                    } else {
                        // 多少天
                        this.updateDays();
                    }
                });
                // 天
                this.dayScroll.on("scroll", (pos) => {
                    this.dayIndex = this.currentIndex(Math.abs(Math.round(pos.y)));
                });
                // 更新数据 关闭弹窗
                window.addEventListener("popstate", (e) => {
                    this.isShow = false;
                });
            },
            // 计算总高度
            _calculateHeight() {
                let years = this.$refs.yearHook.getElementsByClassName("list-hook");
                let height = 0;
                this.listHeight.push(height)
                for (let i = 0; i < this.years.length; i++) {
                    height += years[i].clientHeight;
                    this.listHeight.push(height)
                }
            },
            updateDays() {
                this.days = [];
                let day = 30;
                let month = parseInt(this.months[this.monthIndex].toString().replace(/\&nbsp;/g, ""));
                if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
                    day = 31;
                }
                let val;
                for (let i = 1; i <= day; i++) {
                    if (i < 10) {
                        val = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + i;
                    } else {
                        val = "&nbsp;&nbsp;&nbsp;&nbsp;" + i;
                    }
                    this.days.push(val)
                }
                this.$nextTick(() => {
                    this.dayScroll.refresh();
                })
            },
            updateDaysBayYear() {
                // 只针对二月
                this.days = [];
                let val;
                let year = this.years[this.yearIndex];
                if ((year % 4 === 0 && year % 100 != 0) || (year % 400 === 0)) {
                    for (let i = 1; i <= 29; i++) {
                        if (i < 10) {
                            val = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + i;
                        } else {
                            val = "&nbsp;&nbsp;&nbsp;&nbsp;" + i;
                        }
                        this.days.push(val)
                    }
                } else {
                    for (let i = 1; i <= 28; i++) {
                        if (i < 10) {
                            val = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + i;
                        } else {
                            val = "&nbsp;&nbsp;&nbsp;&nbsp;" + i;
                        }
                        this.days.push(val)
                    }
                }
                this.$nextTick(() => {
                    this.dayScroll.refresh();
                })
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
                    this.yearScroll.refresh();
                    this.monthScroll.refresh();
                    this.dayScroll.refresh();
                    if (this.listHeight && this.listHeight.length === 0)
                        this._calculateHeight();
                    if (this.first) {
                        // 获取当前时间 用于默认选中当前时间
                        var date = new Date();
                        this.yearIndex = date.getFullYear() - 1961;
                        this.monthIndex = date.getMonth();
                        this.secondIndex = date.getDate() - 1;
                        this.yearScroll.scrollTo(0, -(this.yearIndex) * this.listHeight[1], 300);
                        this.monthScroll.scrollTo(0, -this.monthIndex * this.listHeight[1], 300);
                        this.dayScroll.scrollTo(0, -(this.secondIndex) * this.listHeight[1], 300);
                        this.first = false;
                    }
                })
            },
            ok() {
                this.isOk = true;
                this.hide();
            },
            hide() {
                //操作浏览器返回 会触发浏览器popstate
                if (location.hash === "#target=datepicker") {
                    history.back();
                }
            },
            //隐藏动画执行完成之后回调
            afterLeave() {
                if (this.isOk) {
                    this.$emit("datepickerOkCallBack", (this.years[this.yearIndex].toString()).replace(/\&nbsp;/g, "") + "-" + (this.months[this.monthIndex].toString()).replace(/\&nbsp;/g, "") + "-" + (this.days[this.dayIndex].toString()).replace(/\&nbsp;/g, ""));
                }
            },
            addLocation() {
                if (window.history && window.history.pushState) {
                    window.history.pushState("target", "没有用", "#target=datepicker");
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

    @-webkit-keyframes fadeIn-datepicker
        from
            opacity 0
        to
            opacity 1

    @keyframes fadeIn-datepicker
        from
            opacity 0
        to
            opacity 1

    @-webkit-keyframes fadeOut-datepicker
        from
            opacity 1
        to
            opacity 0

    @keyframes fadeOut-datepicker
        from
            opacity 1
        to
            opacity 0

    @-webkit-keyframes slideInUp-datepicker
        from
            -webkit-transform translate3d(0, 100%, 0)
            transform translate3d(0, 100%, 0)
            visibility visible
        to
            -webkit-transform translate3d(0, 0, 0)
            transform translate3d(0, 0, 0)

    @keyframes slideInUp-datepicker
        from
            -webkit-transform translate3d(0, 100%, 0)
            transform translate3d(0, 100%, 0)
            visibility visible
        to
            -webkit-transform translate3d(0, 0, 0)
            transform translate3d(0, 0, 0)

    @-webkit-keyframes slideOutDown-datepicker
        from
            -webkit-transform translate3d(0, 0, 0)
            transform translate3d(0, 0, 0)
        to
            visibility hidden
            -webkit-transform translate3d(0, 100%, 0)
            transform translate3d(0, 100%, 0)

    @keyframes slideOutDown-datepicker
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

    .datepicker
        .animated-datepicker
            -webkit-animation-duration 0.4s
            animation-duration 0.4s
            -webkit-animation-fill-mode both
            animation-fill-mode both

        .fadeOut-datepicker
            -webkit-animation-name fadeOut-datepicker
            animation-name fadeOut-datepicker

        .fadeIn-datepicker
            -webkit-animation-name fadeIn-datepicker
            animation-name fadeIn-datepicker

        .slideOutDown-datepicker
            -webkit-animation-name slideOutDown-datepicker
            animation-name slideOutDown-datepicker

        .slideInUp-datepicker
            -webkit-animation-name slideInUp-datepicker
            animation-name slideInUp-datepicker

    .datepicker
        .datepicker-mask
            position fixed
            top 0
            left 0
            right 0
            bottom 0
            background rgba(0, 0, 0, .5)
            backdrop-filter blur(10px)
            z-index 2147483646

        .datepicker-content-wrapper
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

            .date-wrapper
                background: #fff;
                display flex
                font-size px2rem(16px)
                height px2rem(220px)
                overflow hidden
                line-height px2rem(40px)
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
                .year, .month, .day
                    flex 1
                    margin-top px2rem(90px)
                    margin-bottom px2rem(90px)
                    text-align center
                    padding-right px2rem(36px)
            .date-mask
                position absolute
                left 0
                top px2rem(130px)
                z-index 2147483647
                background: transparent
                width 100%
                height px2rem(40px)
                display flex
                pointer-events none
                & > span
                    display inline-block
                    flex 1
                    height px2rem(40px)
                    line-height px2rem(41px)
                    font-size px2rem(16px)
                    text-align center
                    padding-left px2rem(36px)
                    pointer-events none
                & > span.datepicker-year
                    padding-left px2rem(38px)
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
