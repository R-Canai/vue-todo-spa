import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

export const state = {
  tasks: [
    {id: 1, title: 'Sample1', description: 'desc...', done: false},
    {id: 2, title: 'Sample2', description: 'desc...', done: true}
  ]
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
