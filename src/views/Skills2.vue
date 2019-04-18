<template>
	<v-container>
		<div id="menu-bar">
			<div id="menu" hidden-md-down class="hidden-md-down">
				<div id="bar1" class="bar"></div>
				<div id="bar2" class="bar"></div>
				<div id="bar3" class="bar"></div>
			</div>
			<ul class="nav" id="nav">
				<li><a href="#">Home</a> </li>
				<li><a href="#">Portfolio</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#">Skills</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</div>
		<div class="menu-bg" id="menu-bg"></div>
	</v-container>
</template>


<script>
export default {
	mounted() {
		$(document).ready(function(){
  $("#menu").click(function(){
		$("#menu").toggleClass("change");
		$("#nav").toggleClass("change");
		$("#menu-bg").toggleClass("change-bg");
		
  });
});
}
	}

</script>





<style scoped>
body{
	font-family: 'PT Sans',sans-serif;
	background-color: #373c56;
}
#menu{
	width: 35px;
	height: 30px;
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
}
.nav li a:hover{
	font-weight: bold;
}
.nav li{
	list-style: none;
	padding: 16px 0;
}
.nav{
	padding: 0;
	margin: 0 20px;
	transition: 0.3s ease;
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
	background: radial-gradient(circle,#e94498,#b81568);
	border-radius: 50%;
	transition: 0.3s ease;
}
#menu-bar{
	z-index: 2;	
}
.change-bg{
	width: 550px;
	height: 540px;
	transform: translate(-60%,-30%);
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
