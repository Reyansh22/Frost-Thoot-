//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAAyfVSCQw_LK-HbMIRttrAZdLX9S0vrQ4",
    authDomain: "kwittter-d530a.firebaseapp.com",
    databaseURL: "https://kwittter-d530a-default-rtdb.firebaseio.com",
    projectId: "kwittter-d530a",
    storageBucket: "kwittter-d530a.appspot.com",
    messagingSenderId: "913127874181",
    appId: "1:913127874181:web:0e7b67e16e9856273bd3ec",
    measurementId: "G-HB4PQ74CPF"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("user_name");


function send() {
    msg = document.getElementById("msg").value;
    console.log(msg);
    firebase.database().ref(room_name).push(
          { name:user_name,
                 message:msg, 
                 like:0
                 });
     document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
name = message_data['name'];
message = message_data['message'];
like = message_data['message'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
   }

   function updateLike(message_id) { 
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
    } 