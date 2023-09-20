export default {
    install(Vue, x, y, z) {
        console.log(x, y, z);
        //插件的第一个参数默认是Vue,所以，我们可以通过插件来配置一些全局的东西

        //全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })

        //定义全局指令
        Vue.directive('fbind', {
            //指令与元素成功绑定时（一上来）
            bind(element, binding) {
                element.value = binding.value
            },
            //指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus()
            },
            //指令所在的模板被重新解析时
            update(element, binding) {
                element.value = binding.value
            }
        })

        //定义混入，这里直接连定义带声明，一起进行。
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            },
        }),
        
// 拆分一下就是暴露定义，之后引入进行全局注册，由于是同一个文件，暴露和引入都省了
/* export default{
    data() {
        return {
            x: 100,
            y: 200
        }
    },          
} */



        //给Vue原型上添加一个方法（vm和vc就都能用了）
        Vue.prototype.hello = () => { alert('你好啊') }



    }
}