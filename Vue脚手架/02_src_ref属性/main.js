// 这里引入Vue文件，不需要通过路径的引入方式进行引入，脚手架自己已经配置好了
import Vue from 'vue'
// 引入APP.vue文件,
//./是同级引入，它只会提示文件夹的路径名称，而不会提示文件的名称，以后写的时候要注意了，不要写错路径了
import App from './App'


Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
})

// .$mount('#app')