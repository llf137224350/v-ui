<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'TimePicker'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <button @click="showTimePicker">显示TimePicker</button> {{time}}
        <timepicker ref="timepicker" @timerpickerOkCallBack="timerpickerOkCallBack"></timepicker>

        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/TimePickerDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import timepicker from "components/widget/TimePicker/TimePicker.vue"

    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                time: ""
            }
        },
        components: {
            appbar,
            timepicker
        },
        methods: {
            handleLeft() {
                this.$router.go(-1)
            },
            showTimePicker() {
                this.$refs.timepicker.show();
            },
            timerpickerOkCallBack(time) {
                this.time = time;
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