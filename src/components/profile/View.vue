<template>
  <div class="h100p pos-rel">
    <div class="pos-rel h75p minh75p" ref="gesture">
      <el-carousel height="100%" :autoplay="false" indicatorPosition="none" trigger="click" class="h100p" ref="slider">
        <el-carousel-item v-for="item in 3" :key="item">
          <img class="profile-image w100p h100p" src="img/babe.png">
        </el-carousel-item>
      </el-carousel>
      <img v-if="!poked" class="poke w30 h50 pos-abs right4 bottom8 br50p pointer z9" src="img/poke.png">
    </div>
    <div class="profile-info pos-rel h25p br24 bg-white">
      <div class="user-name fw-bold f18 mb16">
        {{ name }}, {{ age }}
      </div>
      <div class="desc f13">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      </div>
      <div class="pos-abs bottom16 w90p">
        <div class="flex justify-between">
          <c-icon class="f32-imp" name="CloseBold" @click="close"/>
          <c-icon class="f32-imp" name="Edit" @click="next" v-if="!poked" />
          <c-icon class="f32-imp" name="ChatLineRound" @click="next" v-if="poked"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { registerGesture } from '@/services/gesture'
import { mapState } from 'vuex'

export default {
  name: 'sp-profile',
  data() {
    return {}
  },
  computed: {
    ...mapState('profile', ['name', 'age', 'poked'])
  },
  mounted() {
    if (this.$isMobile) {
      registerGesture(this.$refs.gesture, this.handleGesture)
    }
  },
  methods: {
    handleGesture(direction) {
      if (direction === 'right') {
        this.$refs.slider.prev()
      } else {
        this.$refs.slider.next()
      }
    },
    next() {
      this.$emit('next')
    },
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
  .profile-image {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .poke {
    background-color: lightseagreen;
    transform: rotate(230deg);
  }

  .profile-info {
    padding: 10px 16px;
    margin-top: -20px;
  }

  .desc {
    color: #415470;
  }
</style>
