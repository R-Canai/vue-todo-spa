export const setTasks = (state, { tasks }) => {
  state.tasks = tasks
}

export const addTask = (state, { newTask }) => {
  state.tasks.push(newTask)
}

export const toggleTask = (state, { taskId }) => {
  let task = state.tasks.find(task => { return task.id === taskId })
  task.done = !task.done
}

export const deleteTask = (state, { taskId }) => {
  let index = state.tasks.findIndex(task => { return task.id === taskId })
  state.tasks.splice(index, 1)
}

export const editTask = (state, { task, newTask }) => {
  task.title = newTask.title
  task.title = newTask.description
}

export const clearCompleted = (state) => {
  state.tasks = state.tasks.filter(task => !task.done)
}
