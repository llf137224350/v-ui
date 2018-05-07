<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'PopupPicker'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <button @click="showpopuppicker">显示popuppicker</button> {{value}}
        <popuppicker ref="popuppicker" @popuppickerOkCallBack="popuppickerOkCallBack"
                     :items="['小米','三星','华为','魅族','OPPO','VIVO','金立','锤子']"></popuppicker>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/PopupPickerDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import popuppicker from "components/widget/PopupPicker/PopupPicker.vue"

    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                value: ""
            }
        },
        components: {
            appbar,
            popuppicker
        },
        methods: {
            handleLeft() {
                this.$router.go(-1)
            },
            showpopuppicker(){
                this.$refs.popuppicker.show();
            },
            popuppickerOkCallBack(value){
                this.value = value;
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