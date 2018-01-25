<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
  <div class="appbar" :style="{background:color}">
    <div class="appbar-left border-y-1px"
         @click.stop="appbarLeftClick"
         v-html="leftIcon"
    >
    </div>
    <div class="appbar-title">{{vtitle}}</div>
    <div class="appbar-right"
         @click.stop="appbarRightClick"
         v-html="rightIcon"
         v-show="haveMenu"
    >
    </div>
  </div>

</template>

<!--script-->
<script type="text/ecmascript-6">
  export default {
    props: {
      vtitle: {
        type: String,
        default: "标题"
      },
      leftIcon: {
        type: String,
        default: "<i class='appbar-left-icon'></i>"
      },
      rightIcon: {
        type: String,
        default: "<i class='appbar-right-icon'></i>"
      },
      color: {
        type: String,
        default: "#393A3F"
      },
      haveMenu: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      appbarLeftClick(){
        this.$emit("appbarLeftClick");
      },
      appbarRightClick(){
        this.$emit("appbarRightClick");
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
    .border-y-1px
      &::after
        -webkit-transform scaleY(0.7)
        transform scaleY(0.7)

  @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2)
    .border-y-1px
      &::after
        -webkit-transform scaleY(0.5)
        transform scaleY(0.5)

  .appbar
    position relative
    width 100%
    height 3rem
    line-height 3rem
    background: #393A3F
    display flex
    & > div
      touch-callout: none
      -webkit-touch-callout none
      user-select none
      -webkit-user-select none
    .appbar-left, .appbar-right
      width 3rem
      height 3rem
      flex 0 0 3rem
      .appbar-left-icon, .appbar-right-icon
        display block
        width 1.75rem
        height 1.75rem
        margin 0.625rem
        background: green
      .appbar-left-icon
        background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABmklEQVR4Xu3aQUoDQRCF4VdncZUziJIsPId6A2+k53Cl4AF048pDKLovGZiBMDBu0lX1S/dsssrQ7+vXgS5i6vyxzvNrAIwGdC4wjkDnBRg/guMIjCPQuQD+CLj7g6QnM5s+mz9ogDn89Zz6NgIBC7AKv+x8cwQkwEb4L0l7M3tteQ5wAJnhJ0gUQHZ4FEBFeAxAVXgEQGX4coDq8KUAhPBlAJTwJQCk8OkAtPCpAMTwaQDU8CkA5PDhAPTwoQDu/i5pt7q6hlxpT7keh9wG3f1D0hk9fEgDNsL/SLpoPcw4ZeeX7zZvgLu/SDpfLe5b0mUXAFPwDYRPSQcaQvMGLDvv7o+SrlZNwCGEAcxNuJF0T0YIBfgPCOEAdIQUADJCGgAVIRWAiJAOQEMoASAhlAFQEEoBCAjlANUICIBKBAxAFQIKoAIBB5CNgAT4A+HZzPYtRmFhI7GWi3P343nC2/wnqWmo0uzBNuBosjQh3EWED5kKN9uapBfhGxDtMACihenvHw2g71D0+kYDooXp7x8NoO9Q9Pq6b8AvFMT3Qf2VWZgAAAAASUVORK5CYII=") no-repeat center
        -webkit-background-size cover
        background-size cover
      .appbar-right-icon
        background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABOElEQVR4Xu2awQ3CMAxFvyeAEWADmARGgUlgFJgERigbwARFkXqqGqmn2Ipfz5Vsfz870VdMyT9LXr8QAAKSK8AIJAeAJcgIMALJFWAEPAAYx3En6SbpMMV/S7qa2dA6n+YETMW/JG1nxX4lHVuL4CHAQ9Kp0umnmZ1bUuAhQOn0plLkYGb7zAJ8zKzsh2afBwHpR6B0uGz9+Rj8yqnQ/RIsbE8nwX12DF5aF19yaT4CzYZ7ZSAEWClUt79BQLetXVkYBKwUqtvfIMCjtfgBEn4AfsCyAvgB+AEJLDH8APwAj8tHJSY3wUDNcEkFAlxkDxQUAgI1wyUVCPCQHT8AP4D3AbwPqOwe3gdkeCKDH4Af4HH5wA9YVoCrcCAaXVKBABfZAwWFgEDNcEkFAlxkDxQUAgI1wyWVP2nAhEE1jY+QAAAAAElFTkSuQmCC") no-repeat center
        -webkit-background-size cover
        background-size cover
    .appbar-left:active, .appbar-right:active
      background: rgba(0, 0, 0, .1)
    .appbar-left
        position relative
        &::before
            position absolute
            right 0
            bottom 0.75rem
            display block
            height 1.5rem
            border-left 1px solid rgba(0,0,0,.1)
            content ''
    .appbar-title
      display block
      flex 1
      line-height 3.125rem
      color #fff
      font-size 17px
      padding 0  0.75rem
      overflow hidden
      white-space nowrap
      text-overflow ellipsis

</style>
