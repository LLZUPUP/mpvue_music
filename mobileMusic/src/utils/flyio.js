import Vue from 'vue';
var Fly = require("flyio/dist/npm/wx")
var fly = new Fly;
fly.interceptors.request.use((config,promise)=> {
    config.headers["X-Tag"]="flyio";
    return config;
})
Vue.prototype.$http = fly;
fly.config.baseURL = "https://www.easy-mock.com/mock/5af03acc957fd4308a30b9d8/api/";

export default fly;