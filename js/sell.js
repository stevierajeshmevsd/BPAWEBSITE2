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


function moveUserNext(){
  event.preventDefault();
  var allInfo;
  var make = document.getElementById('options').value; 
  var model = document.getElementById('model').value; 
  var color = document.getElementById('Color').value; 
  var odometer = document.getElementById('ODO').value; 
  var year = document.getElementById("yearSlider").value; 
  var license = document.getElementById('license').value;
  console.log(make + " " + model + " " + color + " " + odometer + " " + year + " " + license);

  if(!model || !color || !odometer || !license){
    console.log("The if statement works good!")
    document.getElementById('error').style.display = 'block';
    document.getElementById('error').innerHTML = "Please enter all the values before going to the next page por favor."
    document.getElementById('error').style.color = "white";
    allInfo = false
  }
  else{ allInfo = true; }

  if(allInfo){
    document.getElementById('button2').style.display = 'none';
    document.getElementById('button1').style.display = 'block';
  }
  // window.location.replace('placed.html');
}


function moveUser(){
  
}

  