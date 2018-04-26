<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="areapicker">
        <transition
            enter-active-class="animated-areapicker fadeIn-areapicker "
            leave-active-class="animated-areapicker fadeOut-areapicker "
        >
            <div class="areapicker-mask" v-show="isShow"></div>
        </transition>
        <transition
            v-on:after-leave="afterLeave"
            enter-active-class="animated-areapicker slideInUp-areapicker fadeIn-areapicker"
            leave-active-class="animated-areapicker slideOutDown-areapicker  fadeOut-areapicker"
        >
            <div class="areapicker-content-wrapper" v-show="isShow">
                <div class="opt border-1px">
                    <span class="cancel" @click="hide">取消</span>
                    <span class="ok" @click="ok">确定</span>
                </div>
                <div class="area-wrapper">
                    <div class="provinces" ref="provincesHook">
                        <ul>
                            <li v-for="p in provinces" class="list-hook" v-html="p"></li>
                        </ul>
                    </div>
                    <div class="city" ref="cityHook">
                        <ul>
                            <li v-for="c in cities" class="list-hook" v-html="c"></li>
                        </ul>
                    </div>
                    <div class="county" ref="countyHook">
                        <ul>
                            <li v-for="county in counties" class="list-hook" v-html="county"></li>
                        </ul>
                    </div>
                </div>

                <div class="date-mask border-1px"></div>
            </div>
        </transition>
    </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
    import BScroll from "better-scroll"
    import {provinces, cities, counties} from "./data.js"

    export default {
        data() {
            return {
                isShow: false,
                isOk: false,
                provinces: [],
                cities: [],
                counties: [],
                provincesScroll: undefined,
                cityScroll: undefined,
                countyScroll: undefined,
                provincesScrollY: 0,
                cityScrollY: 0,
                listHeight: [],
                provincesIndex: 0,
                cityIndex: 0,
                countyIndex: 0,
                provincesHook: undefined,
                cityHook: undefined,
                countyHook: undefined,
                first: true,
            }
        },
        mounted() {
            for (let i = 0; i < provinces.length; i++) {
                this.provinces.push(provinces[i].text);
            }
            var cityCode = provinces[0].value;
            // 绑定市或者区
            this.bindDefault(cityCode);
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
                this.provincesHook = this.$refs.provincesHook.getElementsByClassName("list-hook");
                this.cityHook = this.$refs.cityHook.getElementsByClassName("list-hook")
                this.countyHook = this.$refs.countyHook.getElementsByClassName("list-hook")

                this.provincesScroll = new BScroll(this.$refs.provincesHook, {
                    probeType: 3,
                    wheel: true,
                    rotate:30,
                    swipeTime:1500

                });

                this.cityScroll = new BScroll(this.$refs.cityHook, {
                    probeType: 3,
                    wheel: true,
                    rotate:30,
                    swipeTime:1500
                });
                this.countyScroll = new BScroll(this.$refs.countyHook, {
                    probeType: 3,
                    wheel: true,
                    rotate:30,
                    swipeTime:1500
                });
                // 省份滚动
                this.provincesScroll.on("scroll", (pos) => {
                    this.provincesScrollY = pos.y;
                });
                // 省份滚动结束
                this.provincesScroll.on("scrollEnd", () => {

                    this.cities = [];
                    this.counties = [];
                    this.provincesIndex = this.currentIndex(Math.abs(Math.round(this.provincesScrollY)));
                    var cityCode = provinces[this.provincesIndex].value;
                    // 绑定默认的市/ 县
                    this.bindDefault(cityCode)
                    this.$nextTick(() => {
                        this.cityScroll.refresh();
                        this.countyScroll.refresh();
                    })
                });
                // 城市
                this.cityScroll.on("scroll", (pos) => {
                    this.cityScrollY = pos.y;
                });
                this.cityScroll.on("scrollEnd", () => {
                    this.counties = [];
                    this.cityIndex = this.currentIndex(Math.abs(Math.round(this.cityScrollY)));
                    // 改变地区
                    let countyCode = cities[provinces[this.provincesIndex].value][this.cityIndex].value;
                    for (let i = 0; i < counties[countyCode].length; i++) {
                        this.counties.push(counties[countyCode][i].text);
                    }
                    this.$nextTick(() => {
                        this.countyScroll.refresh();
                    })

                });
                // 地区
                this.countyScroll.on("scroll", (pos) => {
                    this.countyIndex = this.currentIndex(Math.abs(Math.round(pos.y)));
                });
                // 更新数据 关闭弹窗
                window.addEventListener("popstate", (e) => {
                    this.isShow = false;
                });
            },
            // 绑定默认的市/ 县
            bindDefault(cityCode) {
                this.cities = [];
                this.counties = [];
                if (cities[cityCode])
                    for (let i = 0; i < cities[cityCode].length; i++) {
                        this.cities.push(cities[cityCode][i].text);
                        if (this.cityIndex >= cities[cityCode].length) {
                            this.cityIndex = cities[cityCode].length - 1;
                        }
                        var countyCode = cities[cityCode][this.cityIndex].value;
                        for (let i = 0; i < counties[countyCode].length; i++) {
                            // 存在多加入县的情况，如有 就不再添加
                            if (this.counties.indexOf(counties[countyCode][i].text) === -1)
                                this.counties.push(counties[countyCode][i].text);
                            else
                                break;
                        }
                    }

            },
            // 计算总高度
            _calculateHeight() {
                let provincess = this.$refs.provincesHook.getElementsByClassName("list-hook");
                let height = 0;
                this.listHeight.push(height)
                for (let i = 0; i < this.provinces.length; i++) {
                    height += provincess[i].clientHeight;
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
                    this.provincesScroll.refresh();
                    this.cityScroll.refresh();
                    this.countyScroll.refresh();
                    if (this.listHeight && this.listHeight.length === 0)
                        this._calculateHeight();
                    if (this.first) {
                        this.provincesScroll.scrollTo(0, 0, 300);
                        this.cityScroll.scrollTo(0, 0, 300);
                        this.countyScroll.scrollTo(0, 0, 300);
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
                if (location.hash === "#target=areapicker") {
                    history.back();
                }
            },
            //隐藏动画执行完成之后回调
            afterLeave() {
                if (this.isOk) {
                    var result = provinces[this.provincesIndex].text;
                    if (cities[provinces[this.provincesIndex].value][this.cityIndex]) {
                        result += "-"
                        result += cities[provinces[this.provincesIndex].value][this.cityIndex].text
                        result += "-"
                        result += counties[cities[provinces[this.provincesIndex].value][this.cityIndex].value][this.countyIndex].text
                        result += " "
                        result += counties[cities[provinces[this.provincesIndex].value][this.cityIndex].value][this.countyIndex].value
                    }
                    this.$emit("areapickerOkCallBack", result);
                }
            },
            addLocation() {
                if (window.history && window.history.pushState) {
                    window.history.pushState("target", "没有用", "#target=areapicker");
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

    @-webkit-keyframes fadeIn-areapicker
        from
            opacity 0
        to
            opacity 1

    @keyframes fadeIn-areapicker
        from
            opacity 0
        to
            opacity 1

    @-webkit-keyframes fadeOut-areapicker
        from
            opacity 1
        to
            opacity 0

    @keyframes fadeOut-areapicker
        from
            opacity 1
        to
            opacity 0

    @-webkit-keyframes slideInUp-areapicker
        from
            -webkit-transform translate3d(0, 100%, 0)
            transform translate3d(0, 100%, 0)
            visibility visible
        to
            -webkit-transform translate3d(0, 0, 0)
            transform translate3d(0, 0, 0)

    @keyframes slideInUp-areapicker
        from
            -webkit-transform translate3d(0, 100%, 0)
            transform translate3d(0, 100%, 0)
            visibility visible
        to
            -webkit-transform translate3d(0, 0, 0)
            transform translate3d(0, 0, 0)

    @-webkit-keyframes slideOutDown-areapicker
        from
            -webkit-transform translate3d(0, 0, 0)
            transform translate3d(0, 0, 0)
        to
            visibility hidden
            -webkit-transform translate3d(0, 100%, 0)
            transform translate3d(0, 100%, 0)

    @keyframes slideOutDown-areapicker
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

    @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2)
        .border-1px
            &::after
                -webkit-transform scaleY(0.5)
                transform scaleY(0.5)

    .areapicker
        .animated-areapicker
            -webkit-animation-duration 0.4s
            animation-duration 0.4s
            -webkit-animation-fill-mode both
            animation-fill-mode both

        .fadeOut-areapicker
            -webkit-animation-name fadeOut-areapicker
            animation-name fadeOut-areapicker

        .fadeIn-areapicker
            -webkit-animation-name fadeIn-areapicker
            animation-name fadeIn-areapicker

        .slideOutDown-areapicker
            -webkit-animation-name slideOutDown-areapicker
            animation-name slideOutDown-areapicker

        .slideInUp-areapicker
            -webkit-animation-name slideInUp-areapicker
            animation-name slideInUp-areapicker

    .areapicker
        .areapicker-mask
            position fixed
            top 0
            left 0
            right 0
            bottom 0
            background rgba(0, 0, 0, .5)
            backdrop-filter blur(px2rem(10px))
            z-index 2147483646

        .areapicker-content-wrapper
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

            .area-wrapper
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
                .provinces, .city, .county
                    flex 1
                    margin-top px2rem(90px)
                    margin-bottom px2rem(90px)
                    text-align center
                    .list-hook
                        display block
                        max-width px2rem(140px)
                        overflow hidden
                        white-space nowrap
                        text-overflow ellipsis
            .date-mask
                position absolute
                left 0
                top px2rem(128px)
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
