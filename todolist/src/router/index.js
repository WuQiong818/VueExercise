import VueRouter from 'vue-router';
// 依次引入在路由中进行配置的组件；
import Container from '../components/Container.vue'

import done from '@/pages/DoneThing.vue'
import task from '@/pages/Task.vue'
import myDay from '@/pages/MyDay.vue'
import importantAffairs from '@/pages/ImportantAffairs.vue'


// vue路由在进行路径拼接的时候，会默认多出来一个/,
// 我们可以在路由配置中通过设置path:'/'来展示默认的页面
export default new VueRouter({
    mode:'history',
    routes: [
        {
            // 我们在路由中提供空路径能够帮助我们进行默认路由的配置
            path: '/',
            component: Container,
            children:[
                {
                    path: '',
                    component: myDay,
                },
                {
                    path: 'myDay',
                    component: myDay,
                },
                {
                    path: 'importantAffairs',
                    component: importantAffairs,
                },
                {
                    path: 'done',
                    component: done,
                },

                {
                    path: 'task',
                    component: task,
                },

            ]
        },
    ]


})