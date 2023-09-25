<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />&nbsp;<button @click="searchInfo">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "search",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    searchInfo() {
      this.$bus.$emit("sendSearchInfo", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      //配置完代理了，如何发送请求，获取自己想要的信息，通过axios
      axios.get("https://api.github.com/search/users?q=" + this.keyword).then(
        (response) => {
          console.log("请求发送成功");
          this.$bus.$emit("sendSearchInfo", {
            isFirst: false,
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          this.$bus.$emit("sendSearchInfo", {
            isFirst: false,
            isLoading: false,
            errMsg: error.message,
            users:[],
          });
        }
      );
    },
  },
};
</script>

<style>
</style>