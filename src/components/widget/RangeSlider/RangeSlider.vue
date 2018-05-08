<!--
   开发者：い 狂奔的蜗牛
   说明：范围选择
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="range-slider-contaner">
        <transition
            v-on:after-leave="afterLeave"
            enter-active-class="animated-rangeslider slideInUp-rangeslider fadeIn-rangeslider"
            leave-active-class="animated-rangeslider slideOutDown-rangeslider  fadeOut-rangeslider"
        >
            <div class="range-slider" v-show="isShow" v-on:click.stop="hide">
                <div class="range-slider-container animated" id="range-slider-container" ref="rangeSliderContainer"
                     v-on:click.stop="clickSelect"
                     @touchstart="touchstart"
                     @touchmove="touchmove"
                     @touchend="touchend"
                >
                </div>
            </div>
        </transition>
    </div>

</template>

<!--script-->
<script type="text/ecmascript-6">
    import Konva from "konva"

    export default {
        mounted() {
            // 更新数据 关闭弹窗
            window.addEventListener("popstate", (e) => {
                this.isShow = false;
            });
            this.offsetX = this.margin * 2;
            this.endX = this.offsetX;

            // 进行rem适配 设置根元素字体大小
            this.setRootFontSize();
            window.onresize = () => {
                this.setRootFontSize();
            }
        },
        data() {
            return {
                margin: 16,
                offsetY: 8,
                container: undefined,
                stage: undefined,
                layer: undefined,
                cenY: 0,
                circle: undefined,
                startX: 0,
                startY: 0,
                isRange: false,
                offsetX: 0,
                points: [],
                tween: undefined,
                isShow: false,
                endX: 0,
                preIndex: 0,
                index: this.msg
            }
        },
        model: {    // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
            prop: 'msg',
            event: 'currentIndexChanged'
        },
        props: {
            arr: {
                type: Array,
                default() {
                    return ["特小", "小", "标准", "大", "特大"];
                }
            },
            msg: {
                type: Number,
                default: 0
            },
            fontEnlargement:{
                type:Boolean,
                default:true
            }
        },
        methods: {
            show() {
                this.isShow = true;
                this.points = [];
                this.$nextTick(() => {
                    this.container = this.$refs.rangeSliderContainer;
                    // 绘制
                    this.draw();
                    this.endX = this.points[this.index] - this.margin - this.margin / 2;
                });
                this.addLocation();
            },
            hide() {
                //操作浏览器返回 会触发浏览器popstate
                if (location.hash === "#target=rangeslider") {
                    history.back();
                }
            },
            afterLeave() {
                if (this.preValue != this.index)
                    this.$emit("currentIndexChanged", this.index);
            },
            addLocation() {
                if (window.history && window.history.pushState) {
                    window.history.pushState("target", "没有用", "#target=rangeslider");
                } else {
                    console.log("当前浏览器版本较低，不支持该功能")
                }
            },
            draw: function () {
                this.stage = new Konva.Stage({
                    container: 'range-slider-container', //设置当前舞台的容器
                    width: this.container.getBoundingClientRect().width,//设置舞台的宽高全屏
                    height: this.container.getBoundingClientRect().height
                });
                //第二步： 创建层，一个舞台可以有多个层
                this.layer = new Konva.Layer();
                // 高度的中间位置
                this.cenY = this.stage.height() / 2;// 高度的中间位置
                // 水平线
                var horLine = new Konva.Line({
                    points: [this.margin * 2, this.cenY + this.margin - this.offsetY, this.container.getBoundingClientRect().width - this.margin * 2, this.cenY + this.margin - this.offsetY],
                    stroke: "#A3A3A3",
                    strokeWidth: 1
                });
                // 每个间隔的距离
                var range = (this.container.getBoundingClientRect().width - this.margin * 4) / (this.arr.length - 1);
                // 创建竖线
                for (var i = 0; i < this.arr.length; i++) {
                    var verLine = new Konva.Line({
                        points: [this.margin * 2 + (i * range), this.cenY + this.margin + this.margin / 2 - this.offsetY, this.margin * 2 + (i * range), this.cenY + this.margin - this.margin / 2 - this.offsetY],
                        stroke: "#A3A3A3",
                        strokeWidth: 1
                    })
                    // 添加竖线到层
                    this.layer.add(verLine)
                    // 记录位置
                    this.points.push(this.margin * 2 + (i * range))
                }
                // 添加横线到层
                this.layer.add(horLine)

                // 绘制文本
                for (var j = 0; j < this.arr.length; j++) {
                    var text = new Konva.Text({
                        x: this.margin * 2 + (j * range),
                        y: this.cenY - this.offsetY,
                        text: this.arr[j],
                        fontSize: 12 + (this.fontEnlargement ?j * 2:2),
                        fill: '#333'
                    });
                    text.setOffset({
                        x: text.getWidth() / 2,
                        y: text.getHeight()
                    });
                    this.layer.add(text);
                }
                // 绘制圆形
                this.circle = new Konva.Circle({
                    x: this.margin * 2 + (this.index * range),
                    y: this.margin + this.cenY - this.offsetY,
                    radius: this.margin / 2 + 2,
                    fill: '#fff',
                    shadowColor: '#333',
                    shadowBlur: this.margin,
                    shadowOffset: {x: 1, y: 1},
                    shadowOpacity: 0.5
                });
                // 添加到层
                this.layer.add(this.circle);
                //第三步： 把层添加到舞台上去。
                this.stage.add(this.layer);
            },
            clickSelect() {
                if (this.stage.getPointerPosition()) {
                    let x = this.stage.getPointerPosition().x;
                    this.move(x, 0);
                }
            },
            touchstart() {
                this.startX = this.stage.getPointerPosition().x;
                this.startY = this.stage.getPointerPosition().y;
                // 点击范围
                if (this.startX >= this.circle.getX() - this.circle.getWidth() - 10 && this.startX <= this.circle.getX() + this.circle.getWidth() + 10
                    && this.startY >= this.circle.getY() - this.circle.getHeight() - 10 && this.startY <= this.circle.getY() + this.circle.getHeight() + 10) {
                    this.isRange = true;
                }
            },
            touchmove() {
                if (this.isRange) {
                    this.offsetX = this.stage.getPointerPosition().x - this.startX + this.margin * 2 + this.endX;
                    if (this.offsetX >= this.margin * 2 && this.offsetX <= this.stage.getWidth() - this.margin * 2) {
                        this.circle.setX(this.offsetX);
                    } else if (this.offsetX < this.margin * 2) {
                        this.circle.setX(this.margin * 2)
                    } else {
                        this.circle.setX(this.stage.getWidth() - this.margin * 2)
                    }
                    this.isMove = true;
                    this.layer.draw();
                }
            },
            touchend() {
                if (this.isRange) {
                    this.isRange = false;
                    var x = this.circle.getX();
                    // 判断是否移动到具体点
                    this.move(x, .1);
                }
            },
            move: function (x, duration) {

                for (var i = 0; i < this.points.length; i++) {
                    if (i != this.points.length - 1) {// 不是最后一个
                        if (x >= this.points[i] && x <= this.points[i + 1]) {// 在这个范围
                            // 判断那边更进
                            if (Math.abs(this.points[i] - x) >= Math.abs(this.points[i + 1] - x)) {
                                this.tween = new Konva.Tween({// 动画移动
                                    node: this.circle,
                                    duration: duration,
                                    x: this.points[i + 1],
                                    y: this.circle.getY(),
                                });
                                this.index = i + 1;
                                this.endX = this.points[i + 1] - this.margin * 2;
                            } else {
                                this.tween = new Konva.Tween({
                                    node: this.circle,
                                    duration: duration,
                                    x: this.points[i],
                                    y: this.circle.getY(),
                                });
                                this.index = i;
                                this.endX = this.points[i] - this.margin * 2;
                            }
                            this.tween.play();
                            this.tween.onFinish = () => {
                                if (this.preIndex != this.index) {
                                    this.$emit("currentIndexChanged", this.index);
                                    this.preIndex = this.index;
                                }
                            }
                        }
                    }
                }
            },
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

    ::-webkit-scrollbar
        width 0
        height 0

    @-webkit-keyframes fadeIn-rangeslider
        from
            opacity 0
        to
            opacity 1

    @keyframes fadeIn-rangeslider
        from
            opacity 0
        to
            opacity 1

    @-webkit-keyframes fadeOut-rangeslider
        from
            opacity 1
        to
            opacity 0

    @keyframes fadeOut-rangeslider
        from
            opacity 1
        to
            opacity 0

    @-webkit-keyframes slideInUp-rangeslider
        from
            -webkit-transform translate3d(0, 100%, 0)
            transform translate3d(0, 100%, 0)
            visibility visible
        to
            -webkit-transform translate3d(0, 0, 0)
            transform translate3d(0, 0, 0)

    @keyframes slideInUp-rangeslider
        from
            -webkit-transform translate3d(0, 100%, 0)
            transform translate3d(0, 100%, 0)
            visibility visible
        to
            -webkit-transform translate3d(0, 0, 0)
            transform translate3d(0, 0, 0)

    @-webkit-keyframes slideOutDown-rangeslider
        from
            -webkit-transform translate3d(0, 0, 0)
            transform translate3d(0, 0, 0)
        to
            visibility hidden
            -webkit-transform translate3d(0, 100%, 0)
            transform translate3d(0, 100%, 0)

    @keyframes slideOutDown-rangeslider
        from
            -webkit-transform translate3d(0, 0, 0)
            transform translate3d(0, 0, 0)
        to
            visibility hidden
            -webkit-transform translate3d(0, 100%, 0)
            transform translate3d(0, 100%, 0)

    @media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5)
        .border-1px
            &::after
                -webkit-transform scaleY(0.7)
                transform scaleY(0.7)

        @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2)
            .border-1px
                &::after
                    -webkit-transform scaleY(0.5)
                    transform scaleY(0.5)

    .range-slider-contaner
        .animated-rangeslider
            -webkit-animation-duration 0.4s
            animation-duration 0.4s
            -webkit-animation-fill-mode both
            animation-fill-mode both

        .fadeOut-rangeslider
            -webkit-animation-name fadeOut-rangeslider
            animation-name fadeOut-rangeslider

        .fadeIn-rangeslider
            -webkit-animation-name fadeIn-rangeslider
            animation-name fadeIn-rangeslider

        .slideOutDown-rangeslider
            -webkit-animation-name slideOutDown-rangeslider
            animation-name slideOutDown-rangeslider

        .slideInUp-rangeslider
            -webkit-animation-name slideInUp-rangeslider
            animation-name slideInUp-rangeslider

    .range-slider
        position: fixed;
        left: 0
        top: 0
        right: 0
        bottom: 0
        background: transparent
        z-index: 2147483647
        .range-slider-container
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: px2rem(110px)
            background: #F3F3F3
</style>
