<!-- 01_src_pinia入门 -->

<script setup>
// import { useCounterStore } from "./stores/counter";
import { useChannelStore } from "./stores/channel";

// import Bottom from "./components/Bottom.vue";
// import Center from "./components/Center.vue";

// const counter = useCounterStore()
const channel = useChannelStore()


</script>

<template>
<h1>PiniaDemo测试</h1>
<br>
<!-- <br>
<h1>{{ counter.double }}</h1>
<br>
<h2>count= {{ counter.count }}</h2>
<Bottom></Bottom>
<br>
<Center></Center> -->
<button type="button" @click="channel.getList">点我获取channel信息</button>
<br>
<ul>
  <li v-for="item in channel.channelList" :key="item.id">{{ item.name }}</li>
</ul>

</template>

<style scoped>

</style>
