let products = [
 {name:"Mobile", price:12000, img:"images/mobile.jpg"},
 {name:"Laptop", price:45000, img:"images/laptop.jpg"},
 {name:"Smart TV", price:30000, img:"images/tv.jpg"}
];

let box = document.getElementById("products");

function show(list){
 box.innerHTML="";
 list.forEach(p=>{
  box.innerHTML += `
   <div class="card">
    <img src="${p.img}">
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <button onclick="addCart('${p.name}',${p.price})">Add to Cart</button>
   </div>`;
 });
}
show(products);

// SEARCH
function searchProduct(){
 let k = document.getElementById("search").value.toLowerCase();
 show(products.filter(p=>p.name.toLowerCase().includes(k)));
}

// CART
function addCart(name,price){
 let cart = JSON.parse(localStorage.getItem("cart")) || [];
 cart.push({name,price});
 localStorage.setItem("cart",JSON.stringify(cart));
 alert("Added to cart");
}
