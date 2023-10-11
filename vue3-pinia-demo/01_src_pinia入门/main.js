import './assets/main.css'

import { createApp } from 'vue'
//安装pinia后,从pinia中导入createPinia
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)//将pinia作为一个插件在app中进行使用；
app.mount('#app')
