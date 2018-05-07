<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'CellBox'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <cellbox :title="'新消息'" :des="'一条未读消息'"></cellbox>
        <cellbox :title="'新消息'"></cellbox>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/CellBoxDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import cellbox from "components/widget/CellBox/CellBox.vue"

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
            cellbox
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