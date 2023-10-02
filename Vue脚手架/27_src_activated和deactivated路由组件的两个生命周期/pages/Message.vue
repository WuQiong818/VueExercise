<template>
  <div>
    <h1 :style="{ opacity }">欢迎学习Vue</h1>
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
        <input type="text" />
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
      opacity:1,
    };
  },
  activated() {
    this.timer = setInterval(() => {
      console.log(1);
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 16);
  },
  deactivated() {
    clearInterval(this.timer);
  },
};
</script>

<style>
ul li button {
  margin-left: 10px;
}
</style>