<template>
  <v-app top-navbar>
    <header>
      <v-navbar>
        <v-navbar-logo>Vuetify</v-navbar-logo>
        <v-navbar-items>
          <v-navbar-item :item="item"></v-navbar-item>
        </v-navbar-items>
      </v-navbar>
    </header>

    <main>
      <v-content>
        <v-container fluid>
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