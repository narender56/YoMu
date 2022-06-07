<flexboxLayout flexDirection="column">
  <Header />
  <flexboxLayout class="profile">
    <label text="Profile page coming here" />
  </flexboxLayout>
</flexboxLayout>
<script lang="ts">
  import Header from '../common/Header.svelte'
</script>

<style lang="scss">
  .profile {
    flex-direction: column;
    justify-content: center;
    margin: 10;
  }
</style>