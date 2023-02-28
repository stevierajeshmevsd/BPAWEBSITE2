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
    var carData = database.ref("/Cars");


var button = document.getElementById('send');
if(localStorage.getItem("brand") == null){
    document.getElementById("name").innerHTML = localStorage.getItem("name");
    document.getElementById("number").innerHTML = localStorage.getItem("number");
    document.getElementById("email").innerHTML = localStorage.getItem("sellEmail");
    document.getElementById("make").innerHTML = localStorage.getItem("make");
    document.getElementById("model").innerHTML = localStorage.getItem("model");
    document.getElementById("color").innerHTML = localStorage.getItem("color");
    document.getElementById("odo").innerHTML =  localStorage.getItem("ODO");
    document.getElementById("year").innerHTML =  localStorage.getItem("year");
    document.getElementById("license").innerHTML = localStorage.getItem("license");
    document.getElementById("status1").innerHTML = "Sell Request";

    var element = document.getElementById("status");
    element.style.backgroundColor = "green"; 

    var counter = 6;
    var x = [];
    carData.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var value = childSnapshot.val();
            x.push(value);
        });
        document.getElementById("send").addEventListener("click", function() {
            carData.child(x.length).set({
                IDVal: x.length,
                color: localStorage.getItem("color"), 
                description: document.getElementById('desc1').value,
                driveTrain: document.getElementById('DT1').value,
                engine: document.getElementById('engine1').value,
                image: document.getElementById('img1').value,
                luxury: document.getElementById('lux1').value,
                make: localStorage.getItem("make"),
                miles: localStorage.getItem("ODO") + " miles", 
                model: localStorage.getItem("model"), 
                mpg: document.getElementById('MPG1').value,
                price: document.getElementById('price1').value,
                transmission: document.getElementById('transmission1').value,
                trim: document.getElementById('trim1').value,
                type: document.getElementById('VT1').value,
                year: localStorage.getItem("year")
            });
            firebase.database().ref('/sellRequest/'+localStorage.getItem("name")).remove();
        });

    });

    // document.getElementById("button2").addEventListener("click", function() {
    //     var make = document.getElementById('options').value; 
    //     var model = document.getElementById('model').value; 
    //     var color = document.getElementById('Color').value; 
    //     var odometer = document.getElementById('ODO').value; 
    //     var year = document.getElementById("yearSlider").value; 
    //     var license = document.getElementById('license').value;
    //     var name = document.getElementById("Name").value;
    //     var mail = document.getElementById("Email").value;
    //     var num = document.getElementById("Number").value;
        // dataRef.child(name).set({ name: name, Email: mail, Number: num, Make: make, Model: model, Color: color, Odometer: odometer, Year: year, License: license, });
    //     // window.location.href = "maintainPlaced.html";
    //   });

} else{
    document.getElementById("make").innerHTML =  localStorage.getItem("brand");//changed
    document.getElementById("date").innerHTML =  localStorage.getItem("date");//needs new
    document.getElementById("email").innerHTML = localStorage.getItem("email");//changed
    document.getElementById("state").innerHTML =  localStorage.getItem("state");//needs new
    document.getElementById("time").innerHTML = localStorage.getItem("time");//needs new
    //need name

    // 30000/-
    document.getElementById("status1").innerHTML = "Maintenance";

    var element = document.getElementById("status");

    element.style.backgroundColor = "orange"; 
    document.getElementById('boxl').style.display = 'none';


    button.style.backgroundColor = "red";
}

    


