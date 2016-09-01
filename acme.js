console.log("acme.js has loaded");

// XML-HTTP CALL HERE (WITH PROMISES, USING PROMISE.ALL)://///////////////////////////////////////////

var Warehouse = (function(ware) {

    var categories = null;
    var types = null;
    var products = null;

    ware.loadProducts = function(insertinDom) {
        console.log("function loadProducts is ready!")
        Promise.all([
            $.getJSON('categories.json'),
            $.getJSON('types.json'),
            $.getJSON('products.json')
        ])

        .then(function(catalog) {
            categories = catalog[0].categories
            types = catalog[1].types
            products = catalog[2].products[0]
            insertinDom(categories, types, products)
            console.log(categories);
        })
    }

    return ware;

})

(Warehouse || {})


// THIS EXAMPLE IS FROM THE CLASS RESOURSES SECTION/////////////

// This function does one thing, and returns a promise
// var firstAJAX = function() {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       // url: "https://nss-demo-instructor.firebaseio.com/songs.json"
//       url: "categories.json"
//     }).done(function(data) {
//       resolve(data);
//     }).fail(function(xhr, status, error) {
//       reject(error);
//     });
//   }
// )};

// // This function does one thing, and returns a promise
// var secondAJAX = function(result_of_firstXHR) {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       // url: "https://nss-demo-instructor.firebaseio.com/more-songs-info.json",
//       url: "types.json"
//       data: result_of_firstXHR
//     }).done(function(data) {
//       resolve(data);
//     }).fail(function(xhr, status, error) {
//       reject(error);
//     });
//   }
// )};

// // This function does one thing, and returns a promise
// var thirdAJAX = function(result_of_secondXHR) {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       // url: "https://nss-demo-instructor.firebaseio.com/song-details.json",
//       url:"products.json"
//       data: result_of_secondXHR
//     }).done(function(data) {
//       resolve(data);
//     }).fail(function(xhr, status, error) {
//       reject(error);
//     });
//   }
// )};

/*
  Now we use those Promises to describe the order of execution,
  and how data flows between each one.

  Note how the resolve callback function, itself, returns another
  promise. This is how you can chain promises, and dictate the
  order of execution of multiple aynschronous operations.
 */
// firstAJAX()
//   .then(function(data1) {
//     return secondAJAX(data1);
//   })
//   .then(function(data2) {
//     return thirdAJAX(data2);
//   }).then(function(data3){
//     console.log(data3);
//   });
