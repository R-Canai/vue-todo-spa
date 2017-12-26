import axios from './http'

export const getAllTasks = ({ commit }) => {
  // GET == Select Action
  axios.get('api/tasks/', {
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
  axios.post('/api/tasks/', {
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

export const updateTask = ({ commit }, newTask) => {
  // PUT == All update Action
  axios.put('/api/tasks/', {
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
  // PATCH == Partial update Action
  axios.patch(`/api/tasks/${task.id}/`, {
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
    // DELETE == Destroy Action
    axios.delete(`/api/tasks/${taskId}/`)
    .then(function (response) {
      commit('deleteTask', response.data.id)
    })
    .catch(function (error) {
      console.log('error:', error)
    })
  }
}
