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

var Factory = (function (fact) {


var categories = null;
var types = null;
var products = null;


    fact.loadProducts = function (putThingsInDom){
        Promise.all ([
            $.getJSON('categories.json'),
            $.getJSON('types.json'),
            $.getJSON('products.json')
            ])

                .then(function (catalog) {
                categories = catalog[0].categories
                types = catalog[1].types
                products = catalog[2].products[0]
                putThingsInDom(categories,types,products)

                })

            }

return fact;

})

(Factory || {})


















// OUTPUT STRING CREATION HERE:////////////////////////////






