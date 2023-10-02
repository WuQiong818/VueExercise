<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
        <button @click="goback">后退</button>
        <button @click="forward">前进</button>
        <button @click="go">go</button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home" aria-current="page">Home</router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goback(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    },
     go(){
      this.$router.go(2)
    }
  },
};
</script>

<style>
</style>