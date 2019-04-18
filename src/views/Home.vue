<template>
<v-app>
  <Landing/> 
  <About style="overflow-y:auto;" />
  <MoreAbout />
</v-app>
</template>

<script>
import Landing from '../sub-views/Landing.vue'
import About from '../sub-views/About.vue'
import MoreAbout from '../sub-views/MoreAbout.vue'

  export default {
    components: {
       Landing , About , MoreAbout
    }
  }
</script>

