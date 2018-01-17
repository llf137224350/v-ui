<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="v-input border-1px" :class="{'focus':focused}">
        <label :for="id">{{label}}</label>
        <input v-if="type==='text'" type="text"
               :id="id"
               :ref="id"
               :placeholder="placeholder"
               v-model="selfValue"
               @focus="focus"
               @blur="blur"
               />
        <input v-if="type==='password'" type="password"
               :id="id"
               :ref="id"
               :placeholder="placeholder"
               v-model="selfValue"
               @focus="focus"
               @blur="blur"
        />
        <input v-if="type==='number'" type="number"
               :id="id"
               :ref="id"
               :placeholder="placeholder"
               v-model="selfValue"
               @focus="focus"
               @blur="blur"
        />
        <i class="clear" v-show="selfValue.length > 0 && focused"
          @touchstart="touchstart"
        ></i>
    </div>

</template>

<!--script-->
<script type="text/ecmascript-6">
    export default {
        data(){
            return {
                focused: false,
                hideClear:true,
                id: Date.now() + Math.random(),
                selfValue:this.msg
            }
        },
        created(){
            console.log(this.Ref);
        },
        model: {    // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
            prop: 'msg',
            event: 'msgChanged'
        },
        props: {
            msg:"",
            label: {
                type: String,
                default: ""
            },
            type: {
                type: String,
                default: "text"
            },
            placeholder: {
                type: String,
                default: "请输入"
            }
        },
        methods: {
            focus(){
                this.focused = true;
            },
            blur(){
                this.focused = false;
            },
            touchstart(){
                this.selfValue = "";
            },
            setFocus(){
                this.$refs[this.id].focus();
            }
        },
        watch:{
            msg(){
                this.selfValue = this.msg;
            },
            selfValue(){
                this.$emit("msgChanged",this.selfValue);
            }
        }
    }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    .v-input
        height 3rem
        line-height 3rem
        display flex
        box-sizing content-box
        position relative
        &::after
            position absolute
            left 0
            bottom 0
            display block
            width 100%
            border-bottom 1px solid rgba(0, 0, 0, .1)
            content ''
        &.focus
            &::after
                border-bottom 1px solid #01CC77
        & > label
            flex 0 0 5rem
        & > input
            flex 1
            outline none
            margin-right 0.625rem
        & > i
            flex 0 0 0.75rem
            display inline-block
            width 0.75rem
            height 0.75rem
            margin-top 1.125rem
            background: url("./images/icon_clear.png") no-repeat center
            -webkit-background-size: cover
            background-size: cover

</style>
