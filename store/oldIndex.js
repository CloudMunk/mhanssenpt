// import Vue from 'vue'
// import Vuex from 'vuex'
// import { get } from 'http';
// import axios from 'axios'
// const host = process.env.HOST || '127.0.0.1'
// const port = process.env.PORT || 3000
// const url = "mongodb+srv://Cloud:BlueFire76@cluster0-stow6.mongodb.net/test?retryWrites=true&w=majority";

// const db = url

// const { ApolloServer, gql } = require("apollo-server");
// const MongoClient = require('mongodb').MongoClient;

// Vue.use(Vuex)
// const url = "mongodb+srv://Cloud:BlueFire76@cluster0-stow6.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(function (err) {
//   console.log("MONGOdb connected");
//   let db = client.db("test"); //mongodb database name
// });



// const store = () => new Vuex.Store({
//   state: {
//     users: [],
//     currentUser: {}
//   },
//   mutations: {
//     SET_CurrentUser(state, payload) {
//       state.currentUser = payload
//     },
//     SET_USERS(state, payload) {
//         state.users = payload
//     }
//   },
//   getters: {
//     currentUser (state) {
//       return state.currentUser
//     },
//     users(state) {
//         return state.users
//     }   
//   },
//   actions: {
   
    
//       async loadUsers ({commit}) {
//      let client = await client.connect(err => {
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
//         }
//     },
// })
// export default store
 //  async loadUsers ({commit}) {
    //  let client = await client.connect(err => {
    //     const collection = client.db("test").collection("users");
    //         listDatabases(client)
    //     client.close();
    //     })
    //     .then((res) => {
    //         console.log(res.data) && commit(context, 'SET_USERS')
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    //     }
    // },
// async loadUsers () {
    //  let client = await client.connect(err => {
    //     const collection = client.db("test").collection("users");
    //         listDatabases(client)
    //     client.close();
    //     })
    //     .then((res) => {
    //         console.log(res.data) && commit(context, 'SET_USERS')
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    //     }
    // },
    // getCoronaData({commit}) {
    //     axios
    //     .get()
    //     .then(function (response) {
    //         // handle success
    //         // context.commit('SET_Corona_Data', response.data)
    //         console.log(response);
    //         commit('SET_Corona_Data', response.data)
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     })
    //     .then(function () {
    //         // always executed
    //     });
    // },
    // loadBitcoin(context) {
    //     axios
    //     .get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true', {
    //         // This is for Loading Bitocin price plus change in percantage per 24/hrs
    //     })
    //     .then((response) => {
    //         context.commit('SET_BTC', response.data)
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    //     },










// const axios = require("axios")
// axios({
//   url: 'https://1jzxrj179.lp.gql.zone/graphql',
//   method: 'post',
//   data: {
//     query: `
//       query PostsForAuthor {
//         author(id: 1) {
//           firstName
//             posts {
//               title
//               votes
//             }
//           }
//         }
//       `
//   }
// }).then((result) => {
//   console.log(result.data)
// });