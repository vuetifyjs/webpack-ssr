<template lang="pug">
  div(
    id="app"
    class="with navbar-and-footer"
  )
    header
      v-navbar
        div(class="navbar__logo") Vuetify
        v-navbar-items
          v-navbar-item(
            class="navbar__item--active"
            v-bind:item="item"
          )

      main
        v-container

          router-view
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
</style>