<template>
  <div class="inputBox">
    <input
      placeholder="请输入内容,按Enter进行任务的添加"
      v-model="input"
      ref="inputValue"
      @keyup.enter="add"
    />
  </div>
</template>
      
<script>
import { mapMutations } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "Container-Footer",
  props: ["type"], //todayTask,importantTask,task
  data() {
    return {
      input: "",
    };
  },
  methods: {
    ...mapMutations({ ADD: "todolist/ADD" }),
    add() {
      if (!this.$refs.inputValue.value.trim()) {
        alert("输入不能为空");
      } else {
        const todoObj = {
          id: nanoid(),
          todoThing: {
            title: this.$refs.inputValue.value,
            steps: [],//数组对象，有每一个对象有两个参数：stepIsFinished,stepTitle
            startTime: Date.now(),
            deadline:null
          },
          isFinished: false,
          isTodayTask: false,
          isImportance: false,
          isEdit: false,
        };
        if (this.type != undefined) {
          if (this.type == "todayTask") {
            todoObj.isTodayTask = true;
          } else if (this.type == "importantTask") {
            todoObj.isImportance = true;
          }
        }

        this.ADD(todoObj);
        this.$nextTick(function () {
          this.$refs.inputValue.value = "";
        });
      }
    },
  },
};
</script>
      
<style scoped>
.inputBox {
  margin-top: 10px;
}
.inputBox input {
  width: 90%;
  height: 45px;
  font-size: 20px;
  border: 1px solid;
  border-radius: 10px;
  padding: 0px 30px;
  margin-top: 20px;
}
.inputBox button {
  height: 47px;
  width: 50px;
  border: 1px solid;
  border-left: 0px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
input,
button {
  float: left;
}
</style>
      