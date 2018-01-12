<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的snackbar 用于提示信息，position===0时顶部弹出（默认），
   1时底部，建议===0时position不要等于topDirection。反之 ===1时不要使用downDirection
   版本：V 0.0.1
  -->

<!--html-->
<template>
  <div class="snackbar">
    <transition :name="directionData[direction]"
                v-on:after-leave="afterLeave"
    >
      <div class="snackbar-wrapper" v-show="isShow" :class="{bottom:position ===1}">
        <div class="content border-1px">{{content}}</div>
        <div class="btn" @click="hide">{{btnText}}</div>
      </div>
    </transition>
  </div>
</template>
<!--script-->
<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        directionData: ["top-direction", "down-direction", "left-direction", "right-direction"],// 动画方向
        isShow: false, // 是否显示
        content: "", // 显示的文本
        timer: undefined, // 计时器
        callBack: undefined, // 回调
        isClick: false
      }
    },
    props: {
      position: {
        type: Number,
        default: 0 // 出现位置  0  位于顶部，1位于底部
      },
      direction: {
        type: Number,
        default: 0 //动画进入和推出方向  0 ： 从上进入 1：从下边进入 2： 从左边进入 3： 从右边进入
      },
      btnText: {
        type: String,
        default: "确定"
      },
      displayDuration: {//显示时长，默认5秒
        type: Number,
        default: 5000
      }
    },
    methods: {
      //content:要显示的文本，callBack:点击确定的时候回调
      show(content, callBack){
        if (this.isShow)//显示的时候不做处理
          return;
        // 回调
        this.isClick = false;
        this.callBack = callBack;
        this.content = content;
        //移除定时器
        if (this.timer) {
          clearTimeout(this.timer)
        }
        let that = this;
        // 显示
        that.isShow = true;
        // 5 秒后移除
        this.timer = setTimeout(function () {
          that.isShow = false;
        }, this.displayDuration);
      },
      // 点击确定按钮，动画消失，如果有回调，消失后执行
      hide(){
        this.isShow = false;
        //标示是否为点击关闭
        this.isClick = true;
      },
      //隐藏动画执行完成之后回调
      afterLeave(){
        if (this.callBack && this.isClick)
          this.callBack();
      }
    }
  }
</script>
<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  ::-webkit-scrollbar
    width 0
    height 0

  @media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5)
    .border-1px
      &::after
        -webkit-transform scaleY(0.7)
        transform scaleY(0.7)

  @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2)
    .border-1px
      &::after
        -webkit-transform scaleY(0.5)
        transform scaleY(0.5)

  .snackbar
    .snackbar-wrapper
      position fixed
      top 0
      left 0
      display flex
      width 100%
      height 3.125rem
      background #373A41
      transition all 0.5s
      z-index 2147483647
      &.bottom
        top auto
        bottom 0
      &.top-direction-enter-active, &.top-direction-leave-active,
      &.left-direction-enter-active, &.left-direction-leave-active,
      &.right-direction-enter-active, &.right-direction-leave-active,
      &.down-direction-enter-active, &.down-direction-leave-active
        opacity 1
        transform translate3d(0, 0, 0)
      &.top-direction-enter, &.top-direction-leave-active
        opacity 0
        transform translate3d(0, -100%, 0)
      &.left-direction-enter, &.left-direction-leave-active
        opacity 0
        transform translate3d(-100%, 0, 0)
      &.right-direction-enter, &.right-direction-leave-active
        opacity 0
        transform translate3d(100%, 0, 0)
      &.down-direction-enter, &.down-direction-leave-active
        opacity 0
        transform translate3d(0, 100%, 0)
      &.bottom
        &.right-direction-enter, &.right-direction-leave-active
          opacity 0
          transform translate3d(100%, 0, 0)
        &.down-direction-enter, &.down-direction-leave-active
          opacity 0
          transform translate3d(0, 100%, 0)
      .content, .btn
        color #fff
        height 3.125rem
        line-height 3.125rem
        font-size 14px
        user-select: none
        -webkit-user-select none
      .content
        flex 1
        height 100%
        text-align left
        padding 0 0.625rem
        text-overflow ellipsis
        display block
        overflow hidden
        white-space nowrap
        position relative
        &::after
          position absolute
          right 0
          bottom 0
          display block
          height 100%
          border-right 1px solid rgba(255, 255, 255, .2)
          content ''
      .btn
        flex 0 0 5rem
        text-align center
        user-select none
        -webkit-user-select none
        touch-callout: none
        -webkit-touch-callout none
        &:active
          color rgba(255, 255, 255, .6)
</style>
