/* eslint-disable */
import PostsIndex from '../../views/posts/index'
import User from '../../views/posts/user'
import Id from '../../views/posts/id'
import EmptyState from '../../views/posts/EmptyState'
import MarkDownEditor from '../../views/posts/MarkDownEditor'

export default {
    path: '/posts',
    component: PostsIndex,
    children: [{
        path: '/user',
        alias: '',
        component: User
    }, {
       path: '/create',
       component: MarkDownEditor
    }, {
        path: '/edit/:id',
        component: MarkDownEditor
    }, {
        path: '/:id',
        component: Id
    },]
}