export default class Song {
    constructor({
        id,
        mid,
        singer,
        name,
        album,
        duration,
        image,
        url,
        aliaName
    }) {
        this.id = id 
        this.singer = singer
        this.name=name
        this.album = album
        this.aliaName = aliaName
        this.image = image
    }

}
function singerName(arr) {
    let name = []
    name = arr.map((item)=> {
        return item.name    //返回歌手名字
    })
    return name.join('/') 
}
export function createRecommendSong(music) {
    return new Song({
        id: music.id,
        singer: singerName(music.song.artists),
        name: music.name,
        album: music.song.album.name,
        image: music.song.album.picUrl
    })
}
export function createRecommendListSong(music) {
    return new Song({
        id: music.id,
        singer:singerName(music.ar),
        name: music.name,
        album: music.al.name,
        image: music.al.picUrl
    })
}