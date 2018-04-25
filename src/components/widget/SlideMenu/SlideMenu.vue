<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="slide-menu"
         @touchstart="touchstart"
         @touchmove="touchmove"
         @touchend="touchend"
         @touchcancel="touchend"
    >
        <div class="slide-menu-left">
            <slot name="menu-panel"></slot>
        </div>
        <div class="slide-menu-rigth" ref="slideMenuRight">
            <slot name="menu-content-panel"></slot>
            <transition
                enter-active-class="animated-slide-menu fadeIn-slide-menu "
                leave-active-class="animated-slide-menu fadeOut-slide-menu "
            >
                <div class="slide-menu-mask" v-show="showMask" @click="closeMenu"></div>
            </transition>
        </div>
    </div>

</template>

<!--script-->
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                isOpen: false,
                startX: 0,
                startY: 0,
                moveX: 0,
                moveY: 0,
                menuWidth: 0,
                slideMenuRight: undefined,
                showMask: false
            }
        },
        props: {
            touchable: {
                type: Boolean,
                default: true
            }
        },
        mounted() {
            if (this.touchable) {
                this.slideMenuRight = this.$refs.slideMenuRight;
                this.menuWidth = this.slideMenuRight.getBoundingClientRect().width * 0.8;
            }
        },
        methods: {
            openMenu() {
                this.showMask = true;
                this.slideMenuRight.style.transition = "all .4s";
                this.slideMenuRight.style.transform = `translate3d(${this.menuWidth}px,0,0)`;
                this.isOpen = true;

            },
            closeMenu() {
                this.showMask = false;
                this.slideMenuRight.style.transition = "all .4s";
                this.slideMenuRight.style.transform = `translate3d(0,0,0)`;
                this.isOpen = false;
            },
            touchstart(e) {
                if (this.touchable) {
                    this.startX = e.touches[0].clientX;
                    this.startY = e.touches[0].clientY;
                }
            },
            touchmove(e) {
                if (this.touchable) {
                    this.moveX = e.touches[0].clientX - this.startX;
                    this.moveY = e.touches[0].clientY - this.startY;
                    if (Math.abs(this.moveX) > Math.abs(this.moveY) && Math.abs(this.moveX) > 10) {
                        // 向右滑动
                        if (this.moveX >= 0 && this.moveX <= this.menuWidth && !this.isOpen) {
                            this.slideMenuRight.style.transition = "all 0s";
                            this.slideMenuRight.style.transform = `translate3d(${this.moveX}px,0,0)`;
                        } else if (this.moveX <= 0 && this.isOpen) {// 向右滑动
                            this.slideMenuRight.style.transition = "all 0s";
                            this.slideMenuRight.style.transform = `translate3d(${(this.menuWidth + this.moveX) > 0 ? (this.menuWidth + this.moveX) : 0}px,0,0)`;
                        }
                    }
                }
            },
            touchend(e) {
                if (this.touchable) {
                    if (Math.abs(this.moveX) > Math.abs(this.moveY)) {
                        if (Math.abs(this.moveX) >= this.menuWidth / 4) { // 滑动超过三分之一
                            if (this.moveX >= 0) {
                                this.openMenu();
                            } else {
                                this.closeMenu();
                            }
                        } else {
                            if (this.moveX >= 0) {
                                this.closeMenu();
                            } else {
                                this.openMenu();
                            }
                        }
                    }
                    this.startX = 0;
                    this.startY = 0;
                    this.moveX = 0;
                    this.moveY = 0;
                }
            }
        }
    }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    .slide-menu
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        background: #E8E8EA
        .slide-menu-left
            position absolute
            left 0
            top 0
            bottom 0
            width 80%
            overflow hidden
        .slide-menu-rigth
            position absolute
            left 0
            right 0
            top 0
            bottom 0
            background: #fff
            .slide-menu-mask
                position absolute
                top 0
                left 0
                right 0
                bottom 0
                background: rgba(0,0,0,.1)
                z-index 2147483646

    .slide-menu
        .animated-slide-menu
            -webkit-animation-duration 0.4s
            animation-duration 0.4s
            -webkit-animation-fill-mode both
            animation-fill-mode both

        .fadeOut-slide-menu
            -webkit-animation-name fadeOut-slide-menu
            animation-name fadeOut-slide-menu

        .fadeIn-slide-menu
            -webkit-animation-name fadeIn-slide-menu
            animation-name fadeIn-slide-menu

    @-webkit-keyframes fadeIn-slide-menu
        from
            opacity 0
        to
            opacity 1

    @keyframes fadeIn-slide-menu
        from
            opacity 0
        to
            opacity 1

    @-webkit-keyframes fadeOut-slide-menu
        from
            opacity 1
        to
            opacity 0

    @keyframes fadeOut-slide-menu
        from
            opacity 1
        to
            opacity 0
</style>
