<template>
  <div>
    <ul>
      <li v-for="message in messageList" :key="message.id">
        <router-link
          :to="{
            name: 'detail',
            query: {
              id: message.id,
              title: message.title,
            },
          }"
        >
          {{ message.title }}
        </router-link>
        <input type="text">
      </li>
    </ul>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息1" },
        { id: "002", title: "消息2" },
        { id: "003", title: "消息3" },
      ],
    };
  },
  mounted() {
    console.log("Messag组件挂载了");
  },
  beforeDestroy(){
    console.log("Messag组件销毁了");
  }
};
</script>

<style>
ul li button {
  margin-left: 10px;
}
</style>