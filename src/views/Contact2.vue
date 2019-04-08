<template>
	<v-app>
		<v-layout row wrap justify-space-around class="mt-3">
			<v-flex xs9 class="mb-3 mr-2 ml-2">
				<p class="headline pa-3  " style="border-bottom:2px solid; border-top:2px solid">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus rem qui. </p>
			</v-flex>
			<v-flex xs12 sm4 text-xs-center>
				<v-card>
				<img src='../assets/koff.jpg' :height="thumbnailHeight" class="ml-5 mr-5" > 
				  <v-card-text>
						<h3 class="info--text">Get in touch</h3>
						<p class="title"> Office hours are 9am to 5pm on weekdays. We are based in Salthill, Co. Galway, Ireland.</p>
					</v-card-text>
				</v-card>
			</v-flex>			
			<v-flex xs12 sm6>
				<v-card class="mr-2 ml-2">
					<v-layout justify-center row wrap="">
					<v-flex xs11  text-xs-center class="cyan">
						<p class="title white--text py-4">Have a question? Please enquire below</p>
					</v-flex>

					<v-flex xs12  text-xs-center>
			      <v-form class="px-3 pt-2 mx-3"
						 action="https://send.pageclip.co/gOf5il7pwKwOvgYn2k0IWWmZFob8Ju2f"  method="Post" ref="form" v-model="valid" lazy-validation>
               <v-text-field outline style="font-size:19px; font-color:red" name="Name"
                  required  label="NAME" :rules='messageRules' height='12px' >
               </v-text-field>

					     <v-text-field light  style="font-size: 19px"  name="_replyto" required label="E-MAIL" outline height='12px'  :rules="emailRules"   >  </v-text-field>
								 				 								
							<v-textarea outline style="font-size:19px" rows="6" name="Message"
							:rules='messageRules' required label="MESSAGE"  ></v-textarea>
            
						  <v-btn raised large class="info  lighten-3 primary--text pageclip-form__submit font-weight-bold title" type="submit"  :disabled="!valid"  @click="theSubmit"  >
              <span>Send</span></v-btn> 

						</v-form>
					</v-flex>
					</v-layout>

				</v-card>
			</v-flex>
		</v-layout>
	</v-app>
</template>

<script>
export default {
	  data(){
			return{
				name: '' , email : '' , message : "",
         valid: true, 
         email: '',
         emailRules: [
            v => !!v || 'e-mail required',
           v => /.+@.+/.test(v) || 'e-mail not valid' ],
           messageRules: [
             v => !!v || '**'
           ] 
			}
		},
      methods: {
				theSubmit() {
					if(this.$refs.form.validate()){
						var form = document.querySelector('.pageclip-form')
						Pageclip.form(form, {
							onSubmit: function (event) { },
							onResponse: function (error, response) { },
							successTemplate:` <span >
							<div class="text-xs-center headline primary--text headline pa-5 cyan"> Message Sent Succesfully !!!</div> <br> <br>  </span> `
       })  
     }
     }    
  }, 		
		computed: {
		   thumbnailHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '360px'
        case 'sm': return '330px'
        case 'md': return '330px'
        case 'lg': return '290px'
        case 'xl': return '400px'
      }
    }
	}
}
</script>

