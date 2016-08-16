console.log("acme.js has loaded");

// JQUERY EVENT LISTENERS HERE-they work fine

$('#ammunition').on("click", function (event){
console.log("event", event);
})

$('#charges').on("click", function (event){
console.log("event", event);
})

$('#fireworks').on("click", function (event){
console.log("event", event);
})

$('#grenades').on("click", function (event){
console.log("event", event);
})

// XML-HTTP CALL HERE (WITH PROMISES)://///////////////////////////////////////////
// From Scott's lecture notes
var categories = getJSON("categories.json")
var types = getJSON("types.json")
var products = getJSON("products.json")

function getJSON (myURLhere) {
  return new Promise(function (resolve, reject) { // the second argument is a function that should execute on error

    var xhr = new XMLHttpRequest()
    /////this next line prepares the request/////
    xhr.open('GET', myURLhere)
    xhr.addEventListener('load', function (evt) {
    	console.log("Event", evt);
    	console.log("Load Status", evt.currentTarget.status); //categories loads acording to dev tools!
    	// console.log(ProgressEvent.status);
      // the load event fires when connection was successful
      // check for error status codes (404 means NOT FOUND, 500 means INTERNAL SERVER ERROR, etc... )
      // See https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
      if (evt.target.status < 400) {
        // resolve with raw json rather than the parsed json
        // If an error is thrown here (bad json), then `.catch` will not fire
        resolve(evt.target.responseText)
        console.log("Response Text", evt.target.responseText);///works!
      } else {
        reject(new Error(evt.target.statusText))
      }
    })
    xhr.addEventListener('error', function (evt) {
      // the error event fires when the connection was unsuccessful (no internet access, bad URL, etc...)
      reject(new Error(evt.target.statusText))
    })
    console.log("I'm getting ready to send this thing!")
    xhr.send()////getting an error here
 })
  .then(function (json) {
    // parsing the json in its own `.then` allows for proper error handling of malformed json
    return JSON.parse(json)
    console.log (json);
  })
}
getJSON()






// if you need both sets of data you will need to cache the first dataset in a variable

// getJSON('categories.json')
//   .then(function (categories) {
//     _categories = categories // cache the data
//     return getJSON('types.json')
//     console.log("_categories", _categories); // from cached variable
//   })
//   .then(function (types) {
//     _types= types //cache the data
//     return getJSON('products.json')
//     console.log("types", types);
//   })
// 	.then(function (products) {
// 		 _products= products //cache the data
//     console.log(products);
//     console.log("_products", _products);
// })

// OUTPUT STRING CREATION HERE:////////////////////////////






