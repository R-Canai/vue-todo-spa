export const addTask = ({ commit }, newTask) => {
  commit('addTask', newTask)
}

export const toggleTask = ({ commit }, task) => {
  commit('toggleTask', task)
}

export const deleteTask = ({ commit }, task) => {
  if (confirm('Are you sure ?')) {
    commit('deleteTask', task)
  }
}

export const clearCompleted = ({ commit }) => {
  if (confirm('Are you sure ?')) {
    commit('clearCompleted')
  }
}
