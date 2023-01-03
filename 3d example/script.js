function CarConditionalQuery(/**/) {
  // Convert the arguments to an array
  var args = Array.from(arguments);

  // Get the limit argument
  const limit = args[0];

  // Build the query string 
  let query = String('SELECT cars.ID, carBrand.Brand, carModel.Model, cars.trim, cars.manufacturingYear, cars.MSRP, cars.buyDate FROM carBrand INNER JOIN carModel ON carBrand.ID = carModel.FK_Brand INNER JOIN cars ON carModel.ID = cars.FK_Model' + args.slice(1).join(" ") + ' LIMIT ' + limit)

  // Log the query to the console
  console.log(query)

  // Send the query to the server
  fetch('http://localhost/query.php', {
  method: 'POST',
  
  body: query,
 
  headers: {
    'Content-Type': 'text/plain'
  }
})
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      
      

      //intialize local variables
      let rowdata = ''; // create empty text variable
      let columnID = Object.keys(data[0]); // create an array with the object names in columnID

      console.log(data, columnID)

      // clear the results div
      document.getElementById("results").innerHTML

    })
    .catch(error => {
      // Log any errors to the console
      console.log(error);
    });
}