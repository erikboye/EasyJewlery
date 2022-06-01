import { shoppingCartStorage } from './localStorageHelpers.js';

//HEADER-IMG
export const htmlToDom = (domElementToTarget, insertHtmlToDom) => {
  domElementToTarget.innerHTML += insertHtmlToDom;
};

//FEATURED-IMAGES HOMEPAGE
export const featuredArrayHTML = (array, domElm) => {
  array.forEach(({ Title, image_url, Feautered, Price, id }) => {
    if (Feautered === true) {
      return (document.querySelector(domElm).innerHTML += `
      <div class="col-sm-4 col-featured">
        <div class="featured__wrap>
            <div class="featured__img--div">
              <img class="featured__img" src="${image_url}"></img>
            </div>
            <div class="featured__textwrap">
              <div class="featured__titleprice"
                <p class="featured__title">${Title}</p>
                <p class=featured__price>${Price} NOK</p>
              </div>
              <div class="featured__btn--wrap">
              <a class="btn btn-success featured__btn" data-Title="${Title}" data-Price="${Price}" data-img="${image_url}" data-id="${id}" href="cart.html">Add to cart</a>
              </div>
            </div>
        </div>
      </div>`);
    }
  });
};

//CART
export const shoppingCartHTML = (array, domElm) => {
  let totalPrice = 0;
  document.querySelector(domElm).innerHTML = '';
  document.querySelector('.total__amount__container').innerHTML = '';

  array.forEach(({ Title, image_url, Price, id }) => {
    document.querySelector(domElm).innerHTML += `
    <div class="cart__summary--card">
        <a href="details.html?id=${id}">
          <div class="cart__summary--img">
            <img class="product__image" src="${image_url}">
          </div>
        </a>
        <div class="summary__wrap">
          <p class="summary__title">${Title}</p>
          <p class="summary__price">${Price} NOK</p> 
          <p class="textTrash"><i class="far fa-trash-alt" data-Title="${Title}" data-Price="${Price}" data-img="${image_url}" data-id="${id}"></i> Remove Item</p>
        </div>
    </div>
    `;
    totalPrice += parseInt(Price);
  });

  document.querySelector('.total__amount__container').innerHTML += `
    <div class="total__amount__wrap">
      <h1>
        <p class= "cart__total__amount">Your total amount:</p>
      </h1>
      <p class= "cart__total__amount__money">${totalPrice} NOK</p>
    </div>
  `;

  shoppingCartStorage('.fa-trash-alt');
};
