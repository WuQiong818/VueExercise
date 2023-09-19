<template>
  <div>
    <h1>学生姓名:{{ student.name }}</h1>
    <h1>学生年龄:{{ student.age }}</h1>
    <button @click="student.age++">点我年龄+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: {
        name: "wang",
        age: "21",
      }
    }
  }
}
</script>

<style>
</style>