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
      <v-list-tile @click="routePush('setting')">
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
  </v-toolbar>
  <v-content>
    <router-view></router-view>
  </v-content>
  <v-footer color="indigo" app>
    <span class="white--text">&copy; 2017</span>
  </v-footer>
</v-app>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      drawer: null
    }
  },
  methods: {
    routePush (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style lang="scss">
@import "vuetify/dist/vuetify.min.css";
</style>
