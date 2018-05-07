<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'Star'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <p style="margin: 16px 0 0 16px">
            <star :size="48" :score="score1" :readonly="false" v-model="score1"
                  style="float: left"></star>
            <span style="display: inline-block;line-height: 22px;margin-left: 10px">{{score1}} 分</span>
        </p>

        <p style="clear: both;margin: 16px 0 0 16px">
            <star :size="36" :score="score2" :readonly="false" v-model="score2"
                  style="float: left"></star>
            <span style="display: inline-block;line-height: 22px;margin-left: 10px">{{score2}} 分</span>
        </p>

        <p style="clear: both;margin: 16px 0 0 16px">
            <star :size="24" :score="score3" :readonly="false" v-model="score3"
                  style="float: left"></star>
            <span style="display: inline-block;line-height: 22px;margin-left: 10px">{{score3}} 分</span>
        </p>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/StarDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import star from "components/widget/Star/Star.vue"

    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                score1: 3.5,
                score2: 3.5,
                score3: 3.5,
            }
        },
        components: {
            appbar,
            star
        },
        methods: {
            handleLeft() {
                this.$router.go(-1)
            },

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