<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <a class="list-group-item" href="./about.html">About</a>
          <a class="list-group-item active" href="./home.html">Home</a> -->
          
          <!-- 这里填写的标签需要注意一下：
          1. a标签改成router-link href改成to属性，
          后面不再是路径了，而是key，即在routed中配置的路径规则
           -->
          <router-link active-class="active" class="list-group-item" to="/about">About</router-link>
          <router-link active-class="active" class="list-group-item " to="/home">Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>
</style>