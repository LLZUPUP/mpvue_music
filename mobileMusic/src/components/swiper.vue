<template>
    <swiper class="swiper" indicator-dots="true" indicator-active-color="#FF800A" autoplay="true" interval="2000" circular="true">
        <swiper-item v-for="(item,index) in banners" :key="index">
            <div class="banner-box">
                <image :src="item.picUrl" class="banner" />
            </div>
            
        </swiper-item>
    </swiper>
</template>
<script>
import {getBanner} from '@/api/recommend'
import {ERR_OK} from '@/common/js/config'
export default {
    data() {
        return {
            banners:[]
        }
    },
    methods: {
        _getBanner() {
            getBanner().then(res=>{
                console.log(res)
                if(res.status === ERR_OK) {
                    let list = res.data.data.banners;
                    this.banners = list.splice(4)
                }
                
            })
        }
    },
    created() {
        
        this._getBanner();
    }
}
</script>
<style lang="stylus" scoped>
    .swiper
        height 320rpx
        width 100%
        .banner-box
            width 90%
            height 100%
            border-radius 2%
            overflow hidden
            margin-left 5%
            .banner
                width 100%
                height 100%
        
</style>
