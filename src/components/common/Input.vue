<template>
  <el-input
    class="c-input"
    :name="name"
    :model-value="value"
    :class="classes"
    :size="size"
    :disabled="disabled"
  />
</template>

<script>
export default {
  name: 'c-input',
  props: {
    classes: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'default',
      validator(value) {
        return ['large', 'default', 'small'].includes(value)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  .c-input > input {
    height: 40px;
  }

  .el-textarea__inner , .el-textarea__inner:focus {
    resize: none !important;
    border: var(--el-input-border,var(--el-border-base));
    border-radius: var(--el-input-border-radius,var(--el-border-radius-base));
  }
</style>
