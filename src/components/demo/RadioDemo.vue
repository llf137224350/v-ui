<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'Radio'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
       <div style="margin: 16px">
           <h2 style="margin: 16px 0 8px 0">品牌</h2>
           <radio :name="'name'" :value="'Apple'" :label="'Apple'" v-model="radioCheckedValue"></radio>
           <radio :name="'name'" :value="'IBM'" :label="'IBM'" v-model="radioCheckedValue"></radio>
           <radio :name="'name'" :value="'Microsoft'" :label="'Microsoft'" v-model="radioCheckedValue"></radio>
           <radio :name="'name'" :value="'Google'" :label="'Google'" v-model="radioCheckedValue"></radio>
           <br/>
           <br/>
           选择了：{{radioCheckedValue}}
           <h2 style="margin: 16px 0 8px 0">游戏</h2>
           <radio :name="'game'" :value="'魔兽'" :label="'魔兽'" v-model="gameCheckedValue"></radio>
           <radio :name="'game'" :value="'英雄联盟'" :label="'英雄联盟'" v-model="gameCheckedValue"></radio>
           <radio :name="'game'" :value="'王者荣耀'" :label="'王者荣耀'" v-model="gameCheckedValue"></radio>
           <radio :name="'game'" :value="'消灭星星'" :label="'消灭星星'"
                  v-model="gameCheckedValue"></radio>
           <br/>
           <br/>
           选择了：{{gameCheckedValue}}
       </div>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/RadioDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import radio from "components/widget/Radio/Radio.vue"

    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                radioCheckedValue: "IBM",
                gameCheckedValue: "王者荣耀",
            }
        },
        components: {
            appbar,
            radio
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