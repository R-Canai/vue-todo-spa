<template>
<v-container>
  <todo-list></todo-list>
  <dialog-task ref="dialogTask"></dialog-task>
  <v-btn fab dark fixed bottom right color="pink" @click="openDialog">
    <v-icon>add</v-icon>
  </v-btn>
</v-container>
</template>

<script>
import TodoList from './TodoList'
import DialogTask from './DialogTask'

export default {
  name: 'home',
  components: {
    TodoList,
    DialogTask
  },
  methods: {
    openDialog () {
      this.$refs.dialogTask.dialog = true
    }
  }
}
</script>

<style lang="scss">

</style>
