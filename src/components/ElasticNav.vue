<template>
  <div class="mt-0 ela-nav  hidden-xs-only">
	  <div class="wrapper" >
   <v-toolbar  floating  fixed height="43"  class="tabs mt-0 info "
    style=" border: 1opx solid rgb(236, 4, 4);" >
		<v-spacer></v-spacer>
    <div class="selector ">
    </div>
    <span >
    <router-link to="/" class="active" ><span class="active">Home</span></router-link>	
   	<router-link to="/portfolio"><span>portfolio</span></router-link>	
		<router-link to="/services"><span>services</span></router-link>		
		<router-link to="/skills"><span>skills</span></router-link>	
		<router-link to="/contact"><span>contact</span></router-link>
    </span>
      
    </v-toolbar>
    </div>
  </div>
</template>

<script>
	import router from '../router'

export default {
	components :{
	},
  mounted () {
var tabs = $('.tabs');
var selector = $('.tabs').find('a').length;
//var selector = $(".tabs").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();
$(".selector").css({
  "left": activeItem.position.left + "px", 
  "width": activeWidth + "px"
});

$(".tabs").on("click","a",function(e){
  e.preventDefault();
  $('.tabs a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
		"width": activeWidth + "px",
  });
		// this.$router.go('skills')
		// router.push({ path: '/skills' })
		// console.log("the code reaches here");
		
});

  }

}
</script>

<style scoped>

.wrapper{
  text-align:right;  
   font-family: "Quicksand", sans-serif;
   position: sticky;
   top: 0px;;
    z-index: 1;
}

.tabs{
  margin:18px 7px 0 0;
  font-size:17px;
  padding: 0px;
  list-style:none;
  /* background: cyan; */
  background: #00FFFF;
  box-shadow:0px 5px 20px rgba(0,0,0,0.1);
  display:inline-block;
  border-radius:20px;
  position:sticky;
	border: 0px solid rgb(245, 7, 7);
}

.tabs a{
  text-decoration:none;
  color: rgb(0, 0, 0);
  text-transform: capitalize;
  padding:9px 20px;
  display:inline-block;
  position:relative;
  z-index:1;
  transition-duration:2.27s;
  font-weight: bolder;
}

.tabs a.active{
  color:#fff;
  /* background-color: rgb(131, 138, 179); */
    text-transform:uppercase;

}

.tabs a {
  margin-right:11px;
}

/* .tabs .selector{
  height:99%;
  display:inline-block;
  position:absolute;
  left:20px;
  top:0px;
  z-index:1;
  border-radius: 16px;
  transition-duration:0.57s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);  
  background: #05abe0;
  background: -moz-linear-gradient(45deg, #05abe0 0%, #8200f4 100%);
  background: -webkit-linear-gradient(45deg, #05abe0 0%,#8200f4 100%);
  background: linear-gradient(45deg, #05abe0 0%,#8200f4 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#05abe0', endColorstr='#8200f4',GradientType=1 );
} */
.tabs .selector{
  height:99%;
  display:inline-block;
  position:absolute;
  left:20px;
  top:0px;
  z-index:1;
  border-radius: 16px;
  transition-duration:0.37s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);  
  background: #e005ce;
  background: -moz-linear-gradient(45deg, #e005a9 0%, #f400d3 100%);
  background: -webkit-linear-gradient(45deg, #e005bb 0%,#f400e8 100%);
  background: linear-gradient(45deg, #e0059e 0%,#f400e8 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#05abe0', endColorstr='#8200f4',GradientType=1 );
}
</style>
