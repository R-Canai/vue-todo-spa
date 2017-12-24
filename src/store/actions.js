import axios from 'axios'

export const getAllTasks = ({ commit }) => {
  axios.get('http://localhost:8000/api/tasks/', {
    params: {
      dummy: 'DUMMY'
    }
  })
  .then(function (response) {
    commit('setTasks', response.data.results)
  })
  .catch(function (error) {
    console.log('error:', error)
  })
}

export const addTask = ({ commit }, newTask) => {
  axios.post('http://localhost:8000/api/tasks/', {
    title: newTask.title,
    description: newTask.description,
    done: false,
    author: 1
  })
  .then(function (response) {
    commit('addTask', response.data)
  })
  .catch(function (error) {
    console.log('error:', error)
  })
}

export const toggleTask = ({ commit }, taskId) => {
  // TODO: toggle action...
  axios.post('http://localhost:8000/api/tasks/', {
    id: taskId
  })
  .then(function (response) {
    commit('addTask', response.data)
  })
  .catch(function (error) {
    console.log('error:', error)
  })
}

export const deleteTask = ({ commit }, taskId) => {
  // TODO: delete action...
  if (confirm('Are you sure ?')) {
    axios.delete('http://localhost:8000/api/tasks/', {
      id: taskId
    })
    .then(function (response) {
      commit('deleteTask', response.data.id)
    })
    .catch(function (error) {
      console.log('error:', error)
    })
  }
}

export const clearCompleted = ({ commit }) => {
  if (confirm('Are you sure ?')) {
    commit('clearCompleted')
  }
}
