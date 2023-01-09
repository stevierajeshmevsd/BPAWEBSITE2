const varname = 'varname';



export varname;

function calculateMonthlyPayment(principle, interestRate, term) {
  const monthlyInterestRate = interestRate / 12;
  const monthlyPayment = (principle * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -term));
  return monthlyPayment;
}

// Updated the slider value of the downpayment slider.
function sliderChange(val){
  
  document.getElementById('sliderStatus').innerHTML = val;
  // return val;
}


function sliderValue(val){  return val; }

// This function takes care of the loan estimator's calculation.
function myFunction(){       
  // var monthlyPayment;
  event.preventDefault();
  const interest = [5.57, 6.34, 8.62, 9.37, 10.48, 12.38, 14.54, 18.87]
  var price = document.getElementById("sliderStatus").innerHTML;
  var downPayment = 40000 - price;
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
  model: 'camry', 
  year: '2012',
  trim: 'le',
  miles: '89345',
  description: 'This works good',
  price: '34,000',
  luxuryScore: '4',
  Engine: ' hybrid',
  driveTrain: 'FWD',
  transmission: 'CVT',
  color: 'blue',
  mpg: '40mpg'
},
{
  make:'lexus', 
  model: 'ls', 
  year: '2010',
  trim: 'base',
  Miles: ' 23432',
  description: '',
  price: '3,000',
  luxuryScore: '5',
  Engine: 'v6 turbo',
  driveTrain: 'AWD',
  transmission: 'Automatic',
  color: 'white',
  mpg: '23mpg'
},
{
  make:'subaru', 
  model: 'legacy', 
  year: '2017',
  trim: 'base',
  Miles: '45434',
  description: '',
  price: '20,000',
  luxuryScore: '2',
  Engine: 'Boxter 6-Cyl',
  driveTrain: 'Awd',
  transmission: 'Automatic',
  color: 'Blue',
  mpg: '20mpg'
},
{
  make:'audi', 
  model: 'a6', 
  year: '2015',
  trim: 'premium',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: '',
  mpg: ''
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
  color: '',
  mpg: ''
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
  color: '',
  mpg: ''
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
  color: '',
  mpg: ''
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
  color: '',
  mpg: ''
},
{
  make:'toyota', 
  model: 'corolla', 
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
  mpg: ''
},
{
  make:'volkswagen', 
  model: 'passat', 
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
  mpg: ''
},
{
  make:'hyundai', 
  model: 'sonata', 
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
  mpg: ''
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
  color: '',
  mpg: ''
},
{
  make:'nissan', 
  model: 'versa', 
  year: '2019',
  trim: 'sv',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: '',
  mpg: ''
},
{
  make:'acura', 
  model: 'rdx', 
  year: '2019',
  trim: 'sh',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: '',
  mpg: ''
},
{
  make:'kia', 
  model: 'sportage', 
  year: '2020',
  trim: 'lx',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: '',
  mpg: ''
},
{
  make:'honda', 
  model: 'odyssey', 
  year: '2014',
  trim: 'ex-l',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: '',
  mpg: ''
},
{
  make:'jeep', 
  model: 'compass', 
  year: '2017',
  trim: 'latitude',
  Miles: ' ',
  description: '',
  price: '',
  luxuryScore: '',
  Engine: '',
  driveTrain: '',
  transmission: '',
  color: '',
  mpg: ''
},
{
  make:'subaru', 
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
  mpg: ''
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
  mpg: ''
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
  mpg: ''
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
  mpg: ''
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
  mpg: ''
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
  mpg: ''
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
  mpg: ''
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
  mpg: ''
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
  mpg: ''
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
  mpg: ''
}
]







//I am still working on this please don't change it.


// function divNumber(divName){
//   var contaienrNumber;
//   const letters = divName.split('').filter((char) => !isNaN(char));
//   contaienrNumber = parseInt(letters.join(''), 10);
//   console.log(contaienrNumber);
//   return contaienrNumber;
// }


// function descChange(divIndexValue){
//   document.getElementById('desc').innerHTML = data[divIndexValue].description;
//   // console.log(data)
// }

// //This var contains the div's name.
// var divItem;
// var idNumber;
// function createDivElement(varItemId){
//   divItem = varItemId;
//   console.log(divItem);
//   idNumber = divNumber(divItem);
//   console.log(idNumber);
//   // window.location.replace('carview.html');
//   // document.getElementById('desc').innerHTML = "HI there this is Raghav/";

// }

// if (window.location.pathname.endsWith('carsview.html')) {
// }

// descChange(idNumber);



function search() {
event.preventDefault();
const value = searchInput.value;
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
  divNumber(placeholder);
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

// Loop through the results and add them to the page
matchData.forEach(item => {
  const resultElement = document.createElement('div');
  resultElement.textContent = `${item.year} ${item.make} ${item.model} ${item.trim}`;
  resultsContainer.appendChild(resultElement);
});
}




// Add an event listener to the search form that calls the search function when the form is submitted
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', event => {
// event.preventDefault();
search();
});









// this is for the carsview page 




