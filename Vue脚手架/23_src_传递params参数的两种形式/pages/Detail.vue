<template>
  <div>
    <!-- 多级路由，上级路由传递query参数，不需要更改index.js路由配置中的路径信息，不需要进行占位 -->
    <!-- <h6>{{$route.query.id}}</h6>
    <h6>{{$route.query.title}}</h6> -->

    <!-- 多级路由，上级路由传递params参数，需要更改index.js路由配置中的路径信息，使用/:id/:title进行占位 -->
      <h6>{{$route.params.id}}</h6>
    <h6>{{$route.params.title}}</h6>
  </div>
</template>

<script>
    export default {
        mounted() {
            console.log(this);
        },
    }
</script>

<style>

</style>