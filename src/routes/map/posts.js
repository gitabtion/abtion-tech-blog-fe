import PostsIndex from '../../views/posts/index'
import User from '../../views/posts/user'
import Id from '../../views/posts/id'
import EmptyState from '../../views/posts/EmptyState'

export default {
    path: '/posts',
    component: PostsIndex,
    children: [{
        path: '/user',
        alias: '',
        component: User
    },{
        path: '/:id',
        component: Id
    },]
}