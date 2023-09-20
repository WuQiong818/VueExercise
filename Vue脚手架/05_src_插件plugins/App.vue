<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <School></School>
    <!-- 这里就是普通的命名，不允许使用student.name的方式 -->
    <Student></Student>

  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'


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