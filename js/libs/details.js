import { BASE_URL } from '../configs/configs.js';
import { getAPI } from '../libs/apiCall.js';
import { shoppingCartStorage } from './localStorageHelpers.js';

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

const detailsObj = await getAPI(`${BASE_URL}/jewleries/${id}`);
const { Title, Description, Price, image_url } = detailsObj;

document.querySelector('.details__container').innerHTML += `  
<div class="details__container">
  <div class="details__container__card">
    <div class="details__container--img">
      <img class="details__img" src="${image_url}">
    </div>
    <h1 class="details__h1">${Title}</h1>
    <p class="details__description">${Description}</p>
    <p class="details__price">${Price}NOK</p>
    <div class="accordion accordion-flush dropdown_wrap" id="accordionFlushExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button
          class="accordion-button collapsed shipping"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          Shipping
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
        Standard shipping. 4-7 days
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingTwo">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseTwo"
          aria-expanded="false"
          aria-controls="flush-collapseTwo"
        >
          Reviews
        </button>
      </h2>
      <div
        id="flush-collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingTwo"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
         This product is so nice. I would love to give this to my friends.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <div
        id="flush-collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingThree"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          Placeholder content for this accordion, which is intended to
          demonstrate the <code>.accordion-flush</code> class. This is the
          third item's accordion body. Nothing more exciting happening here in
          terms of content, but just filling up the space to make it look, at
          least at first glance, a bit more representative of how this would
          look in a real-world application.
        </div>
      </div>
    </div>
  </div>
    <a href="cart.html" class="btn btn-success details__atc" data-title="${Title}" data-price="${Price}" data-img="${image_url}" data-id="${id}">Add to cart</a>
  </div>
</div>
`;
shoppingCartStorage('.details__atc');
