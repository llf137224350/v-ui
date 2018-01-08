<!--
   开发者：い 狂奔的蜗牛
   说明：带拖动的进度条  需要konva
   版本：V 0.0.1
  -->

<!--html-->
<template>
  <div class="slider">
    <div class="slider-container" id="slider-container" ref="sliderContainer"
         v-on:click.stop="clickSelect"
         @touchstart="touchstart"
         @touchmove="touchmove"
         @touchend="touchend"
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
        this.container = this.$refs.sliderContainer;
        this.width = this.container.getBoundingClientRect().width;// 获取控件宽度
        // 绘制底线
        this.stage = new Konva.Stage({
          container: 'slider-container', //设置当前舞台的容器
          width: this.width,//设置舞台的宽高全屏
          height: this.container.getBoundingClientRect().height
        });
        //第二步： 创建层，一个舞台可以有多个层
        this.layer = new Konva.Layer();
        this.cenY = this.stage.height() / 2;// 高度的中间位置
        var horLine = new Konva.Line({
          points: [this.margin, this.cenY, this.width - this.margin, this.cenY],
          stroke: this.backgroundColor,
          strokeWidth: parseInt(this.height)
        });
        this.layer.add(horLine)
        // 最小值对应的宽度

        let width = this.selfCurrentValue * (this.width - 2 * this.margin) / (this.maxValue - this.minValue) - this.minValue * (this.width - 2 * this.margin) / (this.maxValue - this.minValue);
        // 绘制进度线
        this.progressLine = new Konva.Line({
          points: [this.margin, this.cenY, this.margin + width, this.cenY],
          stroke: this.foregroundColor,
          strokeWidth: parseInt(this.height)
        });
        this.layer.add(this.progressLine)
        this.selfCurrentValue * this.width / (this.maxValue - this.minValue)
        // 计算偏移
        let offsetX = 0;
        if (width === 0)
          offsetX = 1;
        else if (width + 2 * this.margin === this.width)
          offsetX = -1.5;
        // 绘制圆形
        this.circle = new Konva.Circle({
          x: width + this.margin + offsetX,
          y: this.cenY,
          radius: this.margin,
          fill: '#fff',
          shadowColor: '#333',
          shadowBlur: 1,
          shadowOffset: {x: 1, y: 1},
          shadowOpacity: 0.3
        });
        // 添加到层
        this.layer.add(this.circle);
        this.stage.add(this.layer)
      })
      this.selfCurrentValue = this.msg;
    },
    data(){
      return {
        startX: 0,
        orX: 0,
        orW: 0,
        container: undefined,
        stage: undefined,
        layer: undefined,
        cenY: 0,
        margin: 8,
        circle: undefined,
        progressLine: undefined,
        width: 0, // 控件宽度
        isRound: false, // 滑动的起始位置是否在球所在的位置
        preValue: 0,
        selfCurrentValue: 0,
        isMove: false
      }
    },
    model: {    // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
      prop: 'msg',
      event: 'slideValueChanged'
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
          if (x >= this.margin && x <= this.width - this.margin - 1.5) {
            // 计算值
            let value = x * (this.maxValue - this.minValue) / this.width
            this.$emit("slideValueChanged", parseInt(value + this.minValue));
          } else if (x < this.margin) {
            this.$emit("slideValueChanged", this.minValue);
          } else if (x > this.width - this.margin - 1.5) {
            this.$emit("slideValueChanged", this.maxValue);
          }
        }
      },
      touchstart(){
        this.startX = this.stage.getPointerPosition().x;
        this.orX = this.circle.getX();
        this.orW = this.progressLine.points()[2]
        // 点击范围
        if (this.startX >= this.circle.getX() - this.circle.getWidth() - 10 && this.startX <= this.circle.getX() + this.circle.getWidth() + 10) {
          this.isRange = true;
        }
      },
      touchmove(){
        if (this.isRange) {
          //标示拖动
          this.isMove = true;
          this.offsetX = this.stage.getPointerPosition().x - this.startX + this.orX;
          if (this.offsetX >= this.margin && this.offsetX <= this.stage.getWidth() - this.margin) {
            this.circle.setX(this.offsetX);
            this.progressLine.to({
              points: [this.margin, this.cenY, this.orW + this.offsetX - this.orX, this.cenY],
              duration: 0,
            });
            this.layer.draw();
            let value = 0;
            if ((this.maxValue - this.minValue) * parseInt(this.offsetX - this.margin + 1) / (this.width - 2 * this.margin) - 0.5 >= (this.maxValue + this.minValue) / 2) {
              value = Math.ceil((this.maxValue - this.minValue) * parseInt(this.offsetX - this.margin + 1) / (this.width - 2 * this.margin))
            } else {
              value = parseInt((this.maxValue - this.minValue) * parseInt(this.offsetX - this.margin + 1) / (this.width - 2 * this.margin));
            }
            if (value >= this.maxValue) {
              this.preValue = this.maxValue;
              this.$emit("slideValueChanged", this.maxValue)
            } else if (value <= this.minValue) {
              this.preValue = this.minValue;
              this.$emit("slideValueChanged", value + this.minValue);
            } else if (value != this.preValue) {
              this.preValue = value;
              this.$emit("slideValueChanged", value + this.minValue)
            }
          }
        }
      },
      touchend(){
        if (this.isRange) {
          this.isRange = false;
          this.isMove = false;
        }
      },
    },
    watch: {
      msg(){
        if (this.msg >= this.minValue && this.msg <= this.maxValue)
          this.selfCurrentValue = this.msg;
      },
      selfCurrentValue(){
        this.$nextTick(() => {
          if (!this.isMove) {// 点击的时候才执行
            let width = this.selfCurrentValue * (this.width - 2 * this.margin) / (this.maxValue - this.minValue) - this.minValue * (this.width - 2 * this.margin) / (this.maxValue - this.minValue);
            this.progressLine.to({
              points: [this.margin, this.cenY, width + this.margin, this.cenY],
              duration: this.isMove ? 0 : .3,
              easing: Konva.Easings.EasIn
            });
            this.circle.to({
              x: width + this.margin - 1,
              duration: this.isMove ? 0 : .3,
              easing: Konva.Easings.EasIn
            });
            this.isMove = false;
          }
        })
      }
    }
  }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .slider
    .slider-container
      height 20px
</style>
