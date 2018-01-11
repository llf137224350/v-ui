<!--
   开发者：い 狂奔的蜗牛
   说明：checkbox
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="check-box">
        <div class="check-box-wrapper">
            <input type="checkbox" :value="value" :name="name" :id="id" class="check-box-input" :checked="selfChecked"
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
            if(this.selfValue.indexOf(this.value) !=-1)
                this.selfChecked = true;
        },
        data(){
            return {
                id: "id",
                selfChecked: false,
                selfValue: this.msg
            }
        },
        model: {    // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
            prop: 'msg',
            event: 'msgChanged'
        },
        props: {
            msg: "",
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
                this.selfChecked = !this.selfChecked;
                if (this.selfChecked) {
                    this.selfValue += "," + this.value;
                } else {
                    if (this.selfValue === this.value)
                        this.selfValue = "";
                    else
                        this.selfValue = this.selfValue.replace(this.value, "")
                }
            }
        },
        watch: {
            msg(){
                this.selfValue = this.msg;
            },
            selfValue(){
                if (this.selfValue.indexOf(",") === 0)
                    this.selfValue = this.selfValue.substring(1)
                if (this.selfValue.length - 1 === this.selfValue.lastIndexOf(",")) {
                    this.selfValue = this.selfValue.substring(0, this.selfValue.length - 1)
                }
                this.selfValue = this.selfValue.replace(/,{2}/,",");// 处理会出现两个 ,,的问题
                this.$emit("msgChanged", this.selfValue)
            }
        }
    }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    .check-box
        display inline-block
        .check-box-wrapper
            user-select none
            -webkit-user-select none
            touch-callout: none
            -webkit-touch-callout none
            .check-box-input
                display none
            .check-box-input + label
                display inline-block
                width 20px
                height 20px
                line-height 20px
                position relative
                -webkit-transition all 0.6s
                transition all 0.6s
                box-sizing border-box
                top 4px
                border 2px solid #E2E2E2
                border-radius 3px
            & > .check-box-input + label:after
                content ''
                display block
                position absolute
                left 0
                top 0
                width 16px
                height 16px
                background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADxUlEQVR4Xu2aTXbTMBDHZ5xF2FFOQDgB4QQoG3B25QS0J6Bd8+KG5LFuOUHCCUpXCWwiblBOANyg3TULZ3hybF6aF1sjRXZsJ95G9mh++s+HpCDs+YN77j8cABwUsOcEDiFQZwGIWf8IHuBIdvt/0vysrQLE9+ExEI2A8EZ2eyd7AyBa9bl3gYBnymkCupN+8GwvAIgfn9uwWIwQoL3qMBGdym4w3gShNiEgJoMTQLhEwKN1RwlASr/XqSWAWPLK8dQ4J4KvaXmg0goQk34LsHG9LvnH8k93Xo2rLAAxGQpAut4k+QRA1sonYyoJQMU7Io6yehgCupF+cKzrcyoHQEwHo6x4XzpMv6i5ELLTv6sNgGWya6gSp1lVvvOVyQGx87OsZGe68pXJAcvmJlTJrqWR8z15npBvPt7qZL/6e6lzQOz8LCvTx85YOV/qEDBwHrJaXZ0aSqkAI+eBzqUfXOkcrcxmyMj5jBaXC6RUCjBxXtX6mR882vVxnS5lEow3Nb8ZCU/N/56aYYvT6OiglEIB/DofV3vPe2Va7kqdA8R0qJocoVutqMndMumt29i5Ani9fbzyzA0OB6RxJxglqDBspx0tmRhNxorp4AwBL1nvEvylJ2HbRdwbJ8HV7ExAY+kHp6xJZwxS+3lEmHG/Qw7j3gjAptK0LQSzcgdABJ9kt9fnwjIZl5kDsiZKALfQDDumkjTN+ED0c9YNWAnSxHFtDuCskg0Ek6QX1XtSeSf9ZsfGaVYIdCYDCYivdQbUxQN4jQ6nLnOOslbtuS55m3xJDQElVZx7EgBfuoDAUdQjOzlLXxsCaoAJhKhJSbmBMY77AqTPAvAfwkPjFhCe65SQBkFMh1cI8IHzfh7dXpZdVieo5IuLhQSApxwnVsukuqVFgmvOe9GYgqTPVkAy0AYCNBfnMPe4OzxlKvesv74QLAXYQmCvejwwz4YnbS5GAKKcYBgOfAhuDjj49pYjjQFEEAz7eM6k8ur1dbatACwh6O/ndMaT3wngi/R70T86in6sATiE4Ox4ywbeVgBcQCCEd/Jt75vN5F28szWArSAUXPM3AXMCIE6MfUS4MFkVovBFnjs9zlycAYghjBHhPcfwLmp+rgpIPi4mQw6EnSa+VRBOFcCFsM1lJkddJmNyAZAZDiVIfLkrIDGw6VSJCDqy21M7y1I8uSkgUsHaqRLnb2tFU8kVwBqEVt4HnDbwcgeQQIAH79jlrZKNs4WUQVcTK+o7hSigKGds7BwA2FCr0zsHBdRpNW18OSjAhlqd3tl7BfwDg+XkULy8I9UAAAAASUVORK5CYII=")
                background-repeat: no-repeat
                -webkit-background-size: cover
                background-position: center
                background-size: cover
                -webkit-transition 0.3s
                cursor pointer
                transition 0.3s
                opacity 0
                transform scale(0.3)
            & > .check-box-input:checked + label::after
                opacity 1
                transform scale(1)

</style>
