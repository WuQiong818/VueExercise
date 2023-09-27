<template>
  <div>
    <h1>当前求和为{{ num }}</h1>
    <h1>当前求和放大10倍为:{{bigSum}}</h1>
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
    //我们在计算属性中写的东西，其实是可以进行简化的，结构比较简单，应该是可以进行自动生成的
 /*    num() {
      return this.$store.state.num;
    },
    address() {
      return this.$store.state.address;
    },
    subject() {
      return this.$store.state.subject;
    }, */
    // ...mapState({num111:"num",address:'address',subject:'subject'}),//整个返回时一个对象，在对象那个里面直接书写对象，自然会解析错误。
    ...mapState(["num","address","subject"]),
    /* **************************************************** */
    /* bigSum() {
      return this.$store.getters.bigSum;
    }, */
    // ...mapGetters({bigSum:"bigSum"})
    ...mapGetters(["bigSum"])
  },
  methods: {
    ...mapMutations({add:"ADD",subtraction:"SUBTRACTION"}),
    // add() {
    //   this.$store.commit("ADD", this.select);
    // },
    // subtraction() {
    //   this.$store.commit("SUBTRACTION", this.select);
    // },
    /* *************************************************** */
   /*  oddAdd() {
      this.$store.dispatch("oddAdd", this.select);
    },
    waitAdd() {
      this.$store.dispatch("waitAdd", this.select);
    }, */
    ...mapActions(['oddAdd','waitAdd'])
  },
};
</script>

<style scoped>
button {
  margin-left: 15px;
}
</style>