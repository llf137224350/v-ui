<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'ShareForWX'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <button @click="sharewx">分享到微信</button>
        <sharewx ref="sharewx"></sharewx>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/ShareForWXDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import sharewx from "components/widget/sharewx/sharewx.vue"

    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
            }
        },
        components: {
            appbar,
            sharewx
        },
        methods: {
            handleLeft(){
                this.$router.go(-1)
            },
            sharewx(){
                this.$refs.sharewx.show();
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