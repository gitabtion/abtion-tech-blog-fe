import BeforeLoginIndex from '../../views/before-login/index'

export default {
    path: '/before-login',
    alias: 'before-login/login',
    component: BeforeLoginIndex,
    children: [{
        path: 'login',
        component(resolve) {
            require(['@/views/before-login/login'], resolve)
        },


    }, {
        path: 'register',
        component(resolve) {
            require(['@/views/before-login/register'], resolve)
        }
    }]
}