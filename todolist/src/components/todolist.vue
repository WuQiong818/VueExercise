<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="未完成" name="1">
        <todoItem
          v-for="todoObj in getUnfinishedTodo"
          :key="todoObj.id"
          :todoObj="todoObj"
        ></todoItem>
      </el-collapse-item>
      <el-collapse-item title="已完成" name="2">
        <todoItem
          v-for="todoObj in getFinishedTodo"
          :key="todoObj.id"
          :todoObj="todoObj"
        ></todoItem>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import todoItem from "@/components/TodoItem";
export default {
  name: "Todolist",
  components: { todoItem },
  data() {
    return {
      activeNames: ["1"],
    };
  },
  computed: {
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
  },
};
</script>

<style scoped>
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

.el-collapse /deep/ .el-collapse-item__wrap{
  max-height: 290px ;
  overflow: auto;
}
</style>