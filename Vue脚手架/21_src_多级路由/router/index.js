import VueRouter from "vue-router";
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News.vue'

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
                    component: Message
                },
            ]
        },



    ]
})
