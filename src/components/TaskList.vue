<template>
  <v-list two-line subheader>
    <v-list-tile avatar v-for="task in tasks" v-bind:key="task.id">
      <v-list-tile-avatar @click="toggleTask(task)">
        <v-icon
          v-if="task.done"
          class="light-green accent-3 white--text"
          title="Completed !"
          >done</v-icon>
        <v-icon
          v-else
          class="grey lighten-1 white--text"
          title="Incomplete"
          >done</v-icon>
      </v-list-tile-avatar>
      <v-list-tile-content :class="{'task-done': task.done}">
        <v-list-tile-title class="task-title" @click="openEdit(task.id)">{{ task.title }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ task.description }}</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-btn icon ripple title="Delete" @click="deleteTask(task.id)">
          <v-icon color="grey lighten-1">delete</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'task-list',
  data () {
    return {
      dummy: ''
    }
  },
  computed: {
    ...mapGetters([
      'tasks'
    ])
  },
  methods: {
    ...mapActions([
      'toggleTask',
      'deleteTask'
    ]),
    openEdit (taskId) {
      this.$store.state.task = {}
      this.$router.push(`/task/${taskId}`)
    }
  },
  created () {
    this.$store.dispatch('getAllTasks')
  }
}
</script>

<style lang="scss" scoped>
.task-done {
  div {
    color: #CCC !important;
    text-decoration: line-through !important;
  }
}

.task-title {
  cursor: pointer;
}

.avatar {
  i {
    cursor: pointer;
  }
}
</style>
