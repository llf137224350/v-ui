<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'QuickIndex'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <div class="quick_index_wrapper">
            <QuickIndex ref="quickIndexHook" v-model="value"></QuickIndex>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import QuickIndex from "components/widget/QuickIndex/QuickIndex.vue"

    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                value:""
            }
        },
        mounted(){
            setTimeout(()=>{
                let data = ["!见QuickIndexDemo.vue","河北省石家庄市", "河北省唐山市", "山西省太原市", "内蒙包头市",
                    "辽宁省大连市", "辽宁省鞍山市", "辽宁省抚顺市", "吉林省吉林市",
                    "黑龙江省齐齐哈尔市", "江苏省徐州市", "浙江省杭州市", "福建省福州市",
                    "江西省南昌市", "山东省济南市", "山东省青岛市", "山东省淄博市",
                    "河南省郑州市", "$我是随意加的","@哇哇哇","湖南省长沙市", "贵州省贵阳市", "云南省昆明市",
                    "甘肃省兰州市", "新疆乌鲁木齐市"]
                this.$refs.quickIndexHook.init(data);
            },100)
        },
        components: {
            appbar,
            QuickIndex
        },
        methods: {
            handleLeft(){
                this.$router.go(-1)
            }
        },
        watch:{
            value(val){
                alert(val)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    .search-bar-demo
        background: #f7f7f7
        .quick_index_wrapper
            position relative
            height 100%
        button
            margin-top 16px
            margin-left 16px

</style>