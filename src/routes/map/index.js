import Home from '../../views/home'
import BeforeLogin from './beforeLogin'

export default [
    {
        path: '/home',
        alias: '/',
        component: Home
    },
    BeforeLogin,

]