import {
  testLengthofTextBoxValue,
  testEmailAddress,
} from '../../js/validation.js';

import { BASE_URL } from '../configs/configs.js';
import alert from '../components/alert.js';

let form = document.querySelector('.login__form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

form.onsubmit = async function (event) {
  event.preventDefault();
  if (
    testLengthofTextBoxValue(password.value, 1) &&
    testEmailAddress(email.value)
  ) {
    try {
      console.log(email.value, password.value);
      const response = await axios.post(`${BASE_URL}/auth/local`, {
        identifier: email.value,
        password: password.value,
      });

      console.log(response);

      localStorage.setItem('jwt', response.data.jwt);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      window.location.href = './dashboard.html';
    } catch (error) {
      alert('alert-danger', error);
      console.log(error);
    }
  } else {
    alert('alert-danger', 'Please enter proper values for the inputs');
  }
};
