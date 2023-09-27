export default {
    namespaced:true,
    actions: {
        add(context, value) {
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
    },
    mutations: {
        ADD: function (state, value) {
            state.num += value;
        },
        SUBTRACTION(state, value) {
            state.num -= value;
        },
    },
    state: {
        num: 0,
        address: '三月软件',
        subject: '编程',
    },
    getters: {
        bigSum(state) {
            return state.num * 10;
        }
    },
}
