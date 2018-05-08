<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'VMenu'" @appbarLeftClick="handleLeft"  @appbarRightClick="handleRight" ></appbar>
        <VMenu ref="vmenu"></VMenu>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/VMenuDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import VMenu from "components/widget/VMenu/VMenu.vue"

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
            VMenu
        },
        methods: {
            handleLeft(){
                this.$router.go(-1)
            },
            handleRight(){
                this.$refs.vmenu.show({
                    top: (44 / 37.5) +"rem",
                    right: "7px",
                    menuItems: [
                        "菜单一", "菜单二", "菜单三", "菜单四", "菜单五"],// 可以传入html 也就是自定义样式
                    callBacks: [
                        () => {
                            alert("菜单一");
                        },
                        () => {
                            alert("菜单二");
                        },
                        () => {
                            alert("菜单三");
                        },
                        () => {
                            alert("菜单四");
                        },
                        () => {
                            alert("菜单五");
                        }
                    ]
                });
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