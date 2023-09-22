<template>
  <div>
    <School ></School>
    <Student ref="student" />
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
  methods: {
  },
  mounted() {
  },

};
</script>

<style>
</style>