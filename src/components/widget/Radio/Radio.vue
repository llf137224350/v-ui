<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="radio">
        <div class="radio-wrapper">
            <input type="radio" :value="value" :name="name" :id="id" class="radio-input" :checked="selfChecked"
                   @change="change">
            <transition name="fade">
                <label :for="id"></label>
            </transition>
            <label :for="id">{{label}}</label>
        </div>
    </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
    export default {
        mounted() {
            this.id = this.id + Math.random().toString(16);
            // 进行rem适配 设置根元素字体大小
            this.setRootFontSize();
            window.onresize = ()=>{
                this.setRootFontSize();
            }

            // 如果选中，则回调一次
            if (this.msg === this.value) {
                this.selfChecked = true;
                this.$emit("msgChanged", this.value);
            }
        },
        data() {
            return {
                id: "id",
                selfChecked: false
            }
        },
        model: {    // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
            prop: 'msg',
            event: 'msgChanged'
        },
        props: {
            msg: '',
            name: {
                type: String
            },
            value: {
                type: String,
                default: ""
            },
            label: {
                type: String,
                default: ""
            }
        },
        methods: {
            change() {
                this.$emit("msgChanged", this.value)
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
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    /*单位转换*/
    px2rem($px)
        return ($px / 37.5) rem

    .radio
        display inline-block
        .radio-wrapper
            user-select none
            -webkit-user-select none
            touch-callout: none
            -webkit-touch-callout none
            .radio-input
                display none
            .radio-input + label
                display inline-block
                width px2rem(20px)
                height px2rem(20px)
                position relative
                -webkit-transition all 0.6s
                transition all 0.6s
                box-sizing border-box
                top px2rem(5px)
                border px2rem(2px) solid #E2E2E2
                border-radius px2rem(20px)
            & > .radio-input + label::after
                content ''
                display block
                width 100%
                height 100%
                background #41b883
                border-radius 100%
                cursor pointer
                -webkit-transition 0.3s
                transition all 0.3s
                opacity 0
                transform: scale(.3)
            & > .radio-input:checked + label
                border-color rgba(65, 184, 131, .6)
            & > .radio-input:checked + label::after
                opacity 1
                transform scale(.7)
</style>
