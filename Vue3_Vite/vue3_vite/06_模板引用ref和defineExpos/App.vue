<!-- 06_模板引用ref和defineExpose -->
<!-- 
  组合式API模板引用
  模板引用：通过ref标识获取真实的dom对象或者组件实例对象;
  使用步骤: 1.从vue中引用ref对象
            2.通过ref标识绑定一个ref对象到标签内
-->

<script setup>
import  Son  from "./components/Son.vue";
import { ref } from "vue";
const divRef = ref(null);
const sendH1 = ()=>{
  console.log(divRef.value.children[0].innerText);
}
const sendDiv = ()=>{
  divRef.value.children[1].focus();
}
// -----------------
const comRef = ref(null)
const sendInfo = ()=>{
  comRef.value.sayHi()
  console.log(12);
}
</script>

<template>
<div ref="divRef">
<h1 >hello Vue3</h1>
<input type="text">
<button type="button" @click="sendH1">点我输出h1</button>
<button type="button" @click="sendDiv">点我输出div元素</button>
</div>
<hr>
<Son ref="comRef">
</Son>
<button type="button" @click="sendInfo">点我获取组件信息</button>
</template>

<style scoped></style>
