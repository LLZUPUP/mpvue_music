import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main','pages/recommend/main','pages/local/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'MobileMusic',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      selectedColor: "#d81e06",
      borderStyle: "#fdfdfd",
      backgroundColor: "#AEEEEE",
      list: [
        {
          "text": "推荐",
          "pagePath": "pages/index/main",
          "iconPath": "static/assets/new.png",
          "selectedIconPath": "static/assets/new.png"
        },
        {
          "text": "新歌",
          "pagePath": "pages/recommend/main",
          "iconPath": "static/assets/recommend.png",
          "selectedIconPath": "static/assets/recommend.png"
        },
        {
          "text": "本地",
          "pagePath": "pages/local/main",
          "iconPath": "static/assets/local.png",
          "selectedIconPath": "static/assets/local.png"
        }
        
      ]
    }
  }
}
