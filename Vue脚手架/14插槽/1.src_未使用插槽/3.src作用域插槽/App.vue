<template>
  <!-- 数据是相同的，使用子组件是想要实现不同的样式 -->
  <div class="container">
    <category title="游戏">
      <!-- 注意：这一个对象解析{ObjName}
        通过对象解析，可以将对象进行简化，使用于一个对象中只有一个属性的情况
        当对象中有多个属性的时候，只会留下同名的对象属性，其他的部分，会被舍弃调
        一个组件标签中可以书写多个template,我们可以通过template来进行对象的简化
        例如，传过来的有games对象和hello对象，我们可以在template中分别书写scope="{games}"和
        slot-scope:{hello}
       -->
      <template scope="res">
        <li v-for="(item, index) in res.games" :key="index">{{ item }}</li>
        <h1>{{ res.hello }}</h1>
      </template>
    </category>

    <category title="游戏">
      <template slot-scope="{ games }">
        <ol>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ol>
      </template>
    </category>

    <category title="游戏">
      <template scope="{games}">
        <h2 v-for="(item, index) in games" :key="index">{{ item }}</h2>
      </template>
      <template scope="{hello}">
        <h2 v-for="(item, index) in hello" :key="index">{{ item }}</h2>
      </template>
    </category>
  </div>
</template>

<script>
import category from "./components/category";
export default {
  name: "App",
  components: { category },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>