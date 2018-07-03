import fly from '@/common/js/config'
export function getBanner() {
    // return fly.get('/banner')
    return fly.get('/banners#!method=get')
}