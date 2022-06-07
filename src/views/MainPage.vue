<template>
  <div class="w100p h100vh flex align-center pos-rel">
    <el-button class="hamburger-btn w64-imp h64-imp ma16-imp f32-imp z9 pos-abs top4 br50p-imp" @click="toggleDrawer">
      <c-icon name="Expand" />
    </el-button>
    <c-drawer :isOpen="isDrawerOpen" @closed="closeDrawer">
      <template #title>
        <h2>Your Personal Preferences</h2>
      </template>
      <template #body>
        <div class="distance-preference mb32">
          <label>Distance Preference(km)</label>
          <c-slider :value="20" :min="1" :max="50" :range="false" :showTooltip="false" />
        </div>
        <div class="age-preference">
          <label>Age Preference</label>
          <c-slider :value="[20, 30]" :showTooltip="false" />
          <c-button />
        </div>
      </template>
    </c-drawer>
    <div id="map"></div>
    <div class="w100p h100p" v-if="showProfile">
      <c-profile @onClose="closeProfile" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { ref } from 'vue'
import Profile from '@/components/profile/index.vue'
import { initiateMap, renderMarkers } from '../services/mapService'

export default {
  name: 'main-page',
  components :{
    'c-profile': Profile
  },
  setup() {
    const isDrawerOpen = ref(false)
    const toggleDrawer = () => isDrawerOpen.value = !isDrawerOpen.value
    const closeDrawer = () => isDrawerOpen.value = false

    const showProfile = ref(false)
    const toggleProfile = () => isDrawerOpen.value = !isDrawerOpen.value
    const closeProfile = () => showProfile.value = false
  
    return {
      isDrawerOpen,
      toggleDrawer,
      closeDrawer,
      showProfile,
      toggleProfile,
      closeProfile
    }
  },
  async mounted() {
    if (this.$config.MAP_BOX_TOKEN) {
      const mapInstance = initiateMap(this.$config.MAP_BOX_TOKEN)
      renderMarkers(mapInstance, this.setProfile)
    }
  },
  methods: {
    ...mapMutations('profile', ['set_profile', 'reset_profile']),
    setProfile(user) {
      this.reset_profile()
      this.showProfile = !this.showProfile
      if (this.showProfile) {
        this.set_profile(user)
      }
    }
  }
}
</script>

<style lang="scss">
  body {
    background-color: #eaf3f8;
  }

  #map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }

  .marker {
    display: block;
    border-radius: 50%;
    cursor: pointer;
    padding: 32px;
    animation: markershadow 3s infinite;

    .poke {
      transform: rotate(90deg);
      animation: bounce .3s ease infinite alternate;
    }
  }

  @keyframes markershadow {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(0, 0, 255, 1);
      box-shadow: 0 0 0 0 rgba(0, 0, 255, 1);
    }

    70% {
      -moz-box-shadow: 0 0 0 10px rgba(152, 88%, 24%, 0.3);
      box-shadow: 0 0 0 10px rgba(152, 88%, 24%, 0.3);
    }

    100% {
      -moz-box-shadow: 0 0 0 0 rgba(315, 100%, 50%, 0.2);
      box-shadow: 0 0 0 0 rgba(315, 100%, 50%, 0.2);
    }
  }

  @keyframes bounce {
    100% {
      top: -40px;
    }
  }
</style>
