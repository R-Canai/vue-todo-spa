import axios from '../../http'

const state = {
  user: {}
}

const getters = {
  user (state) {
    return state.user
  }
}

const actions = {
  registerUser ({ commit }, user) {
    commit('setLoading', true)
    return new Promise((resolve, reject) => {
      axios.post(`/user/register/`, {
        username: user.username,
        email: user.email,
        password: user.password,
        password_confirm: user.passwordConfirm
      })
      .then(response => {
        resolve(response)
      })
      .catch((error) => {
        console.log('error:', error)
        reject(error)
      })
      .then(() => {
        commit('setLoading', false)
      })
    })
  },
  updateUser ({ commit }, user) {
    commit('setLoading', true)
    return new Promise((resolve, reject) => {
      axios.put(`/user/update/`, {
        username: user.username,
        email: user.email
      })
      .then(response => {
        commit('setUser', response.data)
        resolve(response)
      })
      .catch((error) => {
        console.log('error:', error)
        reject(error)
      })
      .then(() => {
        commit('setLoading', false)
      })
    })
  },
  getUser ({ commit }) {
    commit('setLoading', true)
    axios.get(`/user/`)
    .then(response => {
      commit('setUser', response.data)
    })
    .catch(error => {
      console.log('error:', error)
    })
    .then(() => {
      commit('setLoading', false)
    })
  }
}

const mutations = {
  setUser (state, user) {
    state.user = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
