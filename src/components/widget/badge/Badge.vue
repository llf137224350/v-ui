<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
  <div class="badge" :class="{'badge-no-empty':number,'badge-other':number >=10}">{{number}}</div>

</template>

<!--script-->
<script type="text/ecmascript-6">
  export default {
    props: {
      number: {
        type: Number,
        default: undefined
      }
    }
  }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  .badge
    display inline-block
    color #fff
    min-width 0.625rem
    min-height 0.625rem
    background: #F74C31
    border-radius 0.3125rem
    &.badge-no-empty
      font-size 12px
      text-align center
      padding 0.125rem 0.1875rem
      border-radius  0.5rem
    &.badge-other
      padding 0.125rem  0.3125rem
</style>
