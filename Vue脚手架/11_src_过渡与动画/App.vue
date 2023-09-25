<template>
  <div>
    <test />
    <test2 />
    <test3 />
    <test4 />

  </div>
</template>

<script>
import test from "./components/test";
import test2 from "./components/test2";
import test3 from "./components/test3";
import test4 from "./components/test4";


export default {
  name: "App",
  components: { test, test2,test3,test4 },
};
</script>



<style>
</style>