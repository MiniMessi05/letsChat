function logout()
{
    window.location="index.html";
}

const firebaseConfig = {
      apiKey: "AIzaSyBnwq5LdMctC3tP3M794UDYuthA_xaNUTc",
      authDomain: "kwitter-7d0ea.firebaseapp.com",
      databaseURL: "https://kwitter-7d0ea-default-rtdb.firebaseio.com",
      projectId: "kwitter-7d0ea",
      storageBucket: "kwitter-7d0ea.appspot.com",
      messagingSenderId: "463332132697",
      appId: "1:463332132697:web:47984ead2de19a4fd6ee48"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username=localStorage.getItem("username");
    document.getElementById("username").innerHTML= "welcome" + username +"!";

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     
       console.log("Room Name - " +Room_names);
       row="<div class='room_name' id="+Room_names+"onclick ='redirectToRoomName(this.id)' >#" +Room_names + "</div><hr>";
       document.getElementById("output").innerHTML +=row;
      });});}
getData();


function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
 
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
