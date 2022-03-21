/**
 * Vuex app store helper method that migrates an object (new state)
 * to the app store's state object, preserving the state's original schema
 *
 * @param state
 * @param newState
 */
const set = async (state, newState) => {
  for (const prop in state) {
    if (Object.prototype.hasOwnProperty.call(newState, prop)) state[prop] = newState[prop]
  }
}

export default set
