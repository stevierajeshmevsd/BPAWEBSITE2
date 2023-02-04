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
  
  document.getElementById("upload-button").addEventListener("click", function() {
    var jsonFile = {
        "testing" :[
            {"carname" : "Honda", "make" : "accord"},
            {"carname" : "Toyota", "make" : "camry"},
            {"carname" : "kia", "make" : "soronto"},
            {"carname" : "Chevy", "make" : "malubu"},
            {"carname" : "dodge", "make" : "Charger"}
        ]
    }
    // var jsonData = JSON.parse(jsonFile);

    firebase.database().ref().child("/sellRequest").set(jsonFile);
    document.getElementById('testing').innerHTML = "The push request works!"; 
  });
  