<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'VTextarea'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>

        <div class="my-vtextarea">
            <vtextarea v-model="vtextareaValue"></vtextarea>
        </div>
        <h1 style="padding: 0 0 0 16px"> {{vtextareaValue}}</h1>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/VTextareaDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import vtextarea from "components/widget/vtextarea/vtextarea.vue"

    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                vtextareaValue:""
            }
        },
        components: {
            appbar,
            vtextarea
        },
        methods: {
            handleLeft(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    .search-bar-demo
        background: #f7f7f7
        .my-vtextarea
            margin 16px
            position: relative
            width: 90%
            height: 100px
            box-sizing: border-box
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