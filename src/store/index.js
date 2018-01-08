import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import tasks from './modules/tasks'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    tasks
  }
})
