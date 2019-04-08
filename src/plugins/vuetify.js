import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#E31B6D',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#00FFFF',
    success: '#4CAF50',
    warning: '#FFC107'
  
  },

  options: {
    customProperties: true
  },
  iconfont: 'mdi',
})
