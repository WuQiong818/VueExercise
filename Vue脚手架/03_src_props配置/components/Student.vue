<template>
  <div>
    <h1>学生姓名:{{ name }}</h1>
    <h1>学生年龄:{{ MyAge }}</h1>
    <h1>学生性别:{{ sex }}</h1>
    <button @click="MyAge++">点我年龄+1</button>
  </div>
</template>
这里会产生一个问题，我使用组件话编程的目的就是为了更好地是代码得到复用，虽然现在也可以进行
结构的复用，值得但是数据是死的，每次引入，我还需要再看一遍你的代码，更改一下数据太麻烦了，
如果能够提供一种方法就好了:什么方法呢？我可以在引入组件的时候,直接对组件中的数据进行赋值操作
而不需要更改你组件内部的东西。
 */

/* 我们对值的要避免直接对props中配置内容的更改，而是应该使用中转变量进行更爱，如data、计算属性
对其中的值进行更改,展示。

<script>
export default {
  name:"Student",
  data() {
    return {
      MyAge:this.$props.age,
      name:'wang'
    }
  },
  // 这个是简单声明接受
  // props:["name","sex","age"]
  //接受数据的同时，对数据类型进行限制
/*   props:{
			name:String,
			age:Number,
			sex:String
		} */
  //接受数据的同时，对数据类型进行限制+默认值和必填值
   props:{
			name:{
        type:String,
        required:true,
      },
      age:{
        type:Number,
        default:99,
      },
      sex:{
        type:String,
      }
		}
}
</script>

<style>
</style>