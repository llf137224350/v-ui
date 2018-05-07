<template>
    <div class="snack-bar-demo">
        <appbar :vtitle="'SnackBar'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <div class="tips"> 位置：<input type="checkbox" v-model="check"/>{{check?"顶部":"底部"}}</div>
        <button @click="showSnackBar">snackbar-top</button>
        <button @click="showSnackBarLeft">snackbar-left</button>
        <button @click="showSnackBarRight">snackbar-right（回调）</button>
        <button @click="showSnackBarDown">snackbar-down</button>
        <snackbar ref="snackbar" :direction="direction" :position="check===true?1:0"></snackbar>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/SnackBarDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import snackbar from "components/widget/SnackBar/SnackBar.vue"

    const topDirection = 0; // 从上进入
    const downDirection = 1; // 从下边进入
    const leftDirection = 2; // 从左边进入
    const rightDirection = 3; // 从右边进入
    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                tips: "操作提示",
                check: false,
                direction: topDirection,
            }
        },
        components: {
            appbar,
            snackbar
        },
        methods: {
            handleLeft() {
                this.$router.go(-1)
            },
            showSnackBar() {
                this.direction = topDirection;
                this.$refs.snackbar.show(this.tips);
            },
            showSnackBarLeft() {
                this.direction = leftDirection;
                this.$refs.snackbar.show(this.tips);
            },
            showSnackBarRight() {
                this.direction = rightDirection;
                //第二个为点击确定后的回调，不传入不回调
                this.$refs.snackbar.show(this.tips, function () {
                    alert("回调了")
                });
            },
            showSnackBarDown() {
                this.direction = downDirection;
                this.$refs.snackbar.show(this.tips);
            },
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    .snack-bar-demo
        background: #f7f7f7
        .tips
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