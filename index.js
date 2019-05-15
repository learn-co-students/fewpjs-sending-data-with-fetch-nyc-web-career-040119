// Add your code here
function submitData(name, email){
  //valid POST request to http://localhost:3000/users using fetch()
  //request should include
  //destination URL
  //headers for 'Content-Type' and 'Accept' set to 'application/json'
  //body with name and email passed in as arugments to submitData. Should be assigned to name and email keys within an object; object should be stringified
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })

  //use then() call to access Response object
  //use built-in json() method to parse contents of body property
  //use second then() to access newly converted object
  //from this object, find new id and append value to DOM
  .then(function(response){
    return response.json();
  })
  .then(function(object){
    document.body.innerHTML = object["id"];
  })

  //after the two then() calls on fetch(), add a catch()
  //when writing callback function for catch() expect to receive object on error with property, message, containing info about what went wrong
  //append this message to DOM when catch() is called
  .catch(function(error){
    document.body.innerHTML = error.message;
  });
}
