<template>
   
    <div class="music-list">
        <scroll-view scroll-y class="list">
            <div class="music-list-wrapper">
                <div class="bg-image" :style="bgStyle">
                    <div class="filter"></div>
                    <div class="text">
                        <h2 class="list-title">{{title}}</h2>
                        <p class="play-count" v-if="playCount">
                            <i class="fa"></i>
                            {{playCount}}
                        </p>
                    </div>
                </div>
                <div class="song-list-wrapper">
                    <div class="sequence-play" @click="sequence">
                        <i class="iconfont icon-bofangicon"></i>
                        <span class="text">播放全部</span>
                        <span class="count">(共{{getListDetail.length}}首)</span>
                    </div>
                    <div class="song-list">
                        <ul>
                            <li v-for="(song,index) in getListDetail" :key="index" class="item" >
                                <p class="count">{{index+1}}</p>
                                <div class="content">
                                    <h2 class="name">{{song.name}}</h2>
                                    <p class="desc">{{song.singer}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </scroll-view>
    </div>
</template>
<script>
import {getRecommendList,getRecommendListDetail} from '@/api/recommend'
import {createRecommendListSong} from '@/common/js/song.js'
import {ERR_OK} from '@/common/js/config.js'
export default {
    data(){
        return {
            getRecommendList: {},   //获取对应的歌单json
            getListDetail: []       //获取对应得歌单里面得歌曲列表  用于循环
        }
    },
    computed: {
        title() {
            return this.getRecommendList.name
        },
        bgStyle() {
            return `background-image: url(${this.getRecommendList.picUrl})`
        },
        playCount() {
            if(!this.getRecommendList.playCount) return;
            if(this.getRecommendList.playCount < 1e5) {
                return Math.floor(this.getRecommendList.playCount)
            }else {
                return Math.floor(this.getRecommendList.playCount / 10000)+'万'
            }
        },
        
    },
    methods: {
        sequence() {

        },
        _getRecommendListDetail(id){
            getRecommendListDetail(id).then(res=>{
                if(res.status === ERR_OK) {
                    this.getListDetail=res.data.playlist.tracks.map((item)=>{
                        return createRecommendListSong(item)
                    })
                }else {
                    console.error('获取歌单列表中的歌曲列表失败！')
                }
                console.log(this.getListDetail)
            })
        }
    },
    onLoad(options){
        getRecommendList().then(res=>{
            let result = res.data.result;
            result.map((item)=>{
                if(+options.id === item.id) {
                    let recommendList = Object.assign({},item)
                    this._getRecommendListDetail(options.id)
                    return this.getRecommendList = recommendList
                }
            })
            console.log(this.getRecommendList)
        })
        
        
    },
    // mounted() {
    //     let options = this.$root.$mp.query;//获取传递过来的url参数
    //     getRecommendList().then(res=>{
    //         let result = res.data.data.result;
    //         result.map((item)=>{
    //             console.log(item)
    //             console.log(options)
    //         })
    //     })
    // }
}
</script>
<style lang="stylus" scoped>
    .music-list
        position fixed
        z-index 1000
        top 0
        left 0
        bottom 0
        right 0
        background-color #F2F3F4
        width 100%
        .list
            height 100%
            .music-list-wrapper
                .bg-image
                    position relative
                    width 100%
                    height 0
                    padding-top 75%
                    background-size cover
                    background-position 0 30%
                    .filter
                        position absolute
                        top 0
                        left 0
                        width 100%
                        height 100%
                        background #000
                        opacity .2
                    .text
                        position absolute
                        width 80%
                        height 40rpx
                        bottom 90rpx
                        left 15rpx
                        color #ffffff
                        .play-count
                            position absolute
                            bottom -32rpx
                            font-size 22rpx
                            .fa
                                display inline-block
                                width 20rpx
                                height 20rpx
                                background url(../../common/image/playcount.png) center no-repeat
                                background-size cover
                        .list-title
                            position absolute
                            bottom 0
                            font-size 32rpx
                            line-height 36rpx
                            font-weight bold
                            letter-spacing 1rpx
                .song-list-wrapper
                    padding 82rpx 0 40rpx 0
                    border-radius 20rpx
                    position relative
                    top -40rpx
                    background-color #F2F3F4
                    .sequence-play
                        position absolute
                        top 0rpx
                        display flex
                        align-items center
                        width 100%
                        height 80rpx
                        padding-left 32rpx
                        border-bottom 2rpx solid rbg(228,228,228)
                        .iconfont
                            width 36rpx
                            height 36rpx
                            background url(../../common/image/play.png) center no-repeat
                            display inline-block
                            background-size contain
                            padding-right 28rpx
                        .text
                            font-size 32rpx
                        .count
                            font-size 28rpx
                            color #757575
                    .song-list
                        .item
                            position relative
                            display flex
                            align-items center
                            box-sizing border-box
                            height 120rpx
                            border-bottom 2rpx solid rgb(228,228,228)
                            .count
                                flex 0 0 100rpx
                                width 100rpx
                                text-align center
                                color #757575
                            .content
                                flex 1
                                line-height 40rp
                                overflow hidden
                                .name
                                    margin-top 8rpx
                                    width 80%
                                    white-space nowrap
                                    text-overflow ellipsis 
                                    overflow hidden
                                    color #2E3030
                                .desc
                                    white-space nowrap
                                    text-overflow ellipsis 
                                    overflow hidden
                                    width 80%
                                    font-size 24rpx
                                    color #757575

</style>
