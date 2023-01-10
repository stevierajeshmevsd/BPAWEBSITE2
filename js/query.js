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



var carsImages = [
    'Images/CARSHOW/Toyota_Camry1.png',
    'Images/CARSHOW/lexusls.jpg',
    'Images/CARSHOW/suburulegacy.jpg',
    'Images/CARSHOW/audia6.jpg',
    'Images/CARSHOW/chrystler300.jpg',
    'Images/CARSHOW/ChevySonic.jpg',
    'Images/CARSHOW/BMW3SERIES.jpg',
    'Images/CARSHOW/DodgeCharger.jpg',
    'Images/CARSHOW/toyotacorolla.jpg',
    'Images/CARSHOW/VolkswagenPassat.jpg',
    'Images/CARSHOW/HyundaiSonata.jpg',
    'Images/CARSHOW/HONDACRV.jpg',
    'Images/CARSHOW/NissanVersa.jpg',
    'Images/CARSHOW/ACURARDX.jpg',
    'Images/CARSHOW/KiaSportage.jpg',
    'Images/CARSHOW/HondaOdyssey.jpg',
    'Images/CARSHOW/JeepCompas.jpg',
    'Images/CARSHOW/SUBURUBRZ.jpg',
    'Images/CARSHOW/Rogue-2021.jpg',
    'Images/CARSHOW/VOLKSWAGENJETTA.jpg',
    'Images/CARSHOW/ChrystlerPacifica.png',
    'Images/CARSHOW/FordEscape.jpg',
    'Images/CARSHOW/ChevyMalibu.webp',
    'Images/CARSHOW/ToyotaHyland.jpg',
    'Images/CARSHOW/GMC.jpg',
    'Images/CARSHOW/Hondaaccord.jpg',
    'Images/CARSHOW/ToyotRav.jpg'
];
var divID = document.getElementById('carimg1');
var images = ['Images/Showroom/1.png', 'Images/Showroom/2.png', 'Images/Showroom/3.png', 'Images/Showroom/4.png', 'Images/Showroom/5.png'];
var luximage = document.getElementById('luxid');


luximage.src = images[Number(localStorage.getItem("luxury"))];

divID.src = carsImages[Number(localStorage.getItem("idNumber"))];
