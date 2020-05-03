<template>
  <v-container>
    <v-layout>
      <v-card>
        <v-card-title>
          Register
        </v-card-title>
        <div>
          <form @submit.prevent="register">
            <div>
              <input type="text"  placeholder="email" v-model="email">
            </div>
            <div>
              <input type="password"  placeholder="password" v-model="password">
            </div>
            <button type="submit">Submit</button>
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
    register() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
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