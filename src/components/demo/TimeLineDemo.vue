<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'TimeLine'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <div style="padding-top: 16px;background: #EFEFF4;">
            <VerticalTimeline :timelineData="timelineData"></VerticalTimeline>
        </div>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/TimeLineDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import VerticalTimeline from "components/widget/VerticalTimeline/VerticalTimeline.vue"

    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                timelineData: [
                    {
                        date: "2018-01-23",
                        content: "我说都是假的你信吗？"
                    },
                    {
                        date: "2017-12-23",
                        content: "第三个版本发布，新增了大量类似原生体验效果的组件，并对代码进行了深入的优化。"
                    },
                    {
                        date: "2017-11-23",
                        content: "第二个版本发布"
                    },
                    {
                        date: "2017-10-23",
                        content: "第一个版本发布"
                    }
                ],
            }
        },
        components: {
            appbar,
            VerticalTimeline
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