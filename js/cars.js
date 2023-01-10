function calculateMonthlyPayment(principle, interestRate, term) {
  const monthlyInterestRate = interestRate / 12;
  const monthlyPayment = (principle * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -term));
  return monthlyPayment;
}

// Updated the slider value of the downpayment slider.
function sliderChange(val){
  var vehicleCost = localStorage.getItem("price");
  var carPrice =  parseInt(vehicleCost.replace(/[^0-9]/g, ''), 10);
  var slider = document.getElementById('sliderStatus');
  slider.innerHTML = val; 
  document.getElementById('divRange').max = carPrice
}


function sliderValue(val){  return val; }

// This function takes care of the loan estimator's calculation.
function myFunction(){       
  // var monthlyPayment;
  event.preventDefault();
  const interest = [5.57, 6.34, 8.62, 9.37, 10.48, 12.38, 14.54, 18.87]
  var price = document.getElementById("sliderStatus").innerHTML;
  var vehicleCost = localStorage.getItem("price");
  var carPrice =  parseInt(vehicleCost.replace(/[^0-9]/g, ''), 10);
  var downPayment = carPrice - price;
  var interestRate;
  var newinterest;
  var roundedinterest;
  var e = document.getElementById("ddlViewBy");
  var value = e.value;
  var text = e.options[e.selectedIndex].text;


  
  console.log(downPayment);
  interestRate = interest[value] / 100;
  newinterest = interestRate * 100;
  roundedinterest = newinterest.toFixed(2);
  document.getElementById("myText").innerHTML = roundedinterest + "%";
  document.getElementById("36month").innerHTML = "$" + Number(Math.round(calculateMonthlyPayment(downPayment, interestRate, 36)+'e'+2)+'e-'+2);
  document.getElementById("48month").innerHTML = "$" + Number(Math.round(calculateMonthlyPayment(downPayment, interestRate, 48)+'e'+2)+'e-'+2);
  document.getElementById("60month").innerHTML = "$" + Number(Math.round(calculateMonthlyPayment(downPayment, interestRate, 60)+'e'+2)+'e-'+2);
  // console.log(monthlyPayment);
}

function searchInformation(){
  const searchInput = document.getElementById('search-input');
  const searchQuery = searchInput.value;
  document.getElementById('testing').innerHTML = searchQuery;
}  







//   //the code for the search bar

// Get the search input field and the results container
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');

