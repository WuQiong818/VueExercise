<template>
  <div class="task">
    <h1 style="margin-top: 20px">Task</h1>
    <!-- 这边进行一个未完成和已完成的划分 -->
    <todolist></todolist>
  </div>
</template>

<script>
import todolist from "@/components/todolist.vue";
export default {
  name: "Task",
  components: { todolist },
  // data() {
  //   return {
  //     activeNames: ["1"],
  //   };
  // },
  /* 
             finishState="unfinished"
             finishState="finished"

*/
/*   computed: {
    title() {
      return getFinishedTodo.length;
    },
    // 在这边加上一组过滤器也挺舒服的
    getUnfinishedTodo() {
      return this.$store.state.todolist.todos.filter(
        (item) => item.isFinished == false
      );
    },
    getFinishedTodo() {
      return this.$store.state.todolist.todos.filter(
        (item) => item.isFinished == true
      );
    },
  }, */
  // mounted(){
  //   console.log("@@",this);
  // }
};
</script>

<!-- <style scoped>
.task {
  margin-left: 23px;
}
.el-collapse {
  margin-top: 25px;
  border: 1px solid #87ceeb;
}
.el-collapse-item {
  width: 90%;
  margin-left: 20px;
}
.el-collapse /deep/.el-collapse-item__header {
  padding-left: 20px;
  font-size: 17px;
}
/*
/deep/ .el-collapse-item__content{
  width: 90%;
  margin-left: 30px;

} */
</style> -->