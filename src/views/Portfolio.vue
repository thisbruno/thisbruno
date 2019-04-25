<template  >
	<v-app  class="pt-4">
		   <v-container fluid grid-list-xl>
				 <p class="text-xs-center display-2 pt-4">Portfolio</p>
        <v-card  flat xs12  class=" mt-3  ml-5 text-xs-right" color="#fafafa">
					<v-spacer></v-spacer>
            <v-btn  class="primary mx-2  " flat title="Show Projects Thumbnails"  @click="toggleView=!toggleView">
              <v-icon left>mdi-eye-plus-outline</v-icon> Show
            </v-btn>
            <v-btn  class="primary mx-2 "  flat title="Hide Projects Thumbnails"  @click="toggleView=!toggleView">
              <v-icon left >mdi-eye-off-outline</v-icon> Hide
            </v-btn>
        </v-card>
		<v-layout row wrap justify-space-around>


		<v-flex xs12 sm5 md4  text-xs-right   class="mb-1 "
		 v-for="project in projects"  :key="project.id" >
       <v-card round hover  
			 style="text-decoration:none"  class="info lighten-4  mr-2 ml-2">
				   <transition name="bounce">
						 <a :href="project.url"  target="_blank" rel="noopener noreferrer">
              <v-img conver v-if="toggleView === true"  :height="thumbnailHeight" 
                :src="project.image"  :title="project.name" > </v-img> </a>
             </transition>
			

					<v-card-text @click="toggleView=!toggleView">
						<v-flex xs12 text-xs-left>
						<h2 class="text-xs-left pb-2">{{project.name}}</h2>
						</v-flex>
            <v-flex text-xs-right>
						<v-chip class="body-1 black--text font-weight-regular text-xs-right" color="info"
						small v-for="tag in project.tags" :key="tag.id">
						{{tag}}
						</v-chip>
						<span><v-btn fab small :href="project.url" target="_blank" style="text-decoration:none" class='' ><v-icon class="primary--text " size="23px">arrow_forward</v-icon></v-btn></span>
						</v-flex>
		      
					</v-card-text>

			 </v-card> 
		</v-flex>
		</v-layout>
		</v-container>
	</v-app>
</template>


<script>
export default {
	data() {
		return {
			 toggleView: false,
			projects: [
				 { name: 'Project Manager', url: `https://github.com/thisbruno/`,  image: require("../assets/pm1.png") , tags: ['JQuerry', 'Vue.js', 'Vuetify'] },
			
				{ name: 'Dev meet upp', url: `https://github.com/thisbruno/`,  image: require("../assets/mu1.png") , tags: ['Firebase', 'Vue.js', 'Vuetify'] },

			  { name: 'Punch game', url: `https://github.com/thisbruno/`,
				 image: require("../assets/mu1.png")  , tags: ['Html', 'Vuetify', 'JQuerry'] },
				 
         	{ name: 'Punch game', url: `https://github.com/thisbruno/`,
				 image: require("../assets/mu1.png")  , tags: ['HTML', 'Vuetify', 'JQuerry'] },
			]
		}
	},
	computed: {
		   thumbnailHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '250px'
        case 'sm': return '200px'
        case 'md': return '230px'
        case 'lg': return '230px'
        case 'xl': return '300px'
      }
    }
	}
}
</script>

