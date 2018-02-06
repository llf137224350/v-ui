<!--
   开发者：い 狂奔的蜗牛
   说明：类似于浏览器的alert，在不同浏览器中使用同样的提示效果
   版本：V 0.0.1
  -->

<!--html-->
<template>
  <div class="alert">
    <transition
      enter-active-class="animated-alert fadeIn-alert "
      leave-active-class="animated-alert fadeOut-alert "
    >
      <div class="alert-mask" v-show="isShow"></div>
    </transition>
    <transition
      enter-active-class="animated-alert zoomIn-alert "
      leave-active-class="animated-alert zoomOut-alert "
    >
      <div class="alert-content-wrapper" v-show="isShow" ref="hook">
        <div class="content">
          {{content}}
        </div>
        <div class="btn">
          <div class="ok" @click="hide">{{okText}}</div>
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
        content: "",
        isShow: false
      }
    },
    props: {
      okText: {
        type: String,
        default: "确定"
      }
    },
    created(){
      let that = this;
      window.addEventListener("popstate", function (e) {
        // 更新数据 关闭弹窗
        that.isShow = false;
      });
    },
    methods: {
      show(content){
        this.content = content;
        this.isShow = true;
        // 添加一条历史记录 使其支持返回键关闭
        this.addLocation();
      },
      hide(){
        //操作浏览器返回 会触发浏览器popstate
        if (location.hash === "#target=alert") {
          history.back();
        }
      },
      // 添加一条历史记录
      addLocation() {
        if (window.history && window.history.pushState) {
          window.history.pushState("target", "没有用", "#target=alert");
        } else {
          console.log("当前浏览器版本较低，不支持该功能")
        }
      }
    }
  }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" >
  ::-webkit-scrollbar
    width 0
    height 0

  @-webkit-keyframes zoomIn-alert
    from
      opacity 0
      -webkit-transform translate(-50%, -50%) scale3d(.3, .3, .3)
      transform translate(-50%, -50%) scale3d(.3, .3, .3)
    50%
      opacity 1

  @keyframes zoomIn-alert
    from
      opacity 0
      -webkit-transform translate(-50%, -50%) scale3d(.3, .3, .3)
      transform translate(-50%, -50%) scale3d(.3, .3, .3)
    50%
      opacity 1

  @-webkit-keyframes zoomOut-alert
    from
      opacity 1
    50%
      opacity 0
      -webkit-transform translate(-50%, -50%) scale3d(.3, .3, .3)
      transform translate(-50%, -50%) scale3d(.3, .3, .3)
    to
      opacity 0

  @keyframes zoomOut-alert
    from
      opacity 1
    50%
      opacity 0
      -webkit-transform translate(-50%, -50%) scale3d(.3, .3, .3)
      transform translate(-50%, -50%) scale3d(.3, .3, .3)
    to
      opacity 0

  @-webkit-keyframes fadeIn-alert
    from
      opacity 0
    to
      opacity 1

    @keyframes fadeIn-alert
      from
        opacity 0
      to
        opacity 1

  @-webkit-keyframes fadeOut-alert
    from
      opacity 1
    to
      opacity 0

  @keyframes fadeOut-alert
    from
      opacity 1
    to
      opacity 0

  .alert
    .animated-alert
      -webkit-animation-duration 0.6s
      animation-duration 0.6s
      -webkit-animation-fill-mode both
      animation-fill-mode both
    .zoomIn-alert
      -webkit-animation-name zoomIn-alert
      animation-name zoomIn-alert
    .zoomOut-alert
      -webkit-animation-name zoomOut-alert
      animation-name zoomOut-alert

    .fadeIn-alert
      -webkit-animation-name fadeIn-alert
      animation-name fadeIn-alert

    .fadeOut-alert
      -webkit-animation-name fadeOut-alert
      animation-name fadeOut-alert

  .alert
    .alert-mask
      position fixed
      top 0
      left 0
      right 0
      bottom 0
      background rgba(0, 0, 0, .5)
      backdrop-filter blur(10px)
      z-index 2147483646
    .alert-content-wrapper
      position fixed
      width 70.5%
      left 50%
      top 50%
      transform translate(-50%, -50%);
      margin auto
      background: #fff
      box-sizing content-box
      border-radius 3px
      padding 20px 16px
      padding-bottom 56px
      z-index 2147483647
      .content
        position relative
        min-height 68px
        max-height 320px
        text-align left
        font-size 16px
        line-height 24px
        vertical-align middle
      .btn
        position absolute
        bottom 16px
        right 16px
        &:active
          background: #fff
        .ok
          display inline-block
          line-height 16px
          padding 5px 10px
          border-radius 2px
          user-select none
          touch-callout none
          color #41B883
          &:active
            background: #F7F7F7
</style>
