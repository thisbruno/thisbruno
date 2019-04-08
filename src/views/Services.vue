<template >
<v-app class="mr-5 ml-5">

          <p class="display-3 text-xs-center">Services</p>

      <div v-for="service in services" :key="service.title1" class="">
			<div class="row-grey grey lighten-1 " >
				<v-layout  row wrap justify-space-around>			
  
				<v-flex class="py-1 ml-s pr" xs12 sm5 md4 >
				<v-card round flat class="grey lighten-1 ml-4 mr-2" >
						<img  class="py-2 " style="height:173px; width:100%" :src="service.image1" alt="" srcset="">
             	<v-flex xs10 text-xs-center >
						<h2 v-html="service.title1" class="mb-3 ml-2"	></h2>
						</v-flex>
              <p class="pl-3 pr-2 text-xs-center">{{service.text1}}</p>
				</v-card >								
				</v-flex>

				<v-flex class="py-1" xs12 sm5 md4 >
				<v-card round flat class="grey lighten-1 mr-2 ml-2" >
						<img  class="py-2 " style="height:173px; width:100%" :src="service.image2" alt="" srcset="">
             	<v-flex xs10 text-xs-center >
						<h2 v-html="service.title2" class="mb-3 ml-2"	></h2>
						</v-flex>
              <p class="pl-3 pr-2 text-xs-center">{{service.text2}} </p>
				</v-card>				
				</v-flex>

  				<v-flex class="py-1" xs12 sm5 md4 >
				<v-card round flat class="grey lighten-1 mr-4 ml-2" >
						<img  class="py-2 " style="height:173px; width:100%" :src="service.image3" alt="" srcset="">
             	<v-flex xs10 text-xs-center >
						<h2 v-html="service.title3" class="mb-3 ml-2"	></h2>
						</v-flex>
              <p class="pl-3 pr-2 text-xs-center">{{service.text3}} </p>
				</v-card>				
				</v-flex>
          
          <v-flex xs12 sm5 md10>
            <v-card raised class=" grey lighten-1">
	           <p class=" pa-2 pt-3 "> {{service.text4}}  </p>
            </v-card>
          </v-flex>
          </v-layout> 	   
        </div>

        <div class=" filler-1 mb-3 " >
        <v-layout row wrap justify-space-around>
            jshbchnsdknklmlk
        </v-layout>
        </div>
        </div> 
 
	</v-app>
</template>

<script>
export default {
  data () {
    return {
      services: [
        {image1:  require("../assets/pm1.png") , 
         image2:  require("../assets/pm1.png"), 
         image3:  require("../assets/pm1.png"),
         image4:  require("../assets/pm1.png"),
        title1: 'Services',
        text1 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maxime, quisquam iusto                 eveniet consequatur harum a doloribus quibusdam deserunt, iure voluptates fugit tempore expedita inventore at iste impedit. Doloribu ',
        title2: 'Services',
        text2 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maxime, quisquam iusto eveniet consequatur harum a doloribus quibusdam deserunt, iure voluptates fugit tempore expedita inventore at iste impedit. Doloribu ',
        title3: 'Services',
        text3 : 'Lorem ipsum dolorLorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maxime, quisquam iusto eveniet consequatur harum a doloribus quibusdam deserunt, iure voluptates fugit tempore expedita inventore at iste impedit. Doloribu, sit amet consectetur adipisicing elit.m a ',
        title4: 'Services',
        text4 : 'Lorem ipsum dolorLorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maxime, quisquam iusto eveniet consequatur harum a doloribus quibusdam deserunt, iure voluptates fugit tempore expedita inventore at iste impedit. Doloribu, sit amet consectetur adipisicing elit.m a '  },

        {image1:  require("../assets/pm1.png") , 
         image2:  require("../assets/pm1.png"), 
         image3:  require("../assets/pm1.png"),
         image4:  require("../assets/pm1.png"),
        title1: 'Services',
        text1 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maxime, quisquam iusto                 eveniet consequatur harum a doloribus quibusdam deserunt, iure voluptates fugit tempore expedita inventore at iste impedit. Doloribu ',
        title2: 'Services',
        text2 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maxime, quisquam iusto eveniet consequatur harum a doloribus quibusdam deserunt, iure voluptates fugit tempore expedita inventore at iste impedit. Doloribu ',
        title3: 'Services',
        text3 : 'Lorem ipsum dolorLorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maxime, quisquam iusto eveniet consequatur harum a doloribus quibusdam deserunt, iure voluptates fugit tempore expedita inventore at iste impedit. Doloribu, sit amet consectetur adipisicing elit.m a ',
        title4: 'Services',
        text4 : 'Lorem ipsum dolorLorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maxime, quisquam iusto eveniet consequatur harum a doloribus quibusdam deserunt, iure voluptates fugit tempore expedita inventore at iste impedit. Doloribu, sit amet consectetur adipisicing elit.m a '  }
      ]
    }
  }
}
</script>


<style scoped>
.row-grey {
	background-color: lightgrey;
	clip-path: polygon(0 0%, 100% 7%, 100% 100%, 0% 100%);
	padding: 65px 10px;
}

.filler-1 {
    background: url("../assets/tile.jpeg") no-repeat center;
    background-size: cover;
    /* width: 100%; height: 13vh; */
    /* position: relative; */
    background-attachment: fixed;

}
</style>
