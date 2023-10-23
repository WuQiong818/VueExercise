<template>
  <div class="myDay">
    <h1 style="margin-top: 20px">MyDay</h1>
    <todolist :originalTodos="getTodayTodos"></todolist>
    <div class="footer">
        <el-footer height="80px">
            <Footer type="todayTask"></Footer>
        </el-footer>
      </div>
  </div>
</template>

<script>
import Todolist from "@/components/Todolist";
import Footer from '@/components/Footer.vue'
import { mapState } from "vuex";
export default {
    name:'MyDay',
    components:{Todolist,Footer},
    computed:{
      ...mapState("todolist",["todos"]),
      getTodayTodos(){
        return this.todos.filter((item)=>
        {
          return item.isTodayTask == true
        })
      }
    },
}
</script>

<style>
.myDay {
  margin-left: 23px;
}

.footer {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 85vw;
}
</style>