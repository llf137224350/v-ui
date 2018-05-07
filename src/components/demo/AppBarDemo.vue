<template>
    <div class="app-bar-demo">
        <appbar :vtitle="'标题'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <br/>
        <appbar :vtitle="'标题'" @appbarLeftClick="handleLeft" @appbarRightClick="handleRight"></appbar>
        <br/>
        <appbarfortext :vtitle="'标题'" @appbarLeftClick="handleLeft"
                       :haveMenu="false"
                       :rightText="'提交'"
                       :color="color"
        ></appbarfortext>
        <br/>
        <appbarfortext :vtitle="'标题'" @appbarLeftClick="handleLeft" @appbarRightClick="handleRight"
                       :rightText="'提交'"
                       :color="color"
        ></appbarfortext>

        <div class="tips-container">
            <div>使用说明</div>
            <p>
                AppBar为类似原生的顶部导航栏，其中左侧为返回按钮部分，可以通过@appbarLeftClick="handleLeft"方式定义点击点击左侧按钮后的代码逻辑。如：返回上一级页面。@appbarRightClick="handleRight"为点击右侧菜单或者文本
                后的处理逻辑。AppBar向外暴露了vtitle、leftIcon、rightIcon、color、haveMenu属性。AppBarFor向外暴露了vtitle、leftIcon、rightText、haveMenu属性。
            </p>
            <p>vtitle:显示的标题</p>
            <p>leftIcon:左侧返回图标，可以传入自定义的html样式</p>
            <p>rightIcon:右侧菜单图标，可以传入自定义的html样式</p>
            <p>rightText:右侧文本，可以传入自定义的html样式</p>
            <p>color:AppBar或AppBarForText背景颜色</p>
            <p>haveMenu:是否有右侧文本区域或者菜单</p>
            <p>注:样式不满足时可自行修改对应代码达到预期效果</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import appbarfortext from "components/widget/AppBarForText/AppBarForText.vue"

    export default {
        created(){
            this.$router.isBack = false;
        },
        data() {
            return {
                color: "#41b883"
            }
        },
        components: {
            appbar,
            appbarfortext
        },
        methods: {
            handleLeft() {
                this.$router.go(-1)
            },
            handleRight() {
                alert("点击了菜单或者提交")
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    .app-bar-demo
        background: #f7f7f7
        .tips-container
            padding 16px
            background: #f7f7f7
            & > div
                font-size 16px
                font-weight bold
                line-height 36px
            & > p
                line-height 21px

</style>