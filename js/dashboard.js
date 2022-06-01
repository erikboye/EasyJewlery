import { BASE_URL, headers } from './configs/configs.js';

async function getAndDeleteAProduct() {
  let response = await axios.get(`${BASE_URL}/jewleries`);

  let products = response.data;

  let table = document.querySelector('.tableBody');
  table.innerHTML = '';

  products.forEach(({ id, Title }, iteration) => {
    table.innerHTML += `<tr>
				<th scope="row">${iteration + 1}</th>
				<td>${Title}</td>
				<td>
					<a href="editAProduct.html?id=${id}"><i class="fas fa-edit"></i></a>
				</td>
				<td>
					<i class="fas fa-trash-alt" data-id=${id}></i>
				</td>
			</tr>`;
  });

  let deleteButtons = document.querySelectorAll('.fa-trash-alt');

  deleteButtons.forEach(function (deleteButton) {
    deleteButton.onclick = async function () {
      console.log('A button was clicked the id is: ', deleteButton.dataset.id);
      let response = await axios.delete(
        `${BASE_URL}/jewleries/${deleteButton.dataset.id}`,
        headers,
      );

      getAndDeleteAProduct();
    };
  });
}

getAndDeleteAProduct();
