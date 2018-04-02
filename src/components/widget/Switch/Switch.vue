<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="switch">
        <div class="switch-wrapper"
             @touchstart="touchstart($event)" @touchmove="touchmove($event)"
             @touchend="touchend($event)">
            <input type="checkbox" :id="id" class="switch-input" v-model="myChecked">
            <label :for="id" class="green"></label>
            <div class="switch-tips" :class="styles[styleIndex]" v-if="styleIndex != 1"></div>
        </div>
    </div>

</template>

<!--script-->
<script type="text/ecmascript-6">
    const width = 44;
    let startX = 0;
    let moveX = 0;
    export default {
        mounted() {
            // 进行rem适配 设置根元素字体大小
           this.setRootFontSize();
           window.onresize = ()=>{
               this.setRootFontSize();
           }

            this.id = "id" + Math.random().toString(16);
        },
        data() {
            return {
                myChecked: this.msg,
                id: "",
                styles: ["default", "blank", "on-off", "open-close"] // * 和x  空白  on和off  开和关
            }
        },
        model: {    // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
            prop: 'msg',
            event: 'switchChanged'
        },
        props: {
            msg: {
                type: Boolean,
                default: true
            },
            styleIndex: {
                type: Number,
                default: 0
            }
        },
        methods: {
            getCheckState() {//手动获取值
                return this.myChecked
            },
            touchstart(event) {
                startX = event.touches[0].pageX;
            },
            touchmove(event) {
                moveX = event.touches[0].pageX - startX;
            },
            touchend(event) {
                if (width / 3 < Math.abs(moveX)) {
                    if (moveX < 0) {
                        this.myChecked = false;
                    } else {
                        this.myChecked = true;
                    }
                }
                moveX = 0;
                startX = 0;
            },
            //设置根元素字体大小
            setRootFontSize(){
                // 进行rem适配 设置根元素字体大小
                let width = document.documentElement.clientWidth || document.body.clientWidth;
                let htmlDom = document.getElementsByTagName("html")[0]
                htmlDom.style.fontSize = width / 10 + 'px';
            }
        },
        watch: {
            "myChecked"() {
                this.$emit("switchChanged", this.myChecked)
            }
        }
    }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    /*单位转换*/
    px2rem($px)
        return ($px / 37.5) rem

    .switch
        display inline-block
        width px2rem(44px)
        height px2rem(22px)
        position relative
        user-select none
        -webkit-user-select none
        touch-callout: none
        -webkit-touch-callout none
        .switch-wrapper
            & > .switch-input
                display none
            .switch-input + label
                display inline-block
                width px2rem(44px)
                height px2rem(22px)
                position relative
                -webkit-transition all 0.3s
                transition all 0.3s
                box-sizing border-box
            & > .switch-input + label:after
                content ''
                display block
                width px2rem(22px)
                height px2rem(22px)
                background #E2E2E2
                border-radius 50%
                -webkit-transition 0.3s
                transition 0.3s
                transform translate(-8%,-8%) scale(.7)
                cursor pointer
            & > .switch-input:checked + label.green
                border-color rgba(65, 184, 131, .6)
            & > .switch-input:checked + label.green:after
                background rgb(65, 184, 131)
            & > .switch-input:checked + label:after
                transform translate(92%,-8%) scale(.7)
            & > .switch-input:checked + label + div::before
                display inline-block
            & > .switch-input:checked + label + div::after
                display none
            & > .switch-input + label
                border px2rem(2px) solid #E2E2E2
                border-radius px2rem(22px)
                z-index 10
            & > .switch-tips
                position absolute
                top 0
                left 0
                width px2rem(44px)
                height px2rem(22px)
                box-sizing border-box
                &::before
                    position absolute
                    top 0
                    left px2rem(8px)
                    display none
                    color rgba(65, 184, 131, .6)
                &::after
                    position absolute
                    top 0
                    right px2rem(8px)
                    display inline-block
                    color #E2E2E2
                &.default::before
                    line-height px2rem(24px)
                    font-size px2rem(10px)
                    content: '•'
                &.default::after
                    line-height px2rem(24px)
                    font-size px2rem(10px)
                    content: '×'
                &.on-off::before
                    line-height px2rem(23px)
                    font-size px2rem(10px)
                    content: 'on'
                &.on-off::after
                    line-height px2rem(25px)
                    font-size px2rem(10px)
                    content: 'off'
                &.open-close::before
                    line-height px2rem(24px)
                    font-size px2rem(10px)
                    content: '开'
                &.open-close::after
                    line-height px2rem(24px)
                    font-size px2rem(10px)
                    content: '关'
</style>
