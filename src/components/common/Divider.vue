<template>
  <el-divider :content-position="contentPosition" :direction="direction" :border-style="borderStyle">
    <slot></slot>
  </el-divider>
</template>

<script>
export default {
  name: 'c-divider',
  props: {
    borderStyle: {
      type: String,
      default: 'solid'
    },
    contentPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].includes(value)
      }
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].includes(value)
      }
    }
  },
  methods: {
    emitEvents(eventName) {
      this.$emit(eventName)
    }
  }
}
</script>

<style lang="scss">
</style>
