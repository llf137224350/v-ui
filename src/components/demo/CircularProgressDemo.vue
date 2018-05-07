<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'CircularProgress'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <h1  style="margin-left: 16px;margin-top: 16px">Slider:{{slideValue}}</h1>
        <button @click="setSlideValue">currentValue = 80</button>
        <button @click="resetSlideValue">currentValue=0</button>
        <Slider class="linear" :minValue="0" :maxValue="100" v-model="slideValue"></Slider>

        <h1 style="margin-left: 16px;margin-top: 16px">CircularProgress 范围依次为：[0,100],[20,80],[0,120],[0,200]，拖动Slider更改值 {{slideValue}}</h1>
        <button @click="setStateSucceed">设置成功(currentValue === maxValue)</button>
        <button @click="setStateFailed">设置失败</button>
        <div style="display: flex;padding: 10px">
            <div style="width: 80px;height: 80px;position: relative;flex: 0 0 80px">
                <CircularProgress :minValue="0" :maxValue="100" v-model="slideValue"
                                  :state="state"></CircularProgress>
            </div>
            <div style="flex: 1"></div>
            <div style="width: 70px;height: 70px;position: relative;flex: 0 0 70px;margin-top: 10px">
                <CircularProgress :minValue="20" :maxValue="80" v-model="slideValue"
                                  :state="state"></CircularProgress>
            </div>
            <div style="flex: 1"></div>
            <div style="width: 60px;height: 60px;position: relative;flex: 0 0 60px;margin-top: 20px">
                <CircularProgress :minValue="0" :maxValue="120" v-model="slideValue"
                                  :state="state" :foregroundColor="'#7E57C2'"></CircularProgress>
            </div>
            <div style="flex: 1"></div>
            <div style="width: 50px;height: 50px;position: relative;flex: 0 0 50px;margin-top: 30px">
                <CircularProgress :minValue="0" :maxValue="200" v-model="slideValue"
                                  :state="state" :foregroundColor="'#7E57C2'"></CircularProgress>
            </div>
        </div>

        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/CircularProgressDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import Slider from "components/widget/Slider/Slider.vue"
    import CircularProgress from "components/widget/CircularProgress/CircularProgress.vue"
    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                slideValue: 20,
                state: "progress"
            }
        },
        components: {
            appbar,
            Slider,
            CircularProgress
        },
        methods: {
            handleLeft(){
                this.$router.go(-1)
            },
            setSlideValue(){
                this.slideValue = 80;
            },
            resetSlideValue(){
                this.slideValue = 0;
            },
            setStateSucceed(){
                this.state = "succeed";
            },
            setStateFailed(){
                this.state = "failed";
            }
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