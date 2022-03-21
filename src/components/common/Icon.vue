<template>
  <el-icon class="c-icon pointer" :class="name">
    <component :color="color" :is="componentInstance" />
  </el-icon>
</template>

<script>
import * as Icons from '@element-plus/icons-vue'

export default {
  name: 'c-icon',
  props: {
    color: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    componentInstance() {
      return Icons[this.name]
    }
  }
}
</script>

<style lang="scss">
</style>
