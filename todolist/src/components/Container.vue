<template>
  <el-container>
    <el-aside width="15vw">
      <Navigation />
    </el-aside>
    <div class="main">
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
      <div class="footer">
        <el-footer height="80px">
            <Footer></Footer>
        </el-footer>
      </div>
    </div>
  </el-container>
</template>
      
<script>
import { nanoid } from "nanoid";
import Footer from "./Footer.vue";
import Navigation from "./Navigation.vue";
export default {
  name: "Container-View",
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      name: this.$store.state.name,
      password: this.$store.state.password,
      id: nanoid(),
    };
  },
  computed: {
    computedId() {
      return nanoid();
    },
  },
  mounted() {
    console.log("挂载成功");
    console.log(this.$store.state.name);
  },
};
</script>
      
<style scoped>
.main {
  height: 100vh;
  width: 85vw;
  background-color: skyblue;
  position: relative;
  overflow: hidden;
}

.footer {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 85vw;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
      