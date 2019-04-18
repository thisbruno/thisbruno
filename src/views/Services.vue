<template>
  <v-container fluid class="mt-0 pt-2  ">
    <p class="display-3 text-xs-center">de Services</p>

    <v-layout row wrap justify-space-around >
      <v-flex xs11 sm4 md3 text-xs-center
      v-for="service in services" :key="service.id"   >

      <v-card flat class=" ma-2 mb-3 justify-space-around">        
       <p class="headline text-xs-center">Services</p>    

       <v-avatar  size="190">
         <img    :src="service.image" alt="" srcset="">
       </v-avatar>
              
       <v-card-text>
        <span>{{service.text}}</span>
       </v-card-text>

      </v-card>

      </v-flex>
    </v-layout>

  </v-container>
</template>





<script>
export default {
  data () {
    return {
      services: [
       {image:  require("../assets/pm1.png") , 
        title: 'Services1',
        text : '1111 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maxime, quisquam iusto                 eveniet consequatur harum a doloribus quibusdam deserunt, iure voluptates fugit tempore expedita inventore at iste impedit. Doloribu ' },

        { image:  require("../assets/pm1.png"), 
        title: 'Services2',
        text : '2222 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maxime, quisquam iusto eveniet consequatur harum a doloribus quibusdam deserunt, iure voluptates fugit tempore expedita inventore at iste impedit. Doloribu '},

         { image:  require("../assets/pm1.png"), 
        title: 'Services2',
        text : '33333Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maxime, quisquam iusto eveniet consequatur harum a doloribus quibusdam deserunt, iure voluptates fugit tempore expedita inventore at iste impedit. Doloribu '},

         { image:  require("../assets/pm1.png"), 
        title: 'Services2',
        text : '4444 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maxime, quisquam iusto eveniet consequatur harum a doloribus quibusdam deserunt, iure voluptates fugit tempore expedita inventore at iste impedit. Doloribu '},

       {image:  require("../assets/pm1.png") , 
        title: 'Services1',
        text : '1111 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maxime, quisquam iusto                 eveniet consequatur harum a doloribus quibusdam deserunt, iure voluptates fugit tempore expedita inventore at iste impedit. Doloribu ' },

        { image:  require("../assets/pm1.png"), 
        title: 'Services2',
        text : '2222 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maxime, quisquam iusto eveniet consequatur harum a doloribus quibusdam deserunt, iure voluptates fugit tempore expedita inventore at iste impedit. Doloribu '},

         { image:  require("../assets/pm1.png"), 
        title: 'Services2',
        text : '33333Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maxime, quisquam iusto eveniet consequatur harum a doloribus quibusdam deserunt, iure voluptates fugit tempore expedita inventore at iste impedit. Doloribu '},

         { image:  require("../assets/pm1.png"), 
        title: 'Services2',
        text : '4444 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo maxime, quisquam iusto eveniet consequatur harum a doloribus quibusdam deserunt, iure voluptates fugit tempore expedita inventore at iste impedit. Doloribu '},
        
]  }      
} }
</script> 