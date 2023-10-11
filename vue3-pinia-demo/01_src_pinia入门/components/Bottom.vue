<script setup>
import { useCounterStore } from '../stores/counter';
const counter = useCounterStore()
defineOptions({
    name:'Bottom'
})
</script>


<template>
<h1>Bottom{{ counter.count }}</h1>
<br>
<button type="button" @click="counter.increment">+</button>
</template>


<style>

</style>