<template>
  <div>
    <h1>学生姓名:{{ name }}</h1>
    <h1>学生年龄:{{ age }}</h1>
    <h1>学生性别:{{ sex }}</h1>
    <button @click="hello()">hello</button>
    <input type="text" v-fbind:value = name>
  </div>
</template>

<script>

export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 19,
      sex: "男",
    };
  },
};
</script>

<style>
</style>