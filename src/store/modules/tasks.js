import axios from '../../http'

const state = {
  tasks: [],
  task: {}
}

const getters = {
  tasks (state) {
    return state.tasks
  },
  task (state) {
    return state.task
  },
  allTaskCount (state) {
    return state.tasks.length
  },
  doneTaskCount (state) {
    return state.tasks.filter(t => { return t.done }).length
  }
}

const actions = {
  getAllTasks ({ commit }) {
    // GET == Select Action
    axios.get('/tasks/', {
      params: {
        dummy: 'DUMMY'
      }
    })
    .then(response => {
      commit('setTasks', response.data.results)
    })
    .catch(error => {
      console.log('error:', error)
    })
  },
  getTask ({ commit }, taskId) {
    commit('setLoading', true)
    // GET == Select Action
    axios.get(`/tasks/${taskId}/`)
    .then(response => {
      commit('setTask', response.data)
    })
    .catch(error => {
      console.log('error:', error)
    })
    .then(() => {
      commit('setLoading', false)
    })
  },
  addTask ({ commit }, newTask) {
    commit('setLoading', true)
    return new Promise((resolve, reject) => {
      // POST == Insert Action
      axios.post('/tasks/', {
        title: newTask.title,
        description: newTask.description,
        done: false,
        author: 1
      })
      .then(response => {
        commit('addTask', response.data)
        resolve(response)
      })
      .catch(error => {
        console.log('error:', error)
        reject(error)
      })
      .then(() => {
        commit('setLoading', false)
      })
    })
  },
  updateTask ({ commit }, task) {
    commit('setLoading', true)
    return new Promise((resolve, reject) => {
      // PATCH == Partial update Action
      // TODO: You should use PUT here. But userID is required
      axios.patch(`/tasks/${task.id}/`, {
        title: task.title,
        description: task.description,
        done: task.done,
        author: 1
      })
      .then(response => {
        commit('updateTask', response.data)
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
  toggleTask ({ commit }, task) {
    commit('setLoading', true)
    // PATCH == Partial update Action
    axios.patch(`/tasks/${task.id}/`, {
      done: !task.done
    })
    .then(response => {
      commit('toggleTask', response.data)
    })
    .catch(error => {
      console.log('error:', error)
    })
    .then(() => {
      commit('setLoading', false)
    })
  },
  deleteTask ({ commit }, taskId) {
    if (!confirm('Are you sure ?')) return false
    commit('setLoading', true)
    // DELETE == Destroy Action
    axios.delete(`/tasks/${taskId}/`)
    .then(response => {
      commit('deleteTask', response.data.id)
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
  setTasks (state, tasks) {
    state.tasks = tasks
  },
  setTask (state, task) {
    state.task = task
  },
  addTask (state, newTask) {
    state.tasks.push(newTask)
  },
  updateTask (state, task) {
    let index = state.tasks.findIndex(t => { return t.id === task.id })
    state.tasks[index] = task
  },
  toggleTask (state, task) {
    let targetTask = state.tasks.find(t => { return t.id === task.id })
    targetTask.done = task.done
  },
  deleteTask (state, taskId) {
    let index = state.tasks.findIndex(t => { return t.id === taskId })
    state.tasks.splice(index, 1)
  },
  editTask (state, { task, newTask }) {
    task.title = newTask.title
    task.title = newTask.description
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
