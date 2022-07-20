'use strict'


// ПОИСК ТОВАРА


document.querySelector('#header-input').oninput = function(){
    let val = this.value.trim();
    let elasticItem = document.querySelectorAll('.card-prise  .card ');
    if (val !==''){
        elasticItem.forEach(elem =>{
    
            if (elem.querySelector('.product-name').innerText.search(val) === -1){
    
                 elem.classList.add('hide')
            } else{
                elem.classList.remove('hide')
            }
    
        })
    }
    else{
        elasticItem.forEach(elem => {  elem.classList.remove('hide')
        })
    }
    }





//          СЛАЙДЕР

const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let widthSlider;

document.querySelector('.slider-next').addEventListener('click', function(){
    count++;
    if(count >= images.length){
        count = 0;
    }
return rollSlider();
})
document.querySelector('.slider-prev').addEventListener('click', function(){
    count--;
    if(count < 0){
        count = images.length - 1;
    }
return rollSlider();
})

function rollSlider(){
   return sliderLine.style.transform = 'translate(-' + count * widthSlider + 'px)';
}


function init(){
    
    widthSlider = document.querySelector('.slider').offsetWidth;
sliderLine.style.width = widthSlider*images.length + 'px' ;
images.forEach(item => {
item.style.width = widthSlider + 'px'
item.style.height = 'auto'
})

}
window.addEventListener('resize', init);


//                                          КОРЗИНА




const  cards = document.querySelectorAll('.card');

cards.forEach((el, idx) => {
    console.dir(el)

const imagDivBefore = el.childNodes[1]
const btn = imagDivBefore.childNodes[3];
const imgCard = imagDivBefore.childNodes[2];
const productName = el.childNodes[5].innerText;
const productPrise = el.childNodes[3].innerText;


btn.addEventListener('click', () => {
const cardStorage = localStorage.getItem('cart') || '[]'
const cart = JSON.parse(cardStorage)
const card = {productName, productPrise,}
localStorage.setItem('cart', JSON.stringify([...cart, card]))

})

}) 







//                                         Модальное окно картинки


    // let modal = document.querySelector('#modal');
    // let minImg = document.querySelector('#min-img');
    // let modalImg = document.querySelector('#imgModal');
    // let captionText = document.querySelector('#caption');
    
    // minImg.addEventListener('click',() =>{
    
    // modal.style.display = 'block';
    
    // modalImg.src = this.src
    
    // captionText.innerHTML = this.alt
    // })
    
    // let closeSpan = document.getElementById('close-span');
    // closeSpan.addEventListener('click', () =>{
    
    // modal.style.display = 'none'
    
    
    // })







    //      получение данных с сервера


    const API_PHOTO = 'https://62d55b9ad4406e5235590e85.mockapi.io/photo'

 function getImage(method, url) {

return fetch(url).then(response =>{

    return response.json();
}
)        

}

getImage('Get', API_PHOTO)
 .then(data => {    

    console.log(data)
    const respData = data;
    createCards(respData)

})
 .catch(err => console.log(err))


 

function createCards(data) {

const cardsElements = document.getElementsByClassName('.card-prise')

data.photo.forEach(cardElem => {
    
const cardsElemNew =  document.createElement('div')
cardsElemNew.classList.add('card')
cardsElemNew.innerHTML = `

<div class="image">
    <img src="${cardElem.url}" alt="#">

    <button class="button-basket">
        <i class="fa-solid fa-cart-shopping"></i> 
    </button>

</div>

<p class="price"> 
    ${cardElem.id} <span> p </span>
</p>
<p class="product-name">
    ${cardElem.name}
</p>


`;

cardsElements.appendChild(cardsElemNew)
});

 }





























