<template>
  <v-app top-navbar>
    <header>
      <v-navbar>
        <div class="navbar__logo">Vuetify</div>
        <v-navbar-items>
          <v-navbar-item :item="item"></v-navbar-item>
        </v-navbar-items>
      </v-navbar>
    </header>

    <main>
      <v-content>
        <v-container :fluid="true">
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        item: {
          href: '#!',
          text: 'Get Started'
        }
      }
    },

    mounted () {
      this.$vuetify.init()
    }
  }
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'
  @import './css/main.css'
</style>