<!--
   开发者：い 狂奔的蜗牛
   说明：问题输入对话框,代码已格式化好，切勿再进行格式化
   版本：V 0.0.1
  -->

<!--html-->
<template>
  <div class="promptdialog">
    <transition
      enter-active-class="animated-prompt fadeIn-prompt "
      leave-active-class="animated-prompt fadeOut-prompt "
    >
      <div class="prompt-mask" v-show="isShow"></div>
    </transition>
    <transition
      v-on:after-leave="afterLeave"
      enter-active-class="animated-prompt zoomIn-prompt "
      leave-active-class="animated-prompt zoomOut-prompt "
    >
      <div class="prompt-content-wrapper" v-show="isShow" ref="hook">
        <div class="title">
          {{title}}
        </div>
        <div class="input-wrapper">
          <label for="input" :class="{active:isFocus}"> {{tips}}</label>
          <input type="text" id="input" @focus="setFocus" @blur="setBlur" v-model="value" ref="inputHook">
        </div>
        <div class="btn border-1px">
          <div class="cancel border-w1px" @click="hide">{{cancelText}}</div>
          <div class="ok" @click="ok">{{okText}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
  export default {
    created(){
      let that = this;
      // 更新数据 关闭弹窗
      window.addEventListener("popstate", function (e) {
        that.isShow = false;
      });
    },
    data(){
      return {
        isShow: false,
        isFocus: false,
        value: "",
        title: "",
        tips: "",
        type: "",
        cancelText: "",
        okText: "",
        isClickOk: false,
        callBack: undefined
      }
    },
    methods: {
      show(obj){
        this.isShow = true;
        this.value = obj && obj.value || "";
        this.title = obj && obj.title || "提示";
        this.tips = obj && obj.tips || "请输入内容";
        this.type = obj && obj.type || "text";
        this.cancelText = obj && obj.cancelText || "取消";
        this.okText = obj && obj.okText || "确定";
        this.callBack = obj && obj.callBack || undefined;
        this.$refs.inputHook.setAttribute("type", this.type);
        this.isFocus = false;
        this.isClickOk = false;
        // 添加一条历史记录 使其支持返回键关闭
        this.addLocation();
        //自动获取焦点
//        this.$nextTick(function () {
//          this.$refs.inputHook.focus();
//        })
      },
      setFocus(){
        this.isFocus = true;
      },
      setBlur(){
        if (!this.value)
          this.isFocus = false;
      },
      ok(){
        this.isClickOk = true;
        this.hide();
      },
      hide(){
        //操作浏览器返回 会触发浏览器popstate
        if (location.hash === "#target=prompt") {
          history.back();
        }
      },
      //隐藏动画执行完成之后回调
      afterLeave(){
        if (this.callBack && this.isClickOk)
          this.callBack(this.value);
      },
      addLocation() {
        if (window.history && window.history.pushState) {
          window.history.pushState("target", "没有用", "#target=prompt");
        } else {
          console.log("当前浏览器版本较低，不支持该功能")
        }
      }
    }
  }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  ::-webkit-scrollbar
    width 0
    height 0

  @-webkit-keyframes zoomIn-prompt
    from
      opacity: 0
      -webkit-transform: translate(-50%, -50%) scale3d(.3, .3, .3)
      transform: translate(-50%, -50%) scale3d(.3, .3, .3)

    50%
      opacity: 1

  @keyframes zoomIn-prompt
    from
      opacity: 0
      -webkit-transform: translate(-50%, -50%) scale3d(.3, .3, .3)
      transform: translate(-50%, -50%) scale3d(.3, .3, .3)
    50%
      opacity: 1

  @-webkit-keyframes zoomOut-prompt
    from
      opacity: 1
    50%
      opacity: 0
      -webkit-transform: translate(-50%, -50%) scale3d(.3, .3, .3)
      transform: translate(-50%, -50%) scale3d(.3, .3, .3)
    to
      opacity: 0

  @keyframes zoomOut-prompt
    from
      opacity: 1
    50%
      opacity: 0
      -webkit-transform: translate(-50%, -50%) scale3d(.3, .3, .3)
      transform: translate(-50%, -50%) scale3d(.3, .3, .3)
    to
      opacity: 0

  @-webkit-keyframes fadeIn-prompt
    from
      opacity: 0
    to
      opacity: 1

  @keyframes fadeIn-prompt
    from
      opacity: 0
    to
      opacity: 1

  @keyframes fadeOut-prompt
    from
      opacity: 1
    to
      opacity: 0

  @media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5)
    .border-1px
      &::after
        -webkit-transform scaleY(0.7)
        transform scaleY(0.7)

    .border-w1px
      &::after
        -webkit-transform scaleX(0.7)
        transform scaleX(0.7)

  @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2)
    .border-1px
      &::after
        -webkit-transform scaleY(0.5)
        transform scaleY(0.5)

    .border-w1px
      &::after
        -webkit-transform scaleX(0.5)
        transform scaleX(0.5)

  .promptdialog
    .animated-prompt
      -webkit-animation-duration: 0.6s
      animation-duration: 0.6s
      -webkit-animation-fill-mode: both
      animation-fill-mode: both
    .zoomIn-prompt
      -webkit-animation-name: zoomIn-prompt
      animation-name: zoomIn-prompt
    .zoomOut-prompt
      -webkit-animation-name: zoomOut-prompt
      animation-name: zoomOut-prompt

    .fadeIn-prompt
      -webkit-animation-name: fadeIn-prompt
      animation-name: fadeIn-prompt

    .fadeOut-prompt
      -webkit-animation-name: fadeOut-prompt
      animation-name: fadeOut-prompt

  .promptdialog
    .prompt-mask
      position fixed
      top 0
      left 0
      right 0
      bottom 0
      background rgba(0, 0, 0, .5)
      backdrop-filter blur(0.625rem)
      z-index 2147483646
    .prompt-content-wrapper
      position fixed
      width 77%
      left 50%
      top 50%
      transform translate(-50%, -50%)
      margin auto
      background #fff
      border-radius 0.375rem
      z-index 2147483647
      overflow hidden
      text-align center
      .title
        height 2.5rem
        line-height 2.5rem
        font-size 16px
        font-weight 700
        user-select none
        touch-callout none
      .input-wrapper
        top 0.3125rem
        position relative
        padding 1.125rem 0.8125rem
        input
          width 100%
          font-size 14px
          height 1.5rem
          display block
          padding-left 0.1875rem
          padding-right 0.1875rem
          box-sizing border-box
          outline none
          -webkit-appearance: none;
        label
          position absolute
          left 0.8125rem
          top 1.4375rem
          right 0.8125rem
          font-size 14px
          transition all 0.4s
          transform translate3d(0.1875rem, 0, 0)
          color rgba(0, 0, 0, .4)
          user-select none
          touch-callout none
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          text-align left
          &.active
            transform translate3d(-0.1875rem, -1.9375rem, 0)
            color #333
      .btn
        display flex
        height 2.5rem
        position relative
        &::after
          position absolute
          left 0
          top 0
          display block
          width 100%
          border-top 1px solid rgba(0, 0, 0, .1)
          content ''
        div
          flex 1
          height 2.5rem
          line-height 2.625rem
          font-size 14px
          overflow hidden
          user-select none
          touch-callout none
          &:active
            background: #F7F7F7
        .cancel
          color rgba(0, 0, 0, .4)
          position relative
          &::after
            position absolute
            right 0
            bottom 0
            display block
            height 100%
            border-right 1px solid rgba(0, 0, 0, .1)
            content ''
        .ok
          color #41B883
</style>
