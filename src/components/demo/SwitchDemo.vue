<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'Switch'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <div style="margin: 16px">值: {{style1}} {{style2}} {{style3}} {{style4}}</div>
        <mySwitch style="margin-left: 16px" v-model="style1"></mySwitch>&nbsp;&nbsp;&nbsp;&nbsp;
        <mySwitch :styleIndex="1" v-model="style2"></mySwitch>&nbsp;&nbsp;&nbsp;&nbsp;
        <mySwitch :styleIndex="2" v-model="style3"></mySwitch>&nbsp;&nbsp;&nbsp;&nbsp;
        <mySwitch :styleIndex="3" v-model="style4"></mySwitch>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/SwitchDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import mySwitch from "components/widget/Switch/Switch.vue"

    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                style1:false,
                style2:true,
                style3:true,
                style4:true,
            }
        },
        components: {
            appbar,
            mySwitch
        },
        methods: {
            handleLeft(){
                this.$router.go(-1)
            },

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    .search-bar-demo
        background: #f7f7f7
        .loading
            margin 10px
        button
            margin-top 10px
            margin-left 10px
        .tips-container
            padding 16px
            & > div
                font-size 16px
                font-weight bold
                line-height 36px
            & > p
                line-height 21px

</style>