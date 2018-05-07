<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'RangeSlider'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <button @click="showRangeSlider">显示rangeslider</button>
        <rangeslider ref="rangeslider" v-model="currentIndex"></rangeslider>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/RangeSliderDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import rangeslider from "components/widget/RangeSlider/RangeSlider.vue"
    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                currentIndex:0
            }
        },
        components: {
            appbar,
            rangeslider
        },
        methods: {
            handleLeft(){
                this.$router.go(-1)
            },
            showRangeSlider(){
                this.$refs.rangeslider.show();
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    .search-bar-demo
        background: #f7f7f7
        .loading
            margin 16px
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