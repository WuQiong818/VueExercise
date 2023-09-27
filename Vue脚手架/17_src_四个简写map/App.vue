<template>
<div>
  <count></count>
</div>

</template>

<script>
import count from "./components/count";
export default {
  name: "App",
  components: { count },
  mounted() {
        console.log("App",this.$store);
  },
};
</script>

<style>

</style>