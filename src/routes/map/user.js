import About from '../../views/user/About'
import Index from '../../views/user/index'
import Tags from '../../views/user/Tags'
import Tag from '../../views/user/Tag'
import Edit from '../../views/user/EditInfo'

export default {
    path: '/user',
    component: Index,
    children:[{
        path: 'update',
        meta:{
            title: '更新用户信息',
        },
        component: Edit
    },{
        path: ':id',
        meta:{
            title: '用户信息'
        },
        component: About,
    },{
        path: ':id/tags',
        meta:{
            title: '用户所有标签'
        },
        component: Tags,
    },{
        path: ':id/:tag',
        meta:{
            title: '该标签所有文章'
        },
        component: Tag
    },
    ]
}