
<script setup>

import { ref, watch } from "vue";

const count = ref(0);
const setCount = function(){
  count.value++
}
// 监听单个
/* watch(count,(newValue,oldValue)=>{
  console.log(newValue,oldValue);
},
{
immediate:true
}) */
// ------------------
const person = ref({
  name:'wangyue',
  age:21
})
const setName= ()=>{
  person.value.name = 'wangye'
}
const setAge = ()=>{
  person.value.age++
}
// 监听多个
/* watch([count,person],(newValue,oldValue)=>{
  console.log(newValue,oldValue);
},
{
immediate:true,
deep:true
}) */

// 只监听人的年龄发生了变化
/* watch(
  ()=>{person.value.age},
  (newValue,oldValue)=>{
  ()=>{console.log(newValue,oldValue)};
}) */
// 这里只有一个值，没有新值和旧值；
watch(
  ()=>person.value.age,
  ()=>console.log(person.value.age)
)


</script>

<template>
 <h1>{{ count }}</h1>
 <button type="button" @click="setCount">点我++</button>
 <br>
 <h1>{{ person }}</h1>
 <button type="button" @click="setName">修改姓名</button>
 <button type="button" @click="setAge">修改年龄</button>

 <br>

</template>

<style scoped>

</style>
