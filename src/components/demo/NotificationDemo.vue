<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'Notification'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <button @click="showNotification">点击我弹出消息通知</button>
        <Notification ref="notification"></Notification>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/NotificationDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import Notification from "components/widget/Notification/Notification.vue"
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
            Notification
        },
        methods: {
            handleLeft(){
                this.$router.go(-1)
            },
            showNotification(){
                this.$refs.notification.show({
                    icon: "http://ww3.sinaimg.cn/bmiddle/61e8a1fdgw1eeuqql9xagj206w056mxh.jpg",
                    title: "我是标题",
                    subtitle: "我是子标题",
                    content: "我是文本内容，哈哈哈哈哈我是文本内容，哈哈哈哈哈我是文本内容，哈哈哈哈哈我是文本内容，哈哈哈哈哈",
                    btnText: "查看",
                    callback: () => {
                        alert("回调了")
                    }
                })
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