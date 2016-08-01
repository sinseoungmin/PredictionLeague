import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDXW6YxUMkNh7s3uQmyIYLUtqYkolasAxY",
  authDomain: "prediction-league.firebaseapp.com",
  databaseURL: "https://prediction-league.firebaseio.com",
  storageBucket: "prediction-league.appspot.com",
};

export default function(store) {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged( user => {
        store.dispatch({
            type: 'LOGIN',
            email: user.email
        })
    })
    console.log(firebase);
}
