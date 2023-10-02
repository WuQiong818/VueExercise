// 这里引入Vue文件，不需要通过路径的引入方式进行引入，脚手架自己已经配置好了
import Vue from 'vue'

/*
这里是全部引入 
// 引入element-ui
import ElementUI from 'element-ui';
// 引入全部css样式
import 'element-ui/lib/theme-chalk/index.css'; */

// 按需进行引入，先进行babel.config.js中的配置
import { Button,Carousel,CarouselItem,Row} from 'element-ui';

// 引入APP.vue文件
import App from './App'

Vue.config.productionTip = false
// 使用vue提供的路由插件
// Vue.use(ElementUI);
/* Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Row) */
Vue.component(Button.name, Button);
Vue.component(Carousel.name, Carousel);
Vue.component(Row.name, Row);
Vue.component(CarouselItem.name, CarouselItem);

new Vue({
  el:'#app',
  render: h => h(App),
})