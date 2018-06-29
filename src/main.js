/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import axios from './utils/http'
import VueMaterial from 'vue-material'
import router from './routes/'
import snackBar from './utils/snackbar'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'


Vue.use(VueMaterial);
Vue.use(mavonEditor);
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
    data(){
        return{
            value: ''
        }
    }
}).$mount('#app');
