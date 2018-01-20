<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="floatbutton"
         :style="{background:color}" >
        <drawCircle ></drawCircle>
        <div v-html="floatButtonIcon"></div>

    </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
    import drawCircle from "components/widget/drawCircle/drawCircle"
    export default {
        components: {
            drawCircle
        },
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
        width 3rem
        height 3rem
        border-radius 50%
        box-shadow 0 0.0625rem 0.125rem #999
        position relative
        touch-callout: none
        -webkit-touch-callout none
        user-select none
        -webkit-user-select none
        overflow hidden
        .floatbutton-icon
            display inline-block
            width 1.5rem
            height 1.5rem
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA7UlEQVR4Xu3ZQRLCIBBE0czN9OR6Myw3mmLhbELGwMuWKsh0BvjdiW3xJxavfyOADlhcAVtg8QZwCJZtgdZa23dfRJS8S8mi78IJoANsAWeAQ3CngFvANYgDSpikZFEghAShMC/ADDFDzBAzxAwxQ18FuMF/dYP9fX21/whZZ6VmiAAdsOiAiylwxBa4Dar50c17H7FORDx/zZueASNeSiAiEBGICEQEIgIRgYhARCAiEBGIfBTITMsoJOcFRimbzQuEgBAQAkJACAgBoXVBKOOEs8bLSPCsArN1CJApNPu4Dpj9C2f16YBModnHXymmwUGqCx8xAAAAAElFTkSuQmCC") no-repeat center
            -webkit-background-size cover
            background-size cover
            margin 0.75rem

</style>
