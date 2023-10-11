<script setup>
import { defineModel } from "vue";
const modelValue = defineModel()
defineOptions({
    // name:'YourVue'
})
</script>


<template>
    <input 
    type="text"
    :value="modelValue"
    @input= "e => modelValue = e.target.value">
</template>

<style>


</style>