import alert from '../components/alert.js';
import { BASE_URL, headers } from '../configs/configs.js';

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

let title = document.querySelector('#name');
let description = document.querySelector('#description');
let image_url = document.querySelector('#image');
const form = document.querySelector('.form');
let FeauteredBtn = document.querySelector('#flexCheckDefault');

async function getSpecificProduct() {
  const response = await axios.get(`${BASE_URL}/jewleries/${id}`);

  let products = response.data;
  title.value = products.Title;
  description.value = products.Description;
  image_url.value = products.image_url;
  FeauteredBtn.checked = products.Feautered;
}

getSpecificProduct();

form.onsubmit = async function (event) {
  event.preventDefault();
  let updatedProduct = {
    Title: title.value,
    description: description.value,
    image_url: image_url.value,
    Feautered: FeauteredBtn.checked,
  };

  try {
    const response = await axios.put(
      `${BASE_URL}/jewleries/${id}`,
      updatedProduct,
      headers,
    );
    alert('alert-success', 'Update successfully');
  } catch (error) {
    console.log(error);
  }
};
