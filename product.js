console.log(window.location.href);
console.log(window.location.search);
const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
const productId = urlParams.get("id");
console.log(productId);

fetch("menu.json").then((res)=>{
    if(!res.ok){
        throw new Error("Network not response.")
    }else{
        return res.json();
    }
}).then((items)=>{
    const product = items.find(item=>item.id == productId);
    const productName =document.getElementById("product-name");
    productName.textContent= product.name;
    const description =document.getElementById("product-description");
    description.textContent= product.description;
    const productPrice =document.getElementById("product-price");
    productPrice.textContent= `Price ${product.price}`;
    const productImage =document.getElementById("product-image");
    productImage.style.backgroundImage= `url(${product.image})`;
    
});