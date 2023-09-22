<template>
  <li>
    <label>
      <input
        type="checkbox"
        @change="statJudgement(todoObj)"
        :checked="todoObj.achieve"
      />
      <span>{{ todoObj.todo }}</span>
    </label>
    <button class="btn btn-danger" @click="handerDelete(todoObj.id)">
      删除
    </button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todoObj", "isAchieve","deleteTodo"],
  data() {
    return {
      todoStatus: this.todoObj.achieve,
    };
  },
  methods: {
    statJudgement(todoObj) {
      /* 总结：这里仅仅是判断是否勾选，只有两种状态，不需要以对象的形式进行传递
      直接把id给传回去就可以了 */
      this.isAchieve(todoObj);
      //这里实际上对配置项进行了数据操作。
      // this.todoStatus = !this.todoStatus
      // const temp = todoObj
      // temp.achieve = this.todoStatus
      // console.log(temp);
      // 创建一个新的对象，以防止修改传递给方法的对象
      //  const temp = { ...todoObj };
      //  temp.achieve = !temp.achieve;
      /*   todoObj.achieve=this.todoStatus
      console.log(todoObj.achieve);
      this.isAchieve(todoObj)
      console.log("传输完成",todoObj); */
    },
    handerDelete(id) {
      if (confirm("确定删除吗?")) {
        this.deleteTodo(id)
      }
    },
  },
};
</script>

<style scoped>
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