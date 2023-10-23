<template>
  <div>
    <div class="target">
      <input type="checkbox" :checked="todoCopy.isFinished" @click="ALTERCHECKBOX(todoCopy)"/>
      <span>总任务: {{ todoCopy.todoThing.title }}</span>
    </div>
    <div class="steps">
      <div v-for="(item, index) in todoCopy.todoThing.steps" :key="index">
        <input type="checkbox" :checked="item.stepIsFinished" @click="alterCheckBox(index)"/>
        <span>步骤{{ index + 1 }} - {{ item.stepTitle }}</span>
        <el-button
          type="danger"
          icon="el-icon-delete"
          @click="deletedSteps(index)"
          circle
        ></el-button>
      </div>
    </div>
    <DrawFooter :todoObj="todoCopy" />
<!--     <div class="block">
      <span class="demonstration">截止日期:</span>
      <el-date-picker
        v-model="deadlineTime"
        type="date"
        placeholder="选择日期"
        format="yyyy 年 MM 月 dd 日"
        value-format="timestamp"
        @change="deadline"
      >
      </el-date-picker>
    </div> -->
  </div>
</template>

<script>
import DrawFooter from "@/components/DrawFooter.vue";
import { mapMutations } from "vuex";
export default {
  name: "DrawTodo",
  components: {
    DrawFooter,
  },
  props: ["todoObj"],
  data() {
    return {
      deadlineTime: this.todoObj.todoThing.deadline,
      todoCopy:this.todoObj,
    }
  },
  methods: {
      ...mapMutations("todolist", [
            "DELETEDSTEPS",
            "SETDEADLINE",
            "ALTERCHECKBOX",
            "ALTERCHESTEPSCKBOX"
        ]),
    deletedSteps(index) {
      this.todoCopy.todoThing.steps.splice(index, 1);
      this.DELETEDSTEPS(this.todoCopy);
    },
    deadline() {
      this.todoCopy.todoThing.deadline = this.deadlineTime;
      this.SETDEADLINE(this.todoCopy);
    },
    alterCheckBox(index){
      const nowState = this.todoCopy.todoThing.steps[index].stepIsFinished
      this.todoCopy.todoThing.steps[index].stepIsFinished = !nowState
      this.todoCopy.todoThing.steps[index].stepFinishedTime = Date.now()
      this.ALTERCHESTEPSCKBOX(this.todoCopy)
    }
  },
};
</script>

<style>
.target {
  margin-left: 10px;
  font-size: 26px;
  vertical-align: baseline;
}
.target input {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}
.steps {
  margin-left: 20px;
  width: 400px;
  overflow: hidden;
}
.steps div {
  position: relative;
}
.steps input {
  margin-right: 5px;
}
.steps span {
  padding: 3px;
}
.steps .el-button.is-circle {
  position: absolute;
  right: 3px;
  top: 11px;
  padding: 6px;
}
/* ------------------------ */
.demonstration {
  margin: 0px 15px;
}
</style>