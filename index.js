// Add your code here
const DOGS_URL = "http://localhost:3000/dogs"
const CATS_URL = "http://localhost:3000/cats"
const USERS_URL = "http://localhost:3000/users"
const ROBOTS_URL = "http://localhost:3000/robots"

// let formData = {
// //   dogName: "Byron",
// //   dogBreed: "Poodle"
// // };
// //
// // let configObj = {
// //   method: "POST",
// //   headers: {
// //     "Content-Type": "application/json",
// //     "Accept": "application/json"
// //   },
// //   body: JSON.stringify(formData)
// // };
// //
// // fetch("http://localhost:3000/dogs", configObj);
//
// function submitData(name,email) {
//   fetch("http://localhost:3000/users", {
//     method:"POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//       name: "Hello",
//       email: "hello@gmail"
//     })
//   })
//   .then(function(response){
//     response.json();
//   })
//   .then(function( object ){
//     const usersBody = document.querySelector('body')
//     usersBody.innerHTML = object[ 'id' ]
//     console.log(usersBody)
//     usersBody.appendChild(usersBody)
//     debugger
//   })
//
// }
function submitData( name, email ) {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name,
        email
      } )
    } )
    .then( function ( response ) {
      return response.json()
    } )
    .then( function ( object ) {
      document.body.innerHTML = object[ "id" ]
    } )
    .catch( function ( error ) {
      document.body.innerHTML = error.message
    } )
}
