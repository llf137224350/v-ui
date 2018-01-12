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
                <label :for="id"> </label>
            </transition>
            <label :for="id"> {{label}}</label>
        </div>
    </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
    export default {
        created(){
            this.id = this.id + Math.random().toString(16);
            // 如果选中，则回调一次
            this.$nextTick(() => {
                if (this.msg === this.value) {
                    this.selfChecked = true;
                    this.$emit("msgChanged", this.value);
                }
            })
        },
        data(){
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
            change(){
                this.$emit("msgChanged", this.value)
            }
        }
    }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
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
                width 1.25rem
                height 1.25rem
                line-height 1.25rem
                position relative
                -webkit-transition all 0.6s
                transition all 0.6s
                box-sizing border-box
                top 4px

            & > .radio-input + label:after
                content ''
                display block
                position absolute
                left 0.125rem
                top 0.125rem
                width 0.75rem
                height 0.75rem
                background #41b883
                border-radius 50%
                -webkit-transition 0.3s
                cursor pointer
                transition 0.3s
                opacity 0
                transform scale(0.3)
            & > .radio-input:checked + label
                border-color rgba(65, 184, 131, .6)
            & > .radio-input:checked + label::after
                opacity 1
                transform scale(1)
            & > .radio-input + label
                border 2px solid #E2E2E2
                border-radius 1.25rem
</style>
