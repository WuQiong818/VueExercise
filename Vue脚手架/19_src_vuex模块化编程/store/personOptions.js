import axios from 'axios'
import { nanoid } from 'nanoid'
export default {
    namespaced: true,
    actions: {
        // 加上条件判断，只能够添加姓王的名字
        addWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADDPERSON', value)
            } else {
                alert("添加的人必须姓王")
            }
        },
        addPersonServer(context) {
            axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
                response => {
                    context.commit('ADDPERSON', { id: nanoid, name: response.data })
                },
                error => {
                    alert(error.message);
                }
            )
        }
    },
    mutations: {
        ADDPERSON(state, person) {
            console.log("调用ADDPERSON方法了");
            state.persons.unshift(person);
        }

    },
    state: {
        persons: [{ id: '001', name: 'wangye' }]
    },
    getters: {
        getFirstName(state) {
            return state.persons[0].name;
        }
    },
}