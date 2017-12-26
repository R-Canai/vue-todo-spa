export const setTasks = (state, tasks) => {
  state.tasks = tasks
}

export const addTask = (state, newTask) => {
  state.tasks.push(newTask)
}

export const updateTask = (state, task) => {
  let index = state.tasks.findIndex(t => { return t.id === task.id })
  state.tasks[index] = task
}

export const toggleTask = (state, task) => {
  let targetTask = state.tasks.find(t => { return t.id === task.id })
  targetTask.done = task.done
}

export const deleteTask = (state, taskId) => {
  let index = state.tasks.findIndex(t => { return t.id === taskId })
  state.tasks.splice(index, 1)
}

export const editTask = (state, { task, newTask }) => {
  task.title = newTask.title
  task.title = newTask.description
}
