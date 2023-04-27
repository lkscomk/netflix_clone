import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  options: {
    customProperties: true
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#e50914',
        secondary: '#b0bec5',
        fundo: '#000000'
      }
    }
  }
})
