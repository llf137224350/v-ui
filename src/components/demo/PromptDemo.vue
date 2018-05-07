<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'prompt'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <button @click="showPrompt">Prompt</button>
        <promptdialog ref="prompt" :okText="okText" :cancelText="cancelText"></promptdialog>

        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/PromptDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import promptdialog from "components/widget/PromptDialog/PromptDialog.vue"
    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                okText: "确定",
                cancelText:"取消"
            }
        },
        components: {
            appbar,
            promptdialog
        },
        methods: {
            handleLeft(){
                this.$router.go(-1)
            },
            showPrompt(){
                this.$refs.prompt.show({
                    type: "password",
                    tips: "请输入支付密码",
                    title: "身份验证",
                    callBack: function (value) {
                        alert(value)
                    }
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