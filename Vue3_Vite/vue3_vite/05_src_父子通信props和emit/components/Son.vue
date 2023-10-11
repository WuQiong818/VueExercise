<script setup>
const props = defineProps({
    car:String,
    money:Number,
})

const emit = defineEmits(['consume'])
const cost = ()=>{
    emit('consume',10,100,1000)
}

</script>

<template>
    <div class="son">
        <h1>子组件</h1>
        <h1>财产:{{ car }}</h1>
        <h1>财产:{{ money }}</h1>
        <button type="button" @click="cost">cost</button>
    </div>
</template>

<style scoped>
    .son{
        border: 1px solid blue;
    }
</style>