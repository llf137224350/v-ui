<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
  <div class="floatbutton" v-html="floatButtonIcon"
       :style="{background:color}">
  </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
  export default {
    props: {
      floatButtonIcon: {
        type: String,
        default: '<i class="floatbutton-icon"></i>'
      },
      color: {
        type: String,
        default: "#41b883"
      }
    }
  }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  .floatbutton
    width 48px
    height 48px
    border-radius 50%
    box-shadow 0 0.0625rem  0.125rem #999
    position relative
    touch-callout: none
    -webkit-touch-callout none
    user-select none
    -webkit-user-select none
    &::after
      position absolute
      display block
      content: ""
      left 50%
      top 50%
      width 0
      height 0
      background: rgba(255, 255, 255, .1)
      border-radius 50%
      transition all .15s
    .floatbutton-icon
      display inline-block
      width 1.5rem
      height 1.5rem
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA7UlEQVR4Xu3ZQRLCIBBE0czN9OR6Myw3mmLhbELGwMuWKsh0BvjdiW3xJxavfyOADlhcAVtg8QZwCJZtgdZa23dfRJS8S8mi78IJoANsAWeAQ3CngFvANYgDSpikZFEghAShMC/ADDFDzBAzxAwxQ18FuMF/dYP9fX21/whZZ6VmiAAdsOiAiylwxBa4Dar50c17H7FORDx/zZueASNeSiAiEBGICEQEIgIRgYhARCAiEBGIfBTITMsoJOcFRimbzQuEgBAQAkJACAgBoXVBKOOEs8bLSPCsArN1CJApNPu4Dpj9C2f16YBModnHXymmwUGqCx8xAAAAAElFTkSuQmCC") no-repeat center
      -webkit-background-size cover
      background-size cover
      margin 0.75rem
  .floatbutton:active::after
    margin-top -0.3125rem
    margin-left -0.3125rem
    width 0.625rem
    height 0.625rem
    transform scale(5)
</style>
