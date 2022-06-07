<template>
  <el-button :class="classes" :type="type" :icon="getIcon" :circle="circle"/>
</template>

<script>
import * as Icons from '@element-plus/icons-vue'

export default {
  name: 'c-button',
  props: {
    classes: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'primary'
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getIcon() {
      return Icons[this.icon] || null
    }
  }
}
</script>

<style lang="scss">
</style>
