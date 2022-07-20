'use strict'


const cartSite = document.querySelector('.basket-cart');


const cardStorage = JSON.parse(localStorage.getItem('cart') || '[]')

if(cardStorage.length){


    cardStorage.forEach(el => {


const {productName, productPrise} = el;
const cardInbasket = document.createElement('div');
cardInbasket.classList.add('card')
cardInbasket.innerHTML = `<div class="image"> <img src="./image/share 3.jpg" alt="#">
 <button class="button-basket"> 
 <p>   Delete </p> </button> </div>
 <p class="product-name">${productName}</p>
  <p class="price"> ${productPrise} </p>
  `;
cartSite.appendChild(cardInbasket);
        
    });

}


