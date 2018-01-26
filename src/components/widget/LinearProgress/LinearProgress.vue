<!--
   开发者：い 狂奔的蜗牛
   说明：进度条  需要konva
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="linear-progress">
        <div class="linear-progress-container" :id="tempId" :ref="tempId"
             :style="{height:height}"
        >
        </div>
    </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
    import Konva from "konva"
    export default {
        created(){
            this.draw();
        },
        data(){
            return {
                selfWidth: 0,
                container: undefined,
                stage: undefined,
                layer: undefined,
                cenY: 0,
                margin: 8,
                progressLine: undefined,
                startX: 0,
                animate: undefined,
                tempId: "id_" + Date.now() + Math.random(1000)
            }
        },
        props: {
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
            draw(){
                this.$nextTick(() => {
                    this.container = this.$refs[this.tempId];
                    this.selfWidth = this.container.getBoundingClientRect().width;
                    this.startX = -this.selfWidth / 3;
                    // 绘制底线
                    this.stage = new Konva.Stage({
                        container: this.tempId, //设置当前舞台的容器
                        width: this.selfWidth,//设置舞台的宽高全屏
                        height: this.container.getBoundingClientRect().height
                    });
                    //第二步： 创建层，一个舞台可以有多个层
                    this.layer = new Konva.Layer();
                    this.cenY = this.stage.height() / 2;// 高度的中间位置
                    var horLine = new Konva.Line({
                        points: [0, this.cenY, this.selfWidth, this.cenY],
                        stroke: this.backgroundColor,
                        strokeWidth: parseInt(this.height),

                    });
                    this.layer.add(horLine)
                    // 绘制进度线
                    this.progressLine = new Konva.Line({
                        points: [this.startX, this.cenY, this.selfWidth / 3 + this.startX, this.cenY],
                        stroke: this.foregroundColor,
                        strokeWidth: parseInt(this.height),

                    });
                    this.layer.add(this.progressLine)
                    this.stage.add(this.layer)
                })
            },
            start(){
                setTimeout(() => {
                    let endX = this.selfWidth;
                    let currentX = this.startX;
                    if (!this.animate) {
                        let velocity = this.selfWidth * 1.8;
                        this.animate = new Konva.Animation((frame) => {

                            currentX += velocity * (frame.timeDiff / 1000);
                            if (currentX > endX)
                                currentX = this.startX;
                            this.progressLine.to({
                                points: [currentX, this.cenY, this.selfWidth / 3 + currentX, this.cenY],
                                duration: 0,
                                easing: Konva.Easings.Linear

                            })
                        });
                    }
                    if (!this.animate.isRunning()) {
                        this.animate.start();
                    }
                });
            },
            stop(){
                if (this.animate && this.animate.isRunning())
                    this.animate.stop();
            }
        }
    }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    .linear-progress
        position relative
        overflow hidden
        .linear-progress-container
            width 100%

</style>
