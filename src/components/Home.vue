<template>
<v-container>
  <h2 class="text-xs-right">
    {{ doneTaskCount }} / {{ allTaskCount }}
  </h2>
  <task-list></task-list>
  <dialog-task ref="dialogTask"></dialog-task>
  <v-btn fab dark fixed bottom right color="pink" @click="openDialog">
    <v-icon>add</v-icon>
  </v-btn>
</v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import TaskList from './TaskList'
import DialogTask from './DialogTask'

export default {
  name: 'home',
  components: {
    TaskList,
    DialogTask
  },
  computed: {
    ...mapGetters([
      'allTaskCount',
      'doneTaskCount'
    ])
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
