<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12>
        <v-text-field label="Username" v-model="user.username" required :error-messages="errors.username"></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field label="Email" v-model="user.email" required :error-messages="errors.email"></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field label="Password" type="password" v-model="user.password" required :error-messages="errors.password" v-if="!wasLogin"></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field label="Password comfirm" type="password" v-model="user.passwordConfirm" required :error-messages="errors.password_confirm" v-if="!wasLogin"></v-text-field>
      </v-flex>
    </v-layout>
    <div class="text-xs-center">
      <v-btn round large color="pink" dark v-if="wasLogin" @click="update()">update</v-btn>
      <v-btn round large color="pink" dark v-else @click="register()">register</v-btn>
    </div>
  </v-container>
</template>

<script>
import { authTokenKey } from '../constant'
import { mapGetters } from 'vuex'

export default {
  name: 'user',
  data () {
    return {
      wasLogin: false,
      errors: []
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    register () {
      this.$store.dispatch('registerUser', this.user)
      .then(response => {
        this.$router.replace('/')
      })
      .catch(reason => {
        this.errors = reason.response.data
      })
    },
    update () {
      this.$store.dispatch('updateUser', this.user)
      .then(response => {
        this.$router.replace('/')
      })
      .catch(reason => {
        this.errors = reason.response.data
      })
    }
  },
  created () {
    if (localStorage.getItem(authTokenKey)) {
      this.wasLogin = true
      this.$store.dispatch('getUser')
    } else {
      this.wasLogin = false
      this.$store.state.user.user = {}
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
