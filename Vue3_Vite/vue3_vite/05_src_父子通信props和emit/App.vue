<!-- 父传子，通过props -->
<!-- 子传父，通过emit事件触发 -->

<script setup>
import Son from "./components/Son.vue";
import { ref } from "vue";
const money = ref(100)
const earnMoney = () => {
  money.value += 10
}
const cost = (value) => {
  money.value = value
}
</script>

<template>
  <button type="button" @click="earnMoney">earn money</button>
  <br>
  <Son car="宝马" :money="money" @consume="cost"></Son>
</template>

<style scoped></style>
