// 这里引入Vue文件，不需要通过路径的引入方式进行引入，脚手架自己已经配置好了
import Vue from 'vue'
// 引入APP.vue文件,
//./是同级引入，它只会提示文件夹的路径名称，而不会提示文件的名称，以后写的时候要注意了，不要写错路径了
import App from './App'


Vue.config.productionTip = false

new Vue({
  el:'#app',
  /*  这是一个模板解析器，帮助我们进行模板的解析，主要原因是因为我们所引入的vu文件不是完整版的，
      失去了解析模板的功能，所以我们需要是用render函数来帮助我们解析模板
      如果想要使用原来的那种编译方式name和temponent，就需要引入完整版的vue文件了。
  */
  render: h => h(App),
})

// .$mount('#app')