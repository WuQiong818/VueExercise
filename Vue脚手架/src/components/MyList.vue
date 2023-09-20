<template>
  <ul class="todo-main">
    <MyItem v-for="todoObj of todos" :key="todoObj.id" :todoObj="todoObj"/>
  </ul>
</template>

<script>
import MyItem from "./MyItem";
export default {
  name: "MyList",
  components: { MyItem },
  methods: {

  },
  props:["todos"]//不用怀疑，最基础的就是这一个格式
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>