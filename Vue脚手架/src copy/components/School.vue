<template>
  <div class="demo">
    <h1>学校名称:{{ name }}</h1>
    <h1>学校地址:{{ address }}</h1>
    <button @click="showName">点击显示学校名称</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "河南科技学院",
      address: "河南省新乡市华兰大道",
    };
  },
  methods: {
    showName(){
      console.log(this.name);
    }
  },
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>

 