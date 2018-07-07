import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: null,
        token: null,
        title: '',
        comment: null
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
            window.localStorage.user = JSON.stringify(data.user);
            state.user = data
        },
        [types.COMMENT]: (state,data)=>{
            state.comment = data
        }
    },
})