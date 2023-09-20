// 这里引入Vue文件，不需要通过路径的引入方式进行引入，脚手架自己已经配置好了
import Vue from 'vue'
// 引入APP.vue文件,
import App from './App'
import plugins from './plugins'

Vue.config.productionTip = false
 Vue.use(plugins,1,2,3)
new Vue({
  el:'#app',
  render: h => h(App),
})

// .$mount('#app')