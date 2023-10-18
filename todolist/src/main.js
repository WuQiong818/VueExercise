import Vue from 'vue'
import App from './App.vue'
import store from "./store/index";
import { 
  Container, Header, Main, Footer, Aside,//整体布局
  Row,Col,Menu,Submenu,MenuItemGroup,MenuItem,//导航栏
  Button,   //按钮
  Collapse,CollapseItem,// 折叠框
  


} from 'element-ui';
// 引入VueRouter 这是一个插件，需要引入
import router from './router/index'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)
// 引入整体布局的Element-UI
// Vue.use(Container, Header, Main, Footer, Aside)【错误写法，要一点一点地引入使用】
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Aside)
// 使用Aside组件中的导航栏
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
//按钮
Vue.use(Button)
// 折叠框
Vue.use(Collapse)
Vue.use(CollapseItem)



new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
