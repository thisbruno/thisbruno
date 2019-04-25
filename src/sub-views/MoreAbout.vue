<template>
	<v-app class="mr-4 ml-4 mt-4 ">
		<v-layout>
    
   <v-layout row wrap text-xs-center justify-space-around class="info lighten-4">
 
    <v-flex xs12>
     <v-card flat class="info lighten-4">
        <h1 class="mt-4">Portfolio</h1>
      <v-layout row wrap  justify-space-around style="border-bottom:7px solid white">
         <v-flex xs12 sm7 md5 class="mb-2 pb2">
          <v-card flat>
            <v-flex xs12 class="info lighten-4" >             
        <v-flex xs12 class="headline font-weight-bold py-3 info lighten-4" >
                Meet Up Project
            </v-flex>
          <img :src="require('../assets/meetup.jpg')" alt="Avatar" contain
					style="width:91% ; max-height: 260px" >	
           </v-flex>
         </v-card>
        </v-flex>
         <v-flex xs12 sm4 md4 class="mb-2 pb-2 pt-3 mt-5 "  >
          <v-card flat class="mr-2">
            <v-flex xs12>
              <v-card-text>
                <p>
                 This project is made with Vue.Js , Vuex and JQuerry. <br> It's a mock up of a web App for organizing meetups around the world. <br> This web-App uses firebase for its backend to register the meetups and for authentication of the users and also registration of new users. <br>
                 <v-btn class="primary mt-3 mybtn" to="/portfolio" style="text-decoration:none" >View Project</v-btn>
                </p>
              </v-card-text>
            </v-flex>
         </v-card  >
        </v-flex>
        <!-- end of card -->
      </v-layout>

			 <v-layout row wrap  justify-space-around class="mt-4" >
         <v-flex xs12 sm5  class="mb-2 pb-2" >
          <v-card flat>
        <v-flex xs12 class="headline font-weight-bold py-3 info lighten-4 " >
               BlogSite
          </v-flex>
            <v-flex xs12 class="info lighten-4" >             
          <img :src="require('../assets/blogw.jpg')" alt="Avatar" contain
					style="width:91% ; height: 220px" >	
           </v-flex>
         </v-card>
        </v-flex>

				<v-flex xs12 sm5  class="mb-2  pb2">
          <v-card flat>
        <v-flex xs12 class="headline font-weight-bold py-3 info lighten-4" >
                Punching Game
          </v-flex>
            <v-flex xs12 class="info lighten-4" >             
          <img :src="require('../assets/punch.png')" alt="Avatar" contain
					style="width:91% ; max-height: 220px" >	
           </v-flex>
         </v-card>
        </v-flex>
        <!-- end of card -->
      </v-layout>


        <v-layout class="pb-3 pt-2">
           <v-flex>
           <v-btn large to="/portfolio" class="primary white--text mybtn" style="text-decoration:none" >VIEW MORE PROJECTS</v-btn>
           </v-flex>
        </v-layout>
     </v-card>  
    </v-flex>
  </v-layout> 
		</v-layout>

				 <v-layout   justify-left class="mt-5" >
         <v-flex xs3 sm3 offset-xs1  class="mb-2 pb2 ">
          <v-card flat height="590" style="background:#fafafa" >
          <v-flex xs12  >   
						<v-layout row wrap  justify-end class="mt-4 " >
						 	<v-flex xs4 sm6 class="mb-2 pb2">
								<v-card flat>
								<v-flex xs12  style="position:absolute"  >  
                   <Social class="mt-4" id="social" ></Social>                   
								</v-flex>              
							</v-card>
							</v-flex>

              <!-- Dont delete this snippet -->
							<v-flex xs4 sm4  class="mb-2 pb2">
								<v-card flat>
								<v-flex left xs12 class="cyan lighten-5" >                            
								</v-flex>
							</v-card>
							</v-flex>
             </v-layout> 
           </v-flex>
         </v-card>
        </v-flex>

				<v-flex xs6 sm4  class="mb-2 pb2">
         <v-flex xs12 sm12 class="headline font-weight-bold py-5 text-xs-center info lighten-3  " >
          Contact Me through my <br>
            <span class="primary--text"> <span class="mdi mdi-arrow-left-bold"></span>
Social Media</span>
           <br> or <br>
           <i left class="mdi mdi-email-variant text-xs-center primary--text"></i>
          <v-btn to="/contact" class="primary white--text mt-2 mb-2 mybtn" style="text-decoration:none"> 
                    <v-spacer></v-spacer> Message Me</v-btn>  
          </v-flex>
        </v-flex>
    
          </v-layout>
	</v-app>
</template>

<script>
import Social from '../components/Social.vue'

  export default {
    components: {
       Social
    },
  }
</script>

<style>
*{
  text-decoration: none;
}
.mybtn:hover{
  color: yellow;
  text-transform: lowercase; 
  
}
</style>

