<template>
  <div>
    <ul>
      <li v-for="message in messageList" :key="message.id">
        <!-- :to="`/home/home-message/detail?id=${message.id}&title=${message.title}`" -->
        <!-- path:'/home/home-message/detail', -->
        <!-- <router-link to="/home/home-message/detail/666/你好你好">{{message.title}}</router-link> -->
        <!-- <router-link :to="`/home/home-message/detail/${message.id}/${message.title}`">{{message.title}}</router-link> -->

        <!-- <router-link 
        :to = "{
            name:'detail',
            query:{
                id:message.id,
                title:message.title
            }
        }"
        >
        {{message.title}}
        </router-link> -->
        <router-link
          :to="{
            name: 'detail',
            params: {
              id: message.id,
              title: message.title,
            },
          }"
        >
          {{ message.title }}
        </router-link>
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
};
</script>

<style>
</style>