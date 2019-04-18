<template>
<v-app  id ="skills"  class="pt-5">
       <div class="display-1 pt-3 text-xs-center text-uppercase font-weight-regular primary--text
        ">Services & Skills 222</div> <br>      
<v-layout row wrap justify-space-around>
    <v-flex xs12 sm6 md5  class=" text-sm-left mt-3 ">
       <div class=" headline cyan--text font-weight-regular ml-5 ">
         <div class="abouttext"> 
            My area of my expertise is Front-End development and I have sufficient Back-end experience.  <br>
            I'm proficient in HTML5, CSS3 and JavaScript (ES-6) , hence can build  web-apps with Vue or React, custom plugins with interactive and responsive displays.
            I have experience with Back-End Technology i.e Node.Js and Databases like Mongo DB and serverless options like Firebase and A.W.S also have experience in working with CMS like WordPress Drupal.     
       </div> </div>     
    </v-flex>
    <v-flex xs10 sm5 md6  class="mt-3  justify-space-around text-xs-left ">
    <v-card class="ml-4"> <tprogress></tprogress>  </v-card>
    </v-flex> 
  </v-layout> 
 <Footer class="mt-3"></Footer>

</v-app>
</template>

<script>
import tprogress from '../components/Progress'
import Footer from '../components/Footer.vue'
  export default {
    components: {
    tprogress  ,Footer
    },

  }
</script>

<style scoped>
#skills{
background-color:#252627;
}
.abouttext{
    line-height: 1.7;
 
}

.font2{
  font-family: vidaloka, noto sans ;  
}
.color1{
 color: #E31B6D;
}
.flex1{
   flex-basis: 50%;
    flex-grow: 0;
}
</style>

