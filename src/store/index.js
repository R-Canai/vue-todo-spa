import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const STORAGE_KEY = 'vu-todo-spa'

export const state = {
  tasks: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
