import VueRouter from "vue-router";
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News.vue'
import Detail from '../pages/Detail'



const router = new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            meta: { title: '关于' },
            component: About
        },
        {
            name: "home",
            path: '/home',
            meta: { title: '主页', isAuth: true },
            component: Home,
            beforeEnter(to, from, next) {
                console.log("beforeEnter独享守卫", to, from);
                // 这里通过meta的自定义配置，来判断是否需要对组件进行验证判断，适用于多个组件判断的情况
                if (to.meta.isAuth) {
                    if (localStorage.getItem('account') == 'wangye') {
                        next();
                    } else {
                        alert("权限不足,请申请获取权限")
                    }
                }
            },
            children: [
                {
                    name: 'news',
                    path: 'home-news',
                    meta: { title: '新闻' },
                    component: News
                },
                {
                    name: 'message',
                    path: 'home-message',
                    meta: { title: '信息' },
                    component: Message,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail',
                            meta: { title: '详情' },
                            component: Detail,
                            props(route) {//这里是路由，不是路由器
                                return {
                                    id: route.query.id,
                                    title: route.query.title
                                }
                            }
                        },
                    ]
                },
            ]
        },
    ]
})

// 在这里进行路由守卫的编写
// 全局路由守卫:

router.beforeEach((to, from, next) => {
    console.log("beforeEach全局守卫", to, from);
    if (to.name == 'news' || to.name == 'message') {
        if (localStorage.getItem('account') == 'wangye') {
            next();
        } else {
            alert("权限不足,请申请获取权限")
        }
    } else {
        next()
    }
}),

    router.afterEach((to, from) => {
        console.log("afterEach全局守卫", to, from);
        document.title = to.meta.title
    })


export default router;
