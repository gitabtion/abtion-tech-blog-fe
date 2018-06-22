/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import axios from './utils/http'
import VueMaterial from 'vue-material'
import router from './router'
import snackBar from './utils/snackbar'

Vue.use(VueMaterial);

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.prototype.snackBar = snackBar;

new Vue({
    el: '#app',
    axios,
    store,
    router,
    snackBar,
    render: h => h(App),
}).$mount('#app');
