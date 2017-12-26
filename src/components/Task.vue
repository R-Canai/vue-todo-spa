<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex xs12>
        <v-text-field
          label="Title"
          v-model="task.title"
          required
          :error-messages="errors.title"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          label="Description"
          v-model="task.description"
          multi-line
          :error-messages="errors.description"
        ></v-text-field>
      </v-flex>
      <v-flex xs4>
        <v-checkbox label="Completed !" v-model="task.done" light></v-checkbox>
      </v-flex>
    </v-layout>
    <div class="text-xs-center">
      <v-btn round large color="pink" dark @click="updateTask()">Update</v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      errors: {
        title: [],
        description: []
      }
    }
  },
  computed: {
    ...mapGetters([
      'task'
    ])
  },
  methods: {
    updateTask () {
      this.$store.dispatch('updateTask', this.task)
      .then(response => {
        this.$router.replace(`/`)
      })
      .catch(reason => {
        this.errors = reason.response.data
      })
    }
  },
  created () {
    this.$store.dispatch('getTask', this.$route.params.id)
  }
}
</script>

<style lang="scss">

</style>
