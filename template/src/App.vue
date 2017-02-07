<template>
  <v-app top-navbar>
    <header>
      <v-toolbar>
        <v-toolbar-logo>Vuetify</v-toolbar-logo>
        <v-toolbar-items>
          <v-toolbar-item>
            {{ item.text }}
          </v-toolbar-item>
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
          text: 'Get Started'
        }
      }
    }
  }
</script>