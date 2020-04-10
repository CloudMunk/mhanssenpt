import Vue from 'vue'
import Vuex from 'vuex'
import { get } from 'http';
import axios from 'axios'


Vue.use(Vuex)
Vue.use(axios)

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Cloud:1234567890@cluster0-m59e4.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });


export default new Vuex.Store({
  state: {
    // loadedArticles: [],
    // CoronaData: [],
  },
  mutations: {
    // setArticles(state, payload) {
    //   state.loadedArticles = payload
    // },
    // SET_Corona_Data(state, payload) {
    //     state.CoronaData = payload
    //   },
  },
  getters: {
    // user (state) {
    //   return state.user
    // }
    // CoronaData (state) {
    //     return state.CoronaData
    // }
  },
  actions: {
    // async loadArticles () {
    //  let client = await client.connect(err => {
    //     const collection = client.db("test").collection("devices");
    //         listDatabases(client)
    //     client.close();
    //     })
    //     .then((res) => {
    //         console.log(res.data) && commit(context, 'SetArticles')
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    //     }
    // },
    // getCoronaData({commit}) {
    //     axios
    //     .get('https://coronavirus.app/get-places')
    //     .then(function (response) {
      
    //         console.log(response);
    //         commit('SET_Corona_Data', response.data)
    //     })
    //     .catch(function (error) {
            
    //         console.log(error);
    //     })
    //     .then(function () {
          
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
    
})