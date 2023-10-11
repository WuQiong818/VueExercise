<script setup>
import { useCounterStore } from '../stores/counter';
const counter = useCounterStore()
defineOptions({
    name: 'Center'
})
</script>

<template>
    <div>
        <h1>Center {{ counter.count }}</h1>
        <button type="button" @click="counter.subtract">-</button>
    </div>
</template>


<style></style>