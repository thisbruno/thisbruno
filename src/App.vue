<template>
  <v-app>
    <header  style="position:relative ; z-index: 2" >
    <app-HamMenu style="position:fixed ; z-index: 3" class="hidden-sm-and-up"></app-HamMenu>
    <app-Nav class="SleekNav "></app-Nav>
    </header>
      
    <body>
    <v-content >
      <router-view/>
    </v-content>
    </body>  

    <footer>
    <app-Footer></app-Footer>
    </footer>  

  </v-app>
</template>



<style >
.SleekNav{
position: fixed;
 top: 1px; 
width: 100%;
 transition: top ease-in-out 0.03s;
  z-index: 2;
}

v-app{
  font-size: 30px;
  line-height: 1.3em;
}

</style>

