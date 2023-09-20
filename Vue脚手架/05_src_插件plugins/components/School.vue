<template>
  <div class="demo">
    <h1>学校名称:{{name}}</h1>
    <h1>学校地址:{{address | mySlice}}</h1>
    <button>点击显示学校名称</button>
  </div>
</template>

<script>

export default {
  name: "School",
  data() {
    return {
      name: "河南科技学院",
      address: "河南省新乡市华兰大道",
      x:1000
    }
  },
};
</script>


 