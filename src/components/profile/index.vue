<template>
  <div class="w100p h100p flex flex-column align-center">
    <div class="mobile-frame w100p h100p flex flex-column br32 maxw320 z1 bg-white">
       <el-carousel
          class="h100p br-frame"
          height="100%"
          :autoplay="false"
          trigger="click"
          arrow="never"
          ref="profileView"
          indicatorPosition="none"
        >
        <el-carousel-item>
          <keep-alive>
            <c-view @next="next" @close="onClose" />
          </keep-alive>
        </el-carousel-item>
        <el-carousel-item v-if="poked">
          <keep-alive>
            <c-chat @close="prev" @next="next"/>
          </keep-alive>
        </el-carousel-item>
        <el-carousel-item v-else>
          <keep-alive>
            <c-edit @close="prev" @next="next"/>
          </keep-alive>
        </el-carousel-item>
       </el-carousel>
    </div>
  </div>
</template>

<script>
import View from './View.vue'
import Edit from './Edit.vue'
import Chat from './Chat.vue'
import { mapState } from 'vuex'

export default {
  name: 'c-profile',
  components: {
    'c-view': View,
    'c-edit': Edit,
    'c-chat': Chat
  },
  computed: {
    ...mapState('profile', ['poked'])
  },
  methods: {
    onClose() {
      this.$emit('onClose')
    },
    next() {
      this.$refs.profileView.next()
    },
    prev() {
      this.$refs.profileView.prev()
    }
  }
}
</script>

<style lang="scss">
  body {
    background-color: #eaf3f8;
  }

  .br-frame {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .mobile-frame {
    border: 8px solid #000000;
    margin: 16px 0;

    @media (max-width:801px) {
      margin: 0
    }
  }
</style>
