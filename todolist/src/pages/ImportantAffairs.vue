<template>
  <div class="ImportantAffairs">
    <h1 style="margin-top: 20px">ImportantAffairs</h1>
    <todolist :originalTodos="getTodayTodos"></todolist>
    <div class="footer">
        <el-footer height="80px">
            <Footer type="importantTask"></Footer>
        </el-footer>
      </div>
  </div>
</template>

<script>
import Todolist from "@/components/Todolist";
import Footer from '@/components/Footer.vue'
import { mapState } from "vuex";
export default {
    name:'ImportantAffairs',
    components:{Todolist,Footer},
    computed:{
      ...mapState("todolist",["todos"]),
      getTodayTodos(){
        return this.todos.filter((item)=>{
          return item.isImportance == true
        })
      }
    },
}
</script>

<style>
.ImportantAffairs {
  margin-left: 23px;
}

.footer {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 85vw;
}
</style>