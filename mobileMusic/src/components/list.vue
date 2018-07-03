<template>
    <div class="recommend-list">
        <h1 class="title">推荐歌单</h1>
        <ul>
            <li class="item" v-for="item in recommendList" :key="item.id">
                <div class="icon" @click="selectList(item)">
                    <div class="gradients"></div>
                    <img :src="item.picUrl"/>
                </div>
                <p class="play-count">
                    <i class="fa"></i>
                    {{item.playCount}}万
                </p>
                <div class="text">
                    <p class="name">{{item.name}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import {getRecommendList} from '@/api/recommend'
import {ERR_OK} from '@/common/js/config'
export default {
    data() {
        return {
            recommendList: []
        }
    },
    created() {
        this._getRecommendList()
    },
    computed:{
        
    },
    methods: {
        _getRecommendList() {
            getRecommendList().then((res)=>{
                console.log(res)
                if(res.status === ERR_OK) {
                    this.recommendList = res.data.data.result;
                }else {
                    console.error('获取推荐列表失败') //
                }
            })
        },
        
    }
}
</script>
<style lang="stylus" scoped>
    .recommend-list
        position relative
        box-sizing border-box
        width 100%
        text-align center
        .title
            line-height 90rpx
            padding-left 1.5%
            font-size 30rpx
            text-align left 
            font-weight bold
        .item
            display inline-block
            position relative
            box-sizing border-box
            width 33%
            padding 0 1%
            vertical-align top
            margin-bottom 25rpx

            .icon
                display inline-block
                position relative
                width 100%
                height 220rpx
                margin-bottom 10rpx
                .gradients
                    position absolute
                    top 0
                    width 100%
                    height 70rpx
                    border-radius 6rpx
                    background linear-gradient(rgba(109, 109, 109, 0.4),rgba(255, 255, 255, 0))
                img 
                    width 100%
                    height 100%
                    border-radius 6rpx
            .play-count
                position absolute
                top 10rpx
                right 16rpx
                font-size 20rpx
                color #fff
                .fa
                    display inline-block
                    width 20rpx
                    height 20rpx
                    background url(../common/image/playcount.png) center no-repeat
                    background-size cover
            .text
                line-height 32rpx
                text-align left 
                white-space wrap
                font-size 25rpx
                
</style>
