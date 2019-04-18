<template>
<v-app>
  <Landing/> 

  <!-- <app-nav class=" thenavbar "></app-nav> -->

  <About style="overflow-y:auto;" />
  <MoreAbout />
</v-app>
</template>

<script>
import Landing from '../sub-views/Landing.vue'
import About from '../sub-views/About.vue'
import MoreAbout from '../sub-views/MoreAbout.vue'
import router from '../router'


  export default {
    components: {
       Landing , About , MoreAbout
    },
    // created(){
    //    this.$nextTick(() => {
    //    if (this.$route.path==='/skills'){
    //       $('.navbar').addClass( "thenavbar" )
    //       console.log("wef rkjev k");
    //        }
    //     else{
    //        $('.navbar').removeClass( "thenavbar" )
    //       }
    //   })
      
    // },



    mounted() {
      this.$nextTick(() => {
      //  if ($route.path==='/'){
          // $('.thenavbar').hide()
          //  }
     
      }),
      $(function(){
        $(window).scroll(function(){
          if($(window).scrollTop() >= 200){
          $('.thenavbar').slideDown(970)
          }
          else{
          //  $('.thenavbar').slideUp(670)
          }
        })
      })

      //    ,
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
position: sticky;
 top: 0px; 
width: 100%;
 transition: top ease-in-out 0.03s;
  z-index: 1;
}

.hideNav{
position:sticky; 
top:-20000px; 
width: 100%;
 transition: top ease-in-out 0.03s;  
}

</style>
