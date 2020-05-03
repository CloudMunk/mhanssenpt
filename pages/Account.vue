<template>
    <div>
        <h1 style="color:black;">This is the Account page</h1>
        
    </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth'

export default {
    data() {
        return {
            user: ''
        }
    },

    mounted() {
        firebase.auth().onAuthStateChanged(user => {
            this.user = user;
            if(!this.user) {
                this.$router.push('/')
            }
        })
    }
}
</script>

<style scoped>

</style>