<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'VMap'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <div class="map">
            <vmap ref="mapWrapper"
                  :address="address"
            ></vmap>
            <div class="address" v-if="address">{{address}}</div>
        </div>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/VMapDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import vmap from "components/widget/vMap/vMap"

    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                address:"遵义师范学院"
            }
        },
        mounted(){
           setTimeout(()=>{
               this.$refs.mapWrapper.show();
           },300)
        },
        components: {
            appbar,
            vmap
        },
        methods: {
            handleLeft(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    .search-bar-demo
        background: #f7f7f7
        .map
            height 520px
            position relative
            .allmap // 需要给定宽高
                position absolute
                top 0
                left 0
                right 0
                bottom 0
                height 100%
            .address
                position absolute
                height 40px
                line-height 40px
                left 0
                right 0
                bottom 0
                background: rgba(0, 0, 0, .65)
                color #fff
                padding-left 16px
                font-size 13px
        button
            margin-top 16px
            margin-left 16px
        .tips-container
            padding 16px
            & > div
                font-size 16px
                font-weight bold
                line-height 36px
            & > p
                line-height 21px

</style>