<template>
  <div>
    <h1>Count组件中的求和为:{{ getSum }}</h1>
    <input type="text" v-model="inputName" />
    <button @click="addPerson">添加</button>
    <ul>
      <li v-for="p in getPersons" :key="p.id">
        {{ p.name }}
      </li>
    </ul>
    <h1>第一个人的姓名是:{{ getFirstName }}</h1>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="randomName">随机添加一个人的姓名</button>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState } from "vuex";
export default {
  name: "Person",
  data() {
    return {
      inputName: "",
    };
  },
  computed: {
    getPersons() {
      return this.$store.state.personAbout.persons;
    },
    getSum() {
      return this.$store.state.countAbout.num;
    },
    getFirstName() {
      /*       this.$store.getters.personAbout/getFirstName,
      由于对象中不能出现/的形式，所以我们要使用[""] */
      return this.$store.getters["personAbout/getFirstName"];
    },
  },
  methods: {
    addPerson() {
      const person = { id: nanoid(), name: this.inputName };
      // 这里我们应该将数据发送到store中,这里不能进行简写了，因为需要进行数据的封装;
      this.$store.commit("personAbout/ADDPERSON", person);
      this.inputName = "";
    },
    addWang() {
      const person = { id: nanoid(), name: this.inputName };
      this.$store.dispatch("personAbout/addWang",person);
      this.inputName = "";
    },
    randomName(){
      this.$store.dispatch("personAbout/addPersonServer");
    }
  },
};
</script>

<style>
</style>