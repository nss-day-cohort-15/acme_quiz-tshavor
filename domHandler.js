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
    	// working copy-don't delete!

        $("#product_details").append(
        	`
        <div class="col-md-4">
        <div class="card">
        <h3>Category: ${categories[types[firework.type].category].name}</h3>
        <h4>Type: ${types[firework.type].name}</h4>
        <h5>Product Name: ${firework.name}</h5>
        <p>${firework.description}</p></div></div>
        `

        )});

}

function loadDestructives () {
    $("#output").empty();
    destructives.forEach(function (demo){
        $("#product_details").append(
        	`
        <div class="col-md-4">
        <div class="card" >
        <h3>Category: ${categories[types[demo.type].category].name}</h3>
        <h4>Type: ${types[demo.type].name}</h4>
        <h5>Product Name: ${demo.name}</h5>
        <p>${demo.description}</p>
        <div class="col-md-1"></div></div>`
        )});

}

}

return ware;

})

(Warehouse || {})

Warehouse.loadProducts(Warehouse.insertinDom);

// revised Bootstrap example in table form- to play with firther this weekend

// 				$("#product_details").append(
// 					`
// <h2 class="sub-header">Selcted Products</h2>
//           <div class="table-responsive">
//             <table class="table table-striped">
//               <thead>
//                 <tr>
//                   <th>Cateogry</th>
//                   <th>Type</th>
//                   <th>Product Name</th>
//                   <th>Description</th>
//                 </tr>
//               </thead>
//               <tbody>
//              			<tr>
//                   <td>${categories[types[firework.type].category].name}</td>
//                   <td>${types[firework.type].name}</td>
//                   <td>${firework.name}</td>
//                   <td>${firework.description}</td>
//                 </tr>
// 							</tbody>
//             </table>
// 						`
