function mymenu() {
    document.querySelector("#myDropdown").classList.toggle("show");
    document.querySelector("#Icon").classList.toggle("icon");
}

function product_options(product_id, value) {
    console.log("Product ID : " + product_id);
    console.log("Product Value : " + value);

    var res = value.split("_");

    var weight = product_id + '_weight';
    var market = product_id + '_market';
    var store = product_id + '_store';
    document.getElementById(weight).innerHTML = res[0];
    document.getElementById(market).innerHTML = res[1];
    document.getElementById(store).innerHTML = res[2];
}