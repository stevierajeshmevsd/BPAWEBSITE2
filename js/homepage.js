
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
  var dataRef = database.ref("/Cars");




var x = [];
  dataRef.on("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot) {

        var key = childSnapshot.key;
        var value = childSnapshot.val();
        

        var container = document.getElementById('tab');

        var text = document.createElement('div');
        text.className = 'query2';
        text.style.color = 'black';
        text.innerHTML = value.year + "   " + value.make + "   " + value.model; 
        text.style.display = 'none'; 

        text.ontouchstart = function(key){
          localStorage.setItem("idNumber", value.IDVal);
          window.location.replace("carview.html");
          return false;
        }
        text.onclick = function(key){
          localStorage.setItem("idNumber", value.IDVal);
          window.location.replace("carview.html");
          return false;
        }
        container.appendChild(text);
      });
       
    });







    function search() {
      event.preventDefault();
      var userValue = document.getElementById("search-input").value;
      const QUERY1 = userValue.toString();
      const query = QUERY1.toLowerCase();
      

      if(query.length == 0){
        window.location.reload();
      }

      var words = [];
      let currentWord = "";
      for (let j = 0; j < query.length; j++) {
      let char = query[j];
      if (char === " ") {
          words.push(currentWord);
          currentWord = "";
      } else {
          currentWord += char;
        }
      }
      words.push(currentWord); 

      var make = [];
      var model = [];
      var year = [];
      var matches = [];

      dataRef.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          
          var key = childSnapshot.key;
          var value = childSnapshot.val();

          for(var i = 0; i < words.length; i++){
            if(words[i] == value.make.toLowerCase()){
              make.push(parseInt(key));
            }
            else if(words[i] == value.model.toLowerCase()){
              model.push(parseInt(key));
            }
            else if(words[i] == value.year){
              year.push(parseInt(key));
            }
          }
        });
      })

      if(make.length > 0 && model.length > 0 && year.length > 0){
        matches = make.filter(num => model.includes(num) && year.includes(num));
      }
      else if(make.length === 0 && model.length === 0 && year.length > 0){  matches = year;  }
      else if(make.length > 0 && model.length === 0 && year.length === 0){  matches = make;  }
      else if(make.length === 0 && model.length > 0 && year.length === 0){  matches = model;  }
      else if(make.length > 0 && model.length > 0 && year.length === 0){  matches = make.filter(num => model.includes(num));  }
      else if(make.length === 0 && model.length > 0 && year.length > 0){  matches = year.filter(num => model.includes(num));  }
      else if(make.length > 0 && model.length === 0 && year.length > 0){  matches = make.filter(num => year.includes(num));  }
      else{  matches = -1;  }

      const divs = document.querySelectorAll('.query2')
      

      
      if(matches != -1){
        // if(matches.length <= 12){
        //   document.getElementById('buttonHolder').style.display = 'none';
        // }
        for(let i = 0; i < divs.length; i++){
          divs[i].style.display = 'none';
        }
        for(let i = 0; i < matches.length; i++){
          divs[matches[i]].style.display = 'block';
        }
        document.getElementById('test').style.display = 'none';
      } else {
        document.getElementById('test').style.display = 'block';
        document.getElementById('test').innerHTML = "Car Not Available";
        for(let i = 0; i < divs.length; i++){
          divs[i].style.display = 'none';
        }
      }
      
      console.log("Maches: " + matches);

      
      
      
      
    }


    
    
    
 
    
