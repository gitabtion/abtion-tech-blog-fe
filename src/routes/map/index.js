import Home from '../../views/home'
import BeforeLogin from './beforeLogin'
import Posts from './posts'
import EmptyState from '../../components/EmptyState'
import User from './user'


export default [
    {
        path: '/home',
        alias: '/',
        meta: {
            title: '首页'
        },
        component: Home
    },
    {
        path: '/empty',
        meta: {
            title: '创作你的第一篇文章吧！'
        },
        component:EmptyState
    },
    BeforeLogin,
    Posts,
    User,
]