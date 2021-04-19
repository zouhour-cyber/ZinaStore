
// get all button with class add-cart
let carts=document.querySelectorAll('.add-cart');
let favoris=document.querySelectorAll('.add-favoris');


let products=[

    
    {   category:"bague",
        name:"Bague emeraude",
        tag:"ringemeraude.jpg",
        price:1000,
        inCart:0
    },
    {   category:"bracelet",
        name:"bracelet",
        tag:"bracelet2.jpg",
        price:100,
        inCart:0
    },

    {   category:"boucle",
        name:"boucle",
        tag:"bague3.jpg",
        price:"200",
        inCart:0,

    },
    {   category:"montre",
        name:"Montre femme",
        tag:"montre1.jpg",
        price:160,
        inCart:0
    },
    {   category:"collier",
        name:"collier",
        tag:"collier.jpg",
        price:100,
        inCart:0
    },
    {   category:"bague",
        name:"Bague",
        tag:"ringnoir.jpg",
        price:300,
        inCart:0
    }
]
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
   


    function setItems(product){
        // on va tester si le produit existe in local storge ou nn 
        let cartItems=localStorage.getItem("productsInCart")
        // il affiche un json
        console.log('my card items are',cartItems)
        // il faut convertir en un objet js nrml 
        cartItems=JSON.parse(cartItems)
    //     console.log('my card items are',cartItems)
    //    console.log('object',product)
    // on va tester si le prduit existe en ajoute au locl si nn va mettr son nombr +1
    if (cartItems != null){
        // on va tester sur le 2ém prod s'il est ajouté on update locl est le 1er prdc rest fixe
        if (cartItems[product.tag]== undefined){
            cartItems={
                ...cartItems,[product.tag]:product
            }
        }
        cartItems[product.tag].inCart+=1;
    }
    else{
        product.inCart=1;
        cartItems={
            [product.tag]:product
        }
    }
      
       localStorage.setItem('productsInCart',JSON.stringify(cartItems));
    }

    // Total of price
    function totalCost(product){
        let cartCost=localStorage.getItem("totalCost")
        console.log(`my total cost are`, totalCost)
        console.log(typeof cartCost)
        if(cartCost !=null){
            cartCost=parseInt(cartCost);
            localStorage.setItem('totalCost',cartCost+product.price)
        }
        else{
            localStorage.setItem('totalCost',product.price)
        }
    }
   
    // page cart
function displayCard(){
    let cardItems=localStorage.getItem('productsInCart');
    cardItems=JSON.parse(cardItems);
    
    let produtContainer=document.querySelector(".prod");
    let cartCost=localStorage.getItem("totalCost")
    if (cardItems && produtContainer){
        produtContainer.innerHTML=''; 
        Object.values(cardItems).map(item=>{
            produtContainer.innerHTML+=
            `<div class="d-flex justify-content-between align-items-center rmv">
            
            <div class="product"> <img src="./image/${item.tag}" style="width:70px"></div>
            <div class="name my-auto"> <h4>${item.name}</h4></div>
       
            <div class="price"> <p>${item.price},00 Dt</p></div>
            <div class="quantity my-auto">
           <i id="min" class="fas fa-minus-circle mr-2" style="font-size: 1rem;"></i><span style="font-size: 1.5rem;">${item.inCart}</span><i id="plus" class="fas fa-plus-circle ml-2" style="font-size: 1rem;"></i>
           </div>
            <div class="soustotal"><p>${item.inCart*item.price},00 Dt</p></div>
            <div><a  class="btn btn-sm trash "> <i class="fa fa-trash"></i>
          </a> </div>
            
            </div>
            <hr>
            `
          
        })

        produtContainer.innerHTML +=`
        <div class="totalContainer d-flex justify-content-end  mt-5 "> 
         <div class="d-flex align-self-start"> <h5> Total : ${cartCost},00 Dt</h5> </div>`
         produtContainer.innerHTML +=`
        <div class="d-flex justify-content-between mt-3"> 
        
        <div> <a href=""> <button type="button" class="btn btn-dark remove" >Vider le panier</button> </a>
        </div>
         <div><a href="index copy.html"> <button type="button" class="btn btn-warning" >Poursuivre mes achats</button> </a>
         </div>
        </div>
       </div>`
       var clearCart = document.querySelector(".remove")
       clearCart.addEventListener("click", () => {
       localStorage.clear()
     
       })  
    }
}


let buttonActivator = () => {
    let cartCost=localStorage.getItem("totalCost")
    let removeButtons =  document.querySelectorAll(".trash")

removeButtons.forEach(el => {
    el.addEventListener("click", (e)=>{
         let row = e.target.parentNode.parentNode;
         document.querySelectorAll(".rmv")[0].remove(row)
         e.preventDefault();
         
    })

 })

} 

// il faut appeler vue qu'il est n'est attacher par listner comme l'autre //when i onload the page

 displayCard()
 onLoadCartNumbers()
 
 buttonActivator()
 

