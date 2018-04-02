<!--
   开发者：い 狂奔的蜗牛
   说明：checkbox
   版本：V 0.0.1
  -->

<!--html-->
<template>
    <div class="check-box">
        <div class="check-box-wrapper">
            <input type="checkbox" :value="value" :name="name" :id="id" class="check-box-input" :checked="selfChecked"
                   @change="change">
            <transition name="fade">
                <label :for="id"> </label>
            </transition>
            <label :for="id"> {{label}}</label>
        </div>

    </div>
</template>

<!--script-->
<script type="text/ecmascript-6">

    export default {
        mounted() {
            this.id = this.id + Math.random().toString(16);
            if (this.selfValue.indexOf(this.value) != -1)
                this.selfChecked = true;

         this.setRootFontSize();
         window.onresize = ()=>{
             this.setRootFontSize();
         }
        },
        data() {
            return {
                id: "id",
                selfChecked: false,
                selfValue: this.msg
            }
        },
        model: {    // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
            prop: 'msg',
            event: 'msgChanged'
        },
        props: {
            msg: "",
            name: {
                type: String
            },
            value: {
                type: String,
                default: ""
            },
            label: {
                type: String,
                default: ""
            }
        },
        methods: {
            change() {
                this.selfChecked = !this.selfChecked;
                if (this.selfChecked) {
                    this.selfValue += "," + this.value;
                } else {
                    if (this.selfValue === this.value)
                        this.selfValue = "";
                    else
                        this.selfValue = this.selfValue.replace(this.value, "")
                }
            },
            //设置根元素字体大小
            setRootFontSize(){
                // 进行rem适配 设置根元素字体大小
                let width = document.documentElement.clientWidth || document.body.clientWidth;
                let htmlDom = document.getElementsByTagName("html")[0]
                htmlDom.style.fontSize = width / 10 + 'px';
            }
        },
        watch: {
            msg() {
                this.selfValue = this.msg;
            },
            selfValue() {
                if (this.selfValue.indexOf(",") === 0)
                    this.selfValue = this.selfValue.substring(1)
                if (this.selfValue.length - 1 === this.selfValue.lastIndexOf(",")) {
                    this.selfValue = this.selfValue.substring(0, this.selfValue.length - 1)
                }
                this.selfValue = this.selfValue.replace(/,{2}/, ",");// 处理会出现两个 ,,的问题
                this.$emit("msgChanged", this.selfValue)
            }
        }
    }

</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    /*单位转换*/
    px2rem($px)
        return ($px / 37.5) rem

    .check-box
        display inline-block
        position relative
        .check-box-wrapper
            user-select none
            -webkit-user-select none
            touch-callout: none
            -webkit-touch-callout none
            .check-box-input
                display none
            .check-box-input + label
                display inline-block
                width px2rem(20px)
                height px2rem(20px)
                line-height px2rem(20px)
                position relative
                -webkit-transition all 0.6s
                transition all 0.6s
                box-sizing border-box
                top px2rem(4.64px)
                border px2rem(2px) solid #E2E2E2
                border-radius px2rem(3px)
            & > .check-box-input + label:after
                content ''
                display block
                position absolute
                left px2rem(1px)
                top px2rem(1px)
                width px2rem(14px)
                height px2rem(14px)
                background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACs0lEQVR4Xu2ZQZISMRSG/zeUxVK8gTdwvEFYSa8cTyCcQD1AYwvl2vIEgydwXIFuOt7AI3ADcUlZ8CwQpqag6U6apBO6w5JKVfJ9+d/rTofQ8B81nB9BQEhAww2EEmh4AEITDCUQSqDhBkIJ1DkAYpo8lVEyz2OsXQJEmnSwbN0ScLMBZ/ACoET24s9ZImolYAefEnB9CMuMDzKKk8P/ayMgD36fBNkbPqmlgCL4PTQzujKK5UMJF58AVfhtCuomQAcewJ+0F3dqUwKa8GDCK/kivquFAG145oGMhpNaPAZNwm+EXFQTNA1/UQJswF+MAFvwSgLEj4/XePR3LrvJwsXBSR8eX2QU91XXerIHiNn4DcAJgbbPTgYkeDUoOl2pTqwyzjb8yQSI2egtgT4dHSjAc7TXz6tIQxXweQJ+73f+WAJ+ob3q2pRQFXymADEdCyKkeRFl2JNQJXxpAbueYDwJVcNnC0iTDi1bm89Ij4salckkuIA/3QO+j2+I8bVIgKkkuILPfQ8Q01GfiG5tS3AJX/giZFuCa/hCAZsBYjpOiPDedBJ8gFcSsJMwIcJrRQlS9uJu3lhf4JUF6EvgiewNB1kSfILXEmBCgm/w2gLOkeAjfCkBZSSgvX6HZSvzxiarTJj1jrQqvenUmNKfxMR0rNEYeXHqcHV02KoQvnQC9ovWkaCyS1Xu/H49pRNgWoIL+LMTcC9hNroj0EuVXXZd84fzn52AbVPcniCvJEDPdCW42nljJXCfghISXMMbK4EyEnyANy5AtRx8gbcioFAC8880GgrdXmFrvJEmmLW4/6++V5OHTwcGf0N73bf5RVlXlDUB931hc7O0WneA1bzKSxVVEdYFqC7E1bggwJV5X+YNCfBlJ1ytIyTAlXlf5g0J8GUnXK0jJMCVeV/mbXwC/gFGMLtQrWchDwAAAABJRU5ErkJggg==")
                background-repeat: no-repeat
                -webkit-background-size: cover
                background-position: center
                background-size: cover
                -webkit-transition 0.3s
                cursor pointer
                transition 0.3s
                opacity 0
                transform scale(0.3)
            & > .check-box-input:checked + label::after
                opacity 1
                transform scale(1)

</style>
