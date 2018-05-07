<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'Confirm'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <button @click="showConfirm">显示Confirm</button>
        <confirmdialog ref="confirm" :okText="okText" :cancelText="cancelText"></confirmdialog>

        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/ConfirmDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import confirmdialog from "components/widget/ConfirmDialog/ConfirmDialog.vue"
    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                okText: "知道了",
                cancelText:"取消"
            }
        },
        components: {
            appbar,
            confirmdialog
        },
        methods: {
            handleLeft(){
                this.$router.go(-1)
            },
            showConfirm(){
                this.$refs.confirm.show("提示内容", function () {
                    alert("回调")
                });
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    .search-bar-demo
        background: #f7f7f7
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