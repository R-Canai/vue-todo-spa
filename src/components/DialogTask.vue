<template>
<v-dialog v-model="dialog" max-width="500px">
  <v-card>
    <v-card-title class="headline">Add / Edit</v-card-title>
    <v-card-text>
       <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm12 md12>
                <v-text-field label="Title" v-model="taskTitle" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-text-field
                  name="input-7-1"
                  label="Description"
                  v-model="taskDescription"
                  multi-line
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
      taskTitle: '',
      taskDescription: ''
    }
  },
  methods: {
    closeDialog () {
      this.dialog = false
    },
    addTask () {
      const title = this.taskTitle
      const description = this.taskDescription
      if (title.trim()) {
        this.$store.commit('addTask', { title, description })
      }
      this.taskTitle = ''
      this.taskDescription = ''
      this.closeDialog()
    }
  }
}
</script>

<style lang="scss">

</style>
