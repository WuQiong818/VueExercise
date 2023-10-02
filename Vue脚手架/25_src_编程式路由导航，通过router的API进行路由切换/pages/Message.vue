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
        <button @click="pushSkip(message)">push查看</button>
        <button @click="replaceSkip(message)">replace查看</button>
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
  methods: {
    pushSkip(message) {
      this.$router.push({
        name: "detail",
        query: {
          id: message.id,
          title: message.title,
        },
      });
    },
    replaceSkip(message) {
      this.$router.replace({
        name: "detail",
        query: {
          id: message.id,
          title: message.title,
        },
      });
    },
  },
};
</script>

<style>
ul li button {
  margin-left: 10px;
}
</style>