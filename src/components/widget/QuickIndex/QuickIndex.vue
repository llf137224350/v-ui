<template>
    <div class="quick-index-wrapper">
        <div class="quick_index" ref="quickIndexHook">
            <div>
                <div class="quick-index-item-wrapper" v-for="item in quickIndexDatas">
                    <div class="quick_index_item_tips" v-if="item.showKey">
                        {{item.key}}
                    </div>
                    <div class="quick_index_item" :data-value="item.value" @click="getValue($event)">
                        {{item.value}}
                    </div>
                </div>
            </div>
        </div>
        <ul class="key-wrapper" ref="keyWrapperHook"
            @touchstart.stop.prevent="touchstart"
            @touchmove.stop.prevent="touchmove"
            @touchend.stop.prevent="touchend"
            @touchcancel.stop.prevent="touchend"
        >
            <li v-for="key in keys" :class="{touched:showIndicator}">{{key}}</li>
        </ul>
        <transition
            enter-active-class="animated fadeIn "
            leave-active-class="animated fadeOut "
        >
            <div class="indicator" v-show="showIndicator" ref="indicatorHook">
                {{keys[index]}}
            </div>
        </transition>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from "better-scroll"
    import {getPinYinFirstCharacter} from "./pinyin.js"

    let moveY = 0;
    export default {
        data() {
            return {
                scroll: undefined,
                index: -1,
                top: 0,
                width: 0,
                height: 0,
                keyLocations: [],
                indicator: null,
                showIndicator: false,
                quickIndexDatas: [],
                keys: ["☆", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
            }
        },
        mounted() {
            // 进行rem适配 设置根元素字体大小
            this.setRootFontSize();
            window.addEventListener("resize", () => {
                this.setRootFontSize();
                this.refresh();
            })

        },
        model: {    // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
            prop: 'msg',
            event: 'msgChanged'
        },
        props: {
            msg: ''
        },
        methods: {
            //设置根元素字体大小
            setRootFontSize() {
                // 进行rem适配 设置根元素字体大小
                let width = document.documentElement.clientWidth || document.body.clientWidth;
                let htmlDom = document.getElementsByTagName("html")[0]
                htmlDom.style.fontSize = width / 10 + 'px';
            },
            // 根据key 比较大小进行排序
            compare(propertyName) {
                return function (object1, object2) {
                    var value1 = object1[propertyName];
                    var value2 = object2[propertyName];
                    if (value2 < value1) {
                        return 1;
                    } else if (value2 > value1) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            },
            // 初始化
            init(data) {
                this.index = -1;
                // 处理数据
                let tempData = data || [];
                // 排序
                tempData = tempData.sort();
                let preCharacter = "";
                let key = "";
                let temp = [];

                //生成key和是否显示key
                for (let i = 0; i < tempData.length; i++) {
                    // 调用pinyin.js里面的方法获取首个汉字拼音首字母
                    key = getPinYinFirstCharacter(tempData[i], "", true).substring(0, 1)
                    temp.push({
                        key: key,
                        value: tempData[i],
                        showKey: preCharacter != key
                    })
                    preCharacter = key;
                }
                // 按key排序
                temp = temp.sort(this.compare("key"))
                // key还有重复 去掉重复key
                for (let i = temp.length - 1; i >= 1; i--) {
                    if (temp[i].key === temp[i - 1].key) {
                        temp[i].showKey = false;
                    } else {
                        temp[i].showKey = true;
                    }
                }
                this.quickIndexDatas = temp;
                this.refresh();
            },
            refresh() {
                this.$nextTick(() => {
                    this.scroll = new BScroll(this.$refs.quickIndexHook, {
                        probeType: 3,
                        click: true
                    });
                    // 获取key所在的y坐标
                    let tips = this.$refs.quickIndexHook.getElementsByClassName("quick_index_item_tips")
                    for (let index in tips) {
                        let tip = tips[index];
                        if (tip.getBoundingClientRect) {
                            this.keyLocations.push({
                                key: tip.innerText.trim(),
                                value: tip.getBoundingClientRect().y
                            })
                        }
                    }

                    let keyWrapper = this.$refs.keyWrapperHook.getBoundingClientRect();
                    this.top = keyWrapper.top;
                    this.height = keyWrapper.height;
                    this.width = keyWrapper.width;

                    this.indicator = this.$refs.indicatorHook;
                    this.indicatorHeight = this.indicator.getBoundingClientRect().height;
                })
            },
            // 获取移动的距离
            getMoveY(e) {
                moveY = e.touches[0].clientY - this.top;
                moveY = moveY <= this.width / 2 ? this.width / 2 : moveY;
                moveY = moveY >= this.height - this.width / 2 ? this.height - this.width / 2 : moveY;
                this.indicator.style.top = this.top + moveY - 28 + 'px';
            },
            touchstart(e) {
                this.showIndicator = true;
                this.getMoveY(e);
            },
            touchmove(e) {
                this.getMoveY(e);
                // // // 计算当前位置
                this.index = this.currentIndex(moveY);
            },
            currentIndex(scrollY) {
                let height1;
                let height2;
                for (let i = 0; i < this.keys.length; i++) {
                    height1 = i * this.width;
                    height2 = (i + 1) * this.width;
                    if (i === this.keys.length - 1 || (scrollY >= height1 && scrollY <= height2)) {
                        return i;
                    }
                }
                return 0;
            },
            touchend() {
                this.showIndicator = false;
                this.index = this.currentIndex(moveY)
                moveY = 0;
            },
            getValue(e) {
                if (!e._constructed)
                    return;
                let value = e.target.dataset["value"];
                if (!value) {
                    value = e.currentTarget.dataset[value];
                }
                this.$emit("msgChanged", value);
            }
        },
        watch: {
            // 根据索引值判断是否滚动
            index(val) {
                if (this.keys[val] === "☆") {
                    let tip = this.$refs.quickIndexHook.getElementsByClassName("quick_index_item_tips")[0]
                    if (tip) {
                        this.scroll.scrollToElement(tip)
                    }
                    return;
                }
                for (let i = 0; i < this.keyLocations.length; i++) {
                    if (this.keys[val] === this.keyLocations[i].key) {
                        let tip = this.$refs.quickIndexHook.getElementsByClassName("quick_index_item_tips")[i]
                        if (tip) {
                            this.scroll.scrollToElement(tip)
                        }
                        break;
                    }
                }
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    /*单位转换*/
    px2rem($px)
        return ($px / 37.5) rem

    ::-webkit-scrollbar
        width 0
        height 0

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

    @keyframes fadeOut
        from
            opacity 1
        to
            opacity 0

    .quick-index-wrapper
        .quick_index
            position absolute
            left 0
            top 0
            right 0
            bottom 0
            overflow hidden
            background: #f7f7f7
            & > div
                padding-bottom px2rem(44)
            .quick-index-item-wrapper
                position relative
                &::after
                    position absolute
                    left 0
                    bottom 0
                    display block
                    width 100%
                    border-bottom px2rem(1px) solid #F7F7F7
                    content ''
                .quick_index_item_tips
                    background: #F7F7F7
                    padding px2rem(10px)
                    font-size px2rem(14px)
                .quick_index_item
                    padding px2rem(14px) px2rem(10px)
                    font-size px2rem(14px)
                    background: #fff
                    &:active
                        background: #f7f7f7
        .key-wrapper
            position absolute
            right px2rem(5px)
            top 50%
            width 20px
            margin-top px2rem(-22px)
            transform translateY(-50%)
            border-radius 10px
            background: #fff
            padding 10px 0
            box-sizing content-box
            box-shadow 0 0 0 1px #F7F7F7
            & > li
                width 20px
                height 20px
                line-height 20px
                text-align center
                font-size 10px
                color rgba(0,0,0,.3)
                user-select none
                -webkit-user-select none
            & > li.touched
                color #666
        .indicator
            position fixed
            top 90px
            right px2rem(60px)
            width px2rem(50)
            height px2rem(50)
            line-height px2rem(50)
            text-align center
            background: #41B883
            border-radius 50%
            color #fff
            font-size px2rem(18px)
            z-index 1
            &.animated
                -webkit-animation-duration 0.6s
                animation-duration 0.6s
                -webkit-animation-fill-mode both
                animation-fill-mode both
            &.fadeIn
                -webkit-animation-name fadeIn
                    animation-name fadeIn
            &.fadeOut
                -webkit-animation-name fadeOut
                animation-name fadeOut

</style>