export const addTask = (state, { newTask }) => {
  state.tasks.push({
    title: newTask.title,
    description: newTask.description,
    done: false
  })
}

export const toggleTask = (state, { task }) => {
  task.done = !task.done
}

export const deleteTask = (state, { task }) => {
  state.tasks.splice(state.tasks.indexOf(task), 1)
}

export const editTask = (state, { task, newTask }) => {
  task.title = newTask.title
  task.title = newTask.description
}

export const clearCompleted = (state) => {
  state.tasks = state.tasks.filter(task => !task.done)
}
