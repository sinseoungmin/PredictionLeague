const testClick = ()=>{
  let user = firebase.auth().currentUser;
  let email,id, nickName, uid;

  if (user != null) {
    id = user.displayName;
    email = user.email;
    nickName = user.photoURL;
    uid = user.uid;
  }

  console.log('id: '+ id);
  console.log('email: '+ email);
  console.log('nickName: '+ nickName);
  console.log('uid: '+ uid);

}
const outClick = ()=>{
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log('로그아웃');
  }, function(error) {
    // An error happened.
    console.log('로그아웃 실패!!');
    console.log(error);
  });
}

const showClick = ()=>{
  /* 상태가 변하는거 체크됨
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log('성공');
        console.log(user)
      } else {
        // No user is signed in.
        console.log('실패');
      }
    });
  */

  /* 해당 계정 정보 가져오기 */
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, token;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      uid = user.uid;                          // The user's ID, unique to the Firebase project. Do NOT use
      token = user.getToken();                  // this value to authenticate with your backend server, if
                                              // you have one. Use User.getToken() instead.
    }
    console.log(name);
    console.log(email);
    console.log(photoUrl);
    console.log(uid);
    console.log(token);


}

const sendEmail = ()=>{
  $.ajax({
    url: '/contactus',
    type:"POST",
    dataType: 'text',
    data:{
      email:'the_answ3r@naver.com'
    },
    cache: false,
    success: function(data) {
        // Success..
        console.log('success');
        console.log(data);
    }.bind(this),
    error: function(xhr, status, err) {
        console.error(status, err.toString());
    }.bind(this)
  });
}
