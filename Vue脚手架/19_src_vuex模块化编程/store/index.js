// 这里进行store对象的准备工作，即将使用vuex,进行集中式项目管理
import Vuex from 'vuex'
import Vue from 'vue'
import countOptions from './countOptions'
import personOptions from './personOptions'
Vue.use(Vuex)

// 创建并且暴露store：
// 使用modules进行分别的暴露;
export default new Vuex.Store({
    modules:{
    countAbout:countOptions,
    personAbout:personOptions,
    }
})