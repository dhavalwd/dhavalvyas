export const state = () => ({
  menuIsActive: false,
  post: {}
})

export const mutations = {
  toggleMenuState (state) {
    state.menuIsActive = !state.menuIsActive
  },

  setCurrentPost (state, post) {
    state.post = post
  }
}

export const getters = {
  currentPost: state => state.post
}
