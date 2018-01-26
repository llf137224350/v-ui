<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="circular-progress" :id="id" :ref="id">
        哈哈
    </div>

</template>

<!--script-->
<script type="text/ecmascript-6">
    export default {
        mounted(){
            let container = this.$refs[this.id];
            this.width = container.getBoundingClientRect().width;
            this.currentX = this.width / 2;
            this.draw();
        },
        data(){
//            state  progress:绘制进度 succeed 成功 failed 失败
            return {
                id: "circular-progress" + Date.now() + Math.random(1000),
                stage: undefined,
                layer: undefined,
                arc: undefined,
                text: undefined,
                tween: undefined,
                succeedImage: undefined,
                failedImage: undefined,
                width: 0,
                currentX: 0,
                preTime: 0,
                timer: undefined,
                selfState: this.state,
                selfforegroundColor: this.foregroundColor
            }
        },
        model: {    // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
            prop: 'msg',
            event: 'valueChanged'
        },
        props: {
            state: {
                type: String,
                default: "progress"
            },
            strokeWidth: {
                type: Number,
                default: 3
            },
            backgroundColor: {
                type: String,
                default: "#e8e8e8"
            },
            fontSize: {
                type: Number,
                default: 14
            },
            foregroundColor: {
                type: String,
                default: "#41b883"
            },
            msg: {
                type: Number,
                default: 0
            },
            minValue: {
                type: Number,
                default: 0
            },
            maxValue: {
                type: Number,
                default: 0
            },
            iconSize: {
                type: Array,
                default(){
                    return [22, 22]
                }
            }
        },
        methods: {
            draw(){
                this.stage = new Konva.Stage({
                    container: this.id, //设置当前舞台的容器
                    width: this.width,//设置舞台的宽高全屏
                    height: this.width
                });
                //第二步： 创建层，一个舞台可以有多个层
                this.layer = new Konva.Layer();
                this.circle = new Konva.Circle({
                    x: this.currentX,
                    y: this.currentX,
                    radius: this.currentX - this.strokeWidth,
                    stroke: this.backgroundColor,
                    strokeWidth: this.strokeWidth
                });
                this.layer.add(this.circle)

                // 绘制进度环
                this.arc = new Konva.Arc({
                    x: this.currentX,
                    y: this.currentX,
                    strokeHitEnabled: true,
                    lineJoin: "round",
                    innerRadius: this.width / 2 - this.strokeWidth,
                    outerRadius: this.width / 2 - this.strokeWidth,
                    stroke: this.selfforegroundColor,
                    strokeWidth: this.strokeWidth,
                    angle: 0,
                    rotation: -90
                });
                this.layer.add(this.arc);
                this.text = new Konva.Text({
                    x: this.currentX,
                    y: this.currentX,
                    text: Math.ceil((this.msg - this.minValue) * 100 / (this.maxValue - this.minValue)) + "%",
                    fontSize: this.fontSize,
                    fontFamily: 'Calibri',
                });
                this.text.x(this.text.x() - this.text.getWidth() / 2);
                this.text.y(this.text.y() - this.text.getHeight() / 2);
                this.layer.add(this.text)
                // 计算角度
                this.stage.add(this.layer);
                let angle = (this.msg - this.minValue) * 360 / (this.maxValue - this.minValue);
                this.arc.to({
                    angle: angle,
                    duration: .8,
                    easing: Konva.Easings.EasIn
                })
            },
            resetProgress(){
                let angle = (this.msg - this.minValue) * 360 / (this.maxValue - this.minValue);
                if(angle > 360)
                    angle = 360;
                this.arc.to({
                    angle: angle,
                    stroke: this.selfforegroundColor,
                    duration: 0,
                    easing: Konva.Easings.EasIn
                })
            }
        },
        watch: {
            msg(currentValue, oldValue){
                if (currentValue > this.maxValue)
                    currentValue = this.maxValue;
                else if(currentValue < this.minValue)
                    currentValue = this.minValue;
                if (this.succeedImage)
                    this.succeedImage.hide();
                if (this.failedImage)
                    this.failedImage.hide();
                if (this.selfState != "progress") {
                    this.selfState = "progress"
                    this.text.show();
                    this.selfforegroundColor = this.foregroundColor;
                    this.resetProgress();
                }
                if (Date.now() - this.preTime > 400) {
                    setTimeout(() => {
                        if (this.timer)
                            clearInterval(this.timer);
                        let current = oldValue;
                        this.timer = setInterval(() => {
                            if (currentValue > oldValue)
                                current++;
                            else
                                current--;
                            if (currentValue > oldValue && currentValue < current) {
                                clearInterval(this.timer);
                            } else if (currentValue < oldValue && currentValue > current) {
                                clearInterval(this.timer);
                            } else {
                                let result = Math.floor((current - this.minValue) * 100 / (this.maxValue - this.minValue));
                                result  = result < 0 ? 0:result;
                                result  = result > 100 ? 100:result;
                                this.text.text( result+ "%");
                                this.text.x(this.currentX - this.text.getWidth() / 2);
                            }
                        }, 40);
                        let angle = (currentValue - this.minValue) * 360 / (this.maxValue - this.minValue);
                        this.arc.to({
                            angle: angle,
                            duration: .4,
                            easing: Konva.Easings.EasIn,
                            onFinish: () => {
                                // 修复边界值问题
                                if (this.timer)
                                    clearInterval(this.timer);
                                this.text.text(Math.floor((currentValue - this.minValue) * 100 / (this.maxValue - this.minValue)) + "%");
                                this.text.x(this.currentX - this.text.getWidth() / 2);
                            }
                        })
                    })
                } else {
                    this.preTime = Date.now();
                    let angle = (currentValue - this.minValue) * 360 / (this.maxValue - this.minValue);
                    this.arc.to({
                        angle: angle,
                        duration: 0,
                        easing: Konva.Easings.EasIn
                    })
                    this.text.text(Math.floor((currentValue - this.minValue) * 100 / (this.maxValue - this.minValue)) + "%");
                    this.text.x(this.currentX - this.text.getWidth() / 2);
                }
            },
            state(){
                this.selfState = this.state;
            },
            selfState(){
                if (this.selfState === "succeed") {
                    if (this.msg != this.maxValue)
                        return;
                    this.selfforegroundColor = this.foregroundColor;
                    this.resetProgress();
                    this.text.hide();
                    if (this.failedImage)
                        this.failedImage.hide();
                    // 绘制img
                    if (!this.succeedImage) {
                        let img = new Image();
                        img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACM0lEQVR4Xu3azVXCQBDA8RlPlmEH0oHhpBytQOyABtAQnmdKEDvwRh6nUIGWoB1QgC/ryxIVJCSbzX7M7oarifL/MYmbBITAXxh4P/QA/QQELtAfAoEPQH8SDOYQiNZPA8jzK0DcQv61yUbxRzH9QQBEabJAwMn+4c4Q4ux6OvMeIEqTZwQcV53rGMKt1wB18RyEsY23AI3xHAA+vQQQivd1AoTjiwHw7RzQKp7BSzaajr05BGTivVkHyMZ7AdAl3nmArvFOA6iIdxZAVbyTACrjnQNQHe8UgI54ZwB0xTsBoDOePIDueNIAJuLJApiKPwDgd00Zu+S3ivbumpp+bmAy/heg7q6pSQDT8RwgSpMJAi4q75oCW2Y3D/cmEGzElwDzNwQYnIpkBhBsxXOAYTpnTZ+wTgSb8SVA8g6Au5NfzUsHgu34xnPAfw+VCBTi//4LrOZLRLhrmoLi5yoQqMQfrgMMIVCKP1oJRpoRqMVXLoV1IVCMP3ktoBqBanztxZAqBMrxjVeDXRGoxzcCFBvIIrgQLwQgg7D7xdVfSzlaXJVPaUXWIDq2EX463GYSRN8osxwvPAE/QSoRKMS3Bmh7OJyaBCrxUgBdESjFSwPIIlCL7wTQFoFifGcAUQSq8UoAmhAoxysDKBFiRHjcP/MzBrNsNI1F1wU2thNeCIm8uWgVXwCcRXzb8/w1G8Zbkf1sbqMUwGaI7N/uAWTlfNmvnwBfPknZjn4CZOV82S/4CfgGvASxt3Gxj0QAAAAASUVORK5CYII="
                        img.onload = () => {
                            this.succeedImage = new Konva.Image({
                                x: this.currentX - this.iconSize[0] / 2,
                                y: this.currentX - this.iconSize[1] / 2,
                                image: img,
                                width: this.iconSize[0],
                                height: this.iconSize[1]
                            });
                            this.layer.add(this.succeedImage);
                            this.layer.draw();
                        };
                    } else {
                        this.succeedImage.show();
                        this.layer.draw();
                        this.succeedImage.to({
                            opacity: 0,
                            duration: 0,
                            onFinish: () => {
                                this.succeedImage.to({
                                    opacity: 1,
                                    duration: .4,
                                    easing: Konva.Easings.EasIn
                                })
                            }
                        })
                    }
                } else if (this.selfState === "failed") {
                    this.selfforegroundColor = "#D74F43";
                    this.resetProgress();
                    this.text.hide();
                    if (this.succeedImage)
                        this.succeedImage.hide();
                    // 绘制img
                    if (!this.failedImage) {
                        let img = new Image();
                        img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADHUlEQVR4Xu2bTXbTMBCAZ5xNuiJHoEt3QzkBId0HbgBHoCdoewJ6BLhBMeuGcAKSDVmWI4QVbJLhyTSlyZMtjawZiZdkG//o+yRZntEYYc9/uOf8cBBwGAF7bqBxCty9Hg5+U/GeAE8RYAlE07KaXP0Pvhbj0QUgDglggECzPq7Pj2+mS1vbrQIM/C8q7hBw8PgkApgd4epl08VSy/nb7t4XBDjdbjctj3B9bGu3VcBifPYBEN7YgHKV0AT/wEDwsaxu3+4yWQV8f3X2bddiziPBCQ8ApuNOPt0+9xKwGI+mgPiibUjnMhJ84GsOoq9lNRn6CrgExAvXnE4twRve8K/p/OTz5NpLgDloMR7NAPFZrhI48EA0L6vJ1oNxw9W+DK4LMxWyk8CF7xfrIWsZ3Nip3wUykxAT3nA6Y4GcJMSG9xJgDspBggS8t4DUEqTgWQJSSZCEZwvQliANHyRAS4IGfLAAaQla8J0ESEnQhO8sILYEbfgoAmJJSAEfTUBXCangowoIlWDOs6WxrFEo0bwtsHFFrrb/nbEA96Lc1+b7XrCGqlv3FoCPPgJCokgvwULwYgK406FVgiC8qIAoEoThxQV0kqAAryIgSIISvKoA76XuPoevtQMVfRncfaCxXnIenayVchcVEAq/8aAhQUxAV3gtCSICYsFrSIgugAVPNK8hE26+RBXAhTeBjeFPufkSTUAI/Ga7ihtAxVwiowjoAh8SQMVcHToLiAGfUkInATHhU0kIFiABn0JCkABJeG0JbAEa8JoSWAI04bUkeAtIAa8hwUtASnhpCU4BOcBLSmgVkBO8lITWMjnvNJZiDo+bY3S9NjcKcNULP2SvlOFDR4KtTrgxKboYj7xKZU0FZuy9utZNkp0/OVEkEF2V1eRy9/oN5fLuYunU8OyRwCyWbq8TTtzztsyzM6nSUC/M/mAil55nS+B8MFHPLer9AIAnWzfKrOcZEn72cfXU+5OZf0tN7xqAzN79kghubPX2nIeW1rH1QxzA5BsHADjrF6t3QdXiWg1OeR/nq3DKxmnc+yBAw3LO99j7EfAHlo7Cbih2NQEAAAAASUVORK5CYII="
                        img.onload = () => {
                            this.failedImage = new Konva.Image({
                                x: this.currentX - this.iconSize[0] / 2,
                                y: this.currentX - this.iconSize[1] / 2,
                                image: img,
                                width: this.iconSize[0],
                                height: this.iconSize[1]
                            });
                            this.layer.add(this.failedImage);
                            this.failedImage.to({
                                opacity: 1,
                                duration: .4,
                                easing: Konva.Easings.EasIn
                            })
                            this.layer.draw();
                        };
                    } else {

                        this.failedImage.show();
                        this.layer.draw();
                        this.failedImage.to({
                            opacity: 0,
                            duration: 0,
                            onFinish: () => {
                                this.failedImage.to({
                                    opacity: 1,
                                    duration: .4,
                                    easing: Konva.Easings.EasIn
                                })
                            }
                        })

                    }
                }
            }
        }
    }
</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    .circular-progress
        position absolute
        left 0
        right 0
        bottom 0
        top 0
</style>
