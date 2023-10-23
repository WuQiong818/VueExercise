<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addTodo="addTodo" />
      <MyList :todos="todos" :isAchieve="isAchieve" :deleteTodo="deleteTodo" />
      <MyFooter
        :todos="todos"
        :checkedTodo="checkedTodo"
        :deleteTodos="deleteTodos"
      />
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MyList from "./components/MyList";

export default {
  name: "App",
  components: { MyHeader, MyFooter, MyList },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [], //这里写的是真巧妙呀！
    };
  },
  methods: {
    // data在哪里，哪里对数据进行修改的操作。
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    isAchieve(todoObj) {
      this.todos.forEach((todo) => {
        if (todo.id == todoObj.id) {
          todo.achieve = !todo.achieve;
        }
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    checkedTodo(done) {
      this.todos.forEach((todo) => {
        todo.achieve = done;
      });
    },
    deleteTodos() {
      this.todos = this.todos = this.todos.filter((todo) => {
        return todo.achieve != true;
      });
    },
  },
  watch:{
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem("todos", JSON.stringify(value));
      }
    }
  }
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>