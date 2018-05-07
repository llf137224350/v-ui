<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'Alert'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <button @click="showAlert">显示alert</button>
        <alertdialog ref="alert" :okText="okText"></alertdialog>


        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/AlertDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import alertdialog from "components/widget/AlertDialog/AlertDialog.vue"
    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                okText: "知道了"
            }
        },
        components: {
            appbar,
            alertdialog
        },
        methods: {
            handleLeft(){
                this.$router.go(-1)
            },
            showAlert(){
                this.$refs.alert.show("我是显示的文本内容");
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