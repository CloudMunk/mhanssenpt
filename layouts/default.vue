<template>
  <v-app dark>
    <v-app-bar
      app
      class="navbar"
    >
    <h1 class="logoNavbar">
      Marius Hanssen <br> Personal Trainer
    </h1>
    </v-app-bar>
    <v-content>
      <v-container>
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
export default {
  data () {
    return {
      
    }
  },
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