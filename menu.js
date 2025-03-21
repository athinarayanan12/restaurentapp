const menubutton = document.querySelectorAll('.menu-search-catogory button');

// for(let i=0;i<=menubutton.length;i++){
//     menubutton[i].addEventListener('click',function(){
     

//     });
// }
document.addEventListener("DOMContentLoaded",displaySeller());

function displaySeller(){
    const productToken =[];
    const menuItemCntainer = document.getElementById("menu-items")
    menuItemCntainer.innerHTML="";
    fetch("menu.json").then((res)=>{
        if(!res.ok){
            throw new Error("Network not response.")
        }else{
            return res.json();
        }
    }).then((items)=>{
        items.forEach(data => {
            const item = `<div id="product-${data.id}" class="menu-item">
                <img src="${data.image}" alt="">
                <div class="menu-details">
                    <h2>${data.name}</h2>
                    <span>${data.description}</span>
                    <span class="menu-price">Price: ${data.price}</span>
                    <button id="${data.id}" class="add-cart-btn hidden">Add to cart</button>
                </div>
            </div>`;
            menuItemCntainer.innerHTML += item;
        });

        const addCart = document.querySelectorAll(".add-cart-btn");

        for(let i=0;i<addCart.length;i++){
            addCart[i].addEventListener("click",function(me){
                for (let index = 0; index < items.length; index++) {
                   if(items[index].id == me.currentTarget.id){
                        console.log(items[index]);
                   }
                }
            })
        }
        for(let i=0;i<items.length;i++){
            const product = document.getElementById("product-"+items[i].id);
            product.addEventListener("click",function(){
                window.open("./product.html?id="+items[i].id);
            });
            //generate token
            const title = items[i].name.replace(/[^a-zA-Z0-9 ]/g, "");
            const description = items[i].description.replace(/[^a-zA-Z0-9 ]/g, "");
            const token = title.split(' ').concat(description.split(' '));
            productToken.push({
                id:items[i].id,
                tokens:token
            });
        }
        console.log(productToken);
       
    }).catch(error=>{
        console.error('Error fetching products:',error);
    });

    
    const searchInput = document.querySelector(".menu-search input");
    searchInput.addEventListener("input",function(e){
        searchFood(e.target.value);
    });
    
    const searchFood=(searchQuery)=>{
        const productToken = searchQuery.split(' ');
            const finalProduct = [];
            for(let i=0;i<productToken.length;i++){

            }
    }
}
