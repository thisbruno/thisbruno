<template>
	<v-app>
		<v-layout row wrap justify-space-between class="mt-4">

			<v-flex xs12 sm4 md3 text-xs-center>
				<v-card>
			<v-card >
					<img cover src='../assets/br.png' :height="thumbnailHeight"  width="100%"  > 
			</v-card>

				  <v-card-text>
						<h3 class="info--text">Get in touch</h3>
						<p class="title"> Office hours are 9 am to 9 pm on weekdays. We are based in Nairobi, Kenya.</p>
					</v-card-text>
				</v-card>
			</v-flex>			
			<v-flex xs12 sm6 md5 >
				<v-card class="mr-2 ml-2">
					<v-layout justify-center row wrap>				
						<p class="title info black--text py-3 px-5  mt-1  text-xs-center">Have a question? <br> Please enquire below..</p>

					<v-flex xs12  text-xs-left>
			      <v-form class="px-3  mx-3 pageclip-form"
					action="https://send.pageclip.co/fKoy28YC92aWlP3aeucqC66OIlQWX0zN"  method="post" ref="form" v-model="valid" lazy-validation>
               <v-text-field autofocus   outline style="font-size:19px; font-color:red ; height:73px" name="Name"
                  required  label="NAME" :rules='messageRules' height='19px' >
               </v-text-field>

					     <v-text-field autofocus  light   style="font-size: 19px ; height:83px"  name="_replyto" required label="E-MAIL" outline   :rules="emailRules"   >  </v-text-field>
								 				 								
							<v-textarea autofocus outline style="font-size:19px; height:127px" rows="4" name="Message"
							:rules='messageRules' required label="MESSAGE"  ></v-textarea>
                    
						  <v-tooltip bottom >  <template v-slot:activator="{ on }">
						  <v-btn raised large class="info mb-3   lighten-3 primary--text pageclip-form__submit font-weight-bold title" type="submit"   :disabled="!valid"  @click="theSubmit"  >
                    <span>Send</span></v-btn> 
	   		        </template>
 						     <span class="primary--text info"> ✓✓✓ </span>
                     </v-tooltip>
							<!-- to acrivate tooltip add this v-on="on" -->

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
            v => !!v || 'e-mail is required',
           v => /.+@.+/.test(v) || 'e-mail is not valid' ],
           messageRules: [
             v => !!v || '*'
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
							<div class="text-xs-center headline primary--text headline pa-5 cyan"> Your Message has been  Succesfully <br> SENT  !!!</div>  <br> 
							
							</span> `
       })  
     }
     }    
  }, 		
		computed: {
		   thumbnailHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '350px'
        case 'sm': return '200px'
        case 'md': return '230px'
        case 'lg': return '250px'
        case 'xl': return '300px'
      }
    }
	}
}
</script>

