<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="icontoast">
        <transition name="fade">
            <div v-show="isShow" class="icontoast-wrapper">
                <i class="icon" :class="state"></i>
                <div class="icon-toast-text">{{text}}</div>
            </div>
        </transition>
    </div>

</template>

<!--script-->
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                text: "",
                state: "succeed",// failed
                isShow: false,
                timer: undefined,
            }

        },
        props: {
            displayDuration: {//吐司显示时长，默认2秒
                type: Number,
                default: 2400
            }
        },
        mounted(){
            // 进行rem适配 设置根元素字体大小
            this.setRootFontSize();
            window.onresize = ()=>{
                this.setRootFontSize();
            }
        },
        methods: {
            // 显示土司
            show(text, state) {
                this.text = text;
                if (state) {
                    this.state = state;
                }
                // 清除计时器
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                this.isShow = true;
                let that = this;
                //displayDuration毫秒后消失
                this.timer = setTimeout(function () {
                    that.isShow = false;
                }, this.displayDuration);
            },
            //设置根元素字体大小
            setRootFontSize(){
                // 进行rem适配 设置根元素字体大小
                let width = document.documentElement.clientWidth || document.body.clientWidth;
                let htmlDom = document.getElementsByTagName("html")[0]
                htmlDom.style.fontSize = width / 10 + 'px';
            }
        }
    }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    /*单位转换*/
    px2rem($px)
        return ($px / 37.5) rem

    .icontoast
        .icontoast-wrapper
            position fixed
            min-width px2rem(100px)
            height px2rem(88px)
            left 50%
            top 50%
            transform translate(-50%, -50%);
            margin auto
            backdrop-filter blur(10px)
            background rgba(0, 0, 0, .8)
            border-radius px2rem(6px)
            transition all .6s
            z-index 2147483647
            &.fade-enter-active, &.fade-leave-active
                opacity 1
            &.fade-enter, &.fade-leave-active
                opacity 0
            .icon
                display block
                width px2rem(38px)
                height px2rem(38px)
                margin px2rem(12px) auto
                &.succeed
                    background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEe0lEQVR4Xu1bgVEVMRDdrUCtQKhAqECtQKxAqECoQKxArECoQKxAqUCoQKhArWCdd5P8uUtyySaXy92Xn5k/AuYu+95uXjabfKZH3viR46cdAbsIaMyAiBwQ0RMz7CsiuiWiP+b3O2a2PzexbNYpICJ7RPSSiAAUwPHRtB9E1H2Y+UbzQGmfWQgQkXdEdGQ+pbbZ5xAR10R0xcwgpWqrRoCIPCUiAD8lInh+jnZPROfMfFXr5VUIEBF4+9OMwF280I2zGhExiQDj9S+VQr3EqRfMfFbyoH2mmACj5gCvFbYpdsaeRTScMDP+zW5FBBjw34kI834NDUL5uoSEbAJE5NjM97WA768Wb3N1IYuAFXrejb7sSFATsAXg+5Ggng4qAozaY84vLXhavYEggoRkWq0l4IKI3mtHX0m/S2Y+SdmSJEBEkMfD+9vYEAXR9FlDwM8tCn3XSffMvB/zXJQAs+Qh2dnmhiTpcgxAioBfDfP7uUiORsEoAVs+910yR6MgRgDCBtvb/6F9Y2bsWL0WI+D3inL9vuF3RHSMvF9EsN6/UHroWSgvCBJg9vdflS9u2Q3lsSMLRERyVijsE1BZGrQxAtaY+KAkho1Y10QEq9Pmd4UXPjMzqlUqApA8oJi5ljYQsQLwwHHLzIdaAmQlyP+akN9kc4XgOzjM7EW89wez8YEALt02Yjch7F0Mh27RJETAGnJ/V+xQfIEow7YpzdsbrJEAV+wAvtZW3EuIQgRAKVHiXqK5YlcTPPB8ZObzPrAQAejwoRA9Diyw1uId2gQFQ4XErjZ4NQFYW4t2gFZljZAil9Ck0iGxmwO8moApIrjPzDi+6ppiOz0QO/PMXODxei8brC2CXi3OFFMxLZ4702ogdg3AY4j0KmAMmZIIhUiAV0GCzS49NW5UeB1EaJcchcRORBDGrsdydDFYlTU1BhQoNtOkkec721WZoDEI3nqTgzjQV1WabuR5mHfDzF4iNRYBtXKBKAkNwQdXgNgUwAUH1ANrtLHpMKfah+z29gGjBJhpkFNtSRE1IKGx52HbAzMHb63ESmK1poElpyPBlNmwsWl5zOalwNaoGAEIUai1vdKW8rLm/3FW1/pYHWn23tg5YepcYMq+QENIiz5ewtUfNEXAHFHQArQdA94/cPMONQFGDGtrQUsCcJMMm7LRljwcnWFFaEUArt0mhVZLAJYQqHhNQZyTiGToJ1cB17oVH5aEiAwegoQ6qiLAPqjY38/pVe27o8fh7kuyCDB6UFwx0iKY0C8LPMbJJmDFJGSDLybAkIDjZhyhLy2MXkE1J4KKIqCnCVgdUDvIqQDn2Jfq69UUUw9M1oDQACKCZAlpc6togNdPY3d/tERMioD+IObrMSBBUwrX2uf2A3Bkdrgmn7wEqRmkGgG9aYH9AyICq8WUumLffoQ69Oa6FvDsREjDZiB5QioKsUQtLue+wYP90pT54tSgiFpiy9gz1SMgZpyZJhBO++l37+4ApG521gQ/aRmsbchS72saAUuBjI27I2CNXmlp0z8UN7xQ47Ic6wAAAABJRU5ErkJggg==") no-repeat center
                    background-size: contain
                &.failed
                    background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE4ElEQVR4Xu2b3XHbRhDH/wtmYoIvsSsIXUGkCkxVYLqCHJgCLFWQpALRBYS8VGC5AlMViKlAUAUxXwg7E2EzB4EODR5wd+AdkImlGT1xebf7u/24jyXhK/+jr9x+PAJ49IAOCPwlxEkOvMgjjIlxAmAMwviLqRkpgJQJ6yhHGgHX30q5Dq1esBD4lCQv74kFGBMiPG1jCDM+gLAaMMkny+W7NmOYvuMVAAvx9GOE18w4b2t0ncIKBhHmwxxvSMoPJsNsP/cCIKThVUN8gzgawKefxDTPcXkQ07ZL0FaOkUYRLp78Jq/aDqG+dxSA7UxcEnB+jALHfpeB+WghL9qO0wqAcvmM8J6oyOi9/zFjHTPO2uQGZwCqpN0T3nbu8ibMjHTAeOVaOp0AKOP/flj5VmVt3wZmvCNCEb/MmBLhpclG0+cqQX7DOHOBYA2gyPSEGx8rT8DFcCHn+wZ9nIlzBi5NRho/Z6RDxqltOFgD2CbixkfMM/DHaCG1uWM7E2sCfjAaaRBQOWG0lKc241gB2CZiToTXNgNayPwaL+QvOjmf8zDjzWgpjRXKCKCo84y3FobZitQCyGZCgfnZdiCjXI6zWMpVk1wjAJ9xv6dEdwAs8kEjAO8rUqR8/B4vpagJgSsf1aAydi3wxp1gudm59VHyvlCIcR0v5UQHIEvECoQXRtd2EFClMWY8r6sKtR4QZPUfPKBTACWrWi+oBbBNxJ/eV78nAMoLRkv5TOc4WgABMv+/c/fjAYgIr3QnRy2AbSJCJKPPEOKF1M6bzQQ7hLebaE3yrQMQxv1LlfsAUBcGBwCK016EGze8btJ9AFAaDnKcVg9KBwCCZf89Rn0B0B3CDgEkQoLwo9uaukkPczyr1uVMiDEi3LqN5CatOx/oAHjfjByoqdmjZ0JMEOG9m0mO0poKpANw6+PM36haTwB0x2RdDghXinZUegKgpq/mn0cAVVcNuhkpJwt6JWZIC/8NDwAODiddlF/bEFCvtN875ldX8V4A6O4j+ymDfXmAZRkMvhHSbUi6CAGrjZC3+/mmoNCsRIjboKoKVlvhLg5DuluhLgBYHYYUtWwmVAPCd66ZzVqekcZL+XxfPktE6B3oJl7Igye9Xi5ESsNlvJBJCXwJQHtTbA3VJOhyIRL0SsykaKDPna7EOgmDQIbWDKt1fyXb/bV4t4bvZnO/Fi8bn9SuMGQyvC409PwYUmG8GeYYOz+MlGHg97Gy1Ew1R8QMsVOqfIO8CgSi3dOY0rX0AtWt6fNscDfMcVJdkUAep51r30O6fx5veBzNfN9HHvs8viPls3EBmoPQbh6f5wFvDRKfIXTQvtJFG47mfGBXl3zmg8A3Qsa4d8oB+8LlQUm1nBxdGhm4IqaHNjniKQFTu6VolNoMckyCtMntpi0hKMV9VgYPtuNukGPqYnzjTrBJo6J7JMLKR0ubD8vVVVecY2LbG9g6BKrKeq4OrVjYZvu6wY37AJNW5clRdX12HRJ3EeG813b5HZyyQqimRPV/dII0QN8AxS9H5m1cvnUZNHnC3tY5FAivhu/sOToE6sCo0LjPIYigWuLaesWGGatBBHmsqwfLATaeUfxsLsIkZ4wJOClfn6s54w6MlIF1REijHCvXkmajS9AQaKNA398JFgJ9G2Y7/yMAW1L/V7l/AHFcfV9PSPprAAAAAElFTkSuQmCC") no-repeat center
                    background-size: contain
            .icon-toast-text
                display block
                width 100%
                text-align center
                line-height px2rem(14px)
                font-size px2rem(14px)
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                box-sizing border-box
                color #fff
</style>
