export const loading = state => {
  return state.loading
}

export const tasks = state => {
  return state.tasks
}

export const task = state => {
  return state.task
}

export const allTaskCount = state => {
  return state.tasks.length
}

export const doneTaskCount = state => {
  return state.tasks.filter(t => { return t.done }).length
}
