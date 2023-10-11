<!-- 
  reactive VS ref 
  1.都需要先从vue中进行导入
  2.使用
 -->
<script setup>
import { reactive } from "vue";
import { ref } from "vue";

const state = ref({
  msg: 'this is msg',
  length:'112'
})
const setState = () => {
  state.value.msg = 'this is ture msg'
  console.log("@@",state);
  console.log("@",state.value);
}

const count = ref(0)
const setCount = function() {
  count.value++
}



const condition = {mood : 'happy'}
const setCondition = ()=>{
  condition.mood = 'sad'
  console.log(condition.mood);
}
let fruit = '香蕉'
const setFruit = ()=>{
  fruit = 'apple'
  console.log(fruit);
}

</script>

<template>
  <!-- template模板不再要求唯一的根元素 -->
  <h1>信息展示{{ state.msg }}</h1>
  <br>
  <button type="button" @click="setState">按钮</button>
  <br>

  <h1>num:{{ count }}</h1>
  <br>
  <button type="button" @click="setCount">点我++</button>
  <br>




  <!-- <h1>心情展示{{ condition.mood }}</h1>
  <br>
  <button type="button" @click="setCondition">按钮</button>

  <h1>字符串展示{{ fruit }}</h1>
  <br>
  <button type="button" @click="setFruit">按钮</button> -->
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
