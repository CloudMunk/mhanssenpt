<template>
  <v-container class="container">
    <v-layout>
      <v-card class="singInCard">
        <v-card-title>
          <v-layout justify-center>
            Sign In
          </v-layout>
        </v-card-title>
        <div>
          <form @submit.prevent="login">
            <v-layout justify-center>
              <input type="text"  placeholder="email" v-model="email">
            </v-layout>
            <v-layout justify-center>
              <input type="password"  placeholder="password" v-model="password">
            </v-layout>
            <v-layout justify-center>
              <button type="submit">Submit</button>
            </v-layout>
          </form>
        </div>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth'

export default {
  data() {
    return {
      email: '',
      password: '',
      errors: ''
    }
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(user => {
          console.log(user)
          this.$router.push('/account')
      })
      .catch(error => {
          console.log(error)
          this.errors = error
      })
    }
  },
}
</script>

<style scoped>
.singInCard {
  min-width: 900px !important;
  max-width: 900px;
}

</style>