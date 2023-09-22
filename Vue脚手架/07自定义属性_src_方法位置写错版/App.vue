<template>
  <div>
    <School :showSchoolName="showSchoolName"></School>
    <Student v-on:atguigu="test"/>
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
    showSchoolName(schoolName) {
      console.log("APP中学校的名称", schoolName);
    },
  },
  test(){
    console.log("test被调用了");
  },
  getStudentName(name, ...params) {
    console.log("App收到了学生名：", name, params);
  },
};
</script>

<style>
</style>