<template>
  <transition appear
  name="animate__animated animate__bounce"
  enter-active-class="animate__flash"
  leave-active-class="animate__bounceOutUp"
  >
    <li>
      <label>
        <input
          type="checkbox"
          @change="statJudgement(todoObj)"
          :checked="todoObj.achieve"
        />
        <!-- 在这里需要加一个判断，判断前挡按钮是否被点击，如果被点击了，就变成input框 -->
        <span v-show="!todoObj.isEdit">{{ todoObj.todo }}</span>
        <input
          v-show="todoObj.isEdit"
          type="text"
          :value="todoObj.todo"
          @blur="handerBlur(todoObj, $event)"
          ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" @click="handerDelete(todoObj.id)">
        删除
      </button>
      <button
        v-show="!todoObj.isEdit"
        class="btn btn-edit"
        @click="handerEdit(todoObj)"
      >
        编辑
      </button>
    </li>
  </transition>
</template>

<script>
import pubsub from "pubsub-js";
import 'animate.css';
export default {
  name: "MyItem",
  props: ["todoObj"],
  data() {
    return {
      todoStatus: this.todoObj.achieve,
    };
  },
  methods: {
    statJudgement(todoObj) {
      this.$bus.$emit("isAchieve", todoObj);
    },
    handerDelete(id) {
      if (confirm("确定删除吗?")) {
        pubsub.publish("deleteTodo", id);
      }
    },
    handerEdit(todoObj) {
      if (todoObj.hasOwnProperty("isEdit")) {
        //如果有则返回true
        todoObj.isEdit = true;
      } else {
        this.$set(todoObj, "isEdit", true);
      }

      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    handerBlur(todoObj, e) {
      todoObj.isEdit = false;
      if (!e.target.value.trim()) return alert("输入不能为空");
      this.$bus.$emit("updateTodo", todoObj, e.target.value); //果然犯这一个错误了
    },
  },
};
</script>

<style scoped>
/* .v-enter-active{
    animation: getInAndOut 1s;
}
.v-leave-active{
    animation: getInAndOut 1s reverse;
}

@keyframes getInAndOut {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0);
    }
} */

/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>