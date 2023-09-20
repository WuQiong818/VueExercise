<template>
  <div>
    <h1>学生姓名:{{ name }}</h1>
    <h1>学生年龄:{{ age }}</h1>
    <h1>学生性别:{{ sex }}</h1>
    <button @click="showName">点我显示名称</button>
  </div>
</template>

<script>
import {hunhe,hunhe2} from '../mixin'
// import hunhe from '../mixin'

export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 19,
      sex: "男",
    };
  },
  // mixins:[hunhe,hunhe2]
  mixins:[hunhe] //局部导入只能通过数组的方式进行，不能够用{}只能用[]

};
</script>

<style>
</style>