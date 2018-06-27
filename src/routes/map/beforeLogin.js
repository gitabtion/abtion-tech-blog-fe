import BeforeLoginIndex from '../../views/before-login/index'
import Login from '../../views/before-login/login'
import Register from '../../views/before-login/register'
export default {
    path: '/before-login',

    component: BeforeLoginIndex,
    children: [{
        path: 'login',
        alias: '',
        component: Login


    }, {
        path: 'register',
        component: Register
    }]
}