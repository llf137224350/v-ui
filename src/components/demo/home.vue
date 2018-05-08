<template>
    <div class="home-container">

        <section class="home-content-wrapper" ref="homeHook" @scroll="scroll">
            <div class="home-tips">使用时请引入src/common/css/reset.css</div>
            <ul>
                <router-link to="/AppBarDemo" tag="li">
                    <i>icon</i>
                    <span>AppBar</span>
                </router-link>
                <router-link to="/VMenuDemo" tag="li">
                    <i>icon</i>
                    <span>VMenu</span>
                </router-link>
                <router-link to="/SearchBarDemo" tag="li">
                    <i>icon</i>
                    <span>SearchBar</span>
                </router-link>
                <router-link to="/TablayoutDemo/item/1" tag="li">
                    <i>icon</i>
                    <span>TabLayout</span>
                </router-link>
                <router-link to="/ToastDemo" tag="li">
                    <i>icon</i>
                    <span>Toast</span>
                </router-link>
                <router-link to="/NotificationDemo" tag="li">
                    <i>icon</i>
                    <span>notification</span>
                </router-link>
                <router-link to="/SnackBarDemo" tag="li">
                    <i>icon</i>
                    <span>SnackBar</span>
                </router-link>
                <router-link to="/AlertDemo" tag="li">
                    <i>icon</i>
                    <span>Alert</span>
                </router-link>
                <router-link to="/ConfirmDemo" tag="li">
                    <i>icon</i>
                    <span>Confirm</span>
                </router-link>
                <router-link to="/PromptDemo" tag="li">
                    <i>icon</i>
                    <span>Prompt</span>
                </router-link>

                <router-link to="/ActionSheetDemo" tag="li">
                    <i>icon</i>
                    <span>ActionSheet</span>
                </router-link>
                <router-link to="/TimePickerDemo" tag="li">
                    <i>icon</i>
                    <span>TimePicker</span>
                </router-link>
                <router-link to="/DatePickerDemo" tag="li">
                    <i>icon</i>
                    <span>DatePicker</span>
                </router-link>
                <router-link to="/DateTimePickerDemo" tag="li">
                    <i>icon</i>
                    <span>DateTimePicker</span>
                </router-link>
                <router-link to="/AreaPickerDemo" tag="li">
                    <i>icon</i>
                    <span>AreaPicker</span>
                </router-link>
                <router-link to="/PopupPickerDemo" tag="li">
                    <i>icon</i>
                    <span>PopupPicker</span>
                </router-link>
                <router-link to="/ProgressBarDemo" tag="li">
                    <i>icon</i>
                    <span>ProgressBar</span>
                </router-link>
                <router-link to="/ProgressDemo" tag="li">
                    <i>icon</i>
                    <span>Progress</span>
                </router-link>
                <router-link to="/CircularProgressDemo" tag="li">
                    <i>icon</i>
                    <span>CircularProgress</span>
                </router-link>
                <router-link to="/LoadingDemo" tag="li">
                    <i>icon</i>
                    <span>Loading</span>
                </router-link>
                <router-link to="/RangeSliderDemo" tag="li">
                    <i>icon</i>
                    <span>RangeSlider</span>
                </router-link>
                <router-link to="/SwitchDemo" tag="li">
                    <i>icon</i>
                    <span>Switch</span>
                </router-link>
                <router-link to="/CheckBoxDemo" tag="li">
                    <i>icon</i>
                    <span>CheckBox</span>
                </router-link>
                <router-link to="/RadioDemo" tag="li">
                    <i>icon</i>
                    <span>Radio</span>
                </router-link>
                <router-link to="/NumberKeyboardDemo" tag="li">
                    <i>icon</i>
                    <span>NumberKeyboard</span>
                </router-link>
                <router-link to="/ShareForWXDemo" tag="li">
                    <i>icon</i>
                    <span>ShareForWX</span>
                </router-link>
                <router-link to="/StarDemo" tag="li">
                    <i>icon</i>
                    <span>Star</span>
                </router-link>
                <router-link to="/DividerDemo" tag="li">
                    <i>icon</i>
                    <span>Divider</span>
                </router-link>
                <router-link to="/CellSwipeDemo" tag="li">
                    <i>icon</i>
                    <span>CellSwipe</span>
                </router-link>
                <router-link to="/CellBoxDemo" tag="li">
                    <i>icon</i>
                    <span>CellBox</span>
                </router-link>
                <router-link to="/BadgeDemo" tag="li">
                    <i>icon</i>
                    <span>Badge</span>
                </router-link>
                <router-link to="/VMapDemo" tag="li">
                    <i>icon</i>
                    <span>VMap</span>
                </router-link>
                <router-link to="/VInputDemo" tag="li">
                    <i>icon</i>
                    <span>VInput</span>
                </router-link>
                <router-link to="/VTextareaDemo" tag="li">
                    <i>icon</i>
                    <span>VTextarea</span>
                </router-link>
                <router-link to="/DrawCircleDemo" tag="li">
                    <i>icon</i>
                    <span>DrawCircle</span>
                </router-link>
                <router-link to="/TimeLineDemo" tag="li">
                    <i>icon</i>
                    <span>TimeLine</span>
                </router-link>
                <router-link to="/Pull2RefreshDemo" tag="li">
                    <i>icon</i>
                    <span>Pull2Refresh</span>
                </router-link>
                <router-link to="/FloatButtonWXDemo" tag="li">
                    <i>icon</i>
                    <span>FloatButton</span>
                </router-link>
                <router-link to="/SlideMenuDemo" tag="li">
                    <i>icon</i>
                    <span>SlideMenu</span>
                </router-link>
                <router-link to="/QuickIndexDemo" tag="li">
                    <i>icon</i>
                    <span>QucikIndex</span>
                </router-link>

            </ul>

        </section>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters,mapActions} from "vuex"
    export default {
        data() {
            return {
            }
        },
        mounted() {
            this.setRootFontSize();
            window.onresize = () => {
                this.setRootFontSize();
            }
            this.$refs.homeHook.scrollTop = this.scrollTop;
        },

        computed:mapGetters(["scrollTop"]),
        methods: {
            ...mapActions(["setScrollTop"]),
            setRootFontSize() {
                // 进行rem适配 设置根元素字体大小
                let width = document.documentElement.clientWidth || document.body.clientWidth;
                let htmlDom = document.getElementsByTagName("html")[0]
                htmlDom.style.fontSize = width / 10 + 'px';
            },
            scroll(e) {
                this.setScrollTop(e.target.scrollTop)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    /*单位转换*/
    px2rem($px)
        return ($px / 37.5) rem

    .home-container
        width 100%
        height 100%
        background: #f7f7f7
        padding 0
        header
            margin-top 0
            height px2rem(4 px4)
            line-height px2rem(44px)
            text-align center
            background: #393A3F
            color #fff
            div
                font-size px2rem(18px)
        .home-content-wrapper
            position fixed
            left 0
            top 0
            right 0
            bottom 0
            overflow auto
            -webkit-overflow-scrolling: touch;
            overflow-scrolling: touch;
            .home-tips
                margin 10px
                text-align center
            & > ul
                list-style none
                padding 0
                margin 0
                text-align center
                & > li
                    line-height px2rem(40px)
                    float left
                    width 33%
                    height px2rem(100px)
                    border-right 1px solid #e0e0e0
                    border-bottom 1px solid #e0e0e0
                    & > i
                        display block
                        width px2rem(40px)
                        height px2rem(40px)
                        border-radius 50%
                        background: #41b883
                        margin 0 auto
                        color #fff
                        margin-top px2rem(16px)
                    & > span
                        margin-top px2rem(0px)
                        color #000
                        font-size px2rem(14px)
                & > li:nth-child(3n+3)
                    border-right none
</style>