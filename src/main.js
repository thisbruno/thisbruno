import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueParticles from 'vue-particles'

// import'./styles.scss'

// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import VueTyperPlugin from 'vue-typer'
import "./stylus/main.styl"

// import Vuetify from 'vuetify/lib'
// import 'vuetify/src/stylus/app.styl'
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

import Nav from './components/ElasticNav.vue'

Vue.component('app-nav', Nav)
Vue.use(VueParticles)

Vue.config.productionTip = false

Vue.use(VueTyperPlugin)
// Vue.use(Vuetify, {
//   theme: {
//     primary: '',
//     info:''
   
//   }
// })



new Vue({
  router, VueTyperPlugin,
  render: h => h(App)
}).$mount('#app')
