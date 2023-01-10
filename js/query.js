document.getElementById('desc').innerHTML = localStorage.getItem("description")
document.getElementById('Enginetype').innerHTML = localStorage.getItem("engine")
document.getElementById('Drivetrain').innerHTML = localStorage.getItem("drive")
document.getElementById('Transmission').innerHTML = localStorage.getItem("transmission")
document.getElementById('Color').innerHTML = localStorage.getItem("color")
document.getElementById('AvgMPG').innerHTML = localStorage.getItem("mpg")
document.getElementById('miles').innerHTML = "89345";
document.getElementById('miles').innerHTML = localStorage.getItem("miles")
document.getElementById('price').innerHTML = localStorage.getItem("price")
document.getElementById('CarName').innerHTML = localStorage.getItem("make") + " " +  localStorage.getItem("model")


var images = ['Images/Showroom/1.png', 'Images/Showroom/2.png', 'Images/Showroom/3.png', 'Images/Showroom/4.png', 'Images/Showroom/5.png'];
var luximage = document.getElementById('luxid');


luximage.src = images[Number(localStorage.getItem("luxury"))];


