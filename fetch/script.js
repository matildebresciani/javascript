window.addEventListener("DOMContentLoaded", init);

const productsURI = "https://kea-alt-del.dk/t7/api/products";

let productList;
let productTemplate;

function init() {
    productList = document.querySelector("#product_list");
    console.log("productList", productList);
    productTemplate = document.querySelector("template").content;
    console.log("productTemplate", productTemplate);

    fetch(productsURI).then((response) => {console.log("response", response); return response.json();}).then(logJSON);
}

function logJSON(json) {
console.log("json", json);
json.forEach(showproduct);
}

function showproduct(product) {
    const clone = productTemplate.cloneNode(true);
    clone.querySelector("h3").textContent = product.name + " " + product.productdisplayname;
    clone.querySelector("p").textContent = product.season;
    productList.appendChild(clone);
}