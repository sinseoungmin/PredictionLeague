import firebase from 'firebase/app';
require('firebase/auth');
require('firebase/database');
require('firebase/storage');

var config = {
  apiKey: "AIzaSyDXW6YxUMkNh7s3uQmyIYLUtqYkolasAxY",
  authDomain: "prediction-league.firebaseapp.com",
  databaseURL: "https://prediction-league.firebaseio.com",
  storageBucket: "prediction-league.appspot.com",
};

export default function(store) {
    console.log('firebase 실행 ===================');
    firebase.initializeApp(config);
    //console.log(firebase);
}

/*
  firebase-app
  firebase-auth
  firebase-database
  firebase-storage
*/
