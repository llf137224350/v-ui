<!--
   开发者：い 狂奔的蜗牛
   说明：选择摄影师或者化妆师
   版本：V 0.0.1
  地图组件:
                需要在页面中引入高德js，且在 <meta name="viewport" xxx>之后引入
                1、<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.4.2&key=你的key"></script>
                2、需要在webpack.base.conf.js的module.exports 中添加 externals: {'AMap': 'AMap'}和entry并列
  -->

<!--html-->
<template>
    <div class="show-map" v-show="mapShow">
        <div class="appbar">
            <appbar :haveMenu="false" @appbarLeftClick="appbarLeftClick" :vtitle="'位置'"></appbar>
        </div>
        <vmap ref="mapWrapper"
              :address="address"
        ></vmap>
        <div class="address" v-if="address">{{address}}</div>
    </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
    import appbar from "components/widget/appbar/appbar"
    import vmap from "components/widget/vmap/vmap"
    export default {
        created(){
            window.addEventListener("popstate", (e) => {
                this.mapShow = false;
            });
        },
        components: {
            appbar,
            vmap
        },
        props: {
            address: {
                type: String,
                default: ""
            },
            latitude: {
                type: Number,
                default: 106.94876
            },
            longitude: {
                type: Number,
                default: 27.703277
            }
        },
        data(){
            return {
                mapShow: false,
            }
        },
        methods: {
            appbarLeftClick(){
                history.back();
            },
            show(){
                this.mapShow = true;
                // 添加一条历史记录 使其支持返回键关闭
                this.addLocation();
                // 手动的调一下vmap 【必须】
                this.$refs.mapWrapper.show();
            },
            hide(){
                //操作浏览器返回 会触发浏览器popstate
                if (location.hash === "#target=map") {
                    history.back();
                }
            },
            // 添加一条历史记录
            addLocation()
            {
                if (window.history && window.history.pushState) {
                    window.history.pushState("target", "没有用", "#target=map");
                } else {
                    console.log("当前浏览器版本较低，不支持该功能")
                }
            },
        }
    }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    .show-map
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        background: #fff
        z-index 2147483644
        .appbar
            z-index 10
        .allmap // 需要给定宽高
            position fixed
            top 0
            left 0
            right 0
            bottom 0
            height 100%
        .address
            position fixed
            height 40px
            line-height 40px
            left 0
            right 0
            bottom 0
            background: rgba(0, 0, 0, .65)
            color #fff
            padding-left 16px
            font-size 13px
</style>
