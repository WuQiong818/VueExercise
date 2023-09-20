<template>
  <div class="demo">
    <h1>学校名称:{{name}}</h1>
    <h1>学校地址:{{address}}</h1>
    <button @click="showName">点击显示学校名称</button>
  </div>
</template>

<script>
//局部注册混合:

// import {hunhe,hunhe2} from '../mixin'
// import hunhe from '../mixin'//单个暴露，不需要使用{}
import {hunhe,hunhe2} from '../mixin'
console.log("@@",hunhe);

export default {
  name: "School",
  data() {
    return {
      name: "河南科技学院",
      address: "河南省新乡市华兰大道",
      x:1000
    }
  },
  mixins:[hunhe,hunhe2]
  // methods: {
  //   showName(){
  //           console.log("这个是school组件中的方法",this.name);
  //       }
  // },
  // mixins:[hunhe,hunhe2]

};
</script>


 