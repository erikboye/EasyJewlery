import alert from '../components/alert.js';
import { BASE_URL, headers } from '../configs/configs.js';

let jewleriesForm = document.querySelector('.form');

jewleriesForm.onsubmit = async function (event) {
  event.preventDefault();
  const Title = document.querySelector('#Title');
  const Description = document.querySelector('#Description');
  const image = document.querySelector('#image');
  const Price = document.querySelector('#Price');
  let FeauteredBtn = document.querySelector('#flexCheckDefault');

  console.log(FeauteredBtn.checked);
  try {
    let newProduct = {
      Title: Title.value,
      Description: Description.value,
      image_url: image.value,
      Price: Price.value,
      Feautered: FeauteredBtn.checked,
    };

    let response = await axios.post(
      `${BASE_URL}/jewleries`,
      newProduct,
      headers,
    );
    alert('alert-success', 'Product has been created successfully');
    Title.value = '';
    Description.value = '';
    Price.value = '';
    image.value = '';
  } catch (error) {
    alert('alert-danger', error);
  }
};
