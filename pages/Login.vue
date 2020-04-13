<template>
  <div>
    <h1>Login</h1>

    <UserAuthForm />
  </div>
</template>

<script>
import UserAuthForm from '../components/UserAuthForm'

export default {
  components: {
    UserAuthForm
  },
  data() {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  props: ['login'],
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>