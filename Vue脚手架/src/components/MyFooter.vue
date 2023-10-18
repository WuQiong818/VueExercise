<template>
  <div class="todo-footer" v-show="isAll">
    <label>
      <input type="checkbox" v-model="isChecked" />
    </label>
    <span>
      <span>已完成{{ isDone }}</span> / {{ isAll }}
    </span>
    <button class="btn btn-danger" @click="deleteSome">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos"],
  computed: {
    isAll() {
      return this.todos.length;
    },
    isDone() {
      return this.todos.reduce((pre, todo) => {
        return pre + (todo.achieve ? 1 : 0);
      }, 0);
    },
    isChecked: {
      get() {
        return this.isAll === this.isDone && this.isAll > 0;
      },
      set(value) {
        this.$emit('checkedTodo',value)
      },
    },
  },
  methods: {
    checkedAll(e) {
      this.checkedTodo(e.target.checked);
    },
    deleteSome() {
      this.$emit("deleteTodos");
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>