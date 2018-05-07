<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'ActionSheet'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <button @click="showActionSheet">ActionSheet样式一</button>
        <button @click="showActionSheet2">ActionSheet样式二</button>
        <ActionSheet ref="ActionSheet"></ActionSheet>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/ActionSheetDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import ActionSheet from "components/widget/ActionSheet/ActionSheet.vue"

    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {}
        },
        components: {
            appbar,
            ActionSheet
        },
        methods: {
            handleLeft(){
                this.$router.go(-1)
            },
            showActionSheet(){
                this.$refs.ActionSheet.show([
                    {
                        "text": "菜单一",//可以传html
                        "callBack": function () {
                            alert("我是菜单一")
                        }
                    },
                    {
                        "text": "菜单二",
                        "callBack": function () {
                            alert("我是菜单二")
                        }
                    },
                    {
                        "text": "菜单三",
                        "callBack": function () {
                            alert("我是菜单三")
                        }
                    }
                ], "请选择标题")
            },
            showActionSheet2(){
                this.$refs.ActionSheet.show([
                    {
                        "text": "菜单一",//可以传html
                        "callBack": function () {
                            alert("我是菜单一")
                        }
                    },
                    {
                        "text": "菜单二",
                        "callBack": function () {
                            alert("我是菜单二")
                        }
                    },
                    {
                        "text": "菜单三",
                        "callBack": function () {
                            alert("我是菜单三")
                        }
                    }
                ])
            },
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