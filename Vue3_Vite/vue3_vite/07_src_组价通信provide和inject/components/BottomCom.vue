<script setup>
import { inject,provide } from "vue";
const hello = inject("hello");
const count = inject("count");
const changeCount = inject("changeCount");
const change = ()=>{
    changeCount(100)
}
provide('test','haha')
</script>

<template>
    <h3>我是Bottom组件-{{ hello }}</h3>
    <br>
    <h3>Count : {{ count }}
    </h3>
    <button type="button" @click="change">点我改变数字</button>
</template>

<style scoped>

</style>