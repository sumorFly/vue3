import { RouteRecordRaw } from "vue-router";

const homeTown:RouteRecordRaw[]=[
    {
        path:'/aaa',
        // redirect:{name:'xxx'},
        component:()=>import ('@/components/Home.vue')
    }
]

export default homeTown