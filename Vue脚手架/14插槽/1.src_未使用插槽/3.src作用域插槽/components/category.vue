<template>
  <ul class="category">
    <h2>{{ title }}</h2>
    <slot :games="games" hello="你好">内容正在加载中</slot>
  </ul>
</template>

<script>
export default {
  name: "category",
  props: ["title"],
    data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
</style>