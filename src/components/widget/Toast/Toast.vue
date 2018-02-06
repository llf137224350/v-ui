<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
  <div class="toast">
    <transition name="fade">
      <div v-show="isShow" class="content">{{content}}</div>
    </transition>
  </div>
</template>

<!--script-->
<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        content: "",
        isShow: false,
        timer: undefined
      }

    },
    props: {
      displayDuration: {//吐司显示时长，默认2秒
        type: Number,
        default: 2400
      }
    },
    methods: {
        // 显示土司
      show(content){
        this.content = content;
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
      }
    }
  }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" >
  .toast
    .content
      position fixed
      bottom 50px
      left 50%
      transform translate(-50%, 0)
      margin 0 auto
      font-size 14px
      min-width 100px
      height 36px
      line-height 36px
      text-align center
      padding 0 14px
      border-radius 18px
      backdrop-filter: blur(10px);
      background rgba(0, 0, 0, .7)
      color #fff
      z-index 2147483647
      transition all .6s
      &.fade-enter-active, &.fade-leave-active
        opacity 1
      &.fade-enter, &.fade-leave-active
        opacity 0

</style>
