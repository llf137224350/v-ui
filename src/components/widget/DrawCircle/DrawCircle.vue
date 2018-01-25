<!--
   开发者：い 狂奔的蜗牛
   说明：绘制类似于安卓的波纹效果，由于网页长按会出现菜单，所以长按和短按都是一个速度，搭配其他组件可实现各自不同的效果
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="drawCircle" :id="id" :ref="id"
         @touchstart="touchstart"
         @touchend="touchend"
         @touchcancel="touchend"
         @touchmove="touchmove"
    >
    </div>

</template>

<!--script-->
<script type="text/ecmascript-6">
    import Konva from "konva"
    export default {
        created(){
            this.init();
        },
        data(){
            return {
                id: "draw-circle" + Date.now() + Math.random(1000),
                stage: undefined,
                layer: undefined,
                circle: undefined,
                tween: undefined,
                width: 0,
                height: 0,
                currentX: 0,
                currentY: 0,
                radius: 0,
                direction: 0,
                isRunning: false,
                initScene: "",
                firstTouch: true
            }
        },
        props: {
            fill: {
                type: String,
                default: "rgba(0,0,0,.1)"
            },
            duration: {
                type: Number,
                default: .3
            },
            center: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            draw(){
                this.stage = new Konva.Stage({
                    container: this.id, //设置当前舞台的容器
                    width: this.width,//设置舞台的宽高全屏
                    height: this.height
                });
                //第二步： 创建层，一个舞台可以有多个层
                this.layer = new Konva.Layer();
                this.circle = new Konva.Circle({
                    x: this.currentX,
                    y: this.currentY,
                    radius: 0,
                    fill: this.fill,
                });
                this.layer.add(this.circle)
                this.stage.add(this.layer);
            },
            touchstart(e){
                if (!this.stage.getPointerPosition()) {
                    this.init();
                } else {
                    this.handlePos();
                }
                this.firstTouch = true;
            },
            touchmove(){
                if (this.isRunning && this.firstTouch) {
                    this.startAnim(0.15)
                    this.firstTouch = false;
                }
            },
            touchend(){
                if (this.isRunning) {
                    this.startAnim(0.15)
                    this.firstTouch = true;
                }
            },
            calRadius(){
                // 将矩形分为四个区域  左上 右上 左下 右下  0 1 2 3
                if (this.currentX >= 0 && this.currentX <= this.width / 2 && this.currentY >= 0 && this.currentY <= this.height / 2) {
                    this.direction = 0;
                } else if (this.currentX >= this.width / 2 && this.currentX <= this.width && this.currentY >= 0 && this.currentY <= this.height / 2) {
                    this.direction = 1;
                } else if (this.currentX >= 0 && this.currentX <= this.width / 2 && this.currentY >= this.height / 2 && this.currentY <= this.height) {
                    this.direction = 2;
                } else {
                    this.direction = 3;
                }
                let a;
                let b;
                switch (this.direction) {
                    case 0:// 左上 计算到右下点的距离作为半径
                        a = this.width - this.currentX;
                        b = this.height - this.currentY;
                        this.radius = Math.sqrt(a * a + b * b)
                        break;
                    case 1:// 右上 计算到左下点的距离作为半径
                        b = this.height - this.currentY;
                        this.radius = Math.sqrt(this.currentX * this.currentX + b * b)
                        break;
                    case 2:// 左下 计算到右上点的距离作为半径
                        a = this.width - this.currentX;
                        b = this.currentY;
                        this.radius = Math.sqrt(a * a + b * b)
                        break;
                    case 3:// 右下 计算到左上点的距离作为半径

                        this.radius = Math.sqrt(this.currentY * this.currentY + this.currentX * this.currentX)
                        break;
                }
            },
            handlePos(){
                if (!this.isRunning) {
                    if (!this.center) {
                        this.currentX = this.stage.getPointerPosition().x;
                        this.currentY = this.stage.getPointerPosition().y;
                        // 计算半径
                        this.calRadius();
                    } else {
                        this.currentX = this.width / 2;
                        this.currentY = this.height / 2;
                        this.radius = this.currentX >= this.currentY ? this.currentX : this.currentY;
                    }
                    // 移动到位置点
                    this.circle.to({
                        x: this.currentX,
                        y: this.currentY,
                        duration: 0,
                        easing: Konva.Easings.Linear
                    })
                    // 绘制慢慢变大的圆
                    setTimeout(() => {
                        this.startAnim(this.duration);
                    })
                }
            },
            startAnim(time){
                if (this.isRunning && this.tween) {
                    this.tween.pause();
                }
                this.tween = new Konva.Tween({
                    node: this.circle,
                    radius: this.radius,
                    duration: time,
                    opacity: .1,
                    easing: Konva.Easings.EasIn,
                    onFinish: () => {
                        this.circle.to({
                            radius: 0,
                            fill: this.fill,
                            opacity: 1,
                            duration: 0,
                            easing: Konva.Easings.Linear
                        })
                        this.isRunning = false;
                    }
                });
                setTimeout(() => {
                    this.tween.play();
                    this.isRunning = true;
                })
            },
            init(){
                this.$nextTick(() => {
                    let container = this.$refs[this.id];
                    this.width = container.getBoundingClientRect().width;
                    this.height = container.getBoundingClientRect().height;
                    this.draw();
                })
            }
        }
    }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    .drawCircle
        position absolute
        left 0
        right 0
        bottom 0
        top 0
        background: transparent


</style>
