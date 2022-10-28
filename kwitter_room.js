
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB44Z0QpQ2vFkCh4Wkc_wnkQ1auz3_KszU",
      authDomain: "c-93-c7af6.firebaseapp.com",
      databaseURL: "https://c-93-c7af6-default-rtdb.firebaseio.com",
      projectId: "c-93-c7af6",
      storageBucket: "c-93-c7af6.appspot.com",
      messagingSenderId: "276536493063",
      appId: "1:276536493063:web:3182c889675e61c87c56a2"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");

      document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}