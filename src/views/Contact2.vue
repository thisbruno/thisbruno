<template>
	<v-app>
		<v-layout row wrap justify-space-around class="mt-4">
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
					<v-layout justify-center row wrap>				
						<p class="title info black--text py-3 px-5 mt-1 ">Have a question? Please enquire below</p>

					<v-flex xs12  text-xs-left>
			      <v-form class="px-3  mx-3"
						 action="https://send.pageclip.co/gOf5il7pwKwOvgYn2k0IWWmZFob8Ju2f"  method="Post" ref="form" v-model="valid" lazy-validation>
               <v-text-field autofocus   outline style="font-size:19px; font-color:red ; height:73px" name="Name"
                  required  label="NAME" :rules='messageRules' height='19px' >
               </v-text-field>

					     <v-text-field autofocus  light   style="font-size: 19px ; height:83px"  name="_replyto" required label="E-MAIL" outline   :rules="emailRules"   >  </v-text-field>
								 				 								
							<v-textarea autofocus outline style="font-size:19px; height:127px" rows="4" name="Message"
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

