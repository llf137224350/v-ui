<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'DatePicker'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <button @click="showDatePicker">显示DatePicker</button> {{date}}
        <datepicker ref="datepicker" @datepickerOkCallBack="datepickerOkCallBack"></datepicker>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/DatePickerDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import datepicker from "components/widget/DatePicker/DatePicker.vue"

    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                date: ""
            }
        },
        components: {
            appbar,
            datepicker
        },
        methods: {
            handleLeft() {
                this.$router.go(-1)
            },
            showDatePicker(){
                this.$refs.datepicker.show();

            },
            datepickerOkCallBack(date){
             this.date = date;
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