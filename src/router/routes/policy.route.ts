import { RouteRecordRaw } from "vue-router";

const user:RouteRecordRaw[]=[
    {
        path:'/user',
        // redirect:{name:'xxx'},
        component:()=>import ('@/views/User.vue')
    }
]

export default user