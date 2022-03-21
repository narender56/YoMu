import set from '@/utils/set'

const initialState = () => ({
  name: '',
  age: null,
  mood: '',
  poked: false,
  show_image_on_map: false,
  coordinates: []
})

const state = initialState()

const modules = {}

const getters = {}

const mutations = {
  set_profile(state, profile) {
    set(state, profile)
  },
  reset_profile() {
    set(state, initialState())
  }
}

const actions = {}

const namespaced = true

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters,
  modules
}
