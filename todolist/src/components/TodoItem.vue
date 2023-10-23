<template>
  <!-- v-show="judgeFinishState" -->
  <div class="todoItem">
    <label>
      <input
        class="checkBox"
        type="checkbox"
        @change="ALTERCHECKBOX(todoCopy)"
        :checked="todoCopy.isFinished"
      />
      <span v-show="!todoCopy.isEdit">{{ todoCopy.todoThing.title }}</span>
      <input
        class="alterBox"
        v-show="todoCopy.isEdit"
        type="text"
        :value="todoCopy.todoThing.title"
        @blur="handerBlur(todoCopy, $event)"
        ref="inputBox"
      />
    </label>

    <div class="operatingButton">
      <div class="circleIcon">
        <el-button
          type="warning"
          :icon="todoCopy.isImportance ? 'el-icon-star-on' : 'el-icon-star-off'"
          circle
          ref="buttonIco"
          @click="changeWeight(todoCopy)"
        ></el-button>
      </div>
      <el-button
        @click="drawer = true"
        type="primary"
        style="margin-left: 16px"
      >
        点我打开
      </el-button>
      <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
        <!-- 这里面可以进行其他功能的嵌套，非常不错 -->
        <DrawTodo :todoObj ="todoObj"/>
      </el-drawer>
      <el-button type="primary" @click="edit(todoCopy)">编辑</el-button>
      <el-button type="danger" @click="todoDeleted(todoCopy)">删除</el-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import DrawTodo from "./DrawTodo.vue";
export default {
    name: "todoItem",
    components:{
      DrawTodo
    },
    props: ["todoObj"],
    data() {
        return {
            drawer: false,
            todoCopy:this.todoObj
        };
    },
    methods: {
        //通过map方法结构之后，可以直接通过this.进行访问
        ...mapMutations("todolist", [
            "EDIT",
            "ALTER",
            "DELETE",
            "ALTERCHECKBOX",
            "CHANGEWEIGHT",
        ]),
        edit(todoCopy) {
            this.EDIT(todoCopy);
            this.$nextTick(function () {
                this.$refs.inputBox.focus();
            });
        },
        handerBlur(todoCopy, e) {
          todoCopy.isEdit = false;
            if (!e.target.value.trim()) {
                alert("输入不能为空");
                return;
            }
            todoCopy.todoThing.title = e.target.value;
            this.ALTER(todoCopy);
        },
        todoDeleted(todoCopy) {
            if (confirm("确定删除该" + todoCopy.todoThing.title + "吗?")) {
                this.DELETE(todoCopy);
            }
        },
        changeWeight(todoCopy) {
            this.CHANGEWEIGHT(todoCopy);
        },
    },
    components: { DrawTodo }
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
  margin-left:15px;
}

.alterBox {
  /* position: absolute;
  top: 0px; */
  float: left;
  font-size: 20px;
  height: 46px;
  line-height: 45px;
}

/* ----------Element-UI-------------------- */
.el-button {
  padding: 12px 15px;
  margin-left: 15px;
}
.circleIcon {
  /* position: absolute;
  top: 0px;
  right: 140px; */
  float: left;
  height: 45px;
  width: 45px;
  border-radius: 45px;
  padding: 0px 0px;
  margin-right: 17px;
}
.circleIcon /deep/ .el-icon-star-on,
.circleIcon /deep/ .el-icon-star-off {
  font-size: 20px;
}
</style>