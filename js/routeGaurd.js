import { getUser } from './libs/localStorageHelpers.js';

if (getUser('user') === null) {
  console.log('There is no JWT token');
  window.location.href = './login.html';
}
