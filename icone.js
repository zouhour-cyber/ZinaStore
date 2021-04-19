
// get all button with class add-cart
let carts=document.querySelectorAll('.add-to-cart');
let favoris=document.querySelectorAll('.add-favoris');


// parcourir tous les produits
for (let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

for (let i=0;i<favoris.length;i++){
    favoris[i].addEventListener('click',()=>{
        favorisNumbers(products[i]);
      
    })
}

//ajout de produit au localstorage 
function cartNumbers(product){
    console.log('the product aded is',product)
    let productNumbers=localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers);
    
    if (productNumbers){
        localStorage.setItem('cartNumbers',productNumbers+1)
        document.querySelector('#paniernav').textContent=productNumbers+1
    }
  
    else{
        // add to localstorge
    localStorage.setItem('cartNumbers',1)
    document.querySelector('#paniernav').textContent=1;
    }
    setItems(product);   
}

//mm chose pour favoris
// loalstorge to the cart when i onload the page

function favorisNumbers(product){
    console.log('the product aded is',product)
    let favorisNumbers=localStorage.getItem('favorisNumbers');
    favorisNumbers=parseInt(favorisNumbers);
    
    if (favorisNumbers){
        localStorage.setItem('favorisNumbers',favorisNumbers+1)
        document.querySelector('#favorisnav').innerHTML=favorisNumbers+1
    }
     // si on a p d produit il faut mettr à 1 ainsi que panier
     else{
        // add to localstorge
    localStorage.setItem('favorisNumbers',1)
    document.querySelector('#favorisnav').innerHTML=1;
    }
    
}

    // loalstorge to the cart when i onload the page
function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if (productNumbers){
        document.querySelector('#paniernav').textContent=productNumbers;
    }
    let favorisNumbers = localStorage.getItem("favorisNumbers")
   if(favorisNumbers){
      document.querySelector('#favorisnav').innerHTML = favorisNumbers
    
}
}
   
  
onLoadCartNumbers()