<template>
  <div class="demo">
    <h1>学校名称:{{ school.name }}</h1>
    <h1>学校地址:{{ school.address }}</h1>
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
  },
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>

 