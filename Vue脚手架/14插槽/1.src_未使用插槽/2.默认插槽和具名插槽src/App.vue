<template>
  <div class="container">
    <category title="美食">
      <li slot="center" v-for="(item, index) in this.foods" :key="index">{{ item }}</li>
    </category>

    <category title="游戏">
      <li slot="foot" v-for="(item, index) in this.games" :key="index">{{ item }}</li>
    </category>

    <category title="电影">
      <li slot="center" v-for="(item, index) in this.films" :key="index">{{ item }}</li>
      <h1 slot="foot">Hello</h1>
    </category>
  </div>
</template>

<script>
import category from "./components/category";
export default {
  name: "App",
  components: { category },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>