<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <School></School>
    <!-- 这里就是普通的命名，不允许使用student.name的方式 -->
    <Student name="李四" />

  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'


export default {
  name: "App",
  components:{
    School,
    Student
  },
}
</script>

<style>
</style>