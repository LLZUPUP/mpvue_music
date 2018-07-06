import {currency} from '../../utils/currency.js'
import Vue from 'vue';
import Vuex from 'vuex';
// import store from './store';
import App from './index';
Vue.use(Vuex);
Vue.filter('currency',currency)
const app = new Vue({
    ...App,
    // store
});

app.$mount();