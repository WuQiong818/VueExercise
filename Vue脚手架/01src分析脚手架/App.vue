<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School1 from './components/School.vue'
import Student1 from './components/Student.vue'

/* 
注意这里有两个对应:
一是:import引入文件后面的名称和组件注册时候的组件名相对应;
二是:注册成功后的组件名要与使用的标签名相对应;
在vue中，仍然是限制性html、css、js,我们把下方的js中的内容给注释了，虽然控制台会报错
但是可以看到样式已经被加载出来了
*/

export default {
  name: "App",
  components:{
    School : School1,
    Student :Student1,
  }
}
</script>

<style>
</style>