const data = [
{
  make:'toyota', 
  model: 'Camry', 
  year: '2012',
  trim: 'le',
  miles: '89345',
  description: 'The Toyota Camry SE is a reliable daily normal sedan. It comes with Heated seats, ventilation, 4 seats, 2 keys, and a whole lotta storage. The best use for this car is hauling around your family and it will last for 300,000 miles.',
  price: '$34,000',
  luxuryScore: '4',
  Engine: ' hybrid',
  driveTrain: 'FWD',
  transmission: 'CVT',
  color: 'Red',
  mpg: '40mpg', 
  luxury: '3'
},
{
  make:'lexus', 
  model: 'LS', 
  year: '2010',
  trim: 'Base',
  Miles: '23,432 miles',
  description: 'The Lexus LS is a full-size luxury sedan that offers advanced features and a comfortable, spacious interior. The base model comes equipped with a range of amenities, including a premium audio system and a power moonroof. It also offers advanced safety technologies and a refined driving experience.',
  price: '$3,000',
  luxuryScore: '5',
  Engine: 'V6 turbo',
  driveTrain: 'AWD',
  transmission: 'Automatic',
  color: 'Sliver',
  mpg: '20mpg',
  luxury: '3'
},
{
  make:'suburu', 
  model: 'Legacy', 
  year: '2017',
  trim: 'Base',
  Miles: '45,434 miles',
  description: '',
  price: '$20,000',
  luxuryScore: '2',
  Engine: 'Boxter 6-Cyl',
  driveTrain: 'Awd',
  transmission: 'Automatic',
  color: 'Black',
  mpg: '20 mpg',
  luxury: '3'
},
{
  make:'audi', 
  model: 'A6', 
  year: '2015',
  trim: 'Premium',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: 'Blue',
  mpg: '',
  luxury: '4'
},
{
  make:'chrysler', 
  model: '300', 
  year: '2016',
  trim: 'base',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: 'Sliver',
  mpg: '',
  luxury: '3'
},
{
  make:'chevrolet', 
  model: 'sonic', 
  year: '2015',
  trim: 'base',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: 'Red',
  mpg: '',
  luxury: '2'
},
{
  make:'bmw', 
  model: 'series 3', 
  year: '2018',
  trim: '300i',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: 'Grey',
  mpg: '',
  luxury: '4'
},
{
  make:'dodge', 
  model: 'charger', 
  year: '2018',
  trim: 'sxt',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: 'yellow',
  mpg: '',
  luxury: '4'
},
{
  make:'toyota', 
  model: 'corolla', 
  year: '2017',
  trim: 'se',
  Miles: ' 65,714', 
  description: 'The Toyota Corolla is a compact car, The 2017 model year of the Corolla features a sleek exterior design, a spacious and comfortable interior, and a reliable and fuel-efficient engine. It comes equipped with a variety of advanced safety features and is available in a range of trims to suit different driving needs and preferences.',
  price: '16,757',
  luxuryScore: '',
  Engine: '132 hp 1.8L I4',
  driveTrain: 'Fwd',
  transmission: 'Continuously Variable Transmission',
  color: 'white',
  mpg: '32',
  luxury: '4'
},
{
  make:'volkswagen', 
  model: 'passat', 
  year: '2014',
  trim: 'se',
  Miles: '58,675 ',
  description: 'The Volkswagen Passat is a mid-size sedan, the 2014 model year of the Passat features a spacious and stylish interior, a powerful and fuel-efficient engine, and a variety of advanced safety and technology features. It is a practical and reliable choice for families and commuters alike.',
  price: '$11,967',
  luxuryScore: '4',
  Engine: '140 hp 2L I4 Diesel',
  driveTrain: 'Fwd',
  transmission: '6-Speed Dual Clutch',
  color: 'white',
  mpg: '22',
  luxury: '4'
},
{
  make:'hyundai', 
  model: 'sonata', 
  year: '2018',
  trim: 'SEL',
  Miles: '37,981 miles',
  description: 'The 2018 model year of the Sonata features a sleek and modern exterior design, a spacious and well-equipped interior, and a range of advanced safety features. The SEL trim of the 2018 Sonata includes additional comfort and convenience features such as a power drivers seat and a 7-inch touchscreen display.',
  price: '$17,999',
  luxuryScore: '3',
  Engine: '185 hp 2.4L I4',
  driveTrain: 'FWD',
  transmission: 'Automatic',
  color: 'Sliver',
  mpg: '30 miles',
  luxury: '4'
},
{
  make:'honda', 
  model: 'cr-v', 
  year: '2016',
  trim: 'ex',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: 'Red',
  mpg: '',
  luxury: '4'
},
{
  make:'nissan', 
  model: 'versa', 
  year: '2019',
  trim: 'SV',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: 'Sliver',
  mpg: '',
  luxury: '4'
},
{
  make:'acura', 
  model: 'rDX', 
  year: '2019',
  trim: 'SH',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: 'Grey',
  mpg: '',
  luxury: '0'
},
{
  make:'kia', 
  model: 'sportage', 
  year: '2020',
  trim: 'LX',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: 'Red',
  mpg: '',
  luxury: '4'
},
{
  make:'honda', 
  model: 'odyssey', 
  year: '2014',
  trim: 'EX-L',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: 'Blue',
  mpg: '',
  luxury: '4'
},
{
  make:'jeep', 
  model: 'compass', 
  year: '2017',
  trim: 'Latitude',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: 'Red',
  mpg: '',
  luxury: '4'
},
{
  make:'suburu', 
  model: 'brz', 
  year: '2013',
  trim: 'primium',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: '',
  mpg: '',
  luxury: '4'
},
{
  make:'nissan', 
  model: 'rogue', 
  year: '2021',
  trim: 's',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: '',
  mpg: '',
  luxury: '4'
},
{
  make:'volkswagen', 
  model: 'jetta', 
  year: '2014',
  trim: 'se',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: '',
  mpg: '',
  luxury: '4'
},
{
  make:'chrysler', 
  model: 'pacifica', 
  year: '2017',
  trim: 'touring',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: '',
  mpg: '',
  luxury: '4'
},
{
  make:'ford', 
  model: 'escape', 
  year: '2018',
  trim: 'sel',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: '',
  mpg: '',
  luxury: '4'
},
{
  make:'cherolet', 
  model: 'malibu', 
  year: '2020',
  trim: 'lt',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: '',
  mpg: '',
  luxury: '3'
},
{
  make:'toyota', 
  model: 'highlander', 
  year: '2022',
  trim: 'xle',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: '',
  mpg: '',
  luxury: '4'
},
{
  make:'gmc', 
  model: 'acadia', 
  year: '2017',
  trim: 'se',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: '',
  mpg: '',
  luxury: '4'
},
{
  make:'honda', 
  model: 'accord', 
  year: '2013',
  trim: 'sports',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: '',
  mpg: '',
  luxury: '4'
},
{
  make:'toyota', 
  model: 'rav4', 
  year: '2016',
  trim: 'xle',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: '',
  mpg: '',
  luxury: '4'
}
]







//I am still working on this please don't change it.


function divNumber(divName){
  var contaienrNumber;
  const letters = divName.split('').filter((char) => !isNaN(char));
  contaienrNumber = parseInt(letters.join(''), 10);
  console.log(contaienrNumber);
  return contaienrNumber;
}


function descChange(){
  var fileName = location.pathname.split("/").pop();

  if(fileName == "carview.html"){
    document.getElementById('desc').innerHTML = "This is stevie!"
  }
}




var divItem;
var idNumber;


