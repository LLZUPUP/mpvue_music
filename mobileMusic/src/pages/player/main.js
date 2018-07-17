import Vue from 'vue'
import App from './index'
import store from '../../store'

const app = new Vue({
    ...App,
    store
})
app.$mount()
export default {
    config: {
        navigationBarTitleText: '歌曲'
    }
}