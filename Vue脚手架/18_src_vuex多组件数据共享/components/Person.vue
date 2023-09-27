<template>
  <div>
    <h1>Count组件中的求和为:{{num}}</h1>
    <input type="text" v-model="inputName"> 
    <button @click="addPerson">添加</button>
    <ul>
      <li v-for="p in getPersons" :key="p.id">
        {{p.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid';
import { mapState } from 'vuex';
export default {
  name: "Person",
  data() {
    return {
        inputName:''
    }
  },
  computed: {
    getPersons() {
      return this.$store.state.persons
    },
    getSum() {
      return this.$store.state.num
    },
    ...mapState(['num'])
  },
  methods: {
    addPerson(){
        const person = {id:nanoid(),name:this.inputName}
        // 这里我们应该将数据发送到store中,这里不能进行简写了，因为需要进行数据的封装;
        this.$store.commit("ADDPERSON",person);
    }
  },
};
</script>

<style>
</style>