<template>
<v-app>
  <Landing/> 

  <app-nav class="mt-2  thenavbar "></app-nav>

  <About style="overflow-y:auto;" />
  <MoreAbout />
</v-app>
</template>

<script>
import Landing from '../sub-views/Landing.vue'
import About from '../sub-views/About.vue'
import MoreAbout from '../sub-views/MoreAbout.vue'

  export default {
    components: {
       Landing , About , MoreAbout
    },
    mounted() {
      this.$nextTick(() => {
          $('.thenavbar').hide()
          // $('.thenavbar').fadeIn('slow')

      
      }),
      $(function(){
        $(window).scroll(function(){
          if($(window).scrollTop() >= 400){
          $('.thenavbar').slideDown(970)
          }
          else{
           $('.thenavbar').slideUp(670)
          }
        })
      })

        //  ,
      // $(function(){
      //    var prevScrollpos = window.pageYOffset;
      //   $(window).scroll(function(){
      //      var currentScrollPos = window.pageYOffset;
      //  if ( prevScrollpos > currentScrollPos) {
      //     $('.thenavbar').attr('top','0')
      //      $('.thenavbar').removeClass('hideNav'); 
         
      //     }
      //     else{
      //        $('.thenavbar').removeAttr('top')
      //     $('.thenavbar').attr('top','-3409px')
      //         $('.thenavbar').addClass('hideNav');                 
      //     }
      //      prevScrollpos = currentScrollPos;
      //   })
      // })

    }
  }
</script>

<style scoped>
.thenavbar{
/* position: sticky; */
 top: 0px; 
width: 100%;
 transition: top ease-in-out 0.03s;
  z-index: 2;
}

.hideNav{
position:sticky; 
top:-20000px; 
width: 100%;
 transition: top ease-in-out 0.03s;  
}

</style>
