<template>
  <router-view />
</template>

<script>
export default {
  name: 'root',
  mounted() {
    this.registerGlobalListeners()
  },
  methods: {
    registerGlobalListeners() {}
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
  }

  body, #app {
    height: 100%;
    width: 100%;
    min-height: 100vh;
  }
</style>
