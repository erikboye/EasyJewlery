import { getStorageItem, shoppingCartStorage } from './localStorageHelpers.js';
import { shoppingCartHTML } from './htmlToDom.js';
import alert from '../components/alert.js';

let basketItemsFromLocalStorage = getStorageItem('updatedCart');

console.log(basketItemsFromLocalStorage);

shoppingCartHTML(basketItemsFromLocalStorage, '.cart__summary--card');
shoppingCartStorage('.fa-trash-alt');

if (basketItemsFromLocalStorage.length === 0) {
  alert('danger', 'Your basket is empty');
}
