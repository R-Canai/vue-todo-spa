const state = {
  loading: false
}

const getters = {
  loading (state) {
    return state.loading
  }
}

const actions = {

}

const mutations = {
  setLoading (state, loading) {
    state.loading = loading
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
