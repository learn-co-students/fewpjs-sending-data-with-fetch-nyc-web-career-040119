function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name: name, email: email})
  })
    .then(resp => resp.json())
    .then(json => {
      const body = document.querySelector("body");
      for (const key in json) {
        body.innerHTML += `${key}: ${json[key]}<br>`
      }
      // debugger;


      // usersCont = document.querySelector("#users");
      // usersCont.innerHTML += `<li>${json.id}</li>`;
      // debugger;
    })
    .catch(error => {
      const body = document.querySelector("body");
      // body = document.querySelector("body");
      body.innerHTML += error.message;
    });
}

submitData("Steve", "steve@steve.com");
