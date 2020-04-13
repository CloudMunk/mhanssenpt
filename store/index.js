import Vue from 'vue'
import Vuex from 'vuex'
// import { get } from 'http';
import axios from 'axios'
// const host = process.env.HOST || '127.0.0.1'
// const port = process.env.PORT || 3000
// const url = "mongodb+srv://Cloud:1234567890@cluster0-stow6.mongodb.net/test?retryWrites=true&w=majority";

// const { ApolloServer, gql } = require("apollo-server");
// const MongoClient = require('mongodb').MongoClient;


// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(function (err) {
//   console.log("MONGOdb connected");
//   let db = client.db("test"); //mongodb database name
// });



Vue.use(Vuex)

const url = "mongodb+srv://Cloud:1234567890@cluster0-stow6.mongodb.net/test?retryWrites=true&w=majority";

const store = () => new Vuex.Store({
    state: {
        users: [],
        currentUser: {}
    },
    mutations: {
        SET_CurrentUser(state, payload) {
        state.currentUser = payload
        },
        SET_USERS(state, payload) {
            state.users = payload
        }
    },
    getters: {
        currentUser (state) {
        return state.currentUser
        },
        users(state) {
            return state.users
        }   
    },
    actions: {
       loadAllUsers() {
           console.log('Inisde load All Users')
           axios({
            url: 'http://localhost:4000/graphql',
            method: 'post',
            data: {
              query: `
                query Users {
                    users {
                        name
                        age
                        email
                      }
                  }
                `
            }
          }).then((result) => {
            console.log('This is the result data', result.data)
          });
       }
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