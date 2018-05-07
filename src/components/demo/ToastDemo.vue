<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'Toast'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <button @click="showToast">点击我弹出输出内容吐司样式1</button>
        <toast ref="toast"></toast>

        <button @click="showIcontoastSucceed">点击我弹出输出内容吐司样式2成功</button>
        <IconToast ref="icontoastSucceed"></IconToast>

        <button @click="showIcontoastFailed">点击我弹出输出内容吐司样式2失败</button>
        <IconToast ref="icontoastFailed"></IconToast>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                土司样式1和吐司样式2分别对应着Toast和IconToast组件，其中吐司样式1和样式2的显示内容和显示样式通过调用show方法传入值进行显示。
                调用方式为this.$refs.xxx.show("显示内容")和this.$refs.xxx.show("显示内容", "succeed")，Toast的show方法为一个参数，即要提示的内容。
                IconToast的show方法为两个参数，第一个为要 提示的内容，第二个为提示状态（成功或失败），成功对应的参数为“succeed”，失败对应参数为“failed”。
                默认弹出吐司后2.4s消失，可以通过指定displayDuration设置弹出后多久消失。
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import Toast from "components/widget/Toast/Toast.vue"
    import IconToast from "components/widget/IconToast/IconToast.vue"
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
            Toast,
            IconToast
        },
        methods: {
            handleLeft(){
                this.$router.go(-1)
            },
            showToast(){
                this.$refs.toast.show("操作成功");
            },
            showIcontoastSucceed(){
                this.$refs.icontoastSucceed.show("操作成功", "succeed");
            },
            showIcontoastFailed(){
                this.$refs.icontoastFailed.show("操作失败", "failed");
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