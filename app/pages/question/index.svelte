<page actionBarHidden={false}>
  <actionBar visibility="collapsed" title="Hello"></actionBar>
  <BottomNavigation>
    <tabContentItem>
      <Question />
    </tabContentItem>
    <tabContentItem>
      <Instructions />
    </tabContentItem>
    <tabContentItem>
      <Profile />
    </tabContentItem>
  </BottomNavigation>
</page>

<script lang="ts">
  import BottomNavigation from '../common/BottomNavigation.svelte'
  import Question from './Question.svelte'
  import Instructions from './Instructions.svelte'
  import Profile from './Profile.svelte'
</script>
