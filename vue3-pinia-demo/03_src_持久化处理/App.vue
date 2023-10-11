<!-- storeToRefs响应式解构 -->
<!-- 
  如果我们结构出来的数据，需要是相应式的，我们就需要使用pinna中的storeToRefs方法
  当我们解析state和getter时就需要使用此方法来获取响应式的数据;
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
const {count,double,info} = storeToRefs(counter);
const {setName,setTelephone,setNickName} = counter;

</script>

<template>
<h1>PiniaDemo测试 - {{ count }} - {{ double }}</h1>
<br>
<div>
<h2>个人信息</h2>
<h1>{{ info.name }}</h1><button type="button" @click="setName">改名字</button>
<h1>{{ info.telephone }}</h1><button type="button" @click="setTelephone">改电话</button>
<h1>{{ info.nickName }}</h1><button type="button" @click="setNickName">改昵称</button>


</div>
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
