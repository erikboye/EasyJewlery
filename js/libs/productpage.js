import { BASE_URL } from '../configs/configs.js';
import { getAPI } from '../libs/apiCall.js';
import { filteringAnArray } from '../libs/filteringAnArray.js';

//OUR PRODUCTS HEADER-IMAGE
const productsheaderArray = await getAPI(BASE_URL + '/herobanner-images/2');
const herobanner_products = productsheaderArray.image_url;
document.querySelector(
  '.bcg-products',
).style.backgroundImage = `url(${herobanner_products})`;

const cards = document.querySelector('.products__div');

const productsArray = await getAPI(`${BASE_URL}/jewleries`);

prodCard(productsArray);

//FILTERING-ARRAY
const searchInput = document.querySelector('#searchInput');
searchInput.onkeyup = () => {
  let searchInputResults = filteringAnArray(productsArray, searchInput.value);
  prodCard(searchInputResults);
};
//FUNCTION FOR DETAILSPAGE, ADD TO CART.
function prodCard(array) {
  cards.innerHTML = '';
  array.forEach(({ id, Title, image_url, Price }) => {
    cards.innerHTML += `
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <img class="product__image" src="${image_url}">
              <div class="title__price">
                <p class="featured__title">${Title}</p>
                <p class=featured__price>${Price} NOK</p>
                <a href="details.html?id=${id}">
                <button class="atc__btn">Read More</button>
              </a>
              </div>
          </div>
        </div>
      </div>`;
  });
}
