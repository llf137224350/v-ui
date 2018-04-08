<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="progressbar">
        <transition
            enter-active-class="animated fadeIn "
            leave-active-class="animated fadeOut "
        >
            <div class="progressbar-wrapper" v-show="isShow">
                <div class="loading_inner_loader">
                    <div class="h5ui-toast_loading_icon">
                        <div class="loading-icon-leaf loading-icon-leaf_0"></div>
                        <div class="loading-icon-leaf loading-icon-leaf_1"></div>
                        <div class="loading-icon-leaf loading-icon-leaf_2"></div>
                        <div class="loading-icon-leaf loading-icon-leaf_3"></div>
                        <div class="loading-icon-leaf loading-icon-leaf_4"></div>
                        <div class="loading-icon-leaf loading-icon-leaf_5"></div>
                        <div class="loading-icon-leaf loading-icon-leaf_6"></div>
                        <div class="loading-icon-leaf loading-icon-leaf_7"></div>
                        <div class="loading-icon-leaf loading-icon-leaf_8"></div>
                        <div class="loading-icon-leaf loading-icon-leaf_9"></div>
                        <div class="loading-icon-leaf loading-icon-leaf_10"></div>
                        <div class="loading-icon-leaf loading-icon-leaf_11"></div>
                    </div>
                </div>
                <div class="progressbar-text">{{text}}</div>
            </div>
        </transition>
    </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                text: "加载中...",
                isShow: false
            }
        },
        methods: {
            show(text) {
                this.text = text;
                this.isShow = true;
            },
            hide() {
                this.isShow = false;
            }
        }
    }