function createDivElement(varItemId){
  divItem = varItemId;
  console.log(divItem);
  idNumber = divNumber(divItem);
  console.log(idNumber);
  var dataObj = data[idNumber];
  localStorage.setItem("idNumber", idNumber);
  localStorage.setItem("description", dataObj.description);
  localStorage.setItem("engine", dataObj.Engine);
  localStorage.setItem("drive", dataObj.driveTrain);
  localStorage.setItem("transmission", dataObj.transmission);
  localStorage.setItem("color", dataObj.color);
  localStorage.setItem("mpg", dataObj.mpg);
  localStorage.setItem("miles", dataObj.Miles);
  localStorage.setItem("price", dataObj.price);
  localStorage.setItem("make", dataObj.make);
  localStorage.setItem("model", dataObj.model);
  localStorage.setItem("luxury", dataObj.luxury);
  window.location.replace("carview.html");
  return false;
}







function search() {
event.preventDefault();

  // window.location.replace('cars.html');
  var value;
  // var userValueChecking = localStorage.getItem("searchValue");
  // if(!userValueChecking){
    value = searchInput.value;
  // }
  // else{
  //   value = userValueChecking;
  // }
// const value = searchInput.value;
// value = userValueChecking;
const QUERY1 = value.toString();
const query = QUERY1.toLowerCase();




//The words array extraces the words from the user's query
let words = [];
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


let Make = [];
let Model = [];
let Trim = [];
let Year = [];

let indexValue = [];
let holder = words[0];
for(var i = 0; i < 4; i++){ for(var k = 0; k < data.length; k++){ if(data[k].make === holder){ Make.push(k); }}
  for(var k = 0; k < data.length; k++){ if(data[k].trim === holder){ Trim.push(k); }}
  for(var k = 0; k < data.length; k++){ if(data[k].model === holder){ Model.push(k); }}
  for(var k = 0; k < data.length; k++){ if(data[k].year === holder){ Year.push(k); }}
  holder = words[i];
}


//creating the match data which contains the index value of the car based on the user's query.
let matchData = [];
let matches = [];
if(Make.length > 0 && Model.length > 0 && Year.length > 0){
  matches = Make.filter(num => Model.includes(num) && Year.includes(num));
}
else if(Make.length === 0 && Model.length === 0 && Year.length > 0){  matches = Year;  }
else if(Make.length > 0 && Model.length === 0 && Year.length === 0){  matches = Make;  }
else if(Make.length === 0 && Model.length > 0 && Year.length === 0){  matches = Model;  }
else if(Make.length > 0 && Model.length > 0 && Year.length === 0){  matches = Make.filter(num => Model.includes(num));  }
else if(Make.length === 0 && Model.length > 0 && Year.length > 0){  matches = Year.filter(num => Model.includes(num));  }
else if(Make.length > 0 && Model.length === 0 && Year.length > 0){  matches = Make.filter(num => Year.includes(num));  }
else{  matches = -1;  }



//pushing the right data into the matches array.
if(matches != -1){
  for(var i = 0; i < matches.length; i++){
    matchData.push(data[matches[i]]);
  }
}

console.log(matches);


//This makes an array that has the right name of all the grid values. 
var properdiv = [];
for(var i = 0; i < data.length; i++){
  var placeholder = "item" + i;
  properdiv.push(placeholder);
  // divNumber(placeholder);
}


  

  if(matches != -1){
    for(var i = 0; i < matches.length; i++){
      matchData.push(data[matches[i]]);
    }
  }

  console.log(matches);

  for(var i = 0; i < data.length; i++){
    for(var j = 0; j < matches.length; j++){
      if(i != matches[j]){
        document.getElementById('item' + i).style.display = "none";
      }
    }
  }

  // console.log("Matches: " + matches);
  // console.log(matchData);


//this pushes the car information on the data array to the dataValue array.
var dataValue = [];
for(var i = 0; i < matches.length; i++){ for(var j = 0; j < data.length; j++){ if(matches[i] == j){ dataValue.push(data[j]); }}}

//This makes the right grid values to be visible to the user. 
for(var i = 0; i < data.length; i++){
  for(var j = 0; j < dataValue.length; j++){ if(dataValue[j] == data[i]){ document.getElementById(properdiv[i]).style.display = "block"; }}
}
console.log(dataValue);


// Clear the results container
resultsContainer.innerHTML = '';
if(matches == -1){
  resultsContainer.innerHTML = "Item does not exist";

}

// Loop through the results and add them to the page
// matchData.forEach(item => {
//   const resultElement = document.createElement('div');
//   resultElement.textContent = `${item.year} ${item.make} ${item.model} ${item.trim}`;
//   resultsContainer.appendChild(resultElement);
// });
}




// Add an event listener to the search form that calls the search function when the form is submitted
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', event => {
// event.preventDefault();
search();
});












// function storeSearch() {
//   var searchInput = document.getElementById("search-input").value;
//   localStorage.setItem("searchValue", searchValue);

//   var value = searchInput;
//   // var userValueChecking = localStorage.getItem("searchValue");
//   // if(!userValueChecking){
//   //   value = searchInput.value;
//   // }
//   // else{
//   //   value = userValueChecking;
//   // }
// // const value = searchInput.value;
// const QUERY1 = value.toString();
// const query = QUERY1.toLowerCase();




