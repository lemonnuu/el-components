<script setup lang="ts">
import NavSide from '../components/structure/NavSide.vue'
import NavHeader from '../components/structure/NavHeader.vue'
import { ref } from 'vue'
const menuIsCollapse = ref(false)
</script>

<template>
  <el-container>
    <nav-side :menuIsCollapse="menuIsCollapse" />
    <el-container direction="vertical">
      <nav-header v-model:menuIsCollapse="menuIsCollapse" />
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss"></style>
