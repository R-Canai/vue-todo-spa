import axios from '../http'

export const getAllTasks = ({ commit }) => {
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
}

export const getTask = ({ commit }, taskId) => {
  // GET == Select Action
  axios.get(`/tasks/${taskId}/`)
  .then(response => {
    commit('setTask', response.data)
  })
  .catch(error => {
    console.log('error:', error)
  })
}

export const addTask = ({ commit }, newTask) => {
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
  })
}

export const updateTask = ({ commit }, task) => {
  return new Promise((resolve, reject) => {
    // PUT == All update Action
    axios.put(`/tasks/${task.id}/`, {
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
  })
}

export const toggleTask = ({ commit }, task) => {
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
}

export const deleteTask = ({ commit }, taskId) => {
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