</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    ::-webkit-scrollbar
        width 0
        height 0

    @-webkit-keyframes fadeIn
        from
            opacity 0
        to
            opacity 1

    @keyframes fadeIn
        from
            opacity 0
        to
            opacity 1

    @keyframes fadeOut
        from
            opacity 1
        to
            opacity 0

    @-webkit-keyframes rotate
        100%
            -webkit-transform rotate(360deg)
            transform rotate(360deg)

    @keyframes rotate
        100%
            -webkit-transform: rotate(360deg)
            transform: rotate(360deg)

    @-webkit-keyframes dash
        0%
            stroke-dasharray: 1, 200
            stroke-dashoffset: 0

        50%
            stroke-dasharray: 89, 200
            stroke-dashoffset: -35px

        100%
            stroke-dasharray: 89, 200
            stroke-dashoffset: -124px

    @keyframes dash
        0%
            stroke-dasharray: 1, 200
            stroke-dashoffset: 0

        50%
            stroke-dasharray: 89, 200
            stroke-dashoffset: -35px

        100%
            stroke-dasharray: 89, 200
            stroke-dashoffset: -124px

    @-webkit-keyframes opacity-60-25-0-12
        0%,
        0.01%
            opacity .25
        0.02%
            opacity 1
        100%,
        60.01%
            opacity .25

    @-webkit-keyframes opacity-60-25-1-12
        0%,
        8.34333%
            opacity .25

        8.35333%
            opacity 1

        100%,
        68.3433%
            opacity .25

    @-webkit-keyframes opacity-60-25-2-12
        0%,
        16.6767%
            opacity .25

        16.6867%
            opacity 1

        100%,
        76.6767%
            opacity .25

    @-webkit-keyframes opacity-60-25-3-12
        0%,
        25.01%
            opacity .25

        25.02%
            opacity 1

        100%,
        85.01%
            opacity .25

    @-webkit-keyframes opacity-60-25-4-12
        0%,
        33.3433%
            opacity .25

        33.3533%
            opacity 1

        100%,
        93.3433%
            opacity .25

    @-webkit-keyframes opacity-60-25-5-12
        0%
            opacity .270958333333333

        41.6767%
            opacity .25

        41.6867%
            opacity 1

        1.67667%
            opacity .25

        100%
            opacity .270958333333333

    @-webkit-keyframes opacity-60-25-6-12
        0%
            opacity .375125

        50.01%
            opacity .25

        50.02%
            opacity 1

        10.01%
            opacity .25

        100%
            opacity .375125

    @-webkit-keyframes opacity-60-25-7-12
        0%
            opacity .479291666666667

        58.3433%
            opacity .25

        58.3533%
            opacity 1

        18.3433%
            opacity .25

        100%
            opacity .479291666666667

    @-webkit-keyframes opacity-60-25-8-12
        0%
            opacity .583458333333333

        66.6767%
            opacity .25

        66.6867%
            opacity 1

        26.6767%
            opacity .25

        100%
            opacity .583458333333333

    @-webkit-keyframes opacity-60-25-9-12
        0%
            opacity .687625

        75.01%
            opacity .25

        75.02%
            opacity 1

        35.01%
            opacity .25

        100%
            opacity .687625

    @-webkit-keyframes opacity-60-25-10-12
        0%
            opacity .791791666666667

        83.3433%
            opacity .25

        83.3533%
            opacity 1

        43.3433%
            opacity .25

        100%
            opacity .791791666666667

    @-webkit-keyframes opacity-60-25-11-12
        0%
            opacity .895958333333333

        91.6767%
            opacity .25

        91.6867%
            opacity 1

        51.6767%
            opacity .25

        100%
            opacity .895958333333333

    .progressbar
        .progressbar-wrapper
            position fixed
            left 50%
            top 50%
            width 100px
            height 84px
            margin-left -50px
            margin-top -42px
            z-index 2147483647
            border-radius 6px
            backdrop-filter blur(10px)
            background rgba(0, 0, 0, .88)
            text-align center
            &.animated
                -webkit-animation-duration 0.6s
                animation-duration 0.6s
                -webkit-animation-fill-mode both
                animation-fill-mode both
                &.fadeIn
                    -webkit-animation-name fadeIn
                        animation-name fadeIn
                &.fadeOut
                    -webkit-animation-name fadeOut
                    animation-name fadeOut
            .loading_inner_loader
                position relative
                width 28px
                margin 0 auto
                margin-top -20px
                &:before
                    content ''
                    display block
                    padding-top 100%
                .h5ui-toast_loading_icon
                    position relative
                    width 44px
                    height 44px
                    display block
                    transform scale(.86)
                    .loading-icon-leaf
                        position: absolute
                        opacity: .25
                        left: 15px
                        top: 21px
                    .loading-icon-leaf:before
                        position: absolute;
                        width: 8.14px
                        height: 3px;
                        background: #d1d1d5;
                        box-shadow: rgba(0, 0, 0, .0980392) 0 0 1px;
                        border-radius: 1px;
                        transform-origin: left 50% 0;
                        content: "";
                    .loading-icon-leaf_0
                        -webkit-animation opacity-60-25-0-12 1.25s linear infinite;
                        animation opacity-60-25-0-12 1.25s linear infinite
                    .loading-icon-leaf_0:before
                        -webkit-transform rotate(0) translate(7.92px, 0);
                        transform rotate(0) translate(7.92px, 0)
                    .loading-icon-leaf_1
                        -webkit-animation opacity-60-25-1-12 1.25s linear infinite;
                        animation opacity-60-25-1-12 1.25s linear infinite
                    .loading-icon-leaf_1:before
                        -webkit-transform rotate(30deg) translate(7.92px, 0);
                        transform rotate(30deg) translate(7.92px, 0)
                    .loading-icon-leaf_2
                        -webkit-animation opacity-60-25-2-12 1.25s linear infinite;
                        animation opacity-60-25-2-12 1.25s linear infinite
                    .loading-icon-leaf_2:before
                        -webkit-transform rotate(60deg) translate(7.92px, 0);
                        transform rotate(60deg) translate(7.92px, 0)
                    .loading-icon-leaf_3
                        -webkit-animation opacity-60-25-3-12 1.25s linear infinite;
                        animation opacity-60-25-3-12 1.25s linear infinite
                    .loading-icon-leaf_3:before
                        -webkit-transform rotate(90deg) translate(7.92px, 0);
                        transform rotate(90deg) translate(7.92px, 0)
                    .loading-icon-leaf_4
                        -webkit-animation opacity-60-25-4-12 1.25s linear infinite;
                        animation opacity-60-25-4-12 1.25s linear infinite
                    .loading-icon-leaf_4:before
                        -webkit-transform rotate(120deg) translate(7.92px, 0);
                        transform rotate(120deg) translate(7.92px, 0)
                    .loading-icon-leaf_5
                        -webkit-animation opacity-60-25-5-12 1.25s linear infinite;
                        animation opacity-60-25-5-12 1.25s linear infinite
                    .loading-icon-leaf_5:before
                        -webkit-transform rotate(150deg) translate(7.92px, 0);
                        transform rotate(150deg) translate(7.92px, 0)
                    .loading-icon-leaf_6
                        -webkit-animation opacity-60-25-6-12 1.25s linear infinite;
                        animation opacity-60-25-6-12 1.25s linear infinite
                    .loading-icon-leaf_6:before
                        -webkit-transform rotate(180deg) translate(7.92px, 0);
                        transform rotate(180deg) translate(7.92px, 0)
                    .loading-icon-leaf_7
                        -webkit-animation opacity-60-25-7-12 1.25s linear infinite;
                        animation opacity-60-25-7-12 1.25s linear infinite
                    .loading-icon-leaf_7:before
                        -webkit-transform rotate(210deg) translate(7.92px, 0);
                        transform rotate(210deg) translate(7.92px, 0)
                    .loading-icon-leaf_8
                        -webkit-animation opacity-60-25-8-12 1.25s linear infinite;
                        animation opacity-60-25-8-12 1.25s linear infinite
                    .loading-icon-leaf_8:before
                        -webkit-transform rotate(240deg) translate(7.92px, 0);
                        transform rotate(240deg) translate(7.92px, 0)
                    .loading-icon-leaf_9
                        -webkit-animation opacity-60-25-9-12 1.25s linear infinite;
                        animation opacity-60-25-9-12 1.25s linear infinite
                    .loading-icon-leaf_9:before
                        -webkit-transform rotate(270deg) translate(7.92px, 0);
                        transform rotate(270deg) translate(7.92px, 0)
                    .loading-icon-leaf_10
                        -webkit-animation opacity-60-25-10-12 1.25s linear infinite;
                        animation opacity-60-25-10-12 1.25s linear infinite
                    .loading-icon-leaf_10:before
                        -webkit-transform rotate(300deg) translate(7.92px, 0);
                        transform rotate(300deg) translate(7.92px, 0)
                    .loading-icon-leaf_11
                        -webkit-animation opacity-60-25-11-12 1.25s linear infinite;
                        animation opacity-60-25-11-12 1.25s linear infinite
                    .loading-icon-leaf_11:before
                        -webkit-transform rotate(330deg) translate(7.92px, 0);
                        transform rotate(330deg) translate(7.92px, 0)

        .progressbar-text
            position absolute
            left 0
            bottom 13px
            margin-top 8px
            line-height 14px
            width 100%
            font-size 13px
            color #fff
</style>
