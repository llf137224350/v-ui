<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div
        class="tablayout"
        ref="tablayoutHook"
    >
        <ul
            class="tablayout-wrapper border-1px"
            :style="{width:totalWidth+'px'}">
            <li
                class=" tablayout-item"
                v-for="(item,index) in datas"
                :style="{width:itemWidth+'px'}"
            >
                <router-link
                    :to="item.to"
                    tag="a"
                    v-html="item.text"
                    :style="{color:index === cIndex ?`${color} !important`:`${normalColor} !important`}"
                    :class="{active:index===cIndex}"
                    replace="replace"
                ></router-link>
            </li>
            <div
                class="indicator border-1px"
                :style="{width:itemWidth+'px',background:color}"
                ref="itemHook"
            ></div>
        </ul>
        <i class="tablayout_before"></i>
        <i class="tablayout_after"></i>
    </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
    export default {

        mounted() {
            // 进行rem适配 设置根元素字体大小
            this.setRootFontSize();
            // 获取容器的高度
            this.containerWidth = this.$refs.tablayoutHook.getBoundingClientRect().width;
            // 监听窗口大小改变
            // window.onresize 在这个地方所调用的回调会被替换，所以不适用于这个地方
            window.addEventListener("resize", () => {
                this.setRootFontSize();
                this.containerWidth = this.$refs.tablayoutHook.getBoundingClientRect().width;
            })
            this.path = this.$route.path;
            this.setIndex();
        },
        data() {
            return {
                cIndex: this.currentIndex,
                path: this.datas[this.currentIndex].to,
                containerWidth: 0,
                width: 0,
                isFirst: true
            }
        },
        props: {
            //数据
            datas: {
                type: Array,
                default
                    () {
                    return [];
                }
            },
            // 当前选中项索引
            currentIndex: {
                type: Number,
                default:
                    0
            },
            // 选中文字颜色和导航线颜色
            color: {
                type: String,
                defalut:
                    "#D74F43"
            },
            // 未选中字体颜色
            normalColor: {
                type: String,
                defalut:
                    "#000"
            }
        } ,
        methods: {
            setIndex() {
                for (let i = 0; i < this.datas.length; i++) {
                    if (this.datas[i].to === this.path) {
                        this.cIndex = i;
                        break;
                    }
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
        computed: {
            //计算每个item的宽度
            itemWidth() {
                if (this.datas.length <= 4) {
                    this.width = this.containerWidth / this.datas.length;
                } else {
                    this.width = this.containerWidth * 0.25
                }
                return this.width;
            },
            //计算总宽度
            totalWidth() {
                return this.itemWidth * this.datas.length;
            }
        },
        //观察变量的值
        watch: {
            "$route"(to) {
                this.path = to.path;
                this.setIndex();
            },
            "cIndex"(val, oldVal) {
                let left = val * this.itemWidth;
                if (!this.isFirst) {
                    this.$refs.itemHook.style.transition = `all 0.3s`;
                } else {
                    this.$refs.itemHook.style.transition = `all 0s`;
                }
                this.$refs.itemHook.style.transform = `translateX(${left}px)`;
            } ,
            width() {
                // 窗口大小改变 第一次进入会执行 cIndex  和 width cIndex 先执行
                let left = this.cIndex * this.itemWidth;
                if (!this.isFirst) {
                    this.$refs.itemHook.style.transition = `all 0.3s`;
                } else {
                    this.$refs.itemHook.style.transition = `all 0s`;
                    this.isFirst = false;
                }
                this.$refs.itemHook.style.transform = `translateX(${left}px)`;
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

    @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2)
        .border-1px
            &::after
                -webkit-transform scaleY(0.5)
                transform scaleY(0.5)

    .tablayout
        width 100%
        overflow-y hidden
        overflow-x auto
        position relative
        .tablayout-wrapper
            height px2rem(44px)
            z-index 2147483644
            position relative
            list-style none
            padding 0
            margin 0
            &::after
                position absolute
                left 0
                bottom 0
                display block
                width 100%
                border-bottom px2rem(1px) solid rgba(0, 0, 0, .1)
                content ''
            .tablayout-item
                float left
                height px2rem(44px)
                line-height px2rem(44px)
                text-align center
                user-select none
                -webkit-user-select none
                touch-callout none
                -webkit-touch-callout none
                & > a
                    display block
                    width 100%
                    height 100%
                    font-size px2rem(14px)
                    text-decoration: none
                    &.active
                        font-size px2rem(16px)
                        color #D74F43 !important
                        font-weight 500
                    &:active
                        background #F7F7F7
        .indicator
            position absolute
            bottom 0
            left 0
            z-index 2147483645
            height px2rem(2px)
            background: #D74F43

</style>
