<template>
  <v-app>
    <body>
    <header v-show="$route.path==='/' ? false : true">
    <!-- <Nav></Nav> -->
    <app-nav class="SleekNav"></app-nav>
    </header>

    <v-content>
      <router-view/>
    </v-content>
    </body>    

  </v-app>
</template>

<script>
import Nav from './components/ElasticNav.vue'
import router from './router'

export default {
  name: 'App',
      components: {
       Nav
    },
  data () {
    return {
      //
    }
  }
}
</script>


<style scoped>
.SleekNav{
position: sticky;
 top: 15px; 
width: 100%;
 transition: top ease-in-out 0.03s;
  z-index: 2;
}

v-app{
  font-size: 30px;
  line-height: 1.3em;
}
</style>
