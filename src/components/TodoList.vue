<template>
  <v-list two-line subheader>
    <v-list-tile avatar v-for="task in tasks" v-bind:key="task.id">
      <v-list-tile-avatar @click="toggleTask({ taskId: task.id })">
        <v-icon
          v-if="task.done"
          class="light-green accent-3 white--text"
          >done</v-icon>
        <v-icon
          v-else
          class="grey lighten-1 white--text"
          ></v-icon>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{ task.title }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ task.description }}</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-btn icon ripple @click="deleteTask({ taskId: task.id })">
          <v-icon color="grey lighten-1">delete</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
    {{taskCount}}
  </v-list>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'todo-list',
  data () {
    return {
      dummy: ''
    }
  },
  computed: {
    ...mapGetters([
      'tasks',
      'taskCount'
    ])
  },
  methods: {
    ...mapActions([
      'toggleTask',
      'deleteTask'
    ])
  },
  created () {
    this.$store.dispatch('getAllTasks')
  }
}
</script>

<style lang="scss">

</style>
