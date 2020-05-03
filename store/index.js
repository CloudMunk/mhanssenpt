import Vue from 'vue'
import Vuex from 'vuex'
// import { get } from 'http';
import axios from 'axios'

Vue.use(Vuex)



const store = () => new Vuex.Store({
    state: {
        // users: [],
        // currentUser: {},
        // loggedIn: false
    },
    mutations: {
        // SET_CurrentUser(state, payload) {
        // state.currentUser = payload
        // },
        // SET_USERS(state, payload) {
        //     state.users = payload
        // },
        // SET_LOGGEDIN(state, payload) {
        //   state.loggedIn = !state.loggedIn 
        // }

    },
    getters: {
        // currentUser (state) {
        // return state.currentUser
        // },
        // users(state) {
        //     return state.users
        // }   
    },
    actions: {
      // userLogin() {
      //   firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      //     .then(function() {
      //       commit(context, 'SET_LOGGEDIN')
      //       // Existing and future Auth states are now persisted in the current
      //       // session only. Closing the window would clear any existing state even
      //       // if a user forgets to sign out.
      //       // ...
      //       // New sign-in will be persisted with session persistence.
      //       return firebase.auth().signInWithEmailAndPassword(email, password);
      //     })
      //     .catch(function(error) {
      //       // Handle Errors here.
      //       var errorCode = error.code;
      //       var errorMessage = error.message;
      //     });
      // }
      //  loadAllUsers() {
      //      console.log('Inisde load All Users')
      //      axios({
      //       url: 'http://localhost:4000/graphql',
      //       method: 'post',
      //       data: {
      //         query: `
      //           query Users {
      //               users {
      //                   firstName
      //                   lastName
      //                   email
      //                 }
      //             }
      //           `
      //       }
      //     }).then((result) => {
      //       console.log('This is the result data', result.data)
      //     });
      //  },
      //  createUser() {
      //   console.log('Inisde create user')
      //   axios({
      //    url: 'http://localhost:4000/graphql',
      //    method: 'post',
      //    data: {
      //      query: `
      //        mutation User {
      //            user {
      //                firstName
      //                lastName
      //                email
      //                password
      //              }
      //          }
      //        `
      //    }
      //  }).then((result) => {
      //    console.log('This is the result data', result.data)
      //  });
      //  }
    },
})
export default store








       


// fetch(
//     url + "/graphql",
//     {
//         method: "POST",
//         cors: true,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//         query: `{
//                     users {
//                         name
//                         email
//                         age
//                     }
                    
//                 }
//         `})
//     })
//     .then(res => console.log(res))    
    
// const url = "mongodb+srv://Cloud:1234567890@cluster0-stow6.mongodb.net/test?retryWrites=true&w=majority";


// let client = await client.connect(err => {
//         const collection = client.db("test").collection("users");
//             listDatabases(client)
//         client.close();
//         })
//         .then((res) => {
//             console.log(res.data) && commit(context, 'SET_USERS')
//         })
//         .catch((error) => {
//             console.log(error)
//         })