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
