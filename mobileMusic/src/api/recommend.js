import fly from '@/common/js/config'
export function getBanner() {
    // return fly.get('/banner')
    return fly.get('/banner')
}
export function getRecommendList() {
    return fly.get('/personalized')
}
export function getRecommendMusic() {
    return fly.get('/personalized/newsong')
}
export function getRecommendListDetail(id) {
    return fly.get(`/playlist/detail?id=${id}`)
}