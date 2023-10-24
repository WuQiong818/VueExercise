import VueRouter from 'vue-router';
// 依次引入在路由中进行配置的组件；
import Container from '../pages/Container.vue'
import Login from '@/pages/Login';
import Sign from '@/pages/Sign';
import done from '@/pages/DoneThing.vue'
import task from '@/pages/Task.vue'
import myDay from '@/pages/MyDay.vue'
import importantAffairs from '@/pages/ImportantAffairs.vue'
import FourQuadrant from '@/pages/FourQuadrant.vue'
import DiscountedConsumption from '@/pages/DiscountedConsumption.vue'


// vue路由在进行路径拼接的时候，会默认多出来一个/,
// 我们可以在路由配置中通过设置path:'/'来展示默认的页面
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            // 我们在路由中提供空路径能够帮助我们进行默认路由的配置
            path: '/',
            component: Container,
            redirect: "/sign",
            children: [
                {
                    path: 'myDay/',
                    name:"myDay",
                    component: myDay,
                    
                },
                {
                    path: 'importantAffairs',
                    name:"importantAffairs",
                    component: importantAffairs,
                },
                {
                    path: 'done',
                    name:"done",
                    component: done,
                },
                {
                    path: 'task',
                    name:'task',
                    component: task,
                },
                {
                    path: 'fourQuadrant',
                    name:'fourQuadrant',
                    component: FourQuadrant,
                },
 /*                {
                    path: 'discountedConsumption',
                    name:'discountedConsumption',
                    component: DiscountedConsumption,
                }, */
            ],
        },
        {
            path: '/sign',
            name:"sign",
            component: Sign,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        }

    ]
})

// 配置路由导航
router.beforeEach((to, from, next) => {
    if (to.name == "myDay" || 
        to.name == "importantAffairs" ||
        to.name == "done"||
        to.name == "task"||
        to.name == "fourQuadrant" ||
        to.name == "discountedConsumption") {
        if (localStorage.getItem("isRegister") == "true") {
            next()
        } else {
            router.push("/sign");
        }
    } else {
        next()
    }
})



export default router;