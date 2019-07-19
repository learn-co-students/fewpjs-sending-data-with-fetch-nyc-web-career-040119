function submitData(userName, userEmail){
  // User
  let userObject = {
    name: userName,
    email: userEmail
  }

  // Post
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userObject)
  }

  // Fetch
  // to pass the test, you require `return` in front of the fetch request
  return fetch('http://localhost:3000/users', configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log("object: ", object)
      document.body.innerHTML = object.id;
    })
    .catch(function(error) {
      console.log("error: ", error.message)
      document.body.innerHTML = error.message;
    })
}
