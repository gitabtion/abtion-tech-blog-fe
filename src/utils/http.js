/* eslint-disable */
import axios from 'axios'
import store from '../store/store'
import * as types from '../store/types'
import router from '../routes/index'
import snackbar from './snackbar'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://api.abtion.cn/';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`;
            console.log(config.headers.Authorization);
            config.headers.token = store.state.token;
            console.log(config.headers.token);
        }
        return config
    },
    err => {
        return Promise.reject(err)
    },
);

// http response 拦截器
axios.interceptors.response.use(
    response => {
        console.log(response);
        if (response.status>200){
            switch (response.data.code){
                case 10001:
                    snackbar(response.data.message,2000);
                    router.go(-1);
                    break;
                case 10002:
                    snackbar(response.data.message,2000);
                    break;
                case 10003:
                    snackbar(response.data.message,2000);
                    break;
                case 10009:
                    snackbar(response.data.message,2000);
                    router.go(-1);
                    break;
                case 20001:
                    snackbar("用户信息失效，请重新登录",2000);
                    router.push("/before-login/login");
                    break;
                default:
                    snackbar(response.data.message,2000);
            }
        } else {
            return response.data
        }
    },
    error => {
        if (error.response) {
            alert(error.response.data.message);
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);

                    // 只有在当前路由不是登录页面才跳转
                    router.currentRoute.path !== 'login' &&
                    router.replace({
                        path: 'login',
                        query: { redirect: router.currentRoute.path },
                    });
                    break;

            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    },
);

export default axios
