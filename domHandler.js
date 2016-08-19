var Warehouse = (function(ware) {

// creating an empty array for each category

var fireworks = [];
var destructives = [];

ware.insertinDom = function (categories,types,products){
 for (var i in products) {
    if (products[i].type <= 2) {
        fireworks.push(products[i]);
    }
    else {
        destructives.push(products[i]);
    }
}
// CLICK EVENTS///
$("#fireworks").click(loadFireworks);
$("#destructives").click(loadDestructives);

function loadFireworks() {
    $("#output").empty();
    fireworks.forEach(function (firework){
        $("#product_details").append(`
        <div class="col-md-4">
        <div class="card" style="background-color: rgba(255, 0, 0, 0.8); color: black; font-style: bolder">
        <h3>Category: ${categories[types[firework.type].category].name}</h3>
        <h4>Type: ${types[firework.type].name}</h4>
        <h5>Product Name: ${firework.name}</h5>
        <p>${firework.description}</p></div></div>
        `)});

}

function loadDestructives () {
    $("#output").empty();
    destructives.forEach(function (demo){
        $("#product_details").append(`
        <div class="col-md-4">
        <div class="card" style="background-color: rgba(255, 255, 0, 0.9); color: blue; font-style: bolder">
        <h3>Category: ${categories[types[demo.type].category].name}</h3>
        <h4>Type: ${types[demo.type].name}</h4>
        <h5>Product Name: ${demo.name}</h5>
        <p>${demo.description}</p>
        <div class="col-md-1"></div></div>`)});

}

}

return ware;

})

(Warehouse || {})

Warehouse.loadProducts(Warehouse.insertinDom);



