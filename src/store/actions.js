import axios from 'axios'

export const getAllTasks = ({ commit }) => {
  // GET == Select Action
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
  // POST == Insert Action
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

export const toggleTask = ({ commit }, task) => {
  // PATCH == Update Action
  axios.patch(`http://localhost:8000/api/tasks/${task.id}/`, {
    done: !task.done
  })
  .then(function (response) {
    commit('toggleTask', response.data)
  })
  .catch(function (error) {
    console.log('error:', error)
  })
}

export const deleteTask = ({ commit }, taskId) => {
  if (confirm('Are you sure ?')) {
    // DELETE == Delete Action
    axios.delete(`http://localhost:8000/api/tasks/${taskId}/`)
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
