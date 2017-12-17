export const STORAGE_KEY = 'vu-todo-spa'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const state = {
  tasks: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

export const mutations = {
  addTask (state, { title, description }) {
    state.tasks.push({
      title,
      description,
      done: false
    })
  },

  deleteTask (state, { task }) {
    state.tasks.splice(state.tasks.indexOf(task), 1)
  },

  toggleTask (state, { task }) {
    task.done = !task.done
  },

  editTask (state, { task, value }) {
    task.title = value
  },

  clearCompleted (state) {
    state.tasks = state.tasks.filter(task => !task.done)
  }
}
