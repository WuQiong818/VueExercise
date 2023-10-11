import { defineStore } from "pinia";
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const info = ref({
        name: 'lisi',
        telephone: '1234567',
        nickName: 'XXX'
    })
    const double = computed(() => count.value * 2)
    function increment() {
        count.value++
    }

    function subtract() {
        count.value--
    }
    function setName() {
        info.value.name = 'wangye'
    }
    function setTelephone() {
        info.value.telephone = '17527021917'
    }
    function setNickName() {
        info.value.nickName = '易无穷'
    }


    return {
        count,
        info,
        double,
        increment,
        subtract,
        setName,
        setTelephone,
        setNickName

    }
},
    {
        persist: [{
            key: 'myInfo',
            storage: sessionStorage,//生命时间是一次会话，会话结束就会死亡；
            /* paths:如果我们不书写表示，默认为undefined,这样会持久化整个数据
            设置为null也会持久化整个数据
            当数组为空时：什么也不持久化
            ---------------------
            用于指定 state 中哪些数据需要被持久化。
            [] 表示不持久化任何状态
            undefined 或 null 表示持久化整个 state。

            */
            paths: ["info"]
        },
        {
            key: 'count',
            storage: sessionStorage,
            paths: ["count","double"]

        }
        ]
    }
)
