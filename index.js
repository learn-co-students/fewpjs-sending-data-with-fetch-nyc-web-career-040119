// Add your code here
// use fetch() write a method submitData takes in two argument
// user'name and ueser's email

//test 1 write a valid submitData method with post requst to server using fetch
//fetch the URL
// header: Content-Type Accept set to application/json
//a body with the name and email passed in as arguments to submitData
// should be assigned to name and email
// function fetchUser () {
function submitData () {

// }

// fetchDog()
//test 2 after there is a post the respond property will contain the data from post
//use then() call access the response user json() to parse the content of body property
//then user secod then to access the workable object

return fetch("http://localhost:3000/users " {
  method: "POST",
  body: {
    firstName: "Steve",
    email: "steve@steve.com"
  }
})
.then (res => res.json())
.then (function (users) {
  return respond.message;
})

function errorCatch () {
  return fetch ('', {
    method: "POST",
    body: {
      firstName: "Steve",
      email: "steve@steve.com"
    }
  })
.then(res => res.json())
.then(function (respond) {
  return respond.message
})
.catch (function (error) {
  console.log(error.message);
})


//test 3 add catch() write your callback funtion for catch() except to recive error
//error message carries what went wrong when catch is called
}
