<script setup>

/* 
我们在组件标签里面书写v-model
相当于创造出了一个modelValue的配置项和
一个update:modelValue的响应事件；
*/ 


defineProps({
    modelValue:String
})
const emit = defineEmits(['update:modelValue'])
</script>


<template>
    <input 
    type="text" 
    :value="modelValue"
    @input="e => emit('update:modelValue',e.target.value)"
    >
</template>

<style>


</style>