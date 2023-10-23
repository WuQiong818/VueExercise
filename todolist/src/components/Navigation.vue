<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/myday">
          <i class="el-icon-menu"></i>
          <span slot="title">我的一天</span>
        </el-menu-item>
        <el-menu-item index="/importantAffairs">
          <i class="el-icon-document"></i>
          <span slot="title">要事第一</span>
        </el-menu-item>
        <el-menu-item index="/task">
          <i class="el-icon-setting"></i>
          <span slot="title">任务</span>
        </el-menu-item>
        <el-menu-item index="/done">
          <i class="el-icon-setting"></i>
          <span slot="title">已完成&nbsp;</span>
        </el-menu-item>
        <el-submenu index="/reviewSummary">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>复盘总结</span>
          </template>
          <el-menu-item-group>
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item index="/fourQuadrant">四象限图</el-menu-item>
            <!-- <el-menu-item index="/discountedConsumption">消耗折现图</el-menu-item> -->
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
         
<script>
export default {
  name: "Navigation-Bar",
};
</script>
         
<style scoped>
.el-col-12 {
  width: 100%;
}

.el-menu-item {
  height: 80px;
  line-height: 80px;
}

/* 报错但是有效果，哈哈哈 对于element-UI中的一级嵌套，
我们不需要使用deep,可以直接通过.className的方式进行样式的修改，
但是对于二级嵌套的元素，我们需要使用/deep/或>>>深选择器来进行样式
的修改 */
.el-submenu /deep/ .el-submenu__title {
  height: 80px;
  line-height: 80px;
}
</style>
         