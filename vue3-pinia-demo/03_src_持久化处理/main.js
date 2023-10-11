import './assets/main.css'
// import piniaPlug from 'pinia-plugin-persistedstate'//引入持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
//安装pinia后,从pinia中导入createPinia
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
//将pinia作为一个插件在app中进行使用；
// 在pinia身上安装持久化插件
app.use(pinia.use(piniaPluginPersistedstate))
app.mount('#app')
