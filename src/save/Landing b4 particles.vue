<template >
    <div class="landing ma-0 pa-0 ">  
    <v-container fluid fill-height class="hero-image" style="max-height: 100vh;  overflow-y: hidden;">
        <v-layout  align-center column class="mt-5 pt-5" >
            <div class="display-4 text-xs-center mt-3 pt-1 primary--text welcome">Welcome <span class="white--text">,</span> </div>
            <div class="display-2 white--text text-xs-center  py-4">I'm <span class='primary--text' >BRUNO </span> 
                   </div>          
          <div>                
             <v-card    class="headline font-weight-thin text-xs-center cyan lighten-3 mb-3 px-5 py-2  mt-1" >
            <vue-typer 
                  class="font-weight-bold  headline " 
                  :text='["The Full-Stack Developer","The Front-End Developer"," The Back-End Engineer ","The  UI/UX Designer "," The ML Enthusiast ", " The Analytical Chemist ", " The Python Developer "  ]'
                  :repeat='127'  :shuffle='false'  initial-action='typing'
                  :pre-type-delay='73'  :type-delay='93' :pre-erase-delay='1270'
                  :erase-delay='37'  erase-style='backspace'  :erase-on-complete='false'
                  caret-animation='smooth' > span
            </vue-typer>     
             </v-card>
             </div>    
          <v-flex  id="nav" text-xs-center class="mt-2">
           <a href="#thisbruno"> 
             <v-btn fab  class="cyan  lighten-1 primary--text "> <v-icon size="57px" >arrow_drop_down</v-icon></v-btn></a>
          </v-flex>
          
        </v-layout>
    </v-container>

     <div id="thisbruno"></div>
 




    </div>
</template>

<script>
export default {
  mounted() {
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1');  
            $target.focus(); 
          };
        });
      }
    }
  });
  }
}
</script>


<style  scoped>
.landing{
  border-bottom: 5px solid;
}


.hero-image {
    background: url("../assets/theback.jpg") no-repeat center;
    background-size: cover;
    width: 100%; height: 100vh;
    position: relative;
    background-attachment: fixed;

}
 #nav .btn2 {
  position: relative;
}
.v-icon {
  display: inline-flex;}
  
@keyframes rocking {
  0%,100% {transform: rotateZ(-10deg);}
  50%     {transform: rotateZ(10deg);}
}

 vue-typer {
  /* font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; */
  font-family: 'Yatra One';
  background-color: rgb(255, 255, 255);
  } 


</style>
