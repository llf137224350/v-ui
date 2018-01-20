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
        created(){
            this.$nextTick(() => {
                this.containerWidth = this.$refs.tablayoutHook.getBoundingClientRect().width;
            })
            this.cIndex = this.currentIndex;
            // 点击item的时候会执行
            window.addEventListener("popstate", (e) => {
                // 如果是第二次返回 不做处理
                if (this.hash === location.hash)
                    return;
                this.hash = location.hash;
               this.setIndex();
            });
            // 窗口大小改变
            window.onresize = () => {
                this.containerWidth = this.$refs.tablayoutHook.getBoundingClientRect().width;
            }
            // 刷新回显指示器
            this.setIndex();
        },
        data(){
            return {
                cIndex: 0,
                hash: this.datas[this.currentIndex].to,
                containerWidth: 0,
                width: 0,
                isFirst: true
            }
        },
        props: {
            //数据
            datas: {
                type: Array,
                default(){
                    return [];
                }
            },
            // 当前选中项索引
            currentIndex: {
                type: Number,
                default: 0
            },
            // 选中文字颜色和导航线颜色
            color: {
                type: String,
                defalut: "#D74F43"
            },
            // 未选中字体颜色
            normalColor: {
                type: String,
                defalut: "#000"
            }
        },
        methods:{
            setIndex(){
                for (let i = 0; i < this.datas.length; i++) {
                    if (this.datas[i].to === location.hash.substring(1)) {
                        this.cIndex = i;
                        break;
                    }
                }
            }
        },
        computed: {
            //计算每个item的宽度
            itemWidth(){
                if (this.datas.length <= 4) {
                    this.width = this.containerWidth / this.datas.length;
                } else {
                    this.width = this.containerWidth * 0.25
                }
                return this.width;
            },
            //计算总宽度
            totalWidth(){
                return this.itemWidth * this.datas.length;
            }
        },
        //观察变量的值
        watch: {
            "cIndex" (val, oldVal){
                let left = val * this.itemWidth;
                if (!this.isFirst) {
                    this.$refs.itemHook.style.transition = `all 0.3s`;
                } else {
                    this.$refs.itemHook.style.transition = `all 0s`;
                }
                this.$refs.itemHook.style.transform = `translateX(${left}px)`;
            },
            width(){
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
            height 2.75rem
            z-index 2147483644
            position relative
            &::after
                position absolute
                left 0
                bottom 0
                display block
                width 100%
                border-bottom 1px solid rgba(0, 0, 0, .1)
                content ''
            .tablayout-item
                float left
                height 2.75rem
                line-height 2.75rem
                text-align center
                user-select none
                -webkit-user-select none
                touch-callout none
                -webkit-touch-callout none
                & > a
                    display block
                    width 100%
                    height 100%
                    font-size 14px
                    &.active
                        font-size 16px
                        color #D74F43 !important
                        font-weight 500
                    &:active
                        background #F7F7F7
        .indicator
            position absolute
            bottom 0
            left 0
            z-index 2147483645
            height 2px
            background: #D74F43

</style>
