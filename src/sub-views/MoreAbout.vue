<template>
	<v-app class="mr-5 ml-5 mt-4 ">

		<v-layout>
    
   <v-layout row wrap text-xs-center justify-space-around class="info lighten-4">
     <v-flex xs10 text-xs-center>
        <h1 class="mt-4">Portfolio</h1>
     </v-flex>
    <v-flex xs12>
     <v-card flat class="info lighten-4">
      <v-layout row wrap  justify-space-around>
         <v-flex xs11 sm7 md5 class="mb-2 pb2">
          <v-card flat>
            <v-flex xs12 class="info lighten-4" >             
        <v-flex xs12 class="headline font-weight-bold py-3 info lighten-4" >
                Meet Up Project
            </v-flex>
          <img :src="require('../assets/mu1.png')" alt="Avatar" contain
					style="width:91% ; max-height: 260px" >	
           </v-flex>
         </v-card>
        </v-flex>
         <v-flex xs11 sm5 md5 class="mb-2 pb2 pt-3 mt-5 " >
          <v-card flat class="mr-2">
            <v-flex xs12>
              <v-card-text>
                <p>
                  fgfggggLrrfforem ipsum dolor sit, amet consectetur adipisicing elit. Alias quidem earum autem. Assumenda dolore quis itaque odio a cum sit, dolorum iusto pariatur, corrupti amet nobis ullam et obcaecati blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quod consequatur placeat 
                </p>
              </v-card-text>
            </v-flex>
         </v-card  >
        </v-flex>
        <!-- end of card -->
      </v-layout>

			 <v-layout row wrap  justify-space-around class="mt-4" >
         <v-flex xs11 sm5  class="mb-2 pb2">
          <v-card flat>
        <v-flex xs12 class="subheading font-weight-bold py-3 info lighten-4 " >
               PROJECT-2
          </v-flex>
            <v-flex xs12 class="info lighten-4" >             
          <img :src="require('../assets/mu1.png')" alt="Avatar" contain
					style="width:91% ; max-height: 220px" >	
           </v-flex>
         </v-card>
        </v-flex>

				<v-flex xs11 sm5  class="mb-2 pb2">
          <v-card flat>
        <v-flex xs12 class="subheading font-weight-bold py-3 info lighten-4" >
                PROJECT 3
          </v-flex>
            <v-flex xs12 class="info lighten-4" >             
          <img :src="require('../assets/mu1.png')" alt="Avatar" contain
					style="width:91% ; max-height: 220px" >	
           </v-flex>
         </v-card>
        </v-flex>
        <!-- end of card -->
      </v-layout>


        <v-layout class="pb-3 pt-2">
           <v-flex>
           <v-btn large to="/portfolio" class="primary white--text" >VIEW MORE PROJECTS</v-btn>
           </v-flex>
        </v-layout>
     </v-card>  
    </v-flex>
  </v-layout> 
		</v-layout>
  <v-layout justify-space-around class="mt-3 ">
        <v-flex xs12 sm6 class="headline font-weight-bold py-5 text-xs-center  cyan lighten-4" >
          Contact Me through my <br>
            <span class="primary--text">Social Media</span>
           <br> or <br>
          <v-btn to="/contact" class="primary white--text mt-2 mb-2"> <v-icon left class="info--text">person</v-icon> Contact Me</v-btn>  
          </v-flex>
  </v-layout>

				 <v-layout row wrap  justify-space-between class="mt-5" >
         <v-flex xs11 sm3  class="mb-2 pb2 ">
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

				<v-flex xs11 sm7  class="mb-2 pb2">
          <v-card flat>
        <v-flex xs12 class="subheading font-weight-bold py-3 cyan lighten-5" >
               Google Api
          </v-flex>
            <v-flex xs12 class="cyan lighten-5" >             
          <img :src="require('../assets/contact2.jpg')" alt="Avatar" contain
					style="width:100% ; height: 270px" >	
           </v-flex>
         </v-card>
        </v-flex>
          </v-layout>
    <Footer></Footer>
	</v-app>
</template>

<script>
import Footer from '../components/Footer.vue'
import Social from '../components/Social.vue'

  export default {
    components: {
      Footer , Social,
    },
  }
</script>

<style>
*{
  text-decoration: none;
}
</style>

