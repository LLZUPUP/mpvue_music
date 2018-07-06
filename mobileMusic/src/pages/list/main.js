import Vue from 'vue'
import App from './index'
import Vuex from 'vuex'
import store from '../../store'
Vue.use(Vuex)

const app = new Vue({
    ...App,
    store
})
app.$mount()
export default {
    config: {
        navigationBarTitleText: '歌单'
    }
}