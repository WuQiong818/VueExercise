// 这里进行store对象的准备工作，即将使用vuex,进行集中式项目管理
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
// 注意:vuex就是一个插件,vue.use()是正常地使用插件，我们都是在使用vuex，而不是store对象
// Vue.use(store)
// 创建action对象，负责调度dispatch
const actions = {
    // 这里参数context是上下文对象，里面包括dispatch、commit、state等其他的属性
    add(context, value) {
        // context.commit(value) commit方法也需要有两个参数，如果只写一个，并且参数为数字的话
        // 会报一个期望是字符串，但找到的是数字的错误，需要传递两个参数，确定在mutations中执行的函数
        context.commit("ADD", value)
    },
    subtraction(context, value) {
        context.commit("SUBTRACTION", value)
    },
    oddAdd(context, value) {
        if (context.state.num % 2) {
            context.commit("ADD", value)
        }
    },
    waitAdd(context, value) {
        setTimeout(() => {
            context.commit("ADD", value)
        }, 3000);
    },

}
// 创建mutations对象，负责对数据的更改,这里仅仅进行方法的调用和运算，并不进行逻辑的判断
const mutations = {
    ADD: function (state, value) {
        state.num += value;
    },
    SUBTRACTION(state, value) {
        state.num -= value;
    },
}
// 创建state对象，负责对数据状态的保存
const state = {
    num: 0,
    address:'三月软件',
    subject:'编程'
}

//创建并且暴露Store对象，通过new Vuex.Store方法进行创建。
export default new Vuex.Store({
    actions,
    mutations,
    state,
})

// 这里你创建暴露的是什么玩意呀，要想vc对象一样，要去new出来
// export default {
//     actions,
//     mutations,
//     state,
// }
