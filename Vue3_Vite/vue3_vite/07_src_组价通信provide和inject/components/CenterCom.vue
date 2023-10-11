<script setup>
import Bottom from "./BottomCom.vue";
import { inject } from "vue";
const hello = inject("hello")
</script>

<template>
    <h2>我是Center组件-{{ hello }}</h2>
    <br>
    <Bottom></Bottom>
</template>


<style scoped></style>