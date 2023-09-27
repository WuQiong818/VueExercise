<template>
  <div>
    <h1>当前求和为{{ num }}</h1>
    <h1>当前求和放大10倍为:{{bigSum}}</h1>
    <h1>下方的人数为{{persons.length}}</h1>
    <h1>在{{ address }}</h1>
    <h1>学习{{ subject }}</h1>
    <select v-model.number="select">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(select)">+</button>
    <button @click="subtraction(select)">-</button>
    <button @click="oddAdd(select)">当前和为奇数再加</button>
    <button @click="waitAdd(select)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: "count",
  data() {
    return {
      select: 1,
    };
  },
  computed: {
    ...mapState("countAbout",["num","address","subject"]),
    ...mapState("personAbout",["persons"]),
    ...mapGetters("countAbout",["bigSum"])
  },
  methods: {
    ...mapMutations("countAbout",{add:"ADD",subtraction:"SUBTRACTION"}),
    ...mapActions("countAbout",['oddAdd','waitAdd'])
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style scoped>
button {
  margin-left: 15px;
}
</style>