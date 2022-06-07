<flexboxLayout height="50" borderBottomColor="#eee" borderBottomWidth="1">
  <stackLayout class="back-btn">
    <image src="~/img/icons/left-arrow.png" horizontalAlignment="left" on:tap={goBack}/>
  </stackLayout>
  <label class="logo" text="Hello" textWrap="true"/>
</flexboxLayout>

<script lang="ts">
  import { goBack } from 'svelte-native'
</script>

<style lang="scss">
  .back-btn {
    width: 45%;
    
    image {
      width: 40;
      height: 30;
      margin-top: 10;
    }
  }

  .logo {
    font-size: 16;
    font-weight: bold;
  }
</style>
