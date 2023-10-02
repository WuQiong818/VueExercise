<template>
  <div>
    <slideshow />
    <slideUp />
    <ElButton />
  </div>
</template>

<script>
import ElButton from "./components/elbutton.vue";
import slideshow from "./components/slideshow.vue";
import slideUp from "./components/slideUp.vue";
export default {
  name: "App",
  components: {
    slideshow,
    slideUp,
    ElButton,
  },
};
</script>

<style>
</style>