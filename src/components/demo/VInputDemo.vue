<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'VInput'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
       <div style="padding:  16px;background: #fff;">
           <div >
               <h1>vinput-text {{username}}</h1>
               <vinput :label="'账户'" v-model="username" :placeholder="'请输入账户'"></vinput>
               <vinput :label="'账户(动画)'" v-model="username" :placeholder="'请输入账户'" :anim="true"></vinput>
           </div>

           <div style="margin-top: 20px;">
               <h1>vinput-password {{password}}</h1>
               <vinput :label="'密码'" v-model="password" :placeholder="'请输入密码'" :type="'password'"></vinput>
               <vinput :label="'密码(动画)'" v-model="password" :placeholder="'请输入密码'" :type="'password'"
                       :anim="true"></vinput>
           </div>

           <div style="margin-top: 20px;">
               <h1>vinput-number {{phone}}</h1>
               <vinput :label="'电话'" v-model="phone" :placeholder="'请输入手机号码'" :type="'number'"></vinput>
               <vinput :label="'电话(动画)'" v-model="phone" :placeholder="'请输入手机号码'" :type="'number'"
                       :anim="true"></vinput>
           </div>
       </div>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/VInputDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import vinput from "components/widget/vInput/vInput.vue"

    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                username: "",
                password: "",
                phone: "",
            }
        },
        components: {
            appbar,
            vinput
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