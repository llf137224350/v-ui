<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'Progress'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>

        <button @click="startAnim">开始动画</button>
        <button @click="stopAnim">停止动画</button>
        <linearProgress class="linear" ref="linearProgress" :height="'2px'"></linearProgress>

        <button @click="startAnim1">开始动画</button>
        <button @click="stopAnim1">停止动画</button>
        <linearProgress  class="linear" ref="linearProgress1" :foregroundColor="'#7E57C2'" :height="'6px'"></linearProgress>

        <h1 style="margin-left: 10px">进度条{{currentValue}}</h1>
        <button @click="setCurrentValue">currentValue = 80</button>
        <button @click="reset">currentValue=0</button>
        <progressline class="linear" ref="progressline" :minValue="0" :maxValue="100" v-model="currentValue"></progressline>

        <h1  style="margin-left: 10px">Slider:{{slideValue}}</h1>
        <button @click="setSlideValue">currentValue = 80</button>
        <button @click="resetSlideValue">currentValue=0</button>
        <Slider class="linear" :minValue="0" :maxValue="100" v-model="slideValue"></Slider>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/ProgressDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import linearProgress from "components/widget/LinearProgress/LinearProgress.vue"
    import progressline from "components/widget/ProgressLine/ProgressLine.vue"
    import Slider from "components/widget/Slider/Slider.vue"
    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                currentValue: 10,
                slideValue: 20
            }
        },
        components: {
            appbar,
            linearProgress,
            progressline,
            Slider
        },
        methods: {
            handleLeft(){
                this.$router.go(-1)
            },
            startAnim(){
                this.$refs.linearProgress.start();
            },
            stopAnim(){
                this.$refs.linearProgress.stop();
            },
            startAnim1(){
                this.$refs.linearProgress1.start();
            },
            stopAnim1(){
                this.$refs.linearProgress1.stop();
            },
            setCurrentValue(){
                this.currentValue = 80;

            },
            reset(){
                this.currentValue = 0;
            },
            setSlideValue(){
                this.slideValue = 80;
            },
            resetSlideValue(){
                this.slideValue = 0;
            },
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    .search-bar-demo
        background: #f7f7f7
        .linear
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