<!--
   开发者：い 狂奔的蜗牛
   说明：显示侧滑菜单,与组件无任何直接联系 只做展示用
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="show-qucik-index" v-show="quickIndexShow">
        <appbar :vtitle="'快速索引'" :color="'#41B883'" @appbarLeftClick="appbarLeftClick"></appbar>
        <div class="quick_index_wrapper">
            <QuickIndex ref="quickIndexHook" v-model="value"></QuickIndex>
        </div>
    </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar"
    import QuickIndex from "components/widget/QuickIndex/QuickIndex"

    export default {
        created() {
            window.addEventListener("popstate", (e) => {
                this.quickIndexShow = false;
            });
        },
        components: {
            appbar,
            QuickIndex
        },
        data() {
            return {
                value:"",
                quickIndexShow: false,
                touchable: true
            }
        },
        mounted() {

        },
        methods: {
            appbarLeftClick() {
                history.back();
            },
            show() {
                // 添加一条历史记录 使其支持返回键关闭
                this.addLocation();
                this.quickIndexShow = true;
                let data = ["河北省石家庄市", "河北省唐山市", "山西省太原市", "内蒙包头市",
                    "辽宁省大连市", "辽宁省鞍山市", "辽宁省抚顺市", "吉林省吉林市",
                    "黑龙江省齐齐哈尔市", "江苏省徐州市", "浙江省杭州市", "福建省福州市",
                    "江西省南昌市", "山东省济南市", "山东省青岛市", "山东省淄博市",
                    "河南省郑州市", "$我是随意加的","!哈哈哈","@哇哇哇","湖南省长沙市", "贵州省贵阳市", "云南省昆明市",
                    "甘肃省兰州市", "新疆乌鲁木齐市"]
                this.$refs.quickIndexHook.init(data);

            },
            hide() {
                //操作浏览器返回 会触发浏览器popstate
                if (location.hash === "#target=quickIndex") {
                    history.back();
                }
            },
            // 添加一条历史记录
            addLocation() {
                if (window.history && window.history.pushState) {
                    window.history.pushState("target", "没有用", "#target=quickIndex");
                } else {
                    console.log("当前浏览器版本较低，不支持该功能")
                }
            },
        },
        watch:{
            value(val){
                alert(val)
            }
        }
    }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    .show-qucik-index
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        background: #fff
        z-index 2147483647
        .appbar
            z-index 10
        .quick_index_wrapper
            position relative
            height 100%


</style>
