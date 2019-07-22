let formData = {
  name: "Steve",
  email: "steve@steve.com",
};

let configObj = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  method: "POST",
  body: JSON.stringify(formData)
};

function submitData(name, email) {
  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      const body = document.querySelector("body")
      body.innerHTML += `<p>${object['id']}</p>`
      console.log(object['id']);
    })
    .catch(function(error) {
      alert("Error!");
      const body = document.querySelector("body")
      body.innerHTML += `<p>${error.message}</p>`
      console.log(error.message);
    })

}
