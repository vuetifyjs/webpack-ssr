import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: null,
    description: null,
    keywords: null
  },

  actions: {},

  mutations: {
    'vuetify/TITLE' (state, payload) {
      state.title = payload
      document.title = title
    },

    'vuetify/DESCRIPTION' (state, payload) {
      state.description = payload
      document.head.querySelector('meta[name=description]').content = description
    },

    'vuetify/KEYWORDS' (state, payload) {
      state.keywords = payload
      document.head.querySelector('meta[name=keywords]').content = keywords
    }
  }
})