

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './map/index'
import store from "../store/store";
import * as types from "../store/types"; // 路由映射

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'hash|history|abstract',
    // base: '/',
    // linkActiveClass: 'router-link-active',
    // scrollBehavior: fn
    routes
});
// 页面刷新时，重新赋值token及user
if (window.localStorage.getItem('token')&&window.localStorage.getItem('user')) {
    let user = window.localStorage.getItem('user');
    user = JSON.parse(user);
    let params= {
        token: window.localStorage.getItem('token'),
        user: user
    };
    store.commit(types.LOGIN, params)
}

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
            next();
        }
        else {
            next({
                path: '/before-login/login',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
});

export default router