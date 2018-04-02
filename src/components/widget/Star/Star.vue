<!--html-->
<template>
    <div class="star" :class="starType">
    <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" :key="index"
          @click="clickHandle(index)"
    >
    </span>
    </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
    const LENGTH = 5;
    const CLS_ON = "on";
    const CLS_HALF = "half";
    const CLS_OFF = "off";
    let startX = 0;
    let moveX = 0
    export default {
        data() {
            return {
                selfScore: this.score
            }
        },
        props: {
            size: {
                type: Number
            },
            score: {
                type: Number
            },
            readonly: {
                type: Boolean,
                default: false
            },
            msg: ""
        },
        model: {    // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
            prop: 'msg',
            event: 'starChanged'
        },
        computed: {
            starType() {
                return 'star-' + this.size;
            }
            ,
            itemClasses() {
                let result = [];
                let score = Math.floor(this.selfScore * 2) / 2;
                let hasDecimal = score % 1 !== 0;
                let integer = Math.floor(score);
                for (let i = 0; i < integer; i++) {
                    result.push(CLS_ON);
                }
                if (hasDecimal) {
                    result.push(CLS_HALF);
                }
                while (result.length < LENGTH) {
                    result.push(CLS_OFF);
                }
                return result;
            }

        },
        mounted() {
            // 进行rem适配 设置根元素字体大小
           this.setRootFontSize();
           window.onresize = ()=>{
               this.setRootFontSize();
           }
        },
        methods: {
            clickHandle(index) {
                if (this.readonly)
                    return
                if (index + 1 != this.selfScore) {
                    this.selfScore = index + 1;
                } else {
                    this.selfScore -= 0.5;
                }
                this.$emit("starChanged", this.selfScore);
            },
            //设置根元素字体大小
            setRootFontSize(){
                // 进行rem适配 设置根元素字体大小
                let width = document.documentElement.clientWidth || document.body.clientWidth;
                let htmlDom = document.getElementsByTagName("html")[0]
                htmlDom.style.fontSize = width / 10 + 'px';
            }
        }
    };
</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    /*单位转换*/
    px2rem($px)
        return ($px / 37.5) rem

    bg-image($url)
        background-image url($url + "@2x.png")

    @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3)
        background-image url($url + "@3x.png")

    .star
        .star-item
            display inline-block
            background-repeat: no-repeat
        &.star-48
            .star-item
                width px2rem(20px)
                height px2rem(20px)
                margin-right px2rem(10px)
                background-size px2rem(20px) px2rem(20px)
                &:last-child
                    margin-right 0
                &.on
                    bg-image("./images/star48_on")
                &.half
                    bg-image("./images/star48_half")
                &.off
                    bg-image("./images/star48_off")
        &.star-36
            .star-item
                width px2rem(15px)
                height px2rem(15px)
                margin-right px2rem(10px)
                background-size px2rem(15px) px2rem(15px)
                &:last-child
                    margin-right 0
                &.on
                    bg-image("./images/star36_on")
                &.half
                    bg-image("./images/star36_half")
                &.off
                    bg-image("./images/star36_off")
        &.star-24
            .star-item
                width px2rem(10px)
                height px2rem(10px)
                margin-right px2rem(3px)
                background-size px2rem(10px) px2rem(10px)
                &:last-child
                    margin-right 0
                &.on
                    bg-image("./images/star24_on")
                &.half
                    bg-image("./images/star24_half")
                &.off
                    bg-image("./images/star24_off")

</style>
