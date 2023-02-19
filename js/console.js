var firebaseConfig = {
    apiKey: "AIzaSyARcy-CcpHXynmS1HBAiBwH_uZcpJvNfMY",
    authDomain: "jarson-motors.firebaseapp.com",
    databaseURL: "https://jarson-motors-default-rtdb.firebaseio.com",
    projectId: "jarson-motors",
    storageBucket: "jarson-motors.appspot.com",
    messagingSenderId: "431759934002",
    appId: "1:431759934002:web:3fc09307a109a49705722b",
    measurementId: "G-MB7NKYMMH3"
    };
    
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();
    var dataRef = database.ref("/sellRequest");



    // dataRef.on("value", function(snapshot) {
    //     snapshot.forEach(function(childSnapshot) {
      
    //       var key = childSnapshot.key;
    //       var value = childSnapshot.val();
      
    //       var container = document.getElementById("box");
    //       var div = document.createElement("div");
    //       div.className = "selection";
    //       div.innerHTML = "Name: " + value.name + "<br>" + "Make: " + value.Make + ", Model: " + value.Model;
    //       // JSON.stringify(value)
      
    //       var button = document.createElement("button");
    //       button.className = "mail-button";
    //       button.innerHTML = "Send email";
    //       button.onclick = function() {
    //         window.location.href = "mailto:example@email.com";
    //       };
    //       container.appendChild(div);
    //       div.appendChild(button);
      
      
    //     });
    //   });
  