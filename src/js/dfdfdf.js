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










 const randomId = () =>{
return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15)

 }