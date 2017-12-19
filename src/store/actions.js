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
