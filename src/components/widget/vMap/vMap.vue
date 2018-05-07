<!--
   开发者：い 狂奔的蜗牛
   说明：类似于安卓的吐司信息提示
   版本：V 0.0.1
  -->

<!--html-->
<template>
        <div class="allmap " id="allmap"></div>
</template>

<!--script-->
<script type="text/ecmascript-6">
    import AMap from 'AMap'
    export default {
        mounted(){
            this.map = new AMap.Map('allmap', {
                resizeEnable: true,
                zoom: this.zoomSize//初始缩放
            })
        },
        data(){
            return {
                map: undefined
            }
        },
        props: {
            address: {
                type:String,
                default:""
            },
            latitude: {
                type: Number,
                default: 106.94876
            },
            longitude: {
                type: Number,
                default: 27.703277
            },
            zoomSize: {
                type: Number,
                default: 13
            }
        },
        methods: {
            show(){
                // 是否传入地址，如果为地址 则搜索，否则判断根据经纬度显示地图
                if (this.address) {
                    // 搜索
                    AMap.service('AMap.PlaceSearch', () => {//回调函数
                        let placeSearch = new AMap.PlaceSearch();
                        placeSearch.search(this.address, (status, result) => {
                            if (result.poiList && result.poiList.pois.length > 0) {
                                let obj = result.poiList.pois[0];
                                new AMap.Marker({
                                    position: obj.location,
                                    title: obj.name,
                                    map: this.map
                                });
                                this.map.panTo(obj.location)
                            }
                        });
                    })
                } else {
                    // 经纬度
                    this.map.setZoomAndCenter(this.zoomSize, [this.latitude, this.longitude]);
                }
            }
        }
    }
</script>

<!--css-->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
</style>
