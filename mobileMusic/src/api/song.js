import fly from '@/common/js/config'

export function getSong(id) {
  return fly.get(`/music/url?id=${id}`)
}//歌曲播放url

export function getLyric (id) {
  return fly.get(`/lyric?id=${id}`)
}