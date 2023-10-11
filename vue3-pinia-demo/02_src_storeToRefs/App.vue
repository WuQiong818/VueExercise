<!-- 02_src_storeToRefs-->
<!-- 
  如果我们结构出来的数据，需要是相应式的，我们就需要使用pinna中的storeToRefs方法
  当我们解析data和computed时就需要使用此方法来获取响应式的数据;
  当我们从store中解析普通方法的时候，可以直接进行解析
  格式：
  import { storeToRefs } from "pinia";
  const {count,double} = storeToRefs(counter);
  const { getList } = channel
 -->

<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "./stores/counter";
import { useChannelStore } from "./stores/channel";
import Bottom from "./components/Bottom.vue";
import Center from "./components/Center.vue";

const counter = useCounterStore()
const channel = useChannelStore()

const { channelList } = storeToRefs(channel)
const { getList } = channel
const {count,double} = storeToRefs(counter);

</script>

<template>
<h1>PiniaDemo测试 - {{ count }} - {{ double }}</h1>
<h1></h1>
<br>
<Bottom></Bottom>
<br>
<Center></Center>
<div>
<button type="button" @click="getList">点我获取channel信息</button>
<br>
<ul>
  <li v-for="item in channelList" :key="item.id">{{ item.name }}</li>
</ul>
</div>
</template>

<style scoped>

</style>
