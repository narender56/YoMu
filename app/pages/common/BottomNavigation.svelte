<bottomNavigation class="bottomNavigation" selectedIndex={selectedTab} on:selectedIndexChanged={selectedIndexChanged}>
  <tabStrip class="tabs">
    <tabStripItem>
      <label text="Home" class="tabs__name"/>
      <image src="~/img/icons/home.png" />
    </tabStripItem>
    <tabStripItem class="special">
      <label text="Add Question" class="tabs__name"/>
      <image src="~/img/icons/plus-circle.png" />
    </tabStripItem>
    <tabStripItem class="special">
      <label text="Profile" class="tabs__name"/>
      <image src="~/img/icons/user.png" />
    </tabStripItem>
  </tabStrip>
  <slot />
</bottomNavigation>

<script lang="ts">
  let selectedTab = -1

  const selectedIndexChanged = (e) => {
    selectedTab = e.newIndex;
  }
</script>

<style lang="scss">
  .tabs {
    &__name {
      font-size: 12;
    }
  }

  image {
    height: 40;
  }
</style>