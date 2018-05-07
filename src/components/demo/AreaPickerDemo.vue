<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'AreaPicker'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <button @click="showAreaPicker">显示AreaPicker</button> {{area}}
        <areapicker ref="areapicker" @areapickerOkCallBack="areapickerOkCallBack"></areapicker>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/AreaPickerDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import areapicker from "components/widget/AreaPicker/AreaPicker.vue"

    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                area: ""
            }
        },
        components: {
            appbar,
            areapicker
        },
        methods: {
            handleLeft() {
                this.$router.go(-1)
            },
            showAreaPicker(){
                this.$refs.areapicker.show();
            },
            areapickerOkCallBack(area){
              this.area = area;
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