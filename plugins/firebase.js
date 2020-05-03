import * as firebase from 'firebase/app';
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyB7mEmfCfG-bQjla0vcRCzToIq7mAmpgEE",
    authDomain: "trainingofastoic-74f64.firebaseapp.com",
    databaseURL: "https://trainingofastoic-74f64.firebaseio.com",
    projectId: "trainingofastoic-74f64",
    storageBucket: "trainingofastoic-74f64.appspot.com",
    messagingSenderId: "507848120283",
    appId: "1:507848120283:web:c0e5749e5259820b8979fe",
    measurementId: "G-ZHG4DVXM10"
  };

  let app = null

  if(!firebase.apps.length){
      app = firebase.initializeApp(firebaseConfig)
  }

//   firebase.analytics();

export default firebase;