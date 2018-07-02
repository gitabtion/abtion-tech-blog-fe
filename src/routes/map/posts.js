/* eslint-disable */
import PostsIndex from '../../views/posts/index'
import User from '../../views/posts/user'
import Id from '../../views/posts/id'
import CreatePost from '../../views/posts/createPost'
import EditPost from '../../views/posts/editPost'

export default {
    path: '/posts',
    component: PostsIndex,
    children: [{
        path: 'user',
        alias: '',
        meta:{
            title: '我的所有文章'
        },
        component: User
    }, {
       path: 'create',
        meta: {
            title: '新建文章'
        },
       component: CreatePost
    }, {
        path: 'edit/:essayId',
        meta: {
            title: '编辑文章'
        },
        component: EditPost
    }, {
        path: ':id',
        meta: {
            title: '查看文章'
        },
        component: Id
    },]
}