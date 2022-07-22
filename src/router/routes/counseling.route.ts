import { RouteRecordRaw } from "vue-router";

const home:RouteRecordRaw[]=[
    {
        path:'/xxx',
        // redirect:{name:'xxx'},
        component:()=>import ('@/views/Home.vue')
    }
]

export default home