<template>
  <div>
    <h1>当前求和为{{ num }}</h1>
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
      num: 0,
      select: 1,
    };
  },
  methods: {
    add() {
      this.num = this.num + this.select;
    },
    subtraction() {
      this.num = this.num - this.select;
    },
    oddAdd() {
      if (this.num % 2 == 0) {
        return;
      }
      this.num = this.num + this.select;
    },
    waitAdd() {
      setTimeout(() => {
        this.num = this.num + this.select;
      }, 5000);
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 15px;
}
</style>