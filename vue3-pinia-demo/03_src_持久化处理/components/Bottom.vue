<script setup>
import { useCounterStore } from '../stores/counter';
const counter = useCounterStore()
defineOptions({
    name: 'Bottom'
})
</script>


<template>
    <div>
        <h1>Bottom{{ counter.count }}</h1>
        <button type="button" @click="counter.increment">+</button>
    </div>
</template>


<style></style>