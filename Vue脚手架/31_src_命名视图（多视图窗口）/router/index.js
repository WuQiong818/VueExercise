import VueRouter from "vue-router";
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'


export default new VueRouter({
    routes: [
        {
            path:'/',
            components: {
                a:Home,
                b:About,
                default:News,
                default:Message,
            }
        },
    ]
})
