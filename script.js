const products = [

{
name:"Wireless Headphones",
price:99,
category:"Electronics",
image:"https://picsum.photos/300?random=1"
},

{
name:"Running Shoes",
price:120,
category:"Shoes",
image:"https://picsum.photos/300?random=2"
},

{
name:"Leather Wallet",
price:40,
category:"Accessories",
image:"https://picsum.photos/300?random=3"
},

{
name:"Smart Watch",
price:180,
category:"Electronics",
image:"https://picsum.photos/300?random=4"
},

{
name:"Men's Jacket",
price:85,
category:"Fashion",
image:"https://picsum.photos/300?random=5"
},

{
name:"Sneakers",
price:95,
category:"Shoes",
image:"https://picsum.photos/300?random=6"
},

{
name:"Women's Handbag",
price:70,
category:"Fashion",
image:"https://picsum.photos/300?random=7"
},

{
name:"Sunglasses",
price:50,
category:"Accessories",
image:"https://picsum.photos/300?random=8"
}

];

const container=document.getElementById("products");
const search=document.getElementById("search");
const buttons=document.querySelectorAll(".filter-btn");

let cart=0;

function displayProducts(items){

container.innerHTML="";

items.forEach(product=>{

container.innerHTML+=`

<div class="card">

<img src="${product.image}">

<div class="info">

<h3>${product.name}</h3>

<p class="category">${product.category}</p>

<p class="price">$${product.price}</p>

<button class="buy">Add to Cart</button>

</div>

</div>

`;

});

document.querySelectorAll(".buy").forEach(btn=>{

btn.addEventListener("click",()=>{

cart++;

document.getElementById("cart-count").innerText=cart;

});

});

}

displayProducts(products);

buttons.forEach(button=>{

button.addEventListener("click",()=>{

document.querySelector(".active").classList.remove("active");
button.classList.add("active");

const category=button.dataset.category;

if(category==="All"){
displayProducts(products);
}
else{
displayProducts(products.filter(item=>item.category===category));
}

});

});

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const filtered=products.filter(product=>

product.name.toLowerCase().includes(value)

);

displayProducts(filtered);

});
