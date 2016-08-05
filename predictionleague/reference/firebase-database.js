/* simple example */
firebase.database().ref().remove();
firebase.database().ref('gameList').set(data);
firebase.database().ref('gameList/').on('value', function(snapshot) {
  console.log(snapshot.val());
});
firebase.database().ref('gameList/').once('value').then(function(snapshot) {
  console.log(snapshot.val());
});
firebase.database().ref('gameList/').off();


/* ------------------ save data ------------------ */
/*  set &&
    push도 사용가능, 대신 push는 해당 위치에 unique key가 생성되고 그 밑에 데이터를 넣는다.*/
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

/* update */
function writeNewPost(uid, username, picture, title, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

conset toggleStar(postRef, uid){
  postRef.transaction((post)=>{
    if(post){
      if(post.stars && post.stars[uid]){
        post.starCount--;
        post.stars[uid]=null;
      }
      else{
        post.starCount++;
        if(!post.stars){
          post.stars={};
        }
        post.stars[uid]=true;
      }
    }
    return post;
  });
}


/* ------------------ retrieve data ------------------ */
/* value */
firebase.database().ref('posts/' + postId + '/starCount').on('value', function(snapshot) {
  updateStarCount(postElement, snapshot.val());
});
/* 계속해서 listen하는 게 아니라 한번만 data 불러오기 */
firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  var username = snapshot.val().username;
  // ...
});

/* child */
var commentsRef = firebase.database().ref('post-comments/' + postId);
commentsRef.on('child_added', function(data) {
  addCommentElement(postElement, data.key, data.val().text, data.val().author);
});

commentsRef.on('child_changed', function(data) {
  setCommentValues(postElement, data.key, data.val().text, data.val().author);
});

commentsRef.on('child_removed', function(data) {
  deleteComment(postElement, data.key);
});

/* 해당 path에 있는 listener 제거 */
firebase.database().ref().off();



/*  firebase-auth  */
const joinClick = ()=>{
  let id = document.getElementById('idInput').value;
  let pw = document.getElementById('pwInput').value;

  /*  회원가입  */
    firebase.auth().createUserWithEmailAndPassword(id, pw).catch(function(error) {
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

const logoutClick = ()=>{
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log('로그아웃');
  }, function(error) {
    // An error happened.
    console.log('로그아웃 실패!!');
    console.log(error);
  });
}
