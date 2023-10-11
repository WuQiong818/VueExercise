<script setup>

import { ref, computed } from "vue";

// 原始数据
const count = ref(0)
const setCount = function () {
  count.value++
}

// 原始数据
const list = ref([1, 2, 3, 4, 5, 6, 7, 8])
// 计算属性list
const filterList = computed(() => {
  return list.value.filter(item => item > 2)
})
// 使用ref进行数据生成的时候一定要加上.value；
// 箭头函数不写只有一句话不写{}，会自动将值进行返回吗？
// 这个是箭头函数的一个特性，当方法只有一句的时候，会自动将结果作为返回值。

const filterList1 = computed(
  function () {
    return list.value.filter(num =>
      num > 2
    )
  }
)

// 计算实行基本使用方式并没有发生变化，还是和之前一样，也是需要书写return的
const doubleCount = computed(
  function () {
    return count.value * 2
  }
)
// 计算属性

</script>

<template>
  <h1>num:{{ count }}</h1>
  <br>
  <button type="button" @click="setCount">点我++</button>
  <br>

  <h1>num:{{ doubleCount }}</h1>
  <br>
  <h1>过滤后的东西:{{ filterList }}</h1>
  <br>
  <h1>过滤后的东西:{{ filterList1 }}</h1>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
