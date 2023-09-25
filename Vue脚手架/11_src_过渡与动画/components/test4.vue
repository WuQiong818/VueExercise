<template>
  <div>
    <button @click="show">显示与隐藏</button>
    <transition
      name="animate__animated animate__bounce"
      enter-active-class="animate__heartBeat"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow" class="headline">wangye</h1>
    </transition>
  </div>
</template>

<script>
import "animate.css"; //引入库不需要进行配置路径
export default {
  name: "test4",
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    show() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
.headline {
  background-color: skyblue;
}
</style>