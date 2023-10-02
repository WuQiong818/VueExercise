// 这里引入Vue文件，不需要通过路径的引入方式进行引入，脚手架自己已经配置好了
import Vue from 'vue'
// 引入APP.vue文件,
import App from './App'
// 引入VueRouter 这是一个插件，需要引入
import VueRouter from 'vue-router'
// 引入路由器 这个是我们配置的路由项，路由需要借助我们的路由中所写的文件进行管理
import router from './router/index'

Vue.config.productionTip = false
// 使用vue提供的路由插件
Vue.use(VueRouter)

new Vue({
  el:'#app',
  render: h => h(App),
  router:router,
})