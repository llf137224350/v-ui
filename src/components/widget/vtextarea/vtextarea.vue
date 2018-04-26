<template>
    <div class="v-textarea-wrapper">
      <textarea class="v-textarea" v-model="value"
                :style="{'border':`1px solid ${borderColor}`,'border-radius':`${borderRadius}`}">
      </textarea>
        <span class="v-textarea-length-limit">{{currentLength}} / {{maxLength}}</span>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                value: "",
                currentLength: 0
            }
        },
        model: {    // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
            prop: 'msg',
            event: 'msgChanged'
        },
        props: {
            msg: '',
            maxLength: {
                type: Number,
                default: 200
            },
            borderColor: {
                type: String,
                default: "#F2F2F2"
            },
            borderRadius:{
                type:String,
                default:"3px"
            }
        },
        watch: {
            value(val) {
                this.currentLength = val.length;
                if (this.currentLength > this.maxLength) {
                    this.value = this.value.substring(0, this.maxLength)
                }
                this.$emit("msgChanged",val);
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    .v-textarea-wrapper
        .v-textarea
            position absolute
            left 0
            top 0
            right 0
            bottom 0
            width 100%
            resize none
            outline none
        .v-textarea-length-limit
            position absolute
            right 0
            bottom 5px
            font-size 12px
            color #999

</style>