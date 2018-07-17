import Vue from 'vue'
var Fly = require('flyio/dist/npm/wx')
var fly = new Fly();
//添加拦截器
// fly.interceptors.request.use((config,promise)=>{
//     //给所有请求添加自定义header
//     config.headers["X-Tag"]="flyio";
//     return config;
// })
fly.config.baseURL="http://localhost:3000"
Vue.prototype.$http = fly;
export const ERR_OK = 200

export const playMode = {
    sequence: 0,  //顺序播放
    loop: 1,    //单曲循环
    random: 2   //随机播放
}
export default fly;