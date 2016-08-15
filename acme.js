console.log("acme.js has loaded");

// var selectedCategory=   nav masthead-nav






// JQUERY EVENT LISTENERS HERE:???

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




// XML-HTTP CALL HERE (WITH PROMISES):///////////////////


// if you need both sets of data you will need to cache the first dataset

var _categories = "" // create a state variable to hold the data

getJSON('categories.json')
  .then(function (categories) {
    _categorie = categories // cache the data
    return getJSON('types.json')
  })
  .then(function (types) {
    console.log(songDetails)
    console.log("_categories", _categories) // from cached variable
  })

//////////////////////////////////////////////////////////////////////////
// if you need both sets of data you will need to cache the first dataset

var _songList // create a state variable to hold the data
getJSON('songlist.json')
  .then(function (songList) {
    _songList = songList // cache the data
    return getJSON('songdetails.json')
  })
  .then(function (songDetails) {
    console.log(songDetails)
    console.log(_songList) // from cached variable
  })






// OUTPUT STRING CREATION HERE:////////////////////////////






