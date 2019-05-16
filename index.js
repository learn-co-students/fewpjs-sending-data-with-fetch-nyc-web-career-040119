let formData = {
  name: "Steve",
  email: "steve@steve.com"
};

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};

const bodyType = document.querySelector('#come-on')

function submitData(name, email) {
  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      bodyType.innerHTML += `<p>${object.id}</p>`
    })
    .catch(function(error) {
      bodyType.innerHTML += "<p>Unauthorized Access</p>"
    });
}
