import axios from '../../http'

const state = {
  user: {
    id: '',
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  }
}

const getters = {
  user (state) {
    return state.user
  }
}

const actions = {
  createUser ({ commit }, user) {
    commit('setLoading', true)
    return new Promise((resolve, reject) => {
      axios.post(`/user/register/`, {
        username: user.username,
        email: user.email,
        password: user.password,
        password_confirm: user.passwordConfirm
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
