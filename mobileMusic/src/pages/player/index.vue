<template>
  <div class="player">
    <div class="normal-player">
      <div class="background">
        <div class="filter"></div>
        <img :src= "currentSong.image" alt="">
      </div>
      <div class="top">
        <h1 class="title">{{currentSong.name}}</h1>
        <h2 class="subtitle">{{currentSong.singer}}</h2>
      </div>
      <div class="middle">
        <div class="middle-l">
          <div class="cd-wrapper">
            <div class="cd">
              <img :src="currentSong.image" alt="" class="image">
            </div>
          </div>
        </div>
        <scroll class="middle-r" v-show="currentShow === 'lyric'">
          <div class="lyric-wrapper">
            <div class="currentLyric" v-if= "currentLyric">
              <p class="text" :class="{'current': currentLineNum === index}" v-for="(line, index) in currentLyric.lines" :key="line.key">
                {{line.txt}}
              </p>
            </div>
            <p class="no-lyric" v-if="currentLyric === null">{{upDatacurrentLyric}}</p>
          </div>
        </scroll>
      </div>
      <div class="bottom">
        <div class="progress-wrapper">
          <span class="time time-l">{{fromat(currentTime)}}</span>
          <div class="progress-bar-wrapper">
            <!-- <progress-bar></progress-bar> -->
          </div>
          <span class="time time-r">{{format(duration)}}</span>
        </div>
        <div class="operators">
          <div class="icon i-left">
            <div class="mode" :class="iconMode"></div>
          </div>
          <div class="icon i-left">
            <div class="icon-prev"></div>
          </div>
          <div class="icon i-center">
            <div class="play"></div>
          </div>
          <div class="icon i-right">
            <div class="icon-nest"></div>
          </div>
          <div class="icon i-right">
            <div class="like"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import {getSong, getLyric} from '@/api/song'
import Lyric from 'lyric-parser'
export default {
  data() {
    return {
      song: {}
    }
  },
  onLoad(options) {
    
  },
  computed: {
    ...mapGetters([
      'playlist',
      'fullScreen',
      'currentSong',
      'playing',
      'currentIndex',
      'mode',
      'sequenceList',
      'favoriteList'
    ])
  }
}
</script>
<style lang="stylus" scoped>
.player
  width 100%
  height 100%
  .normal-player
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    width 100%
    height 100%
    .background
      position absolute
      left -50%
      top -50%
      width 300%
      height 300%
      opacity 0.6
      filter blur(60rpx)
      img 
        width 100%
        height 100%
      .filter
        position absolute
        width 100%
        height 100%
        background #000
        opacity .6
</style>
