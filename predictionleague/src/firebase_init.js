import firebase from 'firebase';
import utils from './utils'
import actions from './actions'


var config = {
  apiKey: "AIzaSyDXW6YxUMkNh7s3uQmyIYLUtqYkolasAxY",
  authDomain: "prediction-league.firebaseapp.com",
  databaseURL: "https://prediction-league.firebaseio.com",
  storageBucket: "prediction-league.appspot.com",
};


const gameInfo= (store)=>{
  let game = [];
  let self = this;

  let t = [];
  for(let i=0; i<5; i++){
    t[i] = utils.getCurrentDate(i-7);
  }

  firebase.database().ref('predict/gameInfo/'+t[0]).once('value').then(function(snapshot) {
    game[0] = snapshot.val();

    firebase.database().ref('predict/gameInfo/'+t[1]).once('value').then(function(snapshot) {
      game[1] = snapshot.val();

      firebase.database().ref('predict/gameInfo/'+t[2]).once('value').then(function(snapshot) {
        game[2] = snapshot.val();

        firebase.database().ref('predict/gameInfo/'+t[3]).once('value').then(function(snapshot) {
          game[3] = snapshot.val();

          firebase.database().ref('predict/gameInfo/'+t[4]).once('value').then(function(snapshot) {
            game[4] = snapshot.val();

            console.log('gameInfo download!!!');
            store.dispatch(actions.gameInfo(game));
            //store.dispatch(actions.login('e1','id1','ni1'));
          });
        });
      });
    });
  });
}

export default function(store) {
    console.log('firebase 실행 ===================');
    firebase.initializeApp(config);
    //console.log(firebase);

    /*  Database load  */
    gameInfo(store);
}

/*
  firebase-app
  firebase-auth
  firebase-database
  firebase-storage
*/
