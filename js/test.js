


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
  // let divCounter = 0
  dataRef.on("value", function(snapshot) {
    var counter = 0;
    var typeCount = 0
      snapshot.forEach(function(childSnapshot) {
    
        var key = childSnapshot.key;
        var value = childSnapshot.val();
        x.push(key);
    
        var container = document.getElementById("grid");
        var div = document.createElement("div");
        div.className = "grid-item";
        // div.id = "gridItem";t

        var type = localStorage.getItem("typeName");
        // var typeCount = JSON.stringify(value.type).toLowerCase();
        if(type != "all"){
          if(value.type.toLowerCase() == type){
            if(typeCount < 12){
                div.style.display = 'block';
                div.id = "good";
                // typeCount++
                console.log("working IF");
            }
            else{
              div.style.display = 'none';
              div.id = "good";
              // typeCount++;
              console.log("working ELSE");
            }
            typeCount++;
          }
          else{
            div.style.display = 'none';
          }
        }
        else{
          if(counter > 11){
            div.style.display = "none";
          }
        }


        //This is the initial that works with all the car values. 
        /*
        if(counter > 11){
          div.style.display = "none";
        }
        counter++;
        */
       counter++;
        
        var innerdiv = document.createElement("div");
        innerdiv.className = "grid-content";
        innerdiv.id = "grid-content"; 
        innerdiv.style.backgroundImage = "url("+value.image+")";
        innerdiv.innerHTML = "Name: " + value.make + " Model: " + value.model;
        innerdiv.style.backgroundImage = value.image;
        innerdiv.style.backgroundSize = 'cover';
        innerdiv.ontouchstart = function(key){
          localStorage.setItem("idNumber", key);
          localStorage.setItem("description", value.description);
          localStorage.setItem("engine", value.engine);
          localStorage.setItem("drive", value.driveTrain);
          localStorage.setItem("transmission", value.transmission);
          localStorage.setItem("color", value.color);
          localStorage.setItem("mpg", value.mpg);
          localStorage.setItem("miles", value.miles);
          localStorage.setItem("make", value.make);
          localStorage.setItem("model", value.model);
          localStorage.setItem("luxury", value.luxury);
          window.location.replace("carview.html");
          return false;
        }
        innerdiv.onclick = function(key){
          localStorage.setItem("idNumber", value.IDVal);
          localStorage.setItem("description", value.description);
          localStorage.setItem("engine", value.engine);
          localStorage.setItem("drive", value.driveTrain);
          localStorage.setItem("transmission", value.transmission);
          localStorage.setItem("color", value.color);
          localStorage.setItem("mpg", value.mpg);
          localStorage.setItem("miles", value.miles);
          localStorage.setItem("make", value.make);
          localStorage.setItem("model", value.model);
          localStorage.setItem("luxury", value.luxury);
          window.location.replace("carview.html");
          return false;
        }
        // JSON.stringify(value)
    
      
        var button1 = document.createElement("button");
        div.appendChild(innerdiv)
        container.appendChild(div);


        
    
      });


      let counter1 = 12;
      let iteration = 1;
      var elements = document.querySelectorAll('.grid-item');
      var elem1 = document.querySelectorAll('#good');
      var elem2 = document.querySelectorAll('.grid-item');
      



      //This if statement changes the elements root based on if the user has clicked all or a specific type.
      if(elem1.length != 0){
        console.log("elem1 " + elem1.length);
        elements = elem1;
      }
      else{
        elements = elem2;
        console.log("elem1 " + elem2.length);
      }

      var counterValue = elements.length - counter1;
      var holder = document.getElementById("buttonHolder");
      holder.className = "buttonHolder";
      holder.id = "buttonHolder";

      //previous button
      var previous = document.createElement("button");
      previous.className = "previous";
      previous.innerHTML = "Previous";
      previous.onclick = function() {
        counter1-=12; 
        iteration--;
        pgNumber.innerHTML = iteration;
        if(counter1 == 12){
          previous.disabled = true; 
        }
        else{
          next.disabled = false; 
        }
         next.disabled = false;

        for(var i = counter1 - 12; i < counter1; i++){
          elements[i].style.display = "block";
        }

        for(var i = counter1; i < counter1 + 12; i++){
          elements[i].style.display = "none";
        }
      }
      if(iteration == 1){
        previous.disabled = true; 
      }
      else{
        previous.disabled = false;
      }
      
      //Page number
      var pgNumber = document.createElement("div");
      pgNumber.className = "pageNumber";
      pgNumber.innerHTML = iteration; 

      //next button
      var next = document.createElement("button");
      next.className = "next";
      next.innerHTML = "Next";
      next.onclick = function() {
        counter1+=12;
        if (counter1 >= elements.length) {
          next.disabled = true; // disable the button once all elements are visible 
        }
        else{
          next.disabled = false; 
        }
          previous.disabled = false; 
        iteration++;
        pgNumber.innerHTML = iteration; 
        if(counter1 <= elements.length){
          for (let i = 0; i < counter1; i++ ) {
            elements[i].style.display = 'block'; // show the elements up to the counter
          }
        }
        else{
          for(let i = counter1 - 12; i < elements.length; i++){
            elements[i].style.display = 'block';
          }
        }
        //setting the previous elements to disappear
        for(let i = 0; i < counter1 - 12; i++){
          elements[i].style.display = 'none';
        }

      };
      var buttonwrap = document.createElement("div");
      buttonwrap.className = "buttonwrap";
      buttonwrap.id = "buttonwrap";


      holder.appendChild(previous);
      holder.appendChild(pgNumber);
      holder.appendChild(next);
    });

    console.log(x)







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

      const divs = document.querySelectorAll('.grid-item')
      

      
      if(matches != -1){
        if(matches.length <= 12){
          document.getElementById('buttonHolder').style.display = 'none';
        }
        for(let i = 0; i < divs.length; i++){
          divs[i].style.display = 'none';
        }
        for(let i = 0; i < matches.length; i++){
          divs[matches[i]].style.display = 'block';
        }
        document.getElementById('test').style.display = 'none';
      } else {
        document.getElementById('test').style.display = 'block';
        document.getElementById('test').innerHTML = "Not available";
      }
      
      console.log("Maches: " + matches);

      
      
      
      //WORK ON MAKING THE LOGIC OF THE SEARCH BAR RIGHT BEFORE YOU DO ANYTHING ELSE YOU DUMBASS!!!
    }


    
    
    
 
    
