<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'DrawCircle'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <div style="padding: 16px">
            <div style="width: 48px;height: 48px; line-height:48px;text-align:center;position: relative;border-radius:50%;overflow:hidden;color: #41B883;float: left">
                点我
                <drawCircle></drawCircle>
            </div>
            <div style="width: 48px;height: 48px; line-height:48px;text-align:center;position: relative;border-radius:50%;overflow:hidden;color: #41B883;">
                点我
                <drawCircle :center="true"></drawCircle>
            </div>
            <div style="height: 48px;line-height: 48px;position: relative">
                点我有惊喜
                <drawCircle :fill="'rgba(65,184,131,.2)'"></drawCircle>
            </div>
            <div style="height: 48px;line-height: 48px;position: relative">
                慢吞吞的我
                <drawCircle :fill="'rgba(65,184,131,.2)'" :duration="1"></drawCircle>
            </div>
        </div>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/DrawCircleDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import drawCircle from "components/widget/DrawCircle/DrawCircle.vue"

    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                state : "progress"
            }
        },
        components: {
            appbar,
            drawCircle
        },
        methods: {
            handleLeft(){
                this.$router.go(-1)
            },
            setStateSucceed(){
                this.state = "succeed";
            },
            setStateFailed(){
                this.state = "failed";
            },
        },
        watch: {
            slideValue(){
                this.state = "progress";
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    .search-bar-demo
        background: #f7f7f7
        .my-vtextarea
            margin 16px
            position: relative
            width: 90%
            height: 100px
            box-sizing: border-box
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