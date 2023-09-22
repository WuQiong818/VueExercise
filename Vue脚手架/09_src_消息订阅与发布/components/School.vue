<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="unPubsub">取消订阅学生的信息</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京昌平",
    };
  },
  methods: {
    //在这里取消订阅信息
    msgPubsub(msgName, data) {
      console.log("有人发布了hello消息,hello消息的回调执行了!!",msgName, data);
    },
    unPubsub() {
      pubsub.unsubscribe(this.pid);
    },
  },
  mounted() {
    this.pid = pubsub.subscribe("hello",this.msgPubsub);
  },
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>