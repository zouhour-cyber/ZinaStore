var removeCartItemButtons = document.getElementsByClassName('trash')
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
}

var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}

var addToCartButtons = document.getElementsByClassName('add-to-cart')
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}

document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)


function purchaseClicked() {

var cartItems = document.getElementsByClassName('cart-items')[0]
while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild)
}
updateCartTotal()
}

function removeCartItem(event) {
var buttonClicked = event.target
buttonClicked.parentElement.parentElement.remove()
updateCartTotal()
}

function quantityChanged(event) {
var input = event.target
if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
}
updateCartTotal()
}

function addToCartClicked(event) {
var button = event.target
var shopItem = button.parentElement.parentElement.parentElement.parentElement
var title = shopItem.getElementsByClassName('title')[0].innerText
var price = shopItem.getElementsByClassName('price')[0].innerText
var imageSrc = shopItem.getElementsByClassName('pic-1')[0].src
addItemToCart(title, price, imageSrc)
updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
var cartRow = document.createElement('div')
cartRow.classList.add('cart-row')
var cartItems = document.getElementsByClassName('cart-items')[0]
var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
        quantity++
        return
    }
}
var cartRowContents = `
<div class="cart-item cart-column">
<img class="cart-item-image" src="${imageSrc}" width="100" height="100">
<span class="cart-item-title" width="200" >${title}</span>
</div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
<input class="cart-quantity-input" type="number" id="inputnbr" value="1">
<button class="btn btn-warning" type="button"><i class="fas fa-trash-alt"></i></button>
</div><hr>`
cartRow.innerHTML = cartRowContents
cartItems.append(cartRow)
cartRow.getElementsByClassName('btn-warning')[0].addEventListener('click', removeCartItem)
cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
var cartItemContainer = document.getElementsByClassName('cart-items')[0]
var cartRows = cartItemContainer.getElementsByClassName('cart-row')
var total = 0
for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    var price = parseFloat(priceElement.innerText.replace('TND', ''))
    var quantity = quantityElement.value
    total = total + (price * quantity)
}
total = Math.round(total * 100) / 100
document.getElementsByClassName('total')[0].innerText =   total + 'TND'
}















// // panier

// let add = document.querySelectorAll('.add-to-cart')
// let quantity = 1
// let soustotal = 0
// let item = document.querySelector('.item-card')


// let total = []
// let totalProduit = []
// let isItExist = []
// let totalCart = document.querySelector('.total')


// for (let i = 0 ; i < add.length ; i++) {

//   add[i].addEventListener('click', addTOCart)

// }


// function addTOCart(event) {

//  let btn = event.target
//  let shop = btn.parentElement.parentElement.parentElement
//  let name = shop.querySelector('.title').innerText
//  let price = shop.querySelector('.price').innerText
//  let imgSrc = shop.querySelector('.pic-1').src

//  totalProduit.push(parseFloat(price)*quantity)
// console.log(total)
// addToModal (name , price , imgSrc  )

//  AfficherTotal ()
// }



//  function addToModal (name , price , imgSrc){
// quantity++
// console.log(soustotal)
//    // On ajouter condition pour ne dupliquer pas le produit
//   if((isItExist.length==0)||(!isItExist.includes(name))){
//     item.innerHTML+=`
//      <div class="row mt-3 ">
//      <div class="col-md-3">
//        <img src="${imgSrc}" class="img" style:"">
//      </div>
//      <div class="col-md-2">
//        <strong>${name}</strong>
//      </div>
//      <div class="col-md-3">
//        <strong>${price}</strong>
//      </div>
   
//      <div class=" col-md-2 d-flex cart-quantity">
//      <input class="cart-quantity-input" type="number" value="1">
     

//      </div>
//      <div class="col-md-2">
//      <button type="button" class="btn"><i class="fas fa-trash-alt"></i></button>
//      </div>
//    </div>
  
//      `
//      isItExist.push(name)
//     } else  {
// "Erreur lors le remplissage du panier "
//     }

// }


// // Affichage le total de panier dans le modal
// function AfficherTotal (){
//   totalCart.innerHTML = `<h4> : hahahaha ${calculTotal()}</h4>`
// }


// // Increment quantity
// function increment(price){
//  quantity++
//   document.getElementsByClassName("qq")[0].innerHTML = `${quantity}`;

// }
// // Decrement quantity
// function decrement(price){
//   quantity>1&&quantity--
// document.getElementsByClassName("qq")[0].innerHTML = `${quantity}`;

// }


// // Type de retour : Number
// function calculTotal(){
//   return total.reduce((a,b) => (a+b) )
// }

































// // //panier 

