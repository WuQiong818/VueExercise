<template>
  <div>
    <School :showSchoolName="showSchoolName"></School>
    <!-- <Student v-on:getStudentName="showStudentName" /> -->
    <!-- <Student @getStudentName="showStudentName" /> -->
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
    showSchoolName(schoolName) {
      console.log("APP中学校的名称", schoolName);
    },
    showStudentName(studentName) {
      console.log("APP中学生的姓名", studentName);
    },
  },
  mounted() {//写成箭头函数后，就指向正常了
    this.$refs.student.$on("getStudentName", (studentName)=>{
      console.log("APP中学生的姓名", studentName);
      console.log(this);
    });
  },
  //  mounted() {
  //   this.$refs.student.$on("getStudentName", function(studentName) {
  //     console.log("APP中学生的姓名", studentName);
  //     console.log(this);
  //   });
  // },

};
</script>

<style>
</style>