// 这里引入Vue文件，不需要通过路径的引入方式进行引入，脚手架自己已经配置好了
import Vue from 'vue'
// 引入APP.vue文件,
import App from './App'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
})

// .$mount('#app')