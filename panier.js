
Nightmode

//Récupérer le button nightmode
let nightMode=document.getElementById('nightMode');

//Ecouter l'evènement 
nightMode.addEventListener("click",tonight);
 // Exécution de ce code lors d'un click
function tonight(){

    document.body.classList.toggle("dark-theme");
     }  

// //panier 

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}
function ready() {
  var removeCartItemButtons = document.getElementsByClassName('trash')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }

document.getElementsByClassName('remove')[0].addEventListener('click', purchaseClicked)

  //changer la quantité
  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }
//ajouter le produit au panier
  var addToCartButtons = document.getElementsByClassName('add-to-cart')
  for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i]
      button.addEventListener('click', addToCartClicked)
  }
}

//suprimer tout le panier
function purchaseClicked() {
alert('Etes vous sur de vider le panier')
var cartItems = document.getElementsByClassName('cart-items')[0]
while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild)
}
updateCartTotal()
}
// supprimer un produit du panier
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
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('title')[0].innerText
  var price = shopItem.getElementsByClassName('price')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('pic-1')[0].src
  console.log(title, price, imageSrc)
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}



function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item')
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
          alert('Le produit est déja ajouté au panier')
          return
      }
  }
  var cartRowContents=
  `<div class="d-flex justify-content-between align-items-between rmv">
  
  <div class="product"> <img src="./image/${imageSrc}" style="width:70px"></div>
  <div class="name my-auto"> <h4>${title}</h4></div>

  <div class="price"> <p>${price},00 Dt</p></div>
  <div class="quantity my-auto">
  <input class=" cart-quantity-input justify-content-center"  type="number" class="form-control" id="qty" value="1">
 </div>
  <div class="soustotal"><p>${item.inCart*item.price},00 Dt</p></div>
  <div><a  class="btn btn-sm trash "> <i class="fa fa-trash"></i>
</a> </div>
  
  </div>
  <hr>
  `
  

  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('trash')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
//update le total du panier

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0;
  
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      var price = parseFloat(priceElement.innerText.replace('$', ''))
      var quantity = quantityElement.value
      var soustotal= price 
      var soustotal = (price * quantity)
      cartRow.getElementsByClassName('cart-sous-total')[0].innerText= soustotal+' TDN'
      

    total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = total
}





















