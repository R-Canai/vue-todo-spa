<template>
<v-app id="inspire" light>
  <v-navigation-drawer fixed v-model="drawer" app>
    <v-list dense>
      <v-list-tile @click="routePush('/')">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="routePush('/setting')">
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Setting</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar color="indigo" dark fixed app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>vue-todo-spa</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn outline dark @click="logout()">Logout</v-btn>
  </v-toolbar>
  <v-content>
    <v-progress-linear :class="{'v-hidden': !loading}" :indeterminate="true"></v-progress-linear>
    <router-view></router-view>
  </v-content>
  <v-footer color="indigo" app>
    <span class="white--text">&copy; 2017 rcanai</span>
  </v-footer>
</v-app>
</template>

<script>
import { authTokenKey } from './constant'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      drawer: null
    }
  },
  computed: {
    ...mapGetters([
      'loading'
    ])
  },
  methods: {
    routePush (route) {
      this.$router.push(route)
    },
    logout () {
      // TODO: delete server token
      if (!confirm('Are you sure ?')) return false
      localStorage.removeItem(authTokenKey)
      this.$router.replace('/login')
    }
  }
}
</script>

<style lang="scss">
@import "vuetify/dist/vuetify.min.css";

.progress-linear {
  margin: 0px;
}

.v-hidden {
  visibility: hidden;
}
</style>
