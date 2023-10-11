<!-- provide 和 inject -->
<!-- 

-->

<script setup>
import Center from './components/CenterCom.vue'
import { provide , ref ,inject,computed } from "vue";
provide("hello","hello Vue3");
const count = ref(1);
provide('count',count);

const addCount = ()=>{
  count.value++;
}
const changeCount = (newValue)=>{
  count.value = newValue;
}
provide("changeCount",changeCount)
/* 
const list = ref([1,2,3,4,5,6,7,8])
const comtest = 12;
const filterList = computed(comtest => list.value.filter(item => item > 2))
 */
</script>

<template>
  <h1>我是top组件</h1>
  <h1>过滤后的数据-{{ filterList }}</h1>
  <button type="button" @click="addCount">count++</button>
  <br>
<Center></Center>
</template>

<style scoped></style>
