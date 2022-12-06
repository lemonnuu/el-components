<script setup lang="ts">
const props = defineProps<{
  menuIsCollapse: boolean
}>()
</script>

<template>
  <el-aside width="auto">
    <el-menu :collapse="menuIsCollapse" default-active="2" class="el-menu-vertical-demo">
      <el-menu-item index="1">
        <el-icon-menu />
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon-menu />
        <span>图标选择器</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon-menu />
        <span>取色标记</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
