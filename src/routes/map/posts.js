/* eslint-disable */
import PostsIndex from '../../views/posts/index'
import User from '../../views/posts/user'
import Id from '../../views/posts/id'
import MarkDownEditor from '../../views/posts/MarkdownEditor'

export default {
    path: '/posts',
    component: PostsIndex,
    children: [{
        path: '/posts/user',
        alias: '',
        component: User
    }, {
       path: '/posts/create',
       component: MarkDownEditor
    }, {
        path: '/posts/edit/:id',
        component: MarkDownEditor
    }, {
        path: '/posts/:id',
        component: Id
    },]
}