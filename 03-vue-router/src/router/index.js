import {
    createRouter,
    createWebHashHistory,
} from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
const routes = [{
        path: "/home/:userName",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import("../pages/404.vue")
    }
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})
//动态添加路由-添加二级路由
router.addRoute('home', {
    path: "",
    component: () => import("../pages/404.vue")
})
//删除路由
router.removeRoute("route.name")
//1、return false 不进行跳转
//2、undefined或不写返回值，默认跳转
//3、字符串 跳转到指定路由
//4、对象  类型router.push({})
// vue-router 4.x 不推荐使用next()
router.beforeEach((to, from) => {
    if (to.path.indexOf("/home") !== -1) {
        return "/login"
    }
    console.log(from);
})
export default router