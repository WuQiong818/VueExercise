<template>
  <div class="task">
    <h1 style="margin-top: 20px">Task</h1>
    <!-- 这边进行一个未完成和已完成的划分 -->
    <todolist :originalTodos="originalTodos"></todolist>
    <div class="footer">
      <el-footer height="80px">
        <Footer></Footer>
      </el-footer>
    </div>
  </div>
</template>

<script>
import todolist from "@/components/Todolist";
import Footer from "@/components/Footer";
export default {
  name: "Task",
  components: { todolist,Footer },
  computed: {
    originalTodos() {
      return this.$store.state.todolist.todos;
    },
  },
};
</script>

<style scoped>
.task {
  margin-left: 23px;
}
.footer {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 85vw;
}
</style>