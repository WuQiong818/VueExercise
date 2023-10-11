<!-- 
  生命周期: 先输出setup，之后再输出beforeCreate
  由于setup钩子在beforeCreate之前去执行，所以这里的this并没有进行定义，并不指向任何的组件。
  也正是因为this并不指向任何的组件，所以才可以实现组合式的效果。
  
  // setup的语法糖 进行简化不需要书写return导出语句
 -->
<script setup>
const message = "Hello Vue311"
function sendMessage() {
  console.log("信息发送成功");
}
</script>

<template>
  <!-- template模板不再要求唯一的根元素 -->
  <h1>{{ message }}</h1>
  <br>
  <button type="button" @click="sendMessage">按钮</button>
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
