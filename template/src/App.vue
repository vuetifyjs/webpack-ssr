<template>
  <v-app>
    <core-drawer />
  </v-app>
</template>

<script>
  import Meta from '@/mixins/meta'

  export default {
    mixins: [Meta],

    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>
