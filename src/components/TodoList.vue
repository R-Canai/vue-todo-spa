<template>
  <v-list two-line subheader>
    <v-list-tile avatar v-for="task in tasks" v-bind:key="task.id" @click="">
      <v-list-tile-avatar @click="toggleTask(task)">
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
        <v-btn icon ripple>
          <v-icon color="grey lighten-1">info</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: 'todo-list',
  data () {
    return {
      dummy: ''
    }
  },
  computed: {
    tasks () {
      return this.$store.state.tasks
    }
  },
  methods: {
    toggleTask (task) {
      this.$store.commit('toggleTask', { task })
    },
    deleteTask (task) {
      if (confirm('Are you sure ?')) {
        this.$store.commit('deleteTask', { task })
      }
    }
  }
}
</script>

<style lang="scss">

</style>
