<!-- 08_src_defineModel -->

<script setup>
import { ref } from "vue";
import YourInput from './components/Your.vue'
const txt = ref('123456');
</script>

<template>
<h1>{{ txt }}</h1>
<br>
<YourInput v-model="txt"></YourInput>
<!-- <input type="text" v-model="txt">
<input type="text" v-model=txt> -->
</template>

<style scoped>

</style>
