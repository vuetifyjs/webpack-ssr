<template>
  <v-app top-toolbar>
    <header>
      <v-toolbar>
        <v-toolbar-logo>Vuetify</v-toolbar-logo>
        <v-toolbar-items>
          <v-toolbar-item :item="item"></v-toolbar-item>
        </v-toolbar-items>
      </v-toolbar>
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
    }
  }
</script>
