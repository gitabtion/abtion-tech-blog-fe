import Home from '../../views/home'
import BeforeLogin from './beforeLogin'
import Posts from './posts'
import EmptyState from '../../components/EmptyState'
import MarkdownEditor from '../../views/posts/MarkDownEditor'


export default [
    {
        path: '/home',
        alias: '/',
        component: Home
    },
    {
        path: '/empty',
        component:EmptyState
    },{
        path: '/test',
        component:MarkdownEditor
    },
    BeforeLogin,
    Posts,

]