<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="v-input border-1px" :class="{'focus':focused,'anim':anim}">
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
        <input v-if="type==='email'" type="email"
               :id="id"
               :ref="id"
               :placeholder="placeholder"
               v-model="selfValue"
               @focus="focus"
               @blur="blur"
        />
        <input v-if="type==='url'" type="url"
               :id="id"
               :ref="id"
               :placeholder="placeholder"
               v-model="selfValue"
               @focus="focus"
               @blur="blur"
        />
        <input v-if="type==='range'" type="range"
               :id="id"
               :ref="id"
               :placeholder="placeholder"
               v-model="selfValue"
               @focus="focus"
               @blur="blur"
        />
        <input v-if="type==='date'" type="date"
               :id="id"
               :ref="id"
               :placeholder="placeholder"
               v-model="selfValue"
               @focus="focus"
               @blur="blur"
        />
        <input v-if="type==='search'" type="search"
               :id="id"
               :ref="id"
               :placeholder="placeholder"
               v-model="selfValue"
               @focus="focus"
               @blur="blur"
        />
        <input v-if="type==='color'" type="color"
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
        data() {
            return {
                focused: false,
                hideClear: true,
                id: Date.now() + Math.random(),
                selfValue: this.msg
            }
        },
        mounted() {
            // 进行rem适配 设置根元素字体大小
           this.setRootFontSize();
           window.onresize = ()=>{
               this.setRootFontSize();
           }
        },
        model: {    // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
            prop: 'msg',
            event: 'msgChanged'
        },
        props: {
            msg: "",
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
            },
            anim: {
                type: Boolean,
                default: false
            },
        },
        methods: {
            focus() {
                this.focused = true;
            },
            blur() {
                this.focused = false;
            },
            touchstart() {
                this.selfValue = "";
            },
            setFocus() {
                this.$refs[this.id].focus();
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
            msg() {
                this.selfValue = this.msg;
            },
            selfValue() {
                this.$emit("msgChanged", this.selfValue);
            }
        }
    }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    /*单位转换*/
    px2rem($px)
        return ($px / 37.5) rem

    .v-input
        height px2rem(48px)
        line-height px2rem(48px)
        display flex
        box-sizing content-box
        position relative
        &::after
            position: absolute
            left: 50%
            bottom: 0
            display: block
            width: 0%
            height: px2rem(2px)
            background: #01cc77
            content: ""
        &.anim::after
            transition: all 0.4s
        &.focus::after
            left: 0%
            width: 100%
        & > label
            flex 0 0 px2rem(80px)
        & > input
            flex 1
            outline none
            margin-right px2rem(10px)
            background: rgba(0,0,0,0)
        & > i
            flex 0 0 px2rem(12px)
            display inline-block
            width px2rem(12px)
            height px2rem(12px)
            margin-top px2rem(18px)
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAAAxElEQVQ4T72V0RHCIBBE2dLsQCswduAvFTBUYazAEs/BSZxIDm4DiXwxfLxd7lgOMcaziLxE5Oa9H13nCiEMAB4ALpjhidkrMIMn1glpkx023UBjfOC9AiVzX3irQO3WP/CtAlY5V3BWwAInjgq3BBhwFV4SYMEmPBdwzqWQDWwmimVZBnXplgVTzhX3dJJN51mNnwCurPsqXGveLg2tQViB/4aIdWUFbfVatoCZ3/T4L7fFcT4N1WFx6Jib4KOI3Pce0G/gjEKmETd3cgAAAABJRU5ErkJggg==") no-repeat center
            -webkit-background-size: cover
            background-size: cover

</style>
