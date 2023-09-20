<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <School ref="school"></School>
    <button @click="but">点我输出组件的内容</button>
  </div>
</template>

<script>
import School1 from './components/School.vue'


export default {
  name: "App",
  components:{
    School : School1,
  },
  methods: {
    but(){
      console.log(this.$refs.school);
    }
  },
}
</script>

<style>
</style>