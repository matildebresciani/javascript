window.addEventListener("DOMContentLoaded", init);

const id = 1163
const uri = `https://kea-alt-del.dk/t7/api/products/${id}`;

function init() {
    fetch(uri).then((reponse) => reponse.json()).then(handleData);
}

function handleData(json) {
console.log("json", json);

document.querySelector("h1").textContent = json.productdisplayname;
document.querySelector("p").textContent = json.brandbio;
}