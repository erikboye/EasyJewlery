import { shoppingCartHTML } from '../libs/htmlToDom.js';

export const saveToLocalStorage = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorageItem = function (key) {
  if (localStorage.getItem(key) !== null) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return [];
  }
};

export const getUser = function (userKey) {
  return JSON.parse(localStorage.getItem(userKey));
};

export function shoppingCartStorage(domElm) {
  let summaryItems = document.querySelectorAll(domElm);
  summaryItems.forEach((element) => {
    element.onclick = function () {
      let localStorageObject = {
        id: element.dataset.id,
        Title: element.dataset.title,
        image_url: element.dataset.img,
        Price: element.dataset.price,
      };

      console.log(localStorageObject);

      let basketItems = getStorageItem('updatedCart');

      let isInStorage = basketItems.find(
        (cartObject) => cartObject.id === localStorageObject.id,
      );

      if (isInStorage === undefined) {
        basketItems.push(localStorageObject);
        saveToLocalStorage('updatedCart', basketItems);
      } else {
        let removedElementArray = basketItems.filter(
          (cartObject) => cartObject.id !== localStorageObject.id,
        );

        saveToLocalStorage('updatedCart', removedElementArray);
      }

      if (document.querySelector('.cart__summary--card')) {
        let updateBasket = getStorageItem('updatedCart');
        shoppingCartHTML(updateBasket, '.cart__summary--card');
      }
    };
  });
}
