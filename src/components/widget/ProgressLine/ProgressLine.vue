<!--
   开发者：い 狂奔的蜗牛
   说明：不带拖动的进度条  需要konva
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="progress-line" v-on:click.stop="clickSelect">
        <div class="progress-container" id="progress-container" ref="progressContainer"
             :style="{height:(parseInt(height) * 5)+'px'}"
        >
        </div>
    </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
    import Konva from "konva"
    export default {
        created(){
            this.$nextTick(() => {
                this.container = this.$refs.progressContainer;
                this.selfWidth = this.container.getBoundingClientRect().width;
                // 绘制底线
                this.stage = new Konva.Stage({
                    container: 'progress-container', //设置当前舞台的容器
                    width: this.selfWidth,//设置舞台的宽高全屏
                    height: this.container.getBoundingClientRect().height
                });
                //第二步： 创建层，一个舞台可以有多个层
                this.layer = new Konva.Layer();
                this.cenY = this.stage.height() / 2;// 高度的中间位置
                var horLine = new Konva.Line({
                    points: [0, this.cenY, this.selfWidth, this.cenY],
                    stroke: this.backgroundColor,
                    strokeWidth: parseInt(this.height)
                });
                this.layer.add(horLine)
                let width = this.msg * this.selfWidth / (this.maxValue - this.minValue) - this.minValue * (this.selfWidth - 2 * this.margin) / (this.maxValue - this.minValue);
                // 绘制进度线
                this.progressLine = new Konva.Line({
                    points: [0, this.cenY, width, this.cenY],
                    stroke: this.foregroundColor,
                    strokeWidth: parseInt(this.height)
                });
                this.layer.add(this.progressLine)

                this.stage.add(this.layer)
            })
        },
        data(){
            return {
                selfWidth: 0,
                container: undefined,
                stage: undefined,
                layer: undefined,
                cenY: 0,
                margin: 8,
                progressLine: undefined
            }
        },
        model: {    // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
            prop: 'msg',
            event: 'progressValueChange'
        },
        props: {
            minValue: {
                type: Number,
                default: 0
            },
            maxValue: {
                type: Number,
                default: 100
            },
            msg: {
                type: Number,
                default: 0
            },
            foregroundColor: {
                type: String,
                default: "#41b883"
            },
            backgroundColor: {
                type: String,
                default: "#E2E2E2"
            },
            height: {
                type: String,
                default: "3px"
            }
        },
        methods: {
            clickSelect(){
                if (this.stage.getPointerPosition()) {
                    let x = this.stage.getPointerPosition().x;
                    if (x > 0 && x < this.selfWidth) {
                        let value = x * (this.maxValue - this.minValue) / this.selfWidth + +0.5;
                        this.$emit("progressValueChange", parseInt(value + this.minValue));
                    } else if (x <= 0) {
                        this.$emit("progressValueChange", this.minValue);
                    } else {
                        this.$emit("progressValueChange", this.maxValue);
                    }
                }
            }
        },
        watch: {
            msg(){
                this.$emit("progressValueChange", this.msg);
                this.$nextTick(() => {
                    // 计算宽度
                    if (this.progressLine) {
                        let width = this.msg * this.selfWidth / (this.maxValue - this.minValue) - this.minValue * (this.selfWidth - 2 * this.margin) / (this.maxValue - this.minValue);
                        this.progressLine.to({
                            points: [0, this.cenY, width, this.cenY],
                            duration: .3,
                            easing: Konva.Easings.EasIn
                        });
                    }
                })
            }
        }
    }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    .progress-line
        position relative
        overflow hidden
        .progress-container
            width 100%
</style>
