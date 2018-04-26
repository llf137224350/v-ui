<!--
   开发者：い 狂奔的蜗牛
   说明：下拉刷新 上拉加载更多
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="pull-2-refresh" ref="pull2refreshWrapper">
        <div @touchend="touchend" @touchstart="touchstart">
            <div class="pull-2-refresh-header" ref="pull2RefreshHeader" v-if="canRefresh">
                <div class="pull-2-refresh-header-title"><i
                    :class="{state1:state===1,state2:state ===2,state3:state ===3}"></i><span>{{pull2refreshTitle}}</span>
                </div>
                <div class="pull-2-refresh-header-subtitle">上次刷新时间：{{updateTime}}</div>
            </div>
            <div class="pull-2-refresh-content">
                <slot name="content"></slot>
            </div>
            <div class="pull-2-refresh-load-more" v-if="canLoadingMore" ref="pull2RefreshFooter">
                <i :class="{state1:loadState ===1,state2:loadState ===2}"></i>{{loadState===1?"上拉加载更多":"加载中..."}}
            </div>
        </div>
    </div>

</template>

<!--script-->
<script type="text/ecmascript-6">
    import BScroll from "better-scroll"

    export default {
        data() {
            return {
                pull2refresh: undefined,
                pull2refreshTitle: "下拉刷新",
                state: 1,//1 空闲  2 待加载状态  3 加载
                loadState: 1,//1 空闲  2  加载
                header: undefined,
                footer: undefined,
                preDate: undefined,
                updateTime: "无",
                height: 60,
                currentY: 0,
                scrollY: 0,
                isTouchend: false,
            }
        },
        props: {
            canRefresh: {
                type: Boolean,
                default: true
            },
            canLoadingMore: {
                type: Boolean,
                default: true
            }
        },
        mounted() {
            this.$nextTick(() => {
                if (this.canRefresh) {
                    this.header = this.$refs.pull2RefreshHeader;
                    this.height = this.header.getBoundingClientRect().height
                }
                if (this.canLoadingMore) {
                    this.footer = this.$refs.pull2RefreshFooter;
                }
                this.pull2refresh = new BScroll(this.$refs.pull2refreshWrapper, {
                    probeType: 3
                });

                this.pull2refresh.on("scroll", (pos) => {
                    this.scrollY = pos.y;
                    // 能够刷新
                    if (this.canRefresh && pos.y > pos.x) {
                        if (!this.isTouchend && this.state != 3) {
                            this.currentY = pos.y;
                            if (pos.y * 3 < this.height) {
                                this.state = 1;
                                if (Math.abs(-this.height + (pos.y * 3)) <= this.height) {
                                    this.header.style.marginTop = -this.height + (pos.y * 3) + "px";
                                } else {
                                    this.header.style.marginTop = "0"
                                }
                            } else if (this.height <= pos.y * 3) {
                                this.state = 2;
                            }
                        }
                    }

                    if (this.canLoadingMore) {
                        // 计算相对高度
                        let reH = this.footer.getBoundingClientRect().top - this.$refs.pull2refreshWrapper.getBoundingClientRect().top;
                        if (this.pull2refresh.wrapperHeight - this.footer.getBoundingClientRect().height >= reH) {
                            if (this.loadState === 1) {
                                this.loadState = 2;
                                this.$emit("onLoadingMore");
                            }
                        }
                    }
                });
            })
        },
        methods: {
            touchstart() {
                // 能够刷新
                if (this.canRefresh) {
                    this.isTouchend = false;
                    if (this.preDate)
                        this.updateTime = this.getDateDiff(this.preDate);
                }

            },
            touchend() {
                // 能够刷新
                if (this.canRefresh && this.state != 3) {
                    this.isTouchend = true;
                    if (this.height <= this.currentY * 3) {
                        this.startRefresh(self);
                    } else {
                        this.currentY = 0;
                        this.state = 1;
                        this.isTouchend = false;
                    }
                }
                if (this.state != 3 && Math.abs(this.scrollY) > Math.abs(-this.pull2refresh.scrollerHeight + this.pull2refresh.wrapperHeight + this.height))
                    this.pull2refresh.scrollTo(0, -this.pull2refresh.scrollerHeight + this.pull2refresh.wrapperHeight + this.height, 400)
            },
            /**
             * 开始刷新 外部可调用进行自动刷新
             */
            startRefresh(self) {
                setTimeout(() => {
                    // 触摸
                    this.isTouchend = true;
                    this.state = 3;
                    this.header.style.transition = "all .3s"
                    this.header.style.marginTop = 0;
                    // 刷新中
                    setTimeout(() => {
                        this.header.style.transition = ""
                        this.$emit("onRefreshing");
                    }, 300)
                }, self ? 0 : 500)
            },
            // 停止刷新
            stopRefresh() {
                // 能够刷新
                if (this.canRefresh) {
                    if (this.state === 3) {
                        this.currentY = 0;
                        this.preDate = new Date();
                        // 动画关闭
                        this.header.style.transition = "all .3s"
                        this.header.style.marginTop = -this.height + "px";
                        // 移除动画
                        setTimeout(() => {
                            this.state = 1;
                            this.header.style.transition = ""
                        }, 300)
                        this.$nextTick(() => {
                            this.pull2refresh.refresh();

                        })
                    }
                }
            },
            stopLoadingMore() {
                this.loadState = 1;
                this.$nextTick(() => {
                    this.pull2refresh.refresh();
                })
            },
            getDateDiff(dateTimeStamp) {
                let result = "";
                let minute = 1000 * 60;
                let hour = minute * 60;
                let day = hour * 24;
                let halfamonth = day * 15;
                let month = day * 30;
                let now = new Date().getTime();
                let diffValue = now - dateTimeStamp;
                if (diffValue < 0) {
                    return;
                }
                let monthC = diffValue / month;
                let weekC = diffValue / (7 * day);
                let dayC = diffValue / day;
                let hourC = diffValue / hour;
                let minC = diffValue / minute;
                if (monthC >= 1) {
                    // result = "" + parseInt(monthC) + "月前";
                    result = this.getFormatDate(dateTimeStamp);
                }
                else if (weekC >= 1) {
                    // result = "" + parseInt(weekC) + "周前";
                    result = this.getFormatDate(dateTimeStamp);
                }
                else if (dayC >= 1) {
                    result = "" + parseInt(dayC) + "天前";
                }
                else if (hourC >= 1) {
                    result = "" + parseInt(hourC) + "小时前";
                }
                else if (minC >= 1) {
                    result = "" + parseInt(minC) + "分钟前";
                } else
                    result = "刚刚";
                return result;
            }
        },
        watch: {
            state() {
                switch (this.state) {
                    case 1:
                        this.pull2refreshTitle = "下拉刷新";
                        break;
                    case 2:
                        this.pull2refreshTitle = "松开刷新";
                        break;
                    case 3:
                        this.pull2refreshTitle = "刷新中...";
                        break;
                }
            }
        }
    }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    .pull-2-refresh
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        overflow hidden
        .pull-2-refresh-header
            margin-top -60px
            height 60px
            text-align center
            padding 10px 0
            box-sizing border-box
            .pull-2-refresh-header-title
                font-size 14px
                line-height 18px
                & > i
                    display inline-block
                    width 20px
                    height 20px
                    vertical-align bottom
                    margin-right 5px
                & > i.state1
                    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACUUlEQVR4Xu1Z7TUEQRCsi4AMEAEiQASIABEgAkSACBDBEQEiQATIgAh49cy+t7fu1vR1T++66/3dX1PTPVUzO8Ccf4M5Xz8CgOgAPwS+hKlcutMlSVp4ABAdIEPApTtdksQI/CAQZ4BsAnw0SoyAcFc05jECQvRcutMlSbBAsEDQYOiAEEKhBEMKhxAKISRDwEWkuSQJJRhKMJRgKMFQgqEEZ1MJLgJYzaT3h0y7ymwz0/4FwEem7S8zCx3wBmBp2gKUflz8miaGBQA7AIaaIhS+WwCknTWSzgIABmQRG4qFTON6B4Dgqz4rAJYBvKoqkTuvAOD4qT4rAFjEBYBDVTX5zmcATvPNJ1taAkBG4I4sWBTWEuMTADtu6pO/HtsSAMY9AnBeGIADANdWOawBYF0lafERQK4+yMKoBAAs8D4ru9xITXvNlCUAYI5bANvy9bV63ADYN45Z7B+8NS3y4KPiU9OeVwcwD2nqxGjHzGjPEwArWnxPtGeE5WiYUmdAlYUze6WsfDedKcow491LA8Csz4Irc7NKc9rzHIEql4YW1xOARXafQT06gHmo3PaEqyhCe110AHOSFjkKufcEU73fBrxXB0hp8TjdLoVNIzf3BIC0yC746/msKO11NQISWjTX+30ZgaqOtuez4rTXdQcwPzX904RdMXnmkpwEnmdAva5xtHiZHlQk9attuwKgeU9wo70+jEBVQ/22aPrMJWmLrjqgqpH3ez5uqv7uSBbcpw5gLfyxQQBUf3f+MwCa2k18ux4Bk0VoggQAGvRmwfcb64NaQY6DZ2QAAAAASUVORK5CYII=")
                    -webkit-background-size: contain
                    background-size: contain
                    transition all .4s
                    transform rotate(0deg)
                & > i.state2
                    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACUUlEQVR4Xu1Z7TUEQRCsi4AMEAEiQASIABEgAkSACBDBEQEiQATIgAh49cy+t7fu1vR1T++66/3dX1PTPVUzO8Ccf4M5Xz8CgOgAPwS+hKlcutMlSVp4ABAdIEPApTtdksQI/CAQZ4BsAnw0SoyAcFc05jECQvRcutMlSbBAsEDQYOiAEEKhBEMKhxAKISRDwEWkuSQJJRhKMJRgKMFQgqEEZ1MJLgJYzaT3h0y7ymwz0/4FwEem7S8zCx3wBmBp2gKUflz8miaGBQA7AIaaIhS+WwCknTWSzgIABmQRG4qFTON6B4Dgqz4rAJYBvKoqkTuvAOD4qT4rAFjEBYBDVTX5zmcATvPNJ1taAkBG4I4sWBTWEuMTADtu6pO/HtsSAMY9AnBeGIADANdWOawBYF0lafERQK4+yMKoBAAs8D4ru9xITXvNlCUAYI5bANvy9bV63ADYN45Z7B+8NS3y4KPiU9OeVwcwD2nqxGjHzGjPEwArWnxPtGeE5WiYUmdAlYUze6WsfDedKcow491LA8Csz4Irc7NKc9rzHIEql4YW1xOARXafQT06gHmo3PaEqyhCe110AHOSFjkKufcEU73fBrxXB0hp8TjdLoVNIzf3BIC0yC746/msKO11NQISWjTX+30ZgaqOtuez4rTXdQcwPzX904RdMXnmkpwEnmdAva5xtHiZHlQk9attuwKgeU9wo70+jEBVQ/22aPrMJWmLrjqgqpH3ez5uqv7uSBbcpw5gLfyxQQBUf3f+MwCa2k18ux4Bk0VoggQAGvRmwfcb64NaQY6DZ2QAAAAASUVORK5CYII=")
                    -webkit-background-size: contain
                    background-size: contain
                    transition all .4s
                    transform rotate(-180deg)
                & > i.state3
                    background: url("data:image/png;base64,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")
                    -webkit-background-size: auto 20px
                    background-size: auto 20px
                    animation: am-rotate 1s steps(12) infinite
                    -webkit-animation: am-rotate 1s steps(12) infinite
            .pull-2-refresh-header-subtitle
                font-size 12px
                color #888
                margin-top 7px

        .pull-2-refresh-content
            background: #fff
        .pull-2-refresh-load-more
            display block
            background: #E8E8EA
            height 44px
            line-height 44px
            text-align center
            & > i
                display inline-block
                width 20px
                height 20px
                vertical-align middle
                margin-right 5px
                margin-top -3px
            & > i.state1
                background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACUUlEQVR4Xu1Z7TUEQRCsi4AMEAEiQASIABEgAkSACBDBEQEiQATIgAh49cy+t7fu1vR1T++66/3dX1PTPVUzO8Ccf4M5Xz8CgOgAPwS+hKlcutMlSVp4ABAdIEPApTtdksQI/CAQZ4BsAnw0SoyAcFc05jECQvRcutMlSbBAsEDQYOiAEEKhBEMKhxAKISRDwEWkuSQJJRhKMJRgKMFQgqEEZ1MJLgJYzaT3h0y7ymwz0/4FwEem7S8zCx3wBmBp2gKUflz8miaGBQA7AIaaIhS+WwCknTWSzgIABmQRG4qFTON6B4Dgqz4rAJYBvKoqkTuvAOD4qT4rAFjEBYBDVTX5zmcATvPNJ1taAkBG4I4sWBTWEuMTADtu6pO/HtsSAMY9AnBeGIADANdWOawBYF0lafERQK4+yMKoBAAs8D4ru9xITXvNlCUAYI5bANvy9bV63ADYN45Z7B+8NS3y4KPiU9OeVwcwD2nqxGjHzGjPEwArWnxPtGeE5WiYUmdAlYUze6WsfDedKcow491LA8Csz4Irc7NKc9rzHIEql4YW1xOARXafQT06gHmo3PaEqyhCe110AHOSFjkKufcEU73fBrxXB0hp8TjdLoVNIzf3BIC0yC746/msKO11NQISWjTX+30ZgaqOtuez4rTXdQcwPzX904RdMXnmkpwEnmdAva5xtHiZHlQk9attuwKgeU9wo70+jEBVQ/22aPrMJWmLrjqgqpH3ez5uqv7uSBbcpw5gLfyxQQBUf3f+MwCa2k18ux4Bk0VoggQAGvRmwfcb64NaQY6DZ2QAAAAASUVORK5CYII=")
                -webkit-background-size: contain
                background-size: contain
                transition all 0s
                transform rotate(-180deg)
            & > i.state2
                background: url("data:image/png;base64,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")
                -webkit-background-size: auto 20px
                background-size: auto 20px
                animation: am-rotate 1s steps(12) infinite
                -webkit-animation: am-rotate 1s steps(12) infinite

    @keyframes am-rotate
        0%
            background-position: 0 0;
        100%
            background-position: -240px 0;
</style>
