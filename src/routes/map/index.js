import Home from '../../views/home'
import BeforeLogin from './beforeLogin'
import Posts from './posts'
import EmptyState from '../../components/EmptyState'


export default [
    {
        path: '/home',
        alias: '/',
        component: Home
    },
    {
        path: '/empty',
        component:EmptyState
    },
    BeforeLogin,
    Posts,

]