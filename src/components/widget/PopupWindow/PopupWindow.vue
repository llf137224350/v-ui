<!--
   开发者：い 狂奔的蜗牛
   说明：类似于popupWindow 需要reset.css 代码已格式化好，切勿再进行格式化
   版本：V 0.0.1
  -->

<!--html-->
<template>
  <div class="popupwindow">
    <transition
      enter-active-class="animated-popupwindow fadeIn-popupwindow "
      leave-active-class="animated-popupwindow fadeOut-popupwindow "
    >
      <div class="popupwindow-mask" v-show="isShow"></div>
    </transition>
    <transition
      v-on:after-leave="afterLeave"
      enter-active-class="animated-popupwindow slideInUp-popupwindow fadeIn-popupwindow"
      leave-active-class="animated-popupwindow slideOutDown-popupwindow  fadeOut-popupwindow"
    >
      <div class="popupwindow-content-wrapper" v-show="isShow">
        <div class="title border-1px" v-show="title" v-html="title"></div>
        <ul>
          <li class="opt-item border-1px" v-for="item in items" @click="itemClick(item)" v-html="item.text"></li>
        </ul>
        <div class="cancel-wrapper">
          <div class="cancel" @click="hide">取消</div>
        </div>
      </div>
    </transition>
  </div>

</template>

<!--script-->
<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        isShow: false,
        items: [],
        isClick: false,
        callBack: undefined,
        title: undefined
      }
    },
    created(){
      let that = this;
      // 更新数据 关闭弹窗
      window.addEventListener("popstate", function (e) {
        that.isShow = false;
      });
    },
    methods: {
      show(arr, title){
        this.items = arr || [];
        this.title = title;
        this.isClick = false;
        this.isShow = true;
        this.callBack = undefined;
        this.addLocation();
      },
      itemClick(item){
        this.callBack = item.callBack;
        this.isClick = true;
        this.hide();
      },
      hide(){
        //操作浏览器返回 会触发浏览器popstate
        if (location.hash === "#target=popup") {
          history.back();
        }
      },
      //隐藏动画执行完成之后回调
      afterLeave(){
        if (this.callBack && this.isClick) {
          this.callBack();
        }
      },
      addLocation() {
        if (window.history && window.history.pushState) {
          window.history.pushState("target", "没有用", "#target=popup");
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

  @-webkit-keyframes fadeIn-popupwindow
    from
      opacity 0
    to
      opacity 1

  @keyframes fadeIn-popupwindow
    from
      opacity 0
    to
      opacity 1

  @-webkit-keyframes fadeOut-popupwindow
    from
      opacity 1
    to
      opacity 0

  @keyframes fadeOut-popupwindow
    from
      opacity 1
    to
      opacity 0

  @-webkit-keyframes slideInUp-popupwindow
    from
      -webkit-transform translate3d(0, 100%, 0)
      transform translate3d(0, 100%, 0)
      visibility visible
    to
      -webkit-transform translate3d(0, 0, 0)
      transform translate3d(0, 0, 0)

  @keyframes slideInUp-popupwindow
    from
      -webkit-transform translate3d(0, 100%, 0)
      transform translate3d(0, 100%, 0)
      visibility visible
    to
      -webkit-transform translate3d(0, 0, 0)
      transform translate3d(0, 0, 0)

  @-webkit-keyframes slideOutDown-popupwindow
    from
      -webkit-transform translate3d(0, 0, 0)
      transform translate3d(0, 0, 0)
    to
      visibility hidden
      -webkit-transform translate3d(0, 100%, 0)
      transform translate3d(0, 100%, 0)

  @keyframes slideOutDown-popupwindow
    from
      -webkit-transform translate3d(0, 0, 0)
      transform translate3d(0, 0, 0)
    to
      visibility hidden
      -webkit-transform translate3d(0, 100%, 0)
      transform translate3d(0, 100%, 0)

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

  .popupwindow
    .animated-popupwindow
      -webkit-animation-duration 0.4s
      animation-duration 0.4s
      -webkit-animation-fill-mode both
      animation-fill-mode both

    .fadeOut-popupwindow
      -webkit-animation-name fadeOut-popupwindow
      animation-name fadeOut-popupwindow

    .fadeIn-popupwindow
      -webkit-animation-name fadeIn-popupwindow
      animation-name fadeIn-popupwindow

    .slideOutDown-popupwindow
      -webkit-animation-name slideOutDown-popupwindow
      animation-name slideOutDown-popupwindow

    .slideInUp-popupwindow
      -webkit-animation-name slideInUp-popupwindow
      animation-name slideInUp-popupwindow

  .popupwindow
    .popupwindow-mask
      position fixed
      top 0
      left 0
      right 0
      bottom 0
      background rgba(0, 0, 0, .5)
      backdrop-filter blur(10px)
      z-index 2147483646
    .popupwindow-content-wrapper
      position fixed
      left 0
      bottom 0
      width 100%
      background-color transparent
      z-index 2147483647
      & > ul, .cancel-wrapper
        background #fff
      .opt-item, .cancel, .title
        display block
        height 50px
        line-height 50px
        background #fff
        font-size 16px
        text-align center
        user-select none
        -webkit-user-select none
        touch-callout none
        -webkit-touch-callout none
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        &:active
          background-color: #F7F7F7
      .title
        color #999
        font-size 12px
        &:active
          background-color: #fff
      .cancel-wrapper
        margin-top 12px
      .cancel
        color red
      .opt-item, .title
        user-select none
        -webkit-user-select none
        touch-callout: none
        -webkit-touch-callout none
        position relative
        &::after
          position absolute
          left 0
          bottom 0
          display block
          width 100%
          border-bottom 1px solid rgba(0, 0, 0, .1)
          content ''
        &:last-child
          position relative
          &::after
            display none
</style>
