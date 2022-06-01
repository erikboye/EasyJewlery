import { BASE_URL } from '../configs/configs.js';
import { getAPI } from '../libs/apiCall.js';
import { featuredArrayHTML } from '../libs/htmlToDom.js';
import { shoppingCartStorage } from '../libs/localStorageHelpers.js';

//HOME HEADER-IMG
const herobannerArray = await getAPI(BASE_URL + '/herobanner-images/1');
const herobanner = herobannerArray.image_url;
document.querySelector(
  '.bcg-home',
).style.backgroundImage = `url(${herobanner})`;

//FEATURED IMAGES HOMEPAGE
const featuredAPI = await getAPI(BASE_URL + '/jewleries');
featuredArrayHTML(featuredAPI, '.featured_products', '.price');

shoppingCartStorage('.featured__btn');
