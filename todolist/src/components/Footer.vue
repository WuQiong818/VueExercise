<template>
  <div class="inputBox">
    <input
      placeholder="请输入内容,按Enter进行任务的添加"
      v-model="input"
      ref="inputValue"
      @keyup.enter="add"
    />
    <!-- <button @click="add">ADD</button> -->
  </div>
</template>
      
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Container-Footer",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    ...mapMutations({ ADD: "todolist/ADD" }),
    add(){
      this.ADD(this.$refs.inputValue.value)
      this.$nextTick(function(){
        this.$refs.inputValue.value = ''
      })
    }
  },
  mounted() {
    console.log(this);
    console.log(this.$refs.inputValue);

    console.log();
  },
};
</script>
      
<style scoped>
.inputBox {
  /* 没有作用 */
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
      