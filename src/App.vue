<template>
  <v-app>
    <body>
    <header  style="position:relative ; z-index: 2" v-show="$route.path==='/..' ? false : true">
    <Menu style="position:fixed ; z-index: 2" ></Menu>
    <app-nav class="SleekNav navbar  "></app-nav>
    </header>
      
    <v-content >
      <router-view/>
    </v-content>
    </body>    

  </v-app>
</template>

<script>
import Nav from './components/ElasticNav.vue'
import Menu from './components/Menu.vue'
import router from './router'

export default {
  name: 'App',
      components: {
       Nav, Menu
    },
  data () {
    return {
      //
    }
  }
}
</script>


<style >
.SleekNav{
position: fixed;
 top: 1px; 
width: 100%;
 transition: top ease-in-out 0.03s;
  z-index: 2;
}

v-app{
  font-size: 30px;
  line-height: 1.3em;
}

</style>

