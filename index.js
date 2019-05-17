function submitData(name, email){
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  })
  .then(function(response){
    return response.json();
  })
  .then(function(object){
    document.body.innerHTML = object.id
  })
  .catch(function(error){
    // debugger
    document.body.innerHTML = error.message
  })
}
// configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   })
// }
//
// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function(res){
//     return res.json();
//   })
//   .then(function(obj){
//     console.log(obj);
//   })
//   .catch(function(error){
//     alert("Bad things! Ragnarok!");
//     console.log(error.message);
//   })
