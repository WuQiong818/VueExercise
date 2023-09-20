<template>
  <div class="demo">
    <h1>学校名称:{{ school.name }}</h1>
    <h1>学校地址:{{ school.address }}</h1>
    <button @click="showDom" ref="but">点我提示学校名</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      school: {
        name: "河南科技学院",
        address: "河南省新乡市华兰大道",
      },
    }
  },
  methods: {
    showDom() {
      console.log(this);
      console.log(this.$refs);
      console.log(this.$refs.but);
      this.$refs.but.innerText = "你被替换了"

    }
  },
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>

 