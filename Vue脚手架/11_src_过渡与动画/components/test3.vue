<template>
  <div>
    <button @click="show">显示与隐藏</button>
    <transition-group>
    <h1 v-show="!isShow" :key='1+1' class="headline">你好</h1>
    <h1 v-show="isShow" :key='2+1' class="headline">wangye</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "test3",
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