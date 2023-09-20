<template>
  <div>
    <h1>学生姓名:{{ name }}</h1>
    <h1>学生年龄:{{ age }}</h1>
    <h1>学生性别:{{ sex }}</h1>
    <button @click="showName">点我显示名称</button>
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
  methods: {
    showName() {
      console.log(this.name);
    }
  }
};
</script>

<style>
</style>