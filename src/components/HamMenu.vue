<template>
	<v-container fluid id="mob-menu" class="pa-0" >
		<div id="menu-bar">
			<div id="menu"  >
				<div id="bar1" class="bar"></div>
				<div id="bar2" class="bar"></div>
				<div id="bar3" class="bar"></div>
			</div>

			<ul class="nav" id="nav">
				<li ><router-link to="/">	Home</router-link>	</li>
				<li ><router-link to="/portfolio">Portfolio</router-link>	</li>
				<li ><router-link to="/services">Services</router-link>	</li>
				<li ><router-link to="/skills">Skills</router-link>	</li>
				<li ><router-link to="/contact">Contact</router-link>	</li>
			</ul>

		</div>
		<div class="menu-bg" id="menu-bg"></div>
	</v-container>
</template>


<script>
export default {
	mounted() {
		$(document).ready(function(){
  $("#menu-bar").click(function(){
		$("#menu").toggleClass("change");
		$("#nav").toggleClass("change");
		$("#menu-bg").toggleClass("change-bg");
		
  });
});
}
	}

</script>





<style scoped>
 #mob-menu{
	font-family: 'Quick sand',sans-serif;
	background-color: #373c56;
}
#menu{
	width: 35px;
	height: 20px;
	margin: 30px 0 20px 20px;
	cursor: pointer;
}
.bar{
	height: 5px;
	width: 100%;
	background-color: #b81568;
	display: block;
	border-radius: 5px;
	transition: 0.3s ease;
}
#bar1{
	transform: translateY(-4px);
}
#bar3{
	transform: translateY(4px);
}
.nav li a{
	color: #fff;
	text-decoration: none;
	font-size: 19px;
	font-family: Quicksand;
	font-weight: light;
}
.nav li a:hover{
	font-weight: bold;
	background-color: cyan;
	text-transform: uppercase;
	color: black;
}
.nav li{
	list-style: none;
	padding: 4px 0;
}
.nav{
	padding: 0;
	margin: 0 20px;
	transition: 0.4s ease;
	display: none;
}
.menu-bg, #menu-bar{
	top: 0;
	left: 0;
	position: absolute;
}
.menu-bg{
	z-index: 1;
	width: 0;
	height: 0;
	margin: 30px 0 20px 20px;
	background: radial-gradient(circle,#E31B6D,#ff5252);
	border-radius: 47%;
	transition: 0.3s ease;
}
#menu-bar{
	z-index: 2;	
}
.change-bg{
	width: 570px;
	height: 550px;
	transform: translate(-63%,-27%);
}
.change .bar{
	background-color: white;
}
.change #bar1{
	transform: translateY(4px) rotateZ(-45deg);
}
.change #bar3{
	transform: translateY(-6px) rotate(45deg);
}
.change #bar2{
	opacity: 0;
}
.change{
	display: block;
}
</style>
