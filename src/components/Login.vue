<template>
   <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Email" v-model="email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" type="password" v-model="password"  required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="pink" large dark @click="login()">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { authTokenKey } from '../constant'

export default {
  data () {
    return {
      dialog: true,
      email: 'example@example.com',
      password: ''
    }
  },
  methods: {
    login () {
      if (!this.email.trim() || this.password === '') {
        return false
      }
      localStorage.setItem(authTokenKey, 1)
      this.$router.replace(`/`)
    }
  }
}
</script>

<style lang="scss">

</style>
