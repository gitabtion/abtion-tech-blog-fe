import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import axios from './http'
import VueMaterial from 'vue-material'
import router from './router'

Vue.use(VueMaterial);

Vue.config.productionTip = false;
Vue.prototype.axios = axios;

new Vue({
    el: '#app',
    axios,
    store,
    router,
    render: h => h(App),
}).$mount('#app');
