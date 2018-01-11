<template>
<v-dialog v-model="dialog" max-width="500px">
  <v-card>
    <v-card-title class="headline">Add Task</v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field label="Title" v-model="task.title" required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              label="Description"
              v-model="task.description"
              multi-line
              rows="3"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="grey darken-3" flat="flat" @click="closeDialog()">Cancel</v-btn>
      <v-btn color="pink accent-3" flat="flat" @click="addTask()">Add</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
export default {
  name: 'dialog-task',
  data () {
    return {
      dialog: false,
      task: {
        title: '',
        description: ''
      },
      errors: []
    }
  },
  methods: {
    openDialog () {
      this.dialog = true
    },
    closeDialog () {
      this.dialog = false
    },
    addTask () {
      if (!this.task.title.trim()) return false
      this.$store.dispatch('addTask', this.task)
      .then(response => {
        this.task = {
          title: '',
          description: ''
        }
        this.closeDialog()
      })
      .catch(reason => {
        this.errors = reason.response.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