// // if (document.readyState == 'loading') {
// //   document.addEventListener('DOMContentLoaded', ready)
// // } else {
// //   ready()
// // }
// // function ready() {
// //   var removeCartItemButtons = document.getElementsByClassName('trash')
// //   for (var i = 0; i < removeCartItemButtons.length; i++) {
// //       var button = removeCartItemButtons[i]
// //       button.addEventListener('click', removeCartItem)
// //   }

// // document.getElementsByClassName('remove')[0].addEventListener('click', purchaseClicked)

// //   //changer la quantité
// //   var quantityInputs = document.getElementsByClassName('cart-quantity-input')
// //   for (var i = 0; i < quantityInputs.length; i++) {
// //       var input = quantityInputs[i]
// //       input.addEventListener('change', quantityChanged)
// //   }
// // //ajouter le produit au panier
// //   var addToCartButtons = document.getElementsByClassName('add-to-cart')
// //   for (var i = 0; i < addToCartButtons.length; i++) {
// //       var button = addToCartButtons[i]
// //       button.addEventListener('click', addToCartClicked)
// //   }
// // }

// // //suprimer tout le panier
// // function purchaseClicked() {
// // alert('Etes vous sur de vider le panier')
// // var cartItems = document.getElementsByClassName('cart-items')[0]
// // while (cartItems.hasChildNodes()) {
// //     cartItems.removeChild(cartItems.firstChild)
// // }
// // updateCartTotal()
// // }
// // // supprimer un produit du panier
// // function removeCartItem(event) {
// //   var buttonClicked = event.target
// //   buttonClicked.parentElement.parentElement.remove()
// //   updateCartTotal()
// // }


// // function quantityChanged(event) {
// //   var input = event.target
// //   if (isNaN(input.value) || input.value <= 0) {
// //       input.value = 1
// //   }
// //   updateCartTotal()
// // }


// // function addToCartClicked(event) {
// //   var button = event.target
// //   var shopItem = button.parentElement.parentElement
// //   var title = shopItem.getElementsByClassName('title')[0].innerText
// //   var price = shopItem.getElementsByClassName('price')[0].innerText
// //   var imageSrc = shopItem.getElementsByClassName('pic-1')[0].src
// //   console.log(title, price, imageSrc)
// //   addItemToCart(title, price, imageSrc)
// //   updateCartTotal()
// // }
































// // function addItemToCart(title, price, imageSrc) {
// //   var cartRow = document.createElement('div')
// //   cartRow.classList.add('cart-row')
// //   var cartItems = document.getElementsByClassName('cart-items')[0]
// //   var cartItemNames = cartItems.getElementsByClassName('cart-item')
// //   for (var i = 0; i < cartItemNames.length; i++) {
// //       if (cartItemNames[i].innerText == title) {
// //           alert('Le produit est déja ajouté au panier')
// //           return
// //       }
// //   }
// //   var cartRowContents=
// //   `<div class="d-flex justify-content-between align-items-between rmv">
  
// //   <div class="product"> <img src="./image/${imageSrc}" style="width:70px"></div>
// //   <div class="name my-auto"> <h4>${title}</h4></div>

// //   <div class="price"> <p>${price},00 Dt</p></div>
// //   <div class="quantity my-auto">
// //   <input class=" cart-quantity-input justify-content-center"  type="number" class="form-control" id="qty" value="1">
// //  </div>
// //   <div class="soustotal"><p>${item.inCart*item.price},00 Dt</p></div>
// //   <div><a  class="btn btn-sm trash "> <i class="fa fa-trash"></i>
// // </a> </div>
  
// //   </div>
// //   <hr>
// //   `
  

// //   cartRow.innerHTML = cartRowContents
// //   cartItems.append(cartRow)
// //   cartRow.getElementsByClassName('trash')[0].addEventListener('click', removeCartItem)
// //   cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
// // }
// // //update le total du panier

// // function updateCartTotal() {
// //   var cartItemContainer = document.getElementsByClassName('cart-items')[0]
// //   var cartRows = cartItemContainer.getElementsByClassName('cart-row')
// //   var total = 0;
  
// //   for (var i = 0; i < cartRows.length; i++) {
// //       var cartRow = cartRows[i]
// //       var priceElement = cartRow.getElementsByClassName('cart-price')[0]
// //       var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
// //       var price = parseFloat(priceElement.innerText.replace('$', ''))
// //       var quantity = quantityElement.value
// //       var soustotal= price 
// //       var soustotal = (price * quantity)
// //       cartRow.getElementsByClassName('cart-sous-total')[0].innerText= soustotal+' TDN'
      

// //     total = total + (price * quantity)
// //   }
// //   total = Math.round(total * 100) / 100
// //   document.getElementsByClassName('cart-total-price')[0].innerText = total
// // }





















