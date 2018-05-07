<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'SearchBar'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <SearchBar v-model="searchBarValue" class="search"></SearchBar>
        <p>{{searchBarValue}}</p>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                SearchBar为封装好的搜索框，支持双向绑定的形式，即v-model="xxx"。xxx为data中定义的属性。其中input type=search，所以可以相应键盘上的搜索按键。
                SearchBar支持自定义取消字体颜色，可通过属性的方式传入color。
            </p>
            <p>注:点击取消的时候会清空输入的值</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import SearchBar from "components/widget/SearchBar/SearchBar.vue"
    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                searchBarValue:""
            }
        },
        components: {
            appbar,
            SearchBar
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
        .search
            margin-top 10px
        .tips-container
            padding 16px
            & > div
                font-size 16px
                font-weight bold
                line-height 36px
            & > p
                line-height 21px

</style>