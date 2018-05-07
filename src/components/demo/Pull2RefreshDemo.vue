<template>
    <div class="search-bar-demo">
        <appbar :vtitle="'Pull2Refresh'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
        <div class="my-pull-2-refresh">
            <Pull2Refresh @onRefreshing="onRefreshing" ref="pull2refresh" @onLoadingMore="onLoadingMore"   >
                <ul slot="content">
                    <cellswipe :text="item" v-for="item in pull2RefreshDatas"></cellswipe>
                    <!--<li v-for="item in pull2" style="line-height: 40px">{{item}}</li>-->
                </ul>

            </Pull2Refresh>
        </div>
        <div class="tips-container">
            <div>使用说明</div>
            <p>
                demo：src/components/demo/Pull2RefreshDemo.vue
            </p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import appbar from "components/widget/AppBar/AppBar.vue"
    import Pull2Refresh from "components/widget/Pull2Refresh/Pull2Refresh.vue"
    import cellswipe from "components/widget/CellSwipe/CellSwipe.vue"

    export default {
        created(){
            for (let i = 0; i < 10; i++) {
                this.pull2RefreshDatas.push("我是从缓存加载的数据" + i+"，可以右滑哟！")
            }
            this.$router.isBack = false;
        },
        mounted(){
            this.$refs.pull2refresh.startRefresh();
        },
        data() {
            return {
                pull2RefreshDatas: []
            }
        },
        components: {
            appbar,
            Pull2Refresh,
            cellswipe
        },
        methods: {
            handleLeft(){
                this.$router.go(-1)
            },
            onRefreshing(){
                setTimeout(() => {
                    this.pull2RefreshDatas = [];
                    for (let i = 0; i < 30; i++) {
                        this.pull2RefreshDatas.push("我是刷新出来的数据" + i+"，可以右滑哟！")
                    }
                    this.$refs.pull2refresh.stopRefresh();
                }, 5000)
            },
            onLoadingMore(){
                setTimeout(() => {
                    for (let i = 0; i < 20; i++) {
                        this.pull2RefreshDatas.push("我是加载更多出来的数据" + i+"，可以右滑哟！")
                    }
                    this.$refs.pull2refresh.stopLoadingMore();
                }, 5000)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    .search-bar-demo
        .my-pull-2-refresh
            position: relative;
            height: 400px;
            background: #E8E8EA;
        button
            margin-top 16px
            margin-left 16px
        .tips-container
            padding 16px
            & > div
                font-size 16px
                font-weight bold
                line-height 36px
            & > p
                line-height 21px
</style>