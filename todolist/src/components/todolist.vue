<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item :title="getUnfinishedCount" name="1" v-show="!getUnfinishedTodo.length == 0">
        <todoItem
          v-for="todoObj in getUnfinishedTodo"
          :key="todoObj.id"
          :todoObj="todoObj"
        ></todoItem>
      </el-collapse-item>

      <el-collapse-item :title="getFinishedCount" name="2" v-show="!getFinishedTodo.length == 0">
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
  props:["originalTodos"],
  data() {
    return {
      activeNames: ["1"],
    };
  },
  computed: {
    getUnfinishedCount(){
        const number = this.getUnfinishedTodo.length
        return "未完成  " +number
    },
    getFinishedCount(){
        const number = this.getFinishedTodo.length
        return "已完成  " +number
    },
    // 这两个方法就是负责展示已完成和未完成任务的，其他的不要管
    // 数据从传入的props中获取，不直接从vuex中进行获取
    getUnfinishedTodo() {
      return this.$props.originalTodos.filter(
        (item) => item.isFinished == false
      );
    },
    getFinishedTodo() {
      return this.$props.originalTodos.filter(
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