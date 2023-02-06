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

document.getElementById("submit-button").addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var city = document.getElementById("city").value;
  dataRef.child(name).set({ name: name, age: age, city: city });
});



// dataRef.on("value", function(snapshot) {
//   var data = snapshot.val();
//   console.log(data.Raghav);
//   document.getElementById('information').innerHTML = JSON.stringify(data);
// });


// dataRef.on("value", function(snapshot) {
//   snapshot.forEach(function(childSnapshot) {
//     var key = childSnapshot.key;
//     console.log(key);
//     document.getElementById('information').innerHTML = JSON.stringify(key);
//   });
// });







dataRef.on("value", function(snapshot) {
  var keyList = "";
  snapshot.forEach(function(childSnapshot) {
    var key = childSnapshot.key;
    keyList += "<a href='#' onclick='displayData(\"" + key + "\")'>" + key + "</a><br>";
  });
  document.getElementById("keyContainer").innerHTML = keyList;
});

function displayData(key) {
  var dataRef = database.ref("data/" + key);
  dataRef.once("value", function(snapshot) {
    var data = snapshot.val();
    var dataString = "";
    console.log(data.name);
    document.getElementById("dataContainer").innerHTML = dataString;
  });
}

// dataRef.on("value", function(snapshot) {
//   var keyList = "";
//   snapshot.forEach(function(childSnapshot) {
//     var key = childSnapshot.key;
//     keyList += key + "<br>";
//   });
//   document.getElementById("information").innerHTML = keyList;
// });







