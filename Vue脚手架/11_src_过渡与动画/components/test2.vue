<template>
  <div>
    <button @click="show">显示与隐藏</button>
    <transition>
      <h1 v-show="isShow" class="headline">你好啊！！！</h1>
    </transition>
    <!-- 这样通过v-show实现了一个效果，什么样的效果呢？ -->

    <!-- 这种动画的效果是：每一次重新加载，或者说是页面中添加动画的DOM元素，
    每一次重新加载到页面的时候，都会重新调用一次动画 -->
  </div>
</template>

<script>
export default {
  name: "test2",
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
  transition: 1s linear;
}

/* 



*/

/* .v-enter-active,
.v-leave-active {
  transition: 1s linear;
} */


.v-enter,
.v-leave-to {
  transform: translate(-100%);
}
.v-enter-to,
.v-leave {
  transform: translateX(0);
}
</style>