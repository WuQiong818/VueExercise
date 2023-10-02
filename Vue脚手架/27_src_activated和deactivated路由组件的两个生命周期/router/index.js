import VueRouter from "vue-router";
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News.vue'
import Detail from '../pages/Detail'



export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'home-news',
                    component: News
                },
                {
                    path: 'home-message',
                    component: Message,
                    children:[
                        {
                            name:'detail',
                            // path: 'detail/:id/:title',
                            path: 'detail',

                            component: Detail,
                            // 固定写法，数据是死的，较少使用
                            // props:{code:'0001',name:'wangye'}
                            // 只能够进行params参数的接受，不能够接受query参数,因为这里的配置不会知道query参数，只会知道params参数
                            // props:true,
                            props(route){//这里是路由，不是路由器
                                return{
                                    id:route.query.id,
                                    title:route.query.title
                                }
                            }
                        },
                    ]
                },
            ]
        },



    ]
})
