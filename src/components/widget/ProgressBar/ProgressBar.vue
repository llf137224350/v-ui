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
          <loading class="loading"></loading>
        </div>
        <div class="progressbar-text">{{text}}</div>
      </div>
    </transition>
  </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
  import loading from "../loading/loading"
  export default {
    data() {
      return {
        text: "加载中...",
        isShow: false
      }
    },
    components:{
      loading,
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
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
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
          text-align center
          margin-top 5px
          .loading
            display inline-block
            transform scale(1.3)
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
