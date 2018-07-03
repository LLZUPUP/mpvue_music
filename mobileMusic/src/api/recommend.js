import fly from '@/common/js/config'
export function getBanner() {
    // return fly.get('/banner')
    return fly.get('/banners#!method=get')
}
export function getRecommendList() {
    return fly.get('/personalized#!method=get')
}