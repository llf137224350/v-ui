<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="sharewx">
        <transition name="fade">
            <div class="wxjoylayer" v-show="isShow" @click="hide">
                <span v-html="tips"></span>
            </div>
        </transition>
    </div>

</template>

<!--script-->
<script type="text/ecmascript-6">
    export default {
        mounted() {
            // 更新数据 关闭弹窗
            window.addEventListener("popstate",  (e)=> {
                this.isShow = false;
            });
            // 进行rem适配 设置根元素字体大小
         this.setRootFontSize();
         window.onresize = ()=>{
             this.setRootFontSize();
         }
        },
        data() {
            return {
                isShow: false,
                tips: `点击右上角“...”，<br>发送给朋友或分享到朋友圈吧！`
            }
        },
        methods: {
            show(tips) {
                if (tips)
                    this.tips = tips;
                this.isShow = true;
                this.addLocation();
            },
            hide() {
                //操作浏览器返回 会触发浏览器popstate
                if (location.hash === "#target=share") {
                    history.back();
                }
            },
            addLocation() {
                if (window.history && window.history.pushState) {
                    window.history.pushState("target", "没有用", "#target=share");
                } else {
                    console.log("当前浏览器版本较低，不支持该功能")
                }
            },
            //设置根元素字体大小
            setRootFontSize(){
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

    .sharewx
        .wxjoylayer
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAGxCAMAAACOQ1mYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEE3NTY2MDMxQzc3MTFFNDg3MjFEMDEyOEZGMUM0RjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEE3NTY2MDQxQzc3MTFFNDg3MjFEMDEyOEZGMUM0RjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QTc1NjYwMTFDNzcxMUU0ODcyMUQwMTI4RkYxQzRGNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QTc1NjYwMjFDNzcxMUU0ODcyMUQwMTI4RkYxQzRGNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkcWRbEAAAKsUExURTMzM////62t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") no-repeat 100% px2rem(10px) #333
            background-size: px2rem(140px) auto
            width: 100%
            height: 100%
            opacity .9
            position: fixed
            top: 0
            left: 0
            right: 0
            bottom: 0
            overflow: hidden
            z-index: 2147483646
            backdrop-filter blur(10px)
            transition all 0.3s
            &.fade-enter-active, &.fade-leave-active
                opacity .9
            &.fade-enter, &.fade-leave-active
                opacity 0
            & > span
                padding: px2rem(90px) 0 0 px2rem(15px)
                font-size: px2rem(14px)
                line-height: px2rem(26px)
                color: #fff
                display: block
                overflow: hidden
</style>
