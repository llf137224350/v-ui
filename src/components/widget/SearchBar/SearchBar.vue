<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="search-bar">
        <div class="search-input-container"
             :style="{width:`${width}%`}"
        >
            <i class="search-bar-icon"></i><input type="search" placeholder="搜索"
                                                  @click="focus" v-model="value"
                                                  @blur="blur"
        >
        </div>
        <div class="search-bar-btn" @click="cancel"
             :style="{color:color}"
        >取消
        </div>
    </div>

</template>

<!--script-->
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                value: this.msg,
                width: 100
            }
        },
        model: {    // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
            prop: 'msg',
            event: 'msgChanged'
        },
        props: {
            msg: "",
            color: {
                type: String,
                default: "#41B883"
            }
        },
        mounted() {
            // 进行rem适配 设置根元素字体大小
            this.setRootFontSize();
            window.onresize = ()=>{
                this.setRootFontSize();
            }
        },
        methods: {
            focus() {
                this.width = 86;
            },
            blur() {
                if (!this.value) {
                    this.cancel();
                }
            },
            cancel() {
                this.value = "";
                this.width = 100;
            },
            //设置根元素字体大小
            setRootFontSize(){
                // 进行rem适配 设置根元素字体大小
                let width = document.documentElement.clientWidth || document.body.clientWidth;
                let htmlDom = document.getElementsByTagName("html")[0]
                htmlDom.style.fontSize = width / 10 + 'px';
            }
        },
        watch: {
            value() {
                this.$emit("msgChanged", this.value);
            }
        }
    }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    /*单位转换*/
    px2rem($px)
        return ($px / 37.5) rem

    .search-bar
        height px2rem(44px)
        line-height px2rem(44px)
        background: #fff
        overflow hidden
        white-space nowrap
        padding px2rem(6px)
        box-sizing border-box
        .search-input-container
            float left
            width 100%
            background: #E8E8EA
            height px2rem(32px)
            border-radius px2rem(4px)
            display flex
            transition all .3s

            .search-bar-icon
                flex 0 0 px2rem(18px)
                width px2rem(18px)
                height px2rem(18px)
                background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFFklEQVR4Xu2a3XHbRhCAdwGNlbcoFUSqwEoFljugKoj0EpHjAUxWEKkCysB4SPtFSgWhKwhVgcUKTHdgv9kjkJtZ/EgguPg53IEyYd0bySPu9sPe3v4h/OQDf3L54QnAkwY0QMDz3r9ApCMi2keEfV6CCA4RYQ4AX6Ilccqf7+6WN4NBj79/lGHsCPj+6IgI/wSADiLsqUhDBHNEuAwC+rBpGNoAWHAA/BsAjlSEzptLBNeLBV1sCkRtAMPhaH9nB69MCZ4GQgRfEPHScc4uTEAtekYtAL7/rkNEVxVU/SsR3YYnHvGWiO0B7SEiH5HnFYS7DQI6blIblAF43niICP2Czc8AaGJZ9uTVq79C4fMGgwRYdgCwAwC/SvNYG2zbeln2rAowxSlKADxvzG/9RN4o3SDCueP0pnU24/ujcwBksGsgmoRQGYDvjy8B4LUgHKt533V713UET/9nOLza29n5fi6t0xSESgA8b3SCGBq87JhZlnViWj3z1mMIi8XuwWBwGvsSusih3BVma2/b+DFr8IjoZrH4pWNyM2lx3r59f7hcLvk4ZY/ExHG6x/qiR08o1QDfH/8nXHWzINg9akr4RLjYx+D1VwYRnZo4cqUAIitN/2bW/xoEdNjk1ZRez/Pe9RFpmP7O5FEo1ADPG39KfPmHDeCx45xNTKlgled43miKiC9WIeDAdc/YMGuNXACS+vG5d92eEZdXZdex1/kpowVz1+0eqDxHmlsE4BogDG5Sg17Wved1N+r7I2E/+tpYAGBMmU3PHKd7qCtI3f9LWgBA/zhOT3TMqq4jApDV38yZq7oxaZ7vj9m1vo8hOIzWPQZ5ANgt5RD3fgQBHWzK8udBkrxR3X2JAASr+6jqnwCR/QI9u1QJwGNZ/6wm5NiBC8fpcfxQa+QcgVUDSAQfXLfLIeujD9/PGmdqHgCA3iImqT0B2JAGcLh5H4X9KDaANWkjGpC9BX4UAHGI/HHVJdbzT/L8gBW304TDYcIOyNFpI9fgeghqWdYfpjM/qlCkeCAIdn/TyUuIGiCpGgC8cZxuUTZYVR7l+UJ4ru2gFQVDGUOo73crS5z6Q052SPulFAFYywKbTEWpwpBScyaOZS6AJpMQ6sKH9ceV3KCpm6kkJbaeitq0V8i1Atv+zlnpsMz+MPSsf/KcQgA5xpCr/RvLDEnVKFNvnyFUSYsLtqDZel3ydqSMcPSbuRdQCiAqV327BcDfVz0wmNu2ddyUb+D7Yy7DCVlfs4FZKQAWOq9Kw/l5ABqYKlI8vHm5CNtEWF4JAG+soD7I/T/Xi8XuQMcjiwKd0NpzEWQt+WqyGJLW5MoAKkAIuzqC4NkbVRCxhrHghTUHBu263VPVa7RovhKA6C2F5TIuhYsNDfFiXNScWJZ1I9mI6Gq7ex41R4RNVZkrLn/LpiEoA+CtxU4Sl8eqtLkk0oQtMhXaatLSz6Q1TEKoBSDZYVFXh6aacptNn6tQckUo7Ds0chy0AETaEF6T/bz2FjUQ9JkIzrO3SpMQtAEkAkbn+lvY8IQYGrMiG5F2aT8DwNSy7Msin6IpCMYAZN901Dkanvm4VRbjVllK2lumQQBzlWpTExAaA6Cm+tVnm4awdQBih0koldczjFsJwCSErQVgCsJWAzABYesB6EJoBQAdCK0BUBdCqwDUgdA6AEUQpDpCKwHkQ1jvK2wtAAGC2ODdagAMIUq30X4QPJtKqbrWAygLs54AlBFq++//A28N9V/Ns+2xAAAAAElFTkSuQmCC")
                -webkit-background-size: contain
                background-size: contain
                margin px2rem(7px)
            & > input
                display block
                width 100%
                outline none
                margin-top px2rem(7px)
                height px2rem(18px)
                background: rgba(0, 0, 0, 0)
                padding-right px2rem(7px)
                font-size px2rem(14px)
                border none
                &::-webkit-search-cancel-button
                    display: none
                &::-webkit-input-placeholder
                    color: #939398;
        .search-bar-btn
            display inline-block
            height px2rem(32px)
            line-height px2rem(32px)
            padding 0 px2rem(16px)
            font-size px2rem(16px)
            vertical-align top

</style>
