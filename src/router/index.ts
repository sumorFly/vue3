import { createRouter,createWebHashHistory ,RouteRecordRaw} from "vue-router"
import Home from '../components/Home.vue'

let routes:RouteRecordRaw[] = [];
const modules=import.meta.globEager('./routes/*.ts')
for (const file in modules){

routes.push(modules[file].default)
}

routes=routes.flat()
console.log(routes)
const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router