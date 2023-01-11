
// function homepageSearch(userValue)
// {
//     // window.location.replace('cars.html');
//   event.preventDefault();
//   const value = userValue;
//   const QUERY1 = value.toString();
//   const query = QUERY1.toLowerCase();
  
  
  
  
//   //The words array extraces the words from the user's query
//   let words = [];
//   let currentWord = "";
//   for (let j = 0; j < query.length; j++) {
//   let char = query[j];
//   if (char === " ") {
//       words.push(currentWord);
//       currentWord = "";
//   } else {
//       currentWord += char;
//     }
//   }
//   words.push(currentWord); 
  
  
//   let Make = [];
//   let Model = [];
//   let Trim = [];
//   let Year = [];
  
//   let indexValue = [];
//   let holder = words[0];
//   for(var i = 0; i < 4; i++){ for(var k = 0; k < data.length; k++){ if(data[k].make === holder){ Make.push(k); }}
//     for(var k = 0; k < data.length; k++){ if(data[k].trim === holder){ Trim.push(k); }}
//     for(var k = 0; k < data.length; k++){ if(data[k].model === holder){ Model.push(k); }}
//     for(var k = 0; k < data.length; k++){ if(data[k].year === holder){ Year.push(k); }}
//     holder = words[i];
//   }
  
  
//   //creating the match data which contains the index value of the car based on the user's query.
//   let matchData = [];
//   let matches = [];
//   if(Make.length > 0 && Model.length > 0 && Year.length > 0){
//     matches = Make.filter(num => Model.includes(num) && Year.includes(num));
//   }
//   else if(Make.length === 0 && Model.length === 0 && Year.length > 0){  matches = Year;  }
//   else if(Make.length > 0 && Model.length === 0 && Year.length === 0){  matches = Make;  }
//   else if(Make.length === 0 && Model.length > 0 && Year.length === 0){  matches = Model;  }
//   else if(Make.length > 0 && Model.length > 0 && Year.length === 0){  matches = Make.filter(num => Model.includes(num));  }
//   else if(Make.length === 0 && Model.length > 0 && Year.length > 0){  matches = Year.filter(num => Model.includes(num));  }
//   else if(Make.length > 0 && Model.length === 0 && Year.length > 0){  matches = Make.filter(num => Year.includes(num));  }
//   else{  matches = -1;  }
  
  
  
//   //pushing the right data into the matches array.
//   if(matches != -1){
//     for(var i = 0; i < matches.length; i++){
//       matchData.push(data[matches[i]]);
//     }
//   }
  
//   console.log(matches);
  
  
//   //This makes an array that has the right name of all the grid values. 
//   var properdiv = [];
//   for(var i = 0; i < data.length; i++){
//     var placeholder = "item" + i;
//     properdiv.push(placeholder);
//     // divNumber(placeholder);
//   }
  
  
    
  
//     if(matches != -1){
//       for(var i = 0; i < matches.length; i++){
//         matchData.push(data[matches[i]]);
//       }
//     }
  
//     console.log(matches);
  
//     for(var i = 0; i < data.length; i++){
//       for(var j = 0; j < matches.length; j++){
//         if(i != matches[j]){
//           document.getElementById('item' + i).style.display = "none";
//         }
//       }
//     }
  
//     // console.log("Matches: " + matches);
//     // console.log(matchData);
  
  
//   //this pushes the car information on the data array to the dataValue array.
//   var dataValue = [];
//   for(var i = 0; i < matches.length; i++){ for(var j = 0; j < data.length; j++){ if(matches[i] == j){ dataValue.push(data[j]); }}}
  
//   //This makes the right grid values to be visible to the user. 
//   for(var i = 0; i < data.length; i++){
//     for(var j = 0; j < dataValue.length; j++){ if(dataValue[j] == data[i]){ document.getElementById(properdiv[i]).style.display = "block"; }}
//   }
//   console.log(dataValue);
  
  
//   // Clear the results container
//   resultsContainer.innerHTML = '';
  
//   // Loop through the results and add them to the page
//   matchData.forEach(item => {
//     const resultElement = document.createElement('div');
//     resultElement.textContent = `${item.year} ${item.make} ${item.model} ${item.trim}`;
//     resultsContainer.appendChild(resultElement);
//   });
//   }