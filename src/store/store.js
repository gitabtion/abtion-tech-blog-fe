import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {},
        token: null,
        title: ''
    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            window.localStorage.user = JSON.stringify(data.user);
            window.localStorage.token = data.token;
            state.token = data.token;
            state.user = data.user;
        },
        [types.LOGOUT]: (state) => {
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('user');
            state.token = null;
            state.user = null;
        },
        [types.TITLE]: (state, data) => {
            state.title = data;
        },
        [types.USER]: (state,data)=>{
            state.user = data
        },
    },
    getters:{
        getUser: (state)=> {
            //判断是否等于undefined是因为保存state.user返回的是string类型
            if(state.user=='undefined' || !state.user) {
                state.user = window.localStorage.getItem('user') !== 'undefined' ? window.localStorage.getItem('user'): '';
            }
            return state.user;
            // state.user==null ? "" : state.user;
        },
        getToken: (state)=>state.token==null ? '' : state.token
    }
})