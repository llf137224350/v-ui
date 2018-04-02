<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="floatbutton"
         :style="{background:color}">
        <drawCircle></drawCircle>
        <div v-html="floatButtonIcon"></div>

    </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
    import drawCircle from "components/widget/DrawCircle/DrawCircle"

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
        },
        mounted() {
            // 进行rem适配 设置根元素字体大小
            this.setRootFontSize();
            window.onresize = () => {
                this.setRootFontSize();
            }
        },
        methods: {
            //设置根元素字体大小
            setRootFontSize() {
                // 进行rem适配 设置根元素字体大小
                let width = document.documentElement.clientWidth || document.body.clientWidth;
                let htmlDom = document.getElementsByTagName("html")[0]
                htmlDom.style.fontSize = width / 10 + 'px';
            }
        }
    }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    /*单位转换*/
    px2rem($px)
        return ($px / 37.5) rem

    .floatbutton
        width px2rem(48px)
        height px2rem(48px)
        border-radius 50%
        box-shadow 0 px2rem(1px) px2rem(2px) #999
        position relative
        touch-callout: none
        -webkit-touch-callout none
        user-select none
        -webkit-user-select none
        overflow hidden
        .floatbutton-icon
            display inline-block
            width px2rem(24px)
            height px2rem(24px)
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA7UlEQVR4Xu3ZQRLCIBBE0czN9OR6Myw3mmLhbELGwMuWKsh0BvjdiW3xJxavfyOADlhcAVtg8QZwCJZtgdZa23dfRJS8S8mi78IJoANsAWeAQ3CngFvANYgDSpikZFEghAShMC/ADDFDzBAzxAwxQ18FuMF/dYP9fX21/whZZ6VmiAAdsOiAiylwxBa4Dar50c17H7FORDx/zZueASNeSiAiEBGICEQEIgIRgYhARCAiEBGIfBTITMsoJOcFRimbzQuEgBAQAkJACAgBoXVBKOOEs8bLSPCsArN1CJApNPu4Dpj9C2f16YBModnHXymmwUGqCx8xAAAAAElFTkSuQmCC") no-repeat center
            -webkit-background-size cover
            background-size cover
            margin px2rem(12px)

</style>
