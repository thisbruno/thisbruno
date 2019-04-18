import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueParticles from 'vue-particles'


import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import VueTyperPlugin from 'vue-typer'
import "./stylus/main.styl"

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $; 

import Nav from './components/ElasticNav.vue'
import hamMenu from './components/HamMenu.vue'
import Footer from './components/Footer.vue'


Vue.component('app-Nav', Nav)
Vue.component('app-HamMenu', hamMenu)
Vue.component('app-Footer', Footer)


Vue.use(VueParticles)
Vue.use(VueTyperPlugin)

Vue.config.productionTip = false


new Vue({
  router, VueTyperPlugin,
  render: h => h(App)
}).$mount('#app')
