<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
  <div class="appbar" :style="{background:color}">
    <div class="appbar-left border-1px"
         @click.stop="appbarLeftClick"
         v-html="leftIcon"
    >
    </div>
    <div class="appbar-title ">{{vtitle}}</div>
    <div class="appbar-right-for-text"
         @click.stop="appbarRightClick"
         v-show="haveMenu"
    >
      <span class='appbar-right-text'>{{rightText}}</span>
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
      rightText: {
        type: String,
        default: "提交"
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
    .border-1px
      &::after
        -webkit-transform scaleY(0.7)
        transform scaleY(0.7)

  @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2)
    .border-1px
      &::after
        -webkit-transform scaleY(0.5)
        transform scaleY(0.5)

  .appbar
    position relative
    width 100%
    height 48px
    line-height 48px
    & > div
      touch-callout: none
      -webkit-touch-callout none
      user-select none
      -webkit-user-select none
    display flex
    .appbar-left
      width 48px
      height 48px
      flex 0 0 48px
      .appbar-left-icon
        display block
        width 30px
        height 30px
        margin 9px
        background: green
        background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABmklEQVR4Xu3aQUoDQRCF4VdncZUziJIsPId6A2+k53Cl4AF048pDKLovGZiBMDBu0lX1S/dsssrQ7+vXgS5i6vyxzvNrAIwGdC4wjkDnBRg/guMIjCPQuQD+CLj7g6QnM5s+mz9ogDn89Zz6NgIBC7AKv+x8cwQkwEb4L0l7M3tteQ5wAJnhJ0gUQHZ4FEBFeAxAVXgEQGX4coDq8KUAhPBlAJTwJQCk8OkAtPCpAMTwaQDU8CkA5PDhAPTwoQDu/i5pt7q6hlxpT7keh9wG3f1D0hk9fEgDNsL/SLpoPcw4ZeeX7zZvgLu/SDpfLe5b0mUXAFPwDYRPSQcaQvMGLDvv7o+SrlZNwCGEAcxNuJF0T0YIBfgPCOEAdIQUADJCGgAVIRWAiJAOQEMoASAhlAFQEEoBCAjlANUICIBKBAxAFQIKoAIBB5CNgAT4A+HZzPYtRmFhI7GWi3P343nC2/wnqWmo0uzBNuBosjQh3EWED5kKN9uapBfhGxDtMACihenvHw2g71D0+kYDooXp7x8NoO9Q9Pq6b8AvFMT3Qf2VWZgAAAAASUVORK5CYII=") no-repeat center
        -webkit-background-size cover
        background-size cover
    .appbar-right-for-text
      flex 0 0 60px
      .appbar-right-text
        display block
        text-align center
        color #fff
        font-size 16px
    .appbar-left:active, .appbar-right-for-text:active
      background: rgba(0,0,0,.1)
    .appbar-left
      position relative
      &::before
        position absolute
        right 0
        bottom 0
        display block
        height 100%
        border-left 1px solid rgba(0,0,0,.1)
        content ''
    .appbar-title
      display block
      flex 1
      line-height 50px
      color #fff
      font-size 18px
      padding 0 12px
      overflow hidden
      white-space nowrap
      text-overflow ellipsis

</style>
