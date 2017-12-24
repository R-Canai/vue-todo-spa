import axios from 'axios'

export const getAllTasks = ({ commit }) => {
  axios.get('http://localhost:8000/api/tasks/', {
    params: {
      dummy: 'DUMMY'
    }
  })
  .then(function (response) {
    commit('setTasks', response.results)
  })
  .catch(function (error) {
    console.log('error:', error)
  })
}

export const addTask = ({ commit }, newTask) => {
  commit('addTask', newTask)
}

export const toggleTask = ({ commit }, taskId) => {
  commit('toggleTask', taskId)
}

export const deleteTask = ({ commit }, taskId) => {
  if (confirm('Are you sure ?')) {
    commit('deleteTask', taskId)
  }
}

export const clearCompleted = ({ commit }) => {
  if (confirm('Are you sure ?')) {
    commit('clearCompleted')
  }
}
