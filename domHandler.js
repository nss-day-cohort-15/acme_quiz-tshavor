var Warehouse = (function(ware) {

    // creating an empty array for each category

    var fireworks = [];
    var destructives = [];

    ware.insertinDom = function(categories, types, products) {
        for (var i in products) {
            if (products[i].type <= 2) {
                fireworks.push(products[i]);
            } else {
                destructives.push(products[i]);
            }
        }
        // CLICK EVENTS///
        $("#fireworks").click(loadFireworks);
        $("#destructives").click(loadDestructives);

        ////////////WORKING COPY////////////////////////////////
        // function loadFireworks() {
        //     $("#product_details").empty();
        //     fireworks.forEach(function(firework) {
        //         $("#product_details").append(
        //             `
        // <div class="col-md-4">
        // <div class="card">
        // <h3>Category: ${categories[types[firework.type].category].name}</h3>
        // <h4>Type: ${types[firework.type].name}</h4>
        // <h5>Product Name: ${firework.name}</h5>
        // <p>${firework.description}</p></div>
        // <div class="col-md-1"></div>
        // </div>`
        //         )
        //     });
        // }
///////////////////REVISED COPY//////////////////////////////////
     // SPECIAL NOTE: Goggle CHROME has an annoying feature where if it sees an open <div>
     // it will automatically close it.  Unfortunately, this will not allow our products to display
     // properly in rows.  To deal with this, we use the modulus as below:

        function loadFireworks() {

            $("#product_details").empty();
            var results= "";

            fireworks.forEach(function(firework, i){
                if ((i + 1) % 3 === 0) {
                    results += `<div class= "row">`;
                }
                results +=`<div class="col-md-4">
                            <div class="card">
                            <h3>Category: ${categories[types[firework.type].category].name}</h3>
                            <h4>Type: ${types[firework.type].name}</h4>
                            <h5>Product Name: ${firework.name}</h5>
                            <p>${firework.description}</p></div>
                            <div class="col-md-1"></div>
                            </div>`;

                    if ((i+1) % 3 === 0 || (i+1)===fireworks.length){
                         results += (`</div>`);
                        }
            });

            $("#product_details").append(results);


        }

///////////////////////////////////////////////////////////////////////////
    function loadDestructives() {

                $("#product_details").empty();
                var results= "";

                destructives.forEach(function(firework, i){
                    if ((i + 1) % 3 === 0) {
                        results += `<div class= "row">`;
                    }
                    results +=`<div class="col-md-4">
                                <div class="card">
                                <h3>Category: ${categories[types[firework.type].category].name}</h3>
                                <h4>Type: ${types[firework.type].name}</h4>
                                <h5>Product Name: ${firework.name}</h5>
                                <p>${firework.description}</p></div>
                                <div class="col-md-1"></div>
                                </div>`;

                        if ((i+1) % 3 === 0 || (i+1)===destructives.length){
                             results += (`</div>`);
                            }
                });

                $("#product_details").append(results);


            }
/////////////////////////////////////////////////////////////////////////
    }

    return ware;

})

(Warehouse || {})

Warehouse.loadProducts(Warehouse.insertinDom);

