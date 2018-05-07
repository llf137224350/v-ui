<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'NumberKeyboard'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <div style="margin: 16px 0 0 16px">数字键盘 {{number}} / {{number2}} / 长度限制6位:{{number3}}</div>
        <button @click="showKeyboard">弹出键盘样式一</button>
        <button @click="showKeyboard2">弹出键盘样式2</button>
        <button @click="showKeyboard3">弹出长度限制键盘样式</button>
        <numberkeyboard ref="keyboard" :decimal="true" v-model="number"></numberkeyboard>
        <numberkeyboard ref="keyboard2" :decimal="false" v-model="number2"></numberkeyboard>
        <numberkeyboard ref="keyboard3" :decimal="false" v-model="number3" :length="6"></numberkeyboard>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/NumberKeyboardDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import numberkeyboard from "components/widget/NumberKeyboard/NumberKeyboard.vue"
    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                number: "",
                number2: "",
                number3: ""
            }
        },
        components: {
            appbar,
            numberkeyboard
        },
        methods: {
            handleLeft(){
                this.$router.go(-1)
            },
            showKeyboard(){
                this.$refs.keyboard.show();
            },
            showKeyboard2(){
                this.$refs.keyboard2.show();
            },
            showKeyboard3(){
                this.$refs.keyboard3.show();
            },
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    .search-bar-demo
        background: #f7f7f7
        .loading
            margin 16px
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