import {playMode} from '@/common/js/config'

const state = {
  musicList: {},
  singer: {},
  playing: false,     //播放
  fullScreen: false,  //全屏
  playList: [],  
  sequenceList: [],   //顺序列表 
  mode: playMode.sequence,  //默认顺序播放
  currentIndex: -1,    //当前播放索引
  disc: {},
  topList: {},


}
export default state
