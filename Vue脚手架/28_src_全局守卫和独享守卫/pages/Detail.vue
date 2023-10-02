<template>
  <div>
    <!-- 多级路由，上级路由传递params参数，需要更改index.js路由配置中的路径信息，使用/:id/:title进行占位 -->
    <h6>{{ id }}</h6>
    <h6>{{ title }}</h6>
  </div>
</template>

<script>
export default {
  // 还是需要在组件中配置props参数
  props:["id","title"],
  mounted() {
    console.log(this);
  },
};
</script>

<style>
</style>