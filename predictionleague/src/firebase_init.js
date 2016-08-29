import firebase from 'firebase';
import utils from './utils'
import actions from './actions'


var config = {
  apiKey: "AIzaSyDXW6YxUMkNh7s3uQmyIYLUtqYkolasAxY",
  authDomain: "prediction-league.firebaseapp.com",
  databaseURL: "https://prediction-league.firebaseio.com",
  storageBucket: "prediction-league.appspot.com",
};


/*  로그인 상태 확인  */
const loginCheck = (store)=>{
  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
      let email = user.email;
      let id = user.displayName;
      console.log('=================== email: ' + email + ', id: ' + id + ' 이 로그인 되어 있습니다.');

      /*  DB에서 userInfo 가져오기  */
      firebase.database().ref('userInfo/'+id).once('value').then(function(snapshot) {
        let userInfo = snapshot.val();
        let nickName = userInfo.nickName;
        let imgUrl = userInfo.imgUrl;
        let position = userInfo.position;
        let team = userInfo.team;
        let cWinnings = userInfo.cWinnings;
        let aRate = userInfo.aRate;
        let maxOdds = userInfo.maxOdds;

        /*  redux state로 userInfo 넘기기  */
        console.log('=================== userInfo download!!!');
        store.dispatch(actions.login(email,id,imgUrl,nickName,team,position,cWinnings,aRate,maxOdds));

        /*  베팅내역 불러오기  */
        userPick(store, id);
      });
    }
    else {
      console.log('=================== 로그인 되어있지 않습니다.');
    }
  });
}

/*  베팅내역 불러오기  */
const userPick= (store, id)=>{

  let pick = [];

  let t = [];
  for(let i=0; i<5; i++){
    t[i] = utils.getCurrentDate(i-2);
  }

  firebase.database().ref('userPick/'+id+'/'+t[0]).once('value').then(function(snapshot) {
    pick[0] = snapshot.val();

    firebase.database().ref('userPick/'+id+'/'+t[1]).once('value').then(function(snapshot) {
      pick[1] = snapshot.val();

      firebase.database().ref('userPick/'+id+'/'+t[2]).once('value').then(function(snapshot) {
        pick[2] = snapshot.val();

        firebase.database().ref('userPick/'+id+'/'+t[3]).once('value').then(function(snapshot) {
          pick[3] = snapshot.val();

          firebase.database().ref('userPick/'+id+'/'+t[4]).once('value').then(function(snapshot) {
            pick[4] = snapshot.val();

            console.log('=================== userPick download!!!');
            store.dispatch(actions.userPick(pick));
          });
        });
      });
    });
  });
}

/*  game 정보 불러오기  */
const gameInfo= (store)=>{
  let game = [];

  let t = [];
  for(let i=0; i<5; i++){
    t[i] = utils.getCurrentDate(i-2);
  }

  firebase.database().ref('gameInfo/'+t[0]).once('value').then(function(snapshot) {
    game[0] = snapshot.val();

    firebase.database().ref('gameInfo/'+t[1]).once('value').then(function(snapshot) {
      game[1] = snapshot.val();

      firebase.database().ref('gameInfo/'+t[2]).once('value').then(function(snapshot) {
        game[2] = snapshot.val();

        firebase.database().ref('gameInfo/'+t[3]).once('value').then(function(snapshot) {
          game[3] = snapshot.val();

          firebase.database().ref('gameInfo/'+t[4]).once('value').then(function(snapshot) {
            game[4] = snapshot.val();

            console.log('=================== gameInfo download!!!');
            store.dispatch(actions.gameInfo(game));
            //store.dispatch(actions.login('e1','id1','ni1'));
          });
        });
      });
    });
  });
}



export default function(store) {
    console.log('=================== firebase 실행 ');
    firebase.initializeApp(config);
    //console.log(firebase);

    /*  로그인 상태인지 확인  */
    loginCheck(store)

    /*  Database load  */
    gameInfo(store);
}

/*
  firebase-app
  firebase-auth
  firebase-database
  firebase-storage
*/
