<script setup lang="ts">
import { ref } from 'vue'
import { useDark } from '@vueuse/core'
const props = defineProps<{
  menuIsCollapse: boolean
}>()
const emit = defineEmits<{
  (e: 'update:menuIsCollapse', menuIsCollapse: boolean): void
}>()

const isDark = useDark()

const toggleMenuCollapse = () => {
  emit('update:menuIsCollapse', !props.menuIsCollapse)
}
</script>

<template>
  <el-header>
    <span class="menu-icon" @click="toggleMenuCollapse">
      <el-icon-expand v-if="menuIsCollapse" />
      <el-icon-fold v-else />
    </span>
    <div>
      <el-switch v-model="isDark"> </el-switch>
    </div>
  </el-header>
</template>

<style scoped lang="scss">
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--el-menu-border-color);

  .menu-icon {
    cursor: pointer;
    font-size: 22px;
  }

  .el-switch {
    --el-switch-on-color: #2c2c2c;
    --el-switch-off-color: #f2f2f2;
  }
}
</style>
