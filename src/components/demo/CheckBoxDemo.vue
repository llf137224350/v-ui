<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'CheckBox'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
       <div style="margin: 16px">
           <h2 style="margin: 16px 0 8px 0">爱好</h2>
           <CheckBox :name="'hobby'" :label="'读书'" :value="'读书'" v-model="checkValue"></CheckBox>
           <CheckBox :name="'hobby'" :label="'撸代码'" :value="'撸代码'" v-model="checkValue"></CheckBox>
           <CheckBox :name="'hobby'" :label="'打球'" :value="'打球'" v-model="checkValue"></CheckBox>
           <CheckBox :name="'hobby'" :label="'睡觉'" :value="'睡觉'" v-model="checkValue"></CheckBox>
           <CheckBox :name="'hobby'" :label="'玩游戏'" :value="'玩游戏'" v-model="checkValue"></CheckBox>
           <br/>
           <br/>
           选择了：{{checkValue.split(',')}}
           <br/>
           <h2 style="margin: 16px 0 8px 0">喜欢的游戏</h2>
           <CheckBox :name="'hobby'" :label="'荒野行动'" :value="'荒野行动'" v-model="checkboxGamesValue"></CheckBox>
           <CheckBox :name="'hobby'" :label="'绝地求生'" :value="'绝地求生'" v-model="checkboxGamesValue"></CheckBox>
           <CheckBox :name="'hobby'" :label="'王者荣耀'" :value="'王者荣耀'" v-model="checkboxGamesValue"></CheckBox>
           <br/>
           <br/>
           选择了：{{checkboxGamesValue.split(',')}}
       </div>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/CheckBoxDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import CheckBox from "components/widget/CheckBox/CheckBox.vue"

    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                checkValue: "撸代码,玩游戏,睡觉",
                checkboxGamesValue: "绝地求生,荒野行动"
            }
        },
        components: {
            appbar,
            CheckBox
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