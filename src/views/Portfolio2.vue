<template>
<v-app>
    <v-container grid-list-xl>
      <v-layout wrap row justify-space-around>

        <v-flex xs12 text-xs-left>
          <v-btn-toggle v-model="toggleView">
            <v-btn flat title="Show Thumbnails">
              <v-icon>view_module</v-icon>
            </v-btn>
            <v-btn flat title="Hide Thumbnails">
              <v-icon>view_headline</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-flex>
        
      
        <v-flex xs12  sm6 md4  v-for="project in projects"  :key="project.id"  >
          <v-card hover  >
            <transition name="bounce">
              <v-img contain v-if="toggleView === 0"  :height="thumbnailHeight"
                :src="project.image"  :title="project.name" :href="project.url" target="_blank" >  </v-img>
            </transition>

            <v-divider />
         
            <v-card-text @click="toggleView = 0">
              <h3 v-html="project.name" class="mb-2 title"></h3>
              <v-chip  class="white--text"  color=info
                small  v-for="tag in project.tags"  :key="tag.id" >
                {{ tag }}
              </v-chip>
            </v-card-text>
          </v-card>
        </v-flex>
   
      </v-layout>
    </v-container>

</v-app>

  
</template>

	

<script>
export default {
  data () {
    return {
      projects: [
       { name: 'Project Manager', url: `https://github.com/thisbruno/`,  image: require("../assets/pm1.png") , tags: ['JQuerry', 'Vue.js', 'Vuetify'] },
			
        { name: 'Dev meet upp', url: `https://github.com/thisbruno/`,  image: require("../assets/mu1.png") , tags: ['Firebase', 'Vue.js', 'Vuetify'] },

				{ name: 'punch game', url: `https://github.com/thisbruno/`,
         image: require("../assets/mu1.png")  , tags: ['Html', 'Vuetify', 'JQuerry'] },
         	{ name: 'punch game', url: `https://github.com/thisbruno/`,
				 image: require("../assets/mu1.png")  , tags: ['HTML', 'Vuetify', 'JQuerry'] },
      
      
      ],
      toggleView: 0
    }
  },

  computed: {
    thumbnailHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '280px'
        case 'sm': return '250px'
        case 'md': return '250px'
        case 'lg': return '240px'
        case 'xl': return '350px'
      }
    }
  },
 	
}
</script>

<style scoped>

</style>
