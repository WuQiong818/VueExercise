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
  name: "test",
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

/* .come{
    animation: getInAndOut 1s;
}
.go{
    animation: getInAndOut 1s reverse;
} */
.v-enter-active{
    animation: getInAndOut 1s;
}
.v-leave-active{
    animation: getInAndOut 1s reverse;
}

@keyframes getInAndOut {
    from{
        transform: translate(-100px);
    }
    to{
        transform: translateX(100%);
    }
}


</style>