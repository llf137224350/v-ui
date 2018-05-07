<template>
    <div class="tablayout-demo">
        <appbar :vtitle="'Tablayout'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <tablayout :datas="tabDatas" :color="color" :normalColor="normalColor" :currentIndex="0"
                   class="tablayout-demo-container"></tablayout>
        <router-view keep-alive></router-view>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                Tablayout为类似android原生tablayout效果，通过路由搭配router-view来实现根据路由不同，页面进行对应的切换效果，这样每个路由对应的页面彼此独立。
                轻松实现选项卡功能，Tablayout暴露了data、currentIndex、color、normalColor属性，可以通过不同的属性进行相应的配置。
            </p>
            <p>data为传入的数据，数据格式为json对象，其中text为显示给用户看的文本，to为对应跳转的路由。item以4个为分界线，如果item小于4个，则每个item平分屏幕宽度
            ，否则每个item以屏幕宽度的25%作为每个item所占宽度。
            <pre>
                tabDatas: [
                    {
                        text: "item1",
                        to: "/TablayoutDemo/item/1"
                    } ,
                    {
                        text: "item2",
                        to: "/TablayoutDemo/item/2"
                    }
                ]
            </pre>
            </p>
            <p>currentIndex:当前选中项索引，从0开始</p>
            <p>color:当前选中项文字和指示器颜色</p>
            <p>normalColor:非选中下的文字颜色</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import tablayout from "components/widget/Tablayout/Tablayout.vue"

    export default {
        created() {
            this.$router.isBack = false;
        },
        data() {
            return {
                tabDatas: [
                    {
                        text: "item1",
                        to: "/TablayoutDemo/item/1"
                    }
                    ,
                    {
                        text: "item2",
                        to: "/TablayoutDemo/item/2"
                    },
                    {
                        text: "item3",
                        to: "/TablayoutDemo/item/3"
                    },
                    {
                        text: "item4",
                        to: "/TablayoutDemo/item/4"
                    },
                    {
                        text: "item5",
                        to: "/TablayoutDemo/item/5"
                    },
                    {
                        text: "item6",
                        to: "/TablayoutDemo/item/6"
                    },
                    {
                        text: "item7",
                        to: "/TablayoutDemo/item/7"
                    }
                ],
                color: "#41b883",
                normalColor: "#000",
            }
        },
        components: {
            appbar,
            tablayout
        },
        methods: {
            handleLeft() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    .tablayout-demo
        background: #f7f7f7
        .tablayout-demo-container
            background: #fff
        .tips-container
            background: #f7f7f7
            padding 16px
            & > div
                font-size 16px
                font-weight bold
                line-height 36px
            & > p
                line-height 21px

</style>