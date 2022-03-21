<template>
  <el-slider
    v-model="value"
    :step="step"
    :range="range"
    :show-tooltip="showTooltip"
    :size="size"
    :min="min"
    :max="max"
    :marks="getMarks"
    @change="onChange"
  />
</template>

<script>
export default {
  name: 'c-slider',
  props: {
    value: {
      type: [Number, Array],
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 18
    },
    max: {
      type: Number,
      default: 60
    },
    range: {
      type: Boolean,
      default: true
    },
    showTooltip: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default',
      validator(value) {
        return ['large', 'default', 'small'].includes(value)
      }
    },
  },
  computed: {
    getMarks() {
      if (this.range) {
        return {
          [this.value[0]]: {
            label: this.value[0]
          },
          [this.value[1]]: {
            label: this.value[1]
          }
        }
      }

      return {
        [this.value]: {
          label: this.value
        }
      }
    }
  },
  methods: {
    onChange(e) {
      console.log(e)
      this.$emit('change', e)
    }
  }
}
</script>

<style lang="scss">
  .el-slider__marks-text {
    color: #2973ff;
  }
</style>
