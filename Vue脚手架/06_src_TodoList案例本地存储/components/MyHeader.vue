<template>
  <div class="todo-header">
    <input type="text" @keyup.enter ="add" v-model="title"  placeholder="请输入你的任务名称，按回车键确认" />
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  props:["addTodo"],
  data() {
    return {
        title:""
    }
  },
  methods: {
    add(){
        //校验数据
        if(this.title.trim() !== ""){
          //包装数据
            const todoObj = {id:""+Date.now(),todo:this.title,achieve:false}
            //调用app组件中的方法，添加todo到list中
            this.addTodo(todoObj)//相当于在这里调用父组件App中传入的方法
            //清空输入框
            this.title = ''
        }else{
          alert("请输入内容")
        }
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>