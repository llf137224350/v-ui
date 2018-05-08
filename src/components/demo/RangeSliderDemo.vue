<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'RangeSlider'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <button @click="showRangeSlider">显示rangeslider样式一</button>
        <button @click="showRangeSlider1" >显示rangeslider样式二</button>
        <div style="margin: 16px">索引值：{{currentIndex}}</div>
        <rangeslider ref="rangeslider" v-model="currentIndex"  :fontEnlargement="fontEnlargement"></rangeslider>

        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/RangeSliderDemo.vue
            </p>
            <p>注：一个页面只能有一个RangeSlider</p>
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
                currentIndex:0,
                fontEnlargement:true
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
                this.fontEnlargement = true;
                this.$refs.rangeslider.show();
            },
            showRangeSlider1(){
                this.fontEnlargement = false;
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