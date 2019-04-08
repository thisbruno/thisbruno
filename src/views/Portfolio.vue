<template  >
	<v-app  class="mr-5 ml-5">
        <v-card  flat xs10 text-xs-left class=" mt-3 mb-2 ml-5 white">
          <!-- <v-btn-toggle v-model="toggleView"> -->
            <v-btn class="primary mx-2  " flat title="Show Projects Thumbnails"  @click="toggleView=!toggleView">
              <v-icon left>view_module</v-icon> Show
            </v-btn>
            <v-btn class="primary mx-2 "  flat title="Hide Projects Thumbnails"  @click="toggleView=!toggleView">
              <v-icon left >view_headline</v-icon> Hide
            </v-btn>
          <!-- </v-btn-toggle> -->
        </v-card>
		<v-layout row wrap justify-center>


		<v-flex xs10 sm5 md4    class="mb-2 "
		 v-for="project in projects"  :key="project.id" >
       <v-card round hover  
			 style="text-decoration:none"  class="info lighten-4  mr-2 ml-2">
				   <transition name="bounce">
						 <a :href="project.url"  target="_blank" rel="noopener noreferrer">
              <v-img conver v-if="toggleView === true"  :height="thumbnailHeight" 
                :src="project.image"  :title="project.name" > </v-img> </a>
             </transition>
			

					<v-card-text @click="toggleView=!toggleView">
						<v-flex xs12>
						<h2 v-html="project.name" class="mb-2 ml-1"
						></h2>
						</v-flex>
            <v-flex text-xs-right>
						<v-chip class="subheading black--text font-weight-bold" color="info"
						small v-for="tag in project.tags" :key="tag.id">
						{{tag}}
						</v-chip>
						<v-btn fab small :href="project.url" target="_blank" style="text-decoration:none" ><v-icon class="primary--text " size="23px">arrow_forward</v-icon></v-btn>
						</v-flex>
		      
					</v-card-text>

			 </v-card>
		</v-flex>
		</v-layout>
	</v-app>
</template>


<script>
export default {
	data() {
		return {
			 toggleView: true,
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

