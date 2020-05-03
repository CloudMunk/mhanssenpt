<template>
  <v-app dark>
    <v-app-bar
      app
      class="navbar"
    >
    
      <h1 class="logoNavbar">
        <nuxt-link to="/" style="text-decoration: none;">
        Marius Hanssen <br> 
        Personal Trainer
          </nuxt-link>
      </h1>
  
    </v-app-bar>
    <v-content style="background-color: #FFFFFF;">
      <v-container >
        <nuxt />
      </v-container>
    </v-content>
    
    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth'


export default {
  data () {
    return {
      
    }
  },


  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user)

      this.user = user
    })
  }
}
</script>


<style scoped>
/* BIG SCREENS */
.navbar {
  min-height: 435px;
  background-image: url('/backgroundImage.jpg');
  background-size: cover;
  z-index: 0;
  position: relative;
}
.logoNavbar {
  margin: 0 auto;
  margin-top: 250px !important;
}
</style>