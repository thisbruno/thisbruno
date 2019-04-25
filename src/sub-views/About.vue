<template>
<v-app class="mr-2 ml-2  pa- about ">

  <v-layout row wrap text-xs-center justify-space-around class="mt-5 pt-5 hidden-xs-only">
    <v-flex xs12 sm10>
      <p class="headline font-weight-bold py-4" style="border-bottom:2px solid; border-top:2px solid">
         Freelance Web Designer & Developer  <br>
        Experienced in developing with JavaScript and Wordpress 
      </p>
    </v-flex>
  </v-layout>

    <v-layout row wrap text-xs-center justify-space-around class="mt-4 hidden-sm-and-up">
    <v-flex xs12 sm10>
      <p class="headline font-weight-bold py-4" style="border-bottom:2px solid; border-top:2px solid">
         Freelance Web Designer & Developer <br>
        Experienced in developing with  JavaScript and Wordpress 
      </p>
    </v-flex>
  </v-layout>


   <v-layout row wrap text-xs-center justify-space-around >
    <v-flex xs9 sm7>
    <p class="title mt-2 pb-2 " >
        I'm a Full-Stack Developer with more than two years of experience in WEB technologies. I have doing a different kind of projects using <strong> JavaScript / HTML5 / CSS3  and Node.JS </strong>
        <br> <br>
         I'm <router-link to = '/contact' style="cursor: pointer; text-decoration: none" ><span class="font-weight-bold title" > available</span></router-link>  for remote work If you would like to build something together,
        
    </p>
    </v-flex>
  </v-layout>

  <v-layout row justify-space-around class="mt-4 pt-1 pb-1 text-xs-center info lighten-4" >
      <v-flex xs12 sm10 md8>
       <v-card flat class="info lighten-4 py-3 subheading">
       <v-card-text style="font-size:17px">
         <div class="headline primary--text pb-2">Services</div>
         My <router-link to= '/services' class="font-weight-bold "  style="cursor: pointer;text-decoration: none"> <strong>Skills</strong> </router-link> are broad ranging from <strong>User Experience (UX) to Design, Front-End to Back-End development</strong> . <br>

        </v-card-text>

        </v-card>
      </v-flex>
     </v-layout>
    
   <v-layout row wrap text-xs-center justify-space-around >
    <v-flex xs12>
     <v-card flat class="info lighten-4">
      <v-layout row wrap  justify-space-around>
        <v-flex xs12 sm5 md4 class="mb-2 pb2">
          <v-card flat class="mr-1 ml-3 info lighten-3">
            <v-flex xs12 class="py-4 subheading font-weight-bold" >
                Web Design
            </v-flex>
            <v-flex xs12>
              <v-avatar size="193" color="red">
                <img  :src="require('../assets/webb.jpg')" alt="Avatar" height="173" >
              </v-avatar>     
            </v-flex>
            <v-flex>
              <v-card-text>
                <p class="subheading px-2">
                   My approach to website design is to create an elegant and innovative website that strengthens your  brand while ensuring ease of use and simplicity for your audience. <br> Efficient and immersive user experience to capture your audience attention and deliver a clear message.
                </p>
              </v-card-text>
            </v-flex>
         </v-card>
        </v-flex> 
        <!-- end of card -->
         <v-flex xs12 sm5 md4 class="mb-2 pb2">
          <v-card flat class="mr-1 ml-1 info lighten-3">
            <v-flex xs12 class="py-4 subheading font-weight-bold" >
                Front-End Development
            </v-flex>
            <v-flex xs12>
              <v-avatar size="193" color="red">
                <img :src="require('../assets/code2.jpg')" alt="Avatar" >
              </v-avatar>     
            </v-flex>
            <v-flex>
              <v-card-text>
                <p class="subheading px-2">
                  The Front-End Development involves using the pre-agreed design and coding it to a custom web app using the web industry stardards <br>(HTML5, CSS3, JS, jQuery). <br>
                  I create responsive websites so they can easily run across all devices and broswers fluidly resizing for optimal viewing despite the screen size  .
                </p>
              </v-card-text>
            </v-flex>
         </v-card>
        </v-flex>
        <!-- end of card -->

         <v-flex xs12 sm5 md4 class="mb-2 pb2">
          <v-card flat class="mr-3 ml-1 info lighten-3">
            <v-flex xs12 class="py-4 subheading font-weight-bold" >
                Back-End Development
            </v-flex>
            <v-flex xs12>
              <v-avatar size="193" color="red">
                <img :src="require('../assets/back.jpg')" alt="Avatar" >
              </v-avatar>     
            </v-flex>
            <v-flex>
              <v-card-text>
                <p class="subheading px-2" >
                  I'm also a proficient in Back-End Web development, which adds utility and functionality to everything that was created in the Front-End. <br>
                  To prop up my Back-End skills I have learnt Python , Node.Js alongside with Mongo.DB to help me understand servers architecture  and server-side web application logic.
                </p>
              </v-card-text>
            </v-flex>
         </v-card  >
        </v-flex>
        <!-- end of card -->
      </v-layout>
        <v-layout class="pb-3 pt-2">
           <v-flex>
           <v-btn large to="/services" style="text-decoration:none" class="primary white--text mybtn" >VIEW MORE SERVICES</v-btn>
           </v-flex>
          </v-layout>
     </v-card>  
    </v-flex>
  </v-layout> 
     <!-- services end -->


          <!-- SKILLS -->

        <v-layout justify-center class=" mt-5 info lighten-4 ">
      <v-flex xs6 text-xs-center  class=" pt-4">
        <h1>Web Technology</h1>
        <p class="black--text  font-weight-bold">
          Check out some of the technology I use,
        </p>
      </v-flex>
    </v-layout>
  <!-- skills cards with languages -->
    <v-layout row wrap text-xs-center justify-space-around class="mt-0">
      <v-flex xs12 class="info lighten-4 text-xs-center">
      <v-flex xs12 >
       <v-card flat class="info lighten-4 py-1 pb-5">
      <v-layout row wrap  justify-center >

        <v-flex xs5 sm3 md2  offset-md0  class="mb-2 pb2 ">
          <v-card flat class="info lighten-4">

            <v-flex xs12  hidden-md-and-up >
              <v-card flat  class="mt-1 info lighten-4 pb-1 mx-2">
            <i style="font-size: 77px ;color:#f1662a " class="mdi mdi-language-html5"></i>  
            <div class="font-weight-bold">HTML-5</div>
              </v-card>     
            </v-flex>

            <v-flex xs12  hidden-md-and-up class="mb-4" >
              <v-card flat  class="mt-1 info lighten-4 pb-1 mx-2">
            <i style="font-size: 73px ;color:#016fba " class="mdi mdi-language-css3"></i>  
            <div class="font-weight-bold">CSS-3</div>
              </v-card>     
            </v-flex>

            <v-flex xs12>
              <v-card flat  class="mt-1 info lighten-4 pb- mx-3">
            <i style="font-size: 57px ;color:blue " class="mdi mdi-wordpress"></i>  
            <div class="font-weight-bold">WordPress</div>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <v-card flat  class=" info lighten-4 pb-1 mx-3">
            <i style="font-size: 57px ;color:#51b440" class="mdi mdi-leaf"></i>  
            <div class="font-weight-bold">Mongo DB</div>
            <span class="ui-icon ui-icon-circle-close"></span>

              </v-card>
            </v-flex>
            <v-flex xs12 hidden-sm-and-down>
              <v-card flat  class="mt-2 info lighten-4 pb-1 mx-3">
            <img src="../assets/jq.png" alt=""  height="57px" srcset="">
            <div class="font-weight-bold">JQuerry</div>
              </v-card>     
            </v-flex>
            <v-flex xs12 hidden-sm-and-down> 
              <v-card flat  class="mt-2 info lighten-4 pb-1 mx-3">
              <img src="../assets/fb.png" alt=""  height="57px" srcset="">
            <div class="font-weight-bold">FireBase</div>
              </v-card>
            </v-flex>
         </v-card>
        </v-flex> 
  
        <v-flex xs5 sm5 md3  offset-md0 hidden-sm-and-down class="mb-2 pb2">
          <v-card flat class="info lighten-4">
            <v-flex xs12>
              <v-card flat  class="mt-2 info lighten-4 pb-3 mx-2 mt-5">
            <i style="font-size: 83px ;color:#f1662a " class="mdi mdi-language-html5"></i>  
            <div class="font-weight-bold title">HTML-5</div>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <v-card flat  class="mt-2 info lighten-4 pb-3 mx-2">
            <i style="font-size: 83px ;color:#016fba " class="mdi mdi-language-html5"></i>  
            <div class="font-weight-bold title">CSS-3</div>
              </v-card>
            </v-flex>
         </v-card>
        </v-flex>

        <v-flex xs5 sm5 md3  offset-md0  hidden-sm-and-down class="mb-2 pb2">
          <v-card flat class="info lighten-4" >

            <v-flex xs12>
              <v-card flat  class="mt-2 info lighten-4 pb-3 mt-5">
            <i style="font-size: 83px ;color:#f1d63b " class="mdi mdi-language-javascript"></i>  
            <div class="font-weight-bold title">JavaScript</div>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <v-card flat  class="mt-2 info lighten-4 pb-3">
            <i style="font-size: 83px ;color:#76b35c" class="mdi mdi-nodejs"></i>  
            <div class="font-weight-bold title ">Node.Js</div>
              </v-card>
            </v-flex>
           </v-card>
          </v-flex> 

        <v-flex xs5 sm3 md2 class="mb-2 pb2">
          <v-card flat class="info lighten-4">

            <v-flex xs12  hidden-md-and-up >
              <v-card flat class="mt-1 info lighten-4 pb-1 mx-2">
            <i style="font-size: 77px ;color:#e9d54d " class="mdi mdi-language-javascript"></i>  
            <div class="font-weight-bold title">JavaScript</div>
              </v-card>     
            </v-flex>

            <v-flex xs12  hidden-md-and-up class="mb-4" >
              <v-card flat class="mt-1 info lighten-4 pb-4 mx-2">
            <i style="font-size: 77px ;color:#76b35c" class="mdi mdi-nodejs"></i>  
            <div class="font-weight-bold title">Node.Js e</div>
              </v-card>     
            </v-flex>

            <v-flex xs12 >
              <v-card flat hidden-sm-and-down class="mt-4 info lighten-4 pb-1 mx-3">
              <img src="../assets/vue.png" alt=""  height="60px" srcset="">
                <div class="font-weight-bold">Vue.JS</div>
              </v-card>     
            </v-flex>
            <v-flex xs12>
              <v-card flat  class="mt-2 info lighten-4 pb-1 mx-3">
              <img src="../assets/rt.png" alt=""  height="57px" srcset="">
            <div class="font-weight-bold">React.Js</div>
              </v-card>  
            </v-flex>
            <v-flex xs12 hidden-sm-and-down>
              <v-card flat  class="mt-2 info lighten-4 pb-1 mx-3">
            <i style="font-size: 57px ;color:#366994 " class="mdi mdi-language-python"></i>  
            <div class="font-weight-bold">Python</div>
              </v-card>
            <v-card  flat class="mt-1 info lighten-4 pb-1 mx-3">
              <img src="../assets/ai.png" alt=""  height="57px" srcset="">
            <div class="font-weight-bold">Illustrator</div>
              </v-card>
            </v-flex>
         </v-card>
        </v-flex>  

        <v-flex xs12 class="mt-3">
         <v-btn large to="/skills" style="text-decoration:none " class="primary white--text mybtn" >VIEW MORE SKILLS</v-btn>       
        </v-flex>

        </v-layout>
        </v-card>  
        </v-flex>
     </v-flex>
      </v-layout> 
    <!-- END OF SKILLS -->
    

</v-app>	
</template>

<style scoped>
.about{
  overflow-x: hidden;
}

.mybtn:hover{
  color: yellow;
  text-transform: lowercase; 
  
}



</style>



