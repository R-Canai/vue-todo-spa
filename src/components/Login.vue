<template>
   <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title style="padding-bottom:0px;">
          <span class="headline">Login</span>
        </v-card-title>
        <v-card-text style="padding-bottom:0px;">
          <v-container grid-list-md>
            <v-layout wrap>
              <v-alert color="error" icon="warning" value="true" outline v-if="showError" @keypress.enter="login()">
                Email and password are invalid
              </v-alert>
            </v-layout>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Email" v-model="email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" type="password" v-model="password" required @keypress.enter="login()"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" outline small @click="userCreate()">User create</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="pink" large dark @click="login()">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import axios from '../http'
import { authTokenKey } from '../constant'

export default {
  data () {
    return {
      dialog: true,
      email: '',
      password: '',
      showError: false
    }
  },
  methods: {
    login () {
      if (!this.email.trim() || this.password === '') {
        return false
      }
      axios.post('/token-auth/', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        axios.defaults.headers['Authorization'] = `JWT ${response.data.token}`
        localStorage.setItem(authTokenKey, response.data.token)
        this.$router.replace('/')
      })
      .catch(errors => {
        this.showError = true
      })
    },
    userCreate () {
      this.$router.push('/user')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
