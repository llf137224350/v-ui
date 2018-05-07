<template>
    <div id="demo">
        <!--<transition :name="transitionName">-->
            <!--<keep-alive >-->
                <!--<router-view v-if="$route.meta.keepAlive" class="router-view"></router-view>-->
            <!--</keep-alive>-->
        <!--</transition>-->
        <transition :name="transitionName">
                <router-view  class="router-view"></router-view>
        </transition>
    </div>

</template>

<script>
    import   "common/css/reset.css"
    export default {
        created() {
            this.$router.isBack = false;
            // 新加载页面和返回都会触犯这个事件  新加载触发一次，返回触发两次，且popstate执行在watch之前，所有可以有效的解决
            // 物理返回键的问题
            window.addEventListener("popstate", (e) => {
                if (e.timeStamp - this.preTimeStamp < 15) {
                    this.$router.isBack = true;
                }
                this.preTimeStamp = e.timeStamp;
            });
        },
        data() {
            return {
                transitionName: "vux-pop-in",
                preTimeStamp: 0
            }
        },

        watch: {
            $route(to, from) {
                let back = this.$router.isBack;
                if (to.name === "home") {
                    back = true;
                }

                if (back) {
                    this.transitionName = "vux-pop-out";
                } else {
                    this.transitionName = "vux-pop-in";
                }
                this.$router.isBack = false;
            }
        }
    }
</script>

<style>
    body {
        margin: 0;
    }

    #demo {
        font-size: 14px;
    }

    .router-view {
        will-change: transform;
        height: 100%;
        position: absolute;
        left: 0;
        width: 100%;
        -webkit-animation-duration: .3s;
        animation-duration: .3s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
    }

    .vux-pop-in-enter-active, .vux-pop-in-leave-active {
        perspective: 1000px;
        -webkit-animation-name: popInRight;;
        animation-name: popInRight;
    }

    .vux-pop-in-enter, .vux-pop-in-leave-active {
        -webkit-animation-name: popOutLeft;
        animation-name: popOutLeft;
    }

    .vux-pop-out-enter-active, .vux-pop-out-leave-active {
        -webkit-animation-name: popInLeft;
        animation-name: popInLeft;
    }

    .vux-pop-out-enter, .vux-pop-out-leave-active {

        -webkit-animation-name: popOutRight;
        animation-name: popOutRight;
        visibility: hidden;
    }

    @keyframes popInLeft {
        from {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);

        }
        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes popOutLeft {
        from {
            /*-webkit-transform: translate3d(0, 0, 0);*/
            /*transform: translate3d(0, 0, 0);*/
            visibility: hidden;
        }
        to {
            /*-webkit-transform: translate3d(-100%, 0, 0);*/
            /*transform: translate3d(-100%, 0, 0);*/
            visibility: hidden;
        }
    }

    @keyframes popInRight {
        from {

            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
            /*防止上一个页面闪烁*/
            visibility: hidden;
        }
        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);

        }
    }

    @keyframes popOutRight {
        from {

            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);

        }
        to {
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }
    }
</style>
