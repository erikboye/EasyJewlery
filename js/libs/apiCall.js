export const getAPI = async function (url) {
  try {
    let response = await axios.get(url);
    let products = response.data;
    document.querySelector('.loading').innerHTML = ``;

    return products;
  } catch (error) {}
};
