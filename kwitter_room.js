const firebaseConfig = {
  apiKey: "AIzaSyBjSChCHhKXrgKYcxlhb8rJogFNUUoX4b0",
  authDomain: "kwitter-6fa28.firebaseapp.com",
  databaseURL: "https://kwitter-6fa28-default-rtdb.firebaseio.com",
  projectId: "kwitter-6fa28",
  storageBucket: "kwitter-6fa28.appspot.com",
  messagingSenderId: "744955885814",
  appId: "1:744955885814:web:7c5b4a3995471dcaa354d7"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
 document.getElementById("user").innerHTML = "welcome " + user_name + "!";

 function add_room() {
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
   });
   localStorage.setItem("room_name" , room_name);
   window.location = "kwitter_page.html";
 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room names -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick= 'redirectroom(this.id)'>#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectroom(name) {
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
   window.location = "index.html";
}
