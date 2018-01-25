<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
  <div class="divider border-1px" :class="dividerType"></div>
</template>

<!--script-->
<script type="text/ecmascript-6">
  export default {
    props: {
      dividerType: {
        type: String,
        default: "slide"
      }
    }
  }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" >
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
    .divider
      position relative
      &.slide::after
        border-bottom 1px solid rgba(0, 0, 0, .1)
      &.dotted::after
        border-bottom 1px dotted rgba(0, 0, 0, .1)
      &.dashed::after
        border-bottom 1px dashed rgba(0, 0, 0, .1)
      &::after
        position absolute
        left 0
        bottom 0
        display block
        width 100%
        content ''


</style>
