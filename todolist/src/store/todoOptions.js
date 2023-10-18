
import { nanoid } from "nanoid";
export default {
    namespaced: true,
    actions: {
        add(context, value) {
            context.commit("ADD", value)
        }
    },
    mutations: {
        // 这个改一下，不在这里封装大量的逻辑
        ADD: function (state, value) {
            const todoObject = {
                id: nanoid(),
                todoThing: {
                    title: value,
                    steps: [],//折线消耗图必备内容，任务拆分
                    startTime: ''
                },
                isFinished: false,
                isTodayTask: true,
                isImportance: true,
                isDeleted: true,//一些任务会进行删除操作
                isEdit: false,
            }
            state.todos.push(todoObject)
        },
        EDIT: function (state, value) {
            console.log("value", value);
            state.todos.forEach(item => {
                if (value.id == item.id) {
                    item.isEdit = true;
                }
            });
        },
        // 修改内容
        ALTER: function (state, value) {
            state.todos.forEach(item => {
                if (value.id == item.id) {
                    item.isEdit = value.isEdit;
                    item.todoThing.isEdit = value.todoThing.title;
                    console.log("ALTER执行了", item);
                }
            });
        },
        DELETE: function (state, value) {
            const todoArray = state.todos
            for (var i = 0; i < todoArray.length; i++) {
                if (todoArray[i].id == value.id) {
                    todoArray.splice(i,1)
                }
            }
            console.log(state.todos);
        },
        ALTERCHECKBOX:function(state, value){
            state.todos.forEach(item => {
                if (item.id == value.id) {
                    item.isFinished = !(item.isFinished)
                    console.log("状态发生改变了",item);
                }
            });
        }
    },
    state: {
        // 增、删、改、查
        todos: [
            {
                id: nanoid(),
                todoThing: {
                    title: '敲代码',
                    steps: [],//折线消耗图必备内容，任务拆分
                    startTime: ''
                },
                isFinished: false,
                isTodayTask: true,
                isImportance: true,
                isDeleted: true,//一些任务会进行删除操作
                isEdit: false,
            },
            {
                id: nanoid(),
                todoThing: {
                    title: '读书',
                    steps: [],//折线消耗图必备内容，任务拆分
                    startTime: ''
                },
                isFinished: false,
                isTodayTask: true,
                isImportance: true,
                isDeleted: true,//一些任务会进行删除操作
                isEdit: false,
            },
            {
                id: nanoid(),
                todoThing: {
                    title: '跑步',
                    steps: [],//折线消耗图必备内容，任务拆分
                    startTime: ''
                },
                isFinished: true,
                isTodayTask: true,
                isImportance: true,
                isDeleted: true,//一些任务会进行删除操作
                isEdit: false,
            },
            {
                id: nanoid(),
                todoThing: {
                    title: '吃饭',
                    steps: [],//折线消耗图必备内容，任务拆分
                    startTime: ''
                },
                isFinished: false,
                isTodayTask: true,
                isImportance: true,
                isDeleted: true,//一些任务会进行删除操作
                isEdit: false,
            },
            {
                id: nanoid(),
                todoThing: {
                    title: '睡觉',
                    steps: [],//折线消耗图必备内容，任务拆分
                    startTime: ''
                },
                isFinished: true,
                isTodayTask: true,
                isImportance: true,
                isDeleted: true,//一些任务会进行删除操作
                isEdit: false,
            }
        ]
    },
    // 当state中的需要加工可以使用getters并不对数据进行修改
    getters: {

    }
}