<template>
  <div>
    <h1>当前求和为{{ $store.state.num }}</h1>
    <h1>在{{ $store.state.address }}</h1>
    <h1>学习{{ $store.state.subject }}</h1>
    <select v-model.number="select">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="subtraction">-</button>
    <button @click="oddAdd">当前和为奇数再加</button>
    <button @click="waitAdd">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "count",
  data() {
    return {
      select: 1,
    };
  },
  methods: {
    add() {
      this.$store.commit("ADD", this.select);
    },
    subtraction() {
      this.$store.commit("SUBTRACTION", this.select);
    },
    oddAdd() {
      this.$store.dispatch("oddAdd", this.select);
    },
    waitAdd() {
      this.$store.dispatch("waitAdd", this.select);
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 15px;
}
</style>