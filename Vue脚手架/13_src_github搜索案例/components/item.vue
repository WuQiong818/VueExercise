<template>
  <div>
    <div class="row">
      <div
        class="card"
        v-for="user in info.users"
        :key="user.login"
      >
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.login }}</p>
      </div>
    </div>
    <h1 v-show="info.isFirst">welcome to search</h1>
    <h1 v-show="info.isLoading">loading</h1>
    <h1 v-show="info.errMsg">{{info.errMsg}}</h1>
  </div>
</template>

<script>
export default {
  name: "item",
  data() {
    return {
      info: {
        isFirst:true,
        isLoading:false,
        errMsg:'',
        users: [],
      },
    };
  },
  methods: {
    getSearchInfo(searchResult) {
      // this.info.users = searchResult.users;
      // this.info.isFirst = searchResult.isFirst;
      // this.info.isLoading = searchResult.isLoading;
      // this.info.errMsg = searchResult.errMsg;
      this.info={...this.info,...searchResult}
    },
  },
  mounted() {
    this.$bus.$on("sendSearchInfo", this.getSearchInfo);
  },
};
</script>