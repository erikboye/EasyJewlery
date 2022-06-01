import { getUser } from '../libs/localStorageHelpers.js';

(function () {
  if (getUser('user')) {
    let changeHeader = document.querySelector('.login_btn');

    changeHeader.innerHTML = `
    <a class="signout">Sign out</a>
      `;
  }
})();
