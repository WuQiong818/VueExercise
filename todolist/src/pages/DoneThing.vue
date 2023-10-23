 <template>
  <div class="doneThing">
    <h1 style="margin-top: 20px">DoneThing</h1>
    <todolist :originalTodos="getFinishedTask"></todolist>
  </div>
</template>

<script>
import todolist from "@/components/Todolist";
import { mapState } from "vuex";
export default {
  name: "DoneThing",
  components: { todolist },
  computed: {
    ...mapState("todolist", ["todos"]),
    getFinishedTask() {
      return this.todos.filter((item) => item.isFinished == true);
    },
  },
};
</script>


<style scoped>
.doneThing {
  margin-left: 23px;
}
</style>