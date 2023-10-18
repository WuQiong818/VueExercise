<template>
  <!-- v-show="judgeFinishState" -->
  <div class="todoItem" >
    <label>
      <input
        class="checkBox"
        type="checkbox"
        @change="ALTERCHECKBOX(todoObj)"
        :checked="todoObj.isFinished"
      />
      <span v-show="!todoObj.isEdit">{{ todoObj.todoThing.title }}</span>
      <input
        class="alterBox"
        v-show="todoObj.isEdit"
        type="text"
        :value="todoObj.todoThing.title"
        @blur="handerBlur(todoObj, $event)"
        ref="inputBox"
      />
    </label>
    <div class="operatingButton">
      <el-button type="primary" @click="edit(todoObj)">编辑</el-button>
      <el-button type="danger" @click="todoDeleted(todoObj)">删除</el-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "todoItem",
  /* props中的内容，可以直接在模板中进行使用.
  我如果想要最大程度上去复用这一个组件，
  那么我应该做的就是设计尽可能多的参数，去自定义我的组件
  */
  /* 
finished、unfinished
"finishState"
*/

  props: ["todoObj",],
  data() {
    return {};
  },
  computed: {
    // 这里封装的数据发生更改，不在组件内进行封装，而是有封装了一个大的todolist
    // 直接通过计算，返回一个确定的boolean值
    // judgeFinishState() {
    //   const todoObj = this.$props.todoObj;
    //   const finishState = this.$props.finishState; //我展示的类型是已完成和未完成
    //   if (finishState == "finished") {
    //     console.log("finished",todoObj.isFinished);
    //     return todoObj.isFinished;
    //   }
    //   if(finishState == "unfinished"){
    //     console.log("unfinished",todoObj.isFinished);
    //     return !todoObj.isFinished
    //   }
    // },
  },
  methods: {
    //通过map方法结构之后，可以直接通过this.进行访问
    ...mapMutations("todolist", ["EDIT", "ALTER", "DELETE", "ALTERCHECKBOX"]),

    edit(todoObj) {
      this.EDIT(todoObj);
      this.$nextTick(function () {
        this.$refs.inputBox.focus();
      });
    },
    handerBlur(todoObj, e) {
      console.log("失去焦点了");
      todoObj.isEdit = false;
      if (!e.target.value.trim()) return alter("输入不能为空");
      todoObj.todoThing.title = e.target.value;
      this.ALTER(todoObj);
    },
    todoDeleted(todoObj) {
      if (confirm("确定删除该" + todoObj.todoThing.title + "吗?")) {
        this.DELETE(todoObj);
      }
    },
  },

  mounted() {
    console.log("todoItem", this);
  },
};
</script>

<style scoped>
.todoItem {
  position: relative;
  width: 95%;
  height: 50px;
  line-height: 50px;
  background-color: #c8eae9;
  margin: 10px 20px;
  padding: 0px 10px;
  font-size: 20px;
}
.todoItem .checkBox {
  float: left;
  margin-top: 16px;
  margin-right: 15px;
  width: 25px;
  height: 20px;
}
.operatingButton {
  float: left;
  position: absolute;
  top: -2px;
  right: 7px;
}

.alterBox {
  position: absolute;
  top: 0px;
  font-size: 20px;
  height: 46px;
  line-height: 45px;
}

/* ----------Element-UI-------------------- */
.el-button {
  padding: 12px 15px;
}
</style>