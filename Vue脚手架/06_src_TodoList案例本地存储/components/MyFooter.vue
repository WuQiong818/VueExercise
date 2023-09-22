<template>
  <div class="todo-footer" v-show="isAll">
    <label>
      <!-- 这里input中的两个属性实现的是一个功能，都是初始值的加载，这两个可以合成一个v-model -->
      <!-- <input type="checkbox" :checked="isChecked" @click="checkedAll"/> -->
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
  props: ["todos", "checkedTodo", "deleteTodos"],
  // data() {
  //   return {
  //     value:this.isChecked
  //   }
  // },
  computed: {
    isAll() {
      return this.todos.length;
    },
    isDone() {
      /*  let x = 0;
      this.todos.forEach((todo) => {
        if (todo.achieve) {
          x++;
        }
      });
      return x; */
      /* reduce中有两个参数，一个是函数，另外一个是统计的起始值 
        在函数的两个参数分别是pre,循环前一项的return值，第一个pre是起始值，即第二个参数
        之后的起始值就是上一次执行结果的return返回值。
        函数里面的第二个参数就是每次循环的对象、值，在这里是todos里面的todo每一项      
      */
      return this.todos.reduce((pre, todo) => {
        return pre + (todo.achieve ? 1 : 0);
      }, 0);
    },
    isChecked: {
      get() {
        return this.isAll === this.isDone && this.isAll > 0;
      },
      set(value) {
        // 这个set方法，怎么调用的,set方法如何
        this.checkedTodo(value);
      },
    },
  },
  methods: {
    checkedAll(e) {
      this.checkedTodo(e.target.checked);
    },
    deleteSome() {
      this.deleteTodos();
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