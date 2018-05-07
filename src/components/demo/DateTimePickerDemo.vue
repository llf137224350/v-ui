<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'DateTimePicker'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <button @click="showDateTimePicker">显示DateTimePicker</button> {{datetime}}
        <datetimepicker ref="datetimepicker"
                        @datetimepickerOkCallBack="datetimepickerOkCallBack"></datetimepicker>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/DateTimePickerDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import datetimepicker from "components/widget/DatetimePicker/DatetimePicker.vue"

    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                datetime: ""
            }
        },
        components: {
            appbar,
            datetimepicker
        },
        methods: {
            handleLeft() {
                this.$router.go(-1)
            },
            showDateTimePicker(){
                this.$refs.datetimepicker.show();
            },
            datetimepickerOkCallBack(datetime){
              this.datetime = datetime;
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