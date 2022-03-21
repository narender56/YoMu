<template>
  <el-drawer v-model="isOpen" :direction="direction" @closed="emitEvents('closed')">
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #default>
      <slot name="body"></slot>
    </template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </el-drawer>
</template>

<script>
export default {
  name: 'c-drawer',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'ltr',
      validator(value) {
        return ['ltr', 'rtl', 'ttb', 'btt'].includes(value)
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
  header.el-drawer__header {
    margin-bottom: 0;
    color: #2973ff;
  }

  @media (max-width: 768px) {
    .el-drawer.open {
      width: initial !important;
    }
  }

</style>